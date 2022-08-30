import React from "react";

import Skills from "./Skills";
import Heading from "../utils/Heading";
import List from "./List";
import ListItem from "./ListItem";
import Container from "../utils/Container";

const skills: string[] = [
  "HTML",
  "CSS",
  "Sass",
  "CSS-in-JS (Styled Components, Emotion)",
  "JavaScript",
  "TypeScript",
  "React",
  "Node",
  "Git",
  "Material UI",
  "Bootstrap",
];

const Index = () => (
  <Skills id="skills">
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
