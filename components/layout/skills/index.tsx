import React from 'react';

import Skills from './Skills';
import Heading from '../../utils/Heading';
import List from './List';
import ListItem from './ListItem';
import Container from '../../utils/Container';

interface skill {
  text: string;
}

const skills: skill[] = [
  { text: 'HTML' },
  { text: 'CSS' },
  { text: 'Sass' },
  { text: 'CSS-in-JS (Styled Components, Emotion)' },
  { text: 'JavaScript' },
  { text: 'TypeScript' },
  { text: 'React' },
  { text: 'Node' },
  { text: 'MongoDB' },
  { text: 'Git' },
  { text: 'Material UI' },
  { text: 'Bootstrap' },
];

const Index = () => (
  <Skills id="skills">
    <Heading>Skills</Heading>
    <Container>
      <List>
        {skills.map((skill) => (
          <ListItem key={skill.text}>{skill.text}</ListItem>
        ))}
      </List>
    </Container>
  </Skills>
);

export default Index;
