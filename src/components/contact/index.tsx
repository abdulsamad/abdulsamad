import React from 'react';

import Contact from './Contact';
import Form from './Form';
import Input from './Input';
import Label from './Label';
import SubmitBtn from './SubmitBtn';
import Textarea from './TextArea';

const index = () => {
  return (
    <Contact id='contact'>
      <Form name='contact' method='POST' data-netlify='true'>
        {/* Netlify Form Field */}
        <input type='hidden' name='form-name' value='contact' />

        <h1>Get in touch!</h1>
        <Label>Name</Label>
        <Input type='text' placeholder='John Doe' name='name' />
        <Label>Email</Label>
        <Input type='email' placeholder='john@example.com' name='email' />
        <Label>Message</Label>
        <Textarea placeholder='Your Message' name='message' />
        <div data-netlify-recaptcha='true' />
        <SubmitBtn type='submit'>Send</SubmitBtn>
      </Form>
    </Contact>
  );
};

export default index;
