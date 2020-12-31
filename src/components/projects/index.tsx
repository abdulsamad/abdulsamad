import React from 'react';

import Project from './Projects';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Index = () => {
  return (
    <Project id='projects'>
      <h1>Projects</h1>
      <Card>
        <CardHeader>Peek History</CardHeader>
        <CardBody>
          A simple and minimal extension for quickly peeking and managing
          history.
        </CardBody>
      </Card>
    </Project>
  );
};

export default Index;
