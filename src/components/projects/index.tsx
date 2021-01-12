import React from 'react';

import Project from './Projects';
import Heading from '../utils/Heading';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import Link from './Link';
import Container from './Container';

import projectsList from './projectsList';

const Index: React.FC = () => (
  <Project id='projects'>
    <Heading>Projects</Heading>
    <Container>
      {projectsList.map(({ title, description, url, source }) => (
        <Card key={url}>
          <CardHeader>{title}</CardHeader>
          <CardBody>{description}</CardBody>
          <CardFooter>
            <Link href={url} target='_blank' rel='noopener'>
              Live
            </Link>
            <Link href={source} target='_blank' rel='noopener'>
              Source
            </Link>
          </CardFooter>
        </Card>
      ))}
    </Container>
  </Project>
);

export default Index;
