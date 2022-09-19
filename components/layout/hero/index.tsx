import React from 'react';
import { motion, Variants } from 'framer-motion';

import Hero from './Hero';
import Container from './Container';
import Shapes from '../../utils/Shapes';
import Intro from './Intro';
import Message from './Message';
import ButtonGroup from './ButtonGroup';
import MessageContainer from './MessageContainer';
import { ButtonLink } from '../../utils/Button';
import GridIcon from './GridIcon';

const messageContainerVariant: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const messageVariant: Variants = {
  hidden: {
    translateY: -10,
    opacity: 0,
  },
  show: {
    translateY: 0,
    opacity: 1,
  },
};

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
      />
      <Shapes
        type="circle"
        height="40px"
        width="40px"
        bottom="300px"
        left="80ch"
        border="8px solid rgba(0, 0, 0, 0.42)"
        hideOnMobile={true}
      />
      <Container>
        <MessageContainer>
          <GridIcon src="grid-icon.svg" alt="grid image" aria-hidden="true" />
          <motion.div
            initial="hidden"
            animate="show"
            variants={messageContainerVariant}>
            <motion.div variants={messageVariant}>
              <Intro>
                Hi, I&apos;m <span>Abdul Samad</span>, <br /> Web{' '}
                <span>Developer</span> who loves
              </Intro>
            </motion.div>
            <motion.div variants={messageVariant}>
              <Message>Crafting Awesome Web Experiences</Message>
            </motion.div>
          </motion.div>
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
