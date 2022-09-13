import React from 'react';

import Hero from './Hero';
import Container from './Container';
import Shapes from '../../utils/Shapes';
import Intro from './Intro';
import Message from './Message';
import ButtonGroup from './ButtonGroup';
import MessageContainer from './MessageContainer';
import { ButtonLink } from '../../utils/Button';
import GridIcon from './GridIcon';

const Index = () => {
  return (
    <Hero>
      <Shapes
        type="circle"
        height="220px"
        width="220px"
        top="100px"
        right="-150px"
        border="30px solid rgb(18, 194, 233)"
      />
      <Shapes
        type="square"
        height="300px"
        width="300px"
        bottom="-150px"
        left="10%"
        border="10px solid rgba(35, 63, 163, 0.68)"
        radius="20px"
        hideOnMobile={true}
      />
      <Shapes
        type="circle"
        height="40px"
        width="40px"
        top="500px"
        left="57ch"
        border="8px solid rgba(0, 0, 0, 0.42)"
        hideOnMobile={true}
      />
      <Container>
        <MessageContainer>
          <GridIcon src="grid-icon.svg" alt="grid image" aria-hidden="true" />
          <Intro>
            Hi, I&apos;m <span>AbdulSamad</span>, <br /> Web{' '}
            <span>Developer</span> &amp;
          </Intro>
          <Message>I paint the web.</Message>
        </MessageContainer>
        <ButtonGroup>
          <ButtonLink href="#projects">View Projects</ButtonLink>
          <ButtonLink href="#contact" outlined>
            Get in Touch
          </ButtonLink>
        </ButtonGroup>
      </Container>
    </Hero>
  );
};

export default Index;
