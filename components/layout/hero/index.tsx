import React from 'react';

import Hero from './Hero';
import HeroText from './HeroText';
import Shapes from '../../utils/Shapes';
import Intro from './Intro';
import Message from './Message';
import Button from '../../utils/Button';

const heroTextArr: React.ReactNode = (
  <>
    <Intro>
      Hi, I&apos;m AbdulSamad, <br /> Front-End <span>Developer</span> &amp;
    </Intro>
    <Message>
      Your Technical Partner <br /> Towards Web Success
    </Message>
  </>
);

const Index = () => {
  return (
    <Hero>
      <Shapes
        type="circle"
        height="400px"
        width="400px"
        bottom="-100px"
        right="-100px"
        background="linear-gradient(to right, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89))"
      />
      <HeroText>
        {heroTextArr}
        <div>
          <Button onClick={() => null}>View Projects</Button>
          <Button outlined={true} onClick={() => null}>
            Get in Touch
          </Button>
        </div>
      </HeroText>
    </Hero>
  );
};

export default Index;
