import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { navigate } from 'gatsby';

import Container from '../utils/Container';
import Contact from './Contact';
import Form from './Form';
import FormHeading from './FormHeading';
import Field from './Field';
import Input from './Input';
import Label from './Label';
import SubmitBtn from './SubmitBtn';
import Textarea from './TextArea';

const encode = (data: Object) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const Index = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (ev: React.ChangeEvent) =>
    setFormData({ [ev.target.name]: ev.target.value });

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));
  };

  return (
    <Contact id='contact'>
      <Container>
        <Form
          name='contact'
          method='POST'
          data-netlify='true'
          data-netlify-recaptcha='true'
          onSubmit={handleSubmit}>
          {/* Netlify Form Field */}
          <input type='hidden' name='form-name' value='contact' />
          <FormHeading>Get in touch!</FormHeading>
          <Field>
            <Input
              type='text'
              placeholder='Your Name'
              name='name'
              onChange={handleChange}
            />
            <Label>Name</Label>
            <span />
          </Field>
          <Field>
            <Input
              type='email'
              placeholder='john@example.com'
              name='email'
              onChange={handleChange}
            />
            <Label>Email</Label>
            <span />
          </Field>
          <Field>
            <Textarea
              rows={5}
              placeholder='Enter your message here...'
              name='message'
              onChange={handleChange}
            />
            <Label>Message</Label>
            <span />
          </Field>
          <Field>
            <ReCAPTCHA
              style={{ margin: 'auto' }}
              theme='dark'
              sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
            />
          </Field>
          <SubmitBtn type='submit'>Send</SubmitBtn>
        </Form>
      </Container>
    </Contact>
  );
};

export default Index;
