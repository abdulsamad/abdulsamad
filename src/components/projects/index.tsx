import React from 'react';

import Project from './Projects';
import Heading from '../utils/Heading';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import Link from './Link';
import Container from './Container';

interface ProjectListTypes {
  title: string;
  description: string;
  url: string;
  source: string;
}

const projectsList: object[ProjectListTypes] = [
  {
    title: 'E-Commerce Project',
    description: 'An E-Commerce Store with admin controls',
    url: 'https://github.com/samad/MERN_E-COMMERCE',
    source: 'https://github.com/samad/MERN_E-COMMERCE',
  },
  {
    title: 'Peek History',
    description:
      'A simple and minimal extension for quickly peeking and managing history.',
    url:
      'https://chrome.google.com/webstore/detail/peek-history/gknodemjjckmkncijnedcpogffimkmbm?source=portfolio',
    source: 'https://github.com/abdulsamad/peek_history',
  },
  {
    title: 'WeatherX',
    description: 'A clean and minimal weather PWA aim towards mobile.',
    url: 'https://weatherx-abdulsamad.netlify.app?source=portfolio',
    source: 'https://github.com/abdulsamad/weatherx',
  },
  {
    title: 'Loan Calculator',
    description:
      "This program help's you to calculate the loan repayment amount.",
    url: 'https://abdulsamad.github.io/loan_calculator?source=portfolio',
    source: 'https://github.com/abdulsamad/loan_calculator',
  },
];

const Index: React.FC = () => {
  return (
    <Project id='projects'>
      <Heading>Projects</Heading>
      <Container>
        {projectsList.map(({ title, description, url, source }) => (
          <Card key={url}>
            <CardHeader>{title}</CardHeader>
            <CardBody>{description}</CardBody>
            <CardFooter>
              <Link href={url} target='_blank'>
                Live
              </Link>
              <Link href={source} target='_blank'>
                Source
              </Link>
            </CardFooter>
          </Card>
        ))}
      </Container>
    </Project>
  );
};

export default Index;
