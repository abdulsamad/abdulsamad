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

const Index = () => {
  return (
    <Contact id='contact'>
      <Container>
        <Form
          name='contact'
          method='POST'
          data-netlify='true'
          data-netlify-recaptcha='true'>
          {/* Netlify Form Field */}
          <input type='hidden' name='form-name' value='contact' />
          <FormHeading>Get in touch!</FormHeading>
          <Field>
            <Input type='text' placeholder='Your Name' name='name' />
            <Label>Name</Label>
            <span />
          </Field>
          <Field>
            <Input type='email' placeholder='john@example.com' name='email' />
            <Label>Email</Label>
            <span />
          </Field>
          <Field>
            <Textarea
              rows={5}
              placeholder='Enter your message here...'
              name='message'
            />
            <Label>Message</Label>
            <span />
          </Field>
          <Field>
            <ReCAPTCHA />
          </Field>
          <SubmitBtn type='submit'>Send</SubmitBtn>
        </Form>
      </Container>
    </Contact>
  );
};

export default Index;
