import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import ThankYou from './ThankYou';
import Container from '../../utils/Container';
import { Heading1, Heading5 } from '../../utils/Heading';
import ImageContainer from './ImageContainer';
import MessageContainer from './MessageContainer';
import Button from '../../utils/Button';

const Index = () => {
  const router = useRouter();

  return (
    <ThankYou>
      <Container direction="column" justify="center">
        <ImageContainer>
          <Image
            height={180}
            width={150}
            layout="fixed"
            src="/Mail.svg"
            alt="Image sent"
          />
        </ImageContainer>
        <Heading1>Thank you</Heading1>
        <MessageContainer>
          <Heading5>Your message has been sent.</Heading5>
        </MessageContainer>
        <Button onClick={() => router.back()} outlined>
          Back to Site
        </Button>
      </Container>
    </ThankYou>
  );
};

export default Index;
