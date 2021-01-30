import React from 'react';
import { useTrail, animated } from 'react-spring';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Hero from './Hero';
import HeroText from './HeroText';
import Shapes from '../utils/Shapes';
import Intro from './Intro';
import Message from './Message';
import Button from '../utils/Button';

const heroTextArr: React.ReactElement[] = [
  <Intro>
    Hi, I’m AbdulSamad, <br /> Front-End <span>Developer</span> &amp;
  </Intro>,
  <Message>
    Your Technical Partner <br /> Towards Web Success
  </Message>,
];

interface Props {
  title?: string;
}

const Index: React.FC<Props> = () => {
  interface trailProps {
    opacity: number;
  }

  const [trail, set] = useTrail(
    heroTextArr.length,
    (): trailProps => ({
      opacity: 0,
    })
  );

  set({ opacity: 1 });

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
        {trail.map((props, index) => (
          <animated.div style={props}>{heroTextArr[index]}</animated.div>
        ))}
        <div>
          <Button onClick={() => scrollTo('#contact')}>Let&apos;s Talk</Button>
          <Button outlined={true} onClick={() => scrollTo('#projects')}>
            View Projects
          </Button>
        </div>
      </HeroText>
    </Hero>
  );
};

export default Index;
