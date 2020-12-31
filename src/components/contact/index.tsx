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
      <Form data-netlify='true' name='contact' method='post' action='#'>
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
