import React, { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
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

const Index = () => {
  const handleChange = () => {
    // TODO: Add hCaptcha
  };

  const handleVerificationSuccess = async (token: string) => {
    const res = await fetch(`/api/hcaptcha?token=${token}`);
    const data = await res.json();

    console.log(data);
  };

  return (
    <Contact id='contact'>
      <Container>
        <Form name='contact'>
          <FormHeading>Get in touch!</FormHeading>
          <Field>
            <Input
              type='text'
              placeholder='Your Name'
              name='name'
              onChange={handleChange}
              required
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
              required
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
              required
            />
            <Label>Message</Label>
            <span />
          </Field>
          <Field>
            <form>
              <HCaptcha
                sitekey={`${process.env.GATSBY_SITE_RECAPTCHA_KEY}`}
                onVerify={(token) => handleVerificationSuccess(token)}
                theme='dark'
              />
            </form>
          </Field>
          <SubmitBtn type='submit'>Send</SubmitBtn>
        </Form>
      </Container>
    </Contact>
  );
};

export default Index;
