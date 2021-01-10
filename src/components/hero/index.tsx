import React from 'react';
import { Spring } from 'react-spring/renderprops';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Hero from './Hero';
import HeroText from './HeroText';
import Shapes from '../utils/Shapes';
import Intro from './Intro';
import Message from './Message';
import Button from '../utils/Button';

interface Props {
  title?: string;
}

const Index: React.FC<Props> = () => (
  <Hero>
    <Shapes
      type='circle'
      height='400px'
      width='400px'
      top='-100px'
      left='-100px'
      background='linear-gradient(to left, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89))'
    />
    <Shapes
      type='circle'
      height='400px'
      width='400px'
      bottom='-100px'
      right='-100px'
      background='linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89))'
    />
    <HeroText>
      <Spring
        from={{ opacity: 0, transform: 'translateY(-10px)' }}
        to={{ opacity: 1, transform: 'translateY(0)' }}>
        {(props) => (
          <Intro style={props}>
            Hi, I’m AbdulSamad, <br /> Front-End <span>Developer</span> &amp;
          </Intro>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: 'translateY(-20px)' }}
        to={{ opacity: 1, transform: 'translateY(0)' }}
        delay={2000}>
        {(props) => (
          <Message style={props}>
            Your Technical Partner <br /> Towards Web Success
          </Message>
        )}
      </Spring>
      <div>
        <Button onClick={() => scrollTo('#projects')}>View Projects</Button>
        <Button onClick={() => scrollTo('#contact')}>Let&apos;s Talk</Button>
      </div>
    </HeroText>
  </Hero>
);

export default Index;
