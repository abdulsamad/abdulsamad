import React from 'react';

import Container from '../../utils/Container';
import { Heading1, Heading5 } from '../../utils/Heading';

const Index = () => {
  return (
    <Container direction="column" justify="center">
      <Heading1>Thank you</Heading1>
      <br />
      <Heading5>Your message has been sent.</Heading5>
    </Container>
  );
};

export default Index;
