import React from 'react';

import Skills from './Skills';
import SectionHeading from '../../utils/SectionHeading';
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
  { text: 'CSS-in-JS \n (Styled Components, Emotion)' },
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
    <SectionHeading>Skills</SectionHeading>
    <Container>
      <List role="list">
        {skills.map((skill) => (
          <ListItem key={skill.text}>{skill.text}</ListItem>
        ))}
      </List>
    </Container>
  </Skills>
);

export default Index;
