import React, { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { navigate } from 'gatsby';

import Container from '../utils/Container';
import Contact from './Contact';
import Error from './Error';
import Form from './Form';
import FormHeading from './FormHeading';
import Field from './Field';
import Input from './Input';
import Label from './Label';
import SubmitBtn from './SubmitBtn';
import Textarea from './TextArea';
import Loader from '../utils/Loader';

const encode = (data: any) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const Index = () => {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState({
    success: false,
    challenge_ts: null,
    hostname: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const hCaptchaRef = useRef<any>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const handleChange = (key: string) => (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = ev.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleCaptchaSuccess = async (token: string) => {
    const res = await fetch(`/api/hcaptcha?token=${token}`);
    const data = await res.json();

    setCaptcha(data);
  };

  const handleCaptchaExpire = () => {
    setError(
      'Captcha Expired! Please solve the captcha again for form submission.'
    );
    setCaptcha({
      success: false,
      challenge_ts: null,
      hostname: null,
    });
  };

  const handleCaptchaError = () => {
    setError(
      'Captcha Error! Please solve the captcha again for form submission.'
    );
    setCaptcha({
      success: false,
      challenge_ts: null,
      hostname: null,
    });
  };

  const handleSubmit = (ev: React.FormEvent) => {
    const target = ev.target as Element;
    const submitBtn = submitBtnRef.current as HTMLButtonElement;
    ev.preventDefault();

    if (!captcha.success) {
      setError('Please solve the captcha before submitting a message.');
      return;
    }

    setSubmitting(true);
    submitBtn.setAttribute('disabled', 'true');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': target.getAttribute('name'),
        ...formData,
      }),
    })
      .then(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setCaptcha({
          success: false,
          challenge_ts: null,
          hostname: null,
        });
        hCaptchaRef.current.resetCaptcha();
        submitBtn.removeAttribute('disabled');
        setSubmitting(false);
        navigate('/thank-you/');
      })
      .catch(({ message }) => {
        setError(message);
        setSubmitting(false);
      });
  };

  return (
    <Contact id='contact'>
      <Container>
        <Form name='contact' onSubmit={handleSubmit}>
          <FormHeading>Get in touch!</FormHeading>
          <Field>
            <Input
              type='text'
              placeholder='Your Name'
              name='name'
              id='name'
              onChange={handleChange('name')}
              required
            />
            <Label htmlFor='name'>Name</Label>
            <span />
          </Field>
          <Field>
            <Input
              type='email'
              placeholder='john@example.com'
              name='email'
              id='email'
              onChange={handleChange('email')}
              required
            />
            <Label htmlFor='email'>Email</Label>
            <span />
          </Field>
          <Field>
            <Textarea
              rows={5}
              placeholder='Enter your message here...'
              name='message'
              id='message'
              onChange={handleChange('message')}
              required
            />
            <Label htmlFor='message'>Message</Label>
            <span />
          </Field>
          {error && <Error>{error}</Error>}
          <Field>
            <HCaptcha
              ref={hCaptchaRef}
              sitekey={process.env.GATSBY_SITE_HCAPTCHA_KEY as string}
              onVerify={handleCaptchaSuccess}
              onExpire={handleCaptchaExpire}
              onError={handleCaptchaError}
              theme='dark'
            />
          </Field>
          <SubmitBtn type='submit' ref={submitBtnRef}>
            {submitting ? <Loader height={16} width={16} /> : 'Send'}
          </SubmitBtn>
        </Form>
      </Container>
    </Contact>
  );
};

export default Index;
