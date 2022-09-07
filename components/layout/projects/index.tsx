import React from 'react';
import Atropos from 'atropos/react';

import Project from './Projects';
import ProjectContainer from './ProjectContainer';
import Heading from '../../utils/Heading';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import Link from './Link';
import Container from './Container';
import GitHubLink from './GitHubLink';

import projectsList from './projectsList';

const Index = () => {
  return (
    <Project id="projects">
      <Heading>Projects</Heading>
      <Container justify="center">
        {projectsList.map(
          ({ title, description, url, source_url, image: { src, alt } }) => (
            <ProjectContainer key={src}>
              <img src={src} alt={alt} />
              <Card>
                <CardHeader>{title}</CardHeader>
                <CardBody>{description}</CardBody>
                <CardFooter>
                  <Link href={url} target="_blank" rel="noopener">
                    Live
                  </Link>
                  <Link href={source_url} target="_blank" rel="noopener">
                    Source
                  </Link>
                </CardFooter>
              </Card>
            </ProjectContainer>
          )
        )}
      </Container>
      <Container>
        <GitHubLink
          href="https://github.com/abdulsamad?tab=repositories&q=&type=source&language=&sort="
          target="_blank"
          rel="noopener"
          outlined>
          More Projects
        </GitHubLink>
      </Container>
    </Project>
  );
};

export default Index;
