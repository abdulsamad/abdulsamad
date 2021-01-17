import React from 'react';

import Skills from './Skills';
import Heading from '../utils/Heading';
import List from './List';
import ListItem from './ListItem';
import Container from '../utils/Container';

const skills: string[] = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Git',
  'Sass',
  'Material UI',
  'Bootstrap',
  'Materialize CSS',
  'Styled-Components',
];

const Index: React.FC = () => (
  <Skills id='skills'>
    <Heading>Skills</Heading>
    <Container>
      <List>
        {skills.map((skill) => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </List>
    </Container>
  </Skills>
);

export default Index;
