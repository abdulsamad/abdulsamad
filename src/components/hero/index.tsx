import React from 'react';

import Hero from './Hero';
import HeroText from './HeroText';
import Shapes from '../utils/Shapes';
import Intro from './Intro';
import Message from './Message';
import Button from '../utils/Button';

interface Props {
  title?: string;
}

const Index: React.FC<Props> = () => {
  return (
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
        <Intro>
          Hi, I’m AbdulSamad, <br /> Front-End <span>Developer</span> &amp;
        </Intro>
        <Message>
          Your Technical Partner <br /> Towards Web Success
        </Message>
        <div>
          <Button href='#projects'>View Projects</Button>
          <Button href='#contact'>Let&apos;s Talk</Button>
        </div>
      </HeroText>
    </Hero>
  );
};

export default Index;
