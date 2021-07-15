import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

import Project from './Projects';
import Heading from '../utils/Heading';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import Link from './Link';
import Container from './Container';
import GitHubLink from './GitHubLink';

import projectsList from './projectsList';

const Index: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[] | null>([]);

  useEffect(() => {
    cardsRef.current.forEach((el: HTMLDivElement) => {
      VanillaTilt.init(el);
    });
  }, []);

  return (
    <Project id='projects'>
      <Heading>Projects</Heading>
      <Container>
        {projectsList.map(({ title, description, url, source_url }, index) => (
          <Card key={url} ref={(el) => (cardsRef.current[index] = el)}>
            <CardHeader>{title}</CardHeader>
            <CardBody>{description}</CardBody>
            <CardFooter>
              <Link href={url} target='_blank' rel='noopener'>
                Live
              </Link>
              <Link href={source_url} target='_blank' rel='noopener'>
                Source
              </Link>
            </CardFooter>
          </Card>
        ))}
      </Container>
      <Container>
        <GitHubLink
          href='https://github.com/abdulsamad?tab=repositories&q=&type=source&language=&sort='
          target='_blank'
          rel='noopener'>
          Checkout more on GitHub
        </GitHubLink>
      </Container>
    </Project>
  );
};

export default Index;
