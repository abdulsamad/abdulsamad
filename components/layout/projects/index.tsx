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
import ProjectImage from './ProjectImage';
import { Node } from '../../../types';

const Index = ({ githubPinnedItems }: { githubPinnedItems: Node[] }) => {
  return (
    <Project id="projects">
      <Heading>Projects</Heading>
      <Container justify="center">
        {githubPinnedItems.map(
          ({ id, name, url, homepageUrl, description, openGraphImageUrl }) => (
            <ProjectContainer key={id}>
              <ProjectImage src={openGraphImageUrl} alt={openGraphImageUrl} />
              <Card>
                <CardHeader>{name}</CardHeader>
                <CardBody>{description}</CardBody>
                <CardFooter>
                  <Link href={homepageUrl} target="_blank" rel="noopener">
                    Live
                  </Link>
                  <Link href={url} target="_blank" rel="noopener">
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
          href={`${process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}?tab=repositories&q=&type=source&language=&sort=`}
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
