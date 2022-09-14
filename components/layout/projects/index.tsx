import React, { Fragment } from 'react';
import Image from 'next/image';

import Project from './Projects';
import ProjectContainer from './ProjectContainer';
import SectionHeading from '../../utils/SectionHeading';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import Link from './Link';
import Container from './Container';
import GitHubLink from './GitHubLink';
import Tags from './Tags';
import ProjectDescription from './ProjectDescription';
import ProjectImageContainer from './ProjectImageContainer';
import { GithubPinnedItemTypes } from '../../../pages/index';
import theme from '../theme/index';

interface IProjects {
  githubPinnedItems: GithubPinnedItemTypes[];
}

const Index = ({ githubPinnedItems }: IProjects) => {
  return (
    <Project id="projects">
      <SectionHeading>Projects</SectionHeading>
      <Container justify="center">
        {githubPinnedItems.map(
          ({
            id,
            name,
            url,
            homepageUrl,
            description,
            openGraphImageUrl,
            topics,
          }) => (
            <Fragment key={id}>
              <ProjectContainer>
                <ProjectImageContainer>
                  <Image
                    layout="fill"
                    objectFit="contain"
                    sizes={`(max-width: ${theme.breakpoints.lg}) 100vw,
                    (max-width: ${theme.breakpoints.md}) 50vw,
                    33vw`}
                    src={openGraphImageUrl}
                    alt={name}
                  />
                </ProjectImageContainer>
                <ProjectDescription>
                  <Card>
                    <CardHeader>{name}</CardHeader>
                    <CardBody>{description}</CardBody>
                    <CardFooter>
                      <Link href={homepageUrl} target="_blank" rel="noopener">
                        Live{' '}
                        <i
                          className="bi bi-box-arrow-up-right"
                          aria-hidden="true"
                        />
                      </Link>
                      <Link href={url} target="_blank" rel="noopener">
                        Code <i className="bi bi-github" aria-hidden="true" />
                      </Link>
                    </CardFooter>
                  </Card>
                  <Tags topics={topics} />
                </ProjectDescription>
              </ProjectContainer>
            </Fragment>
          )
        )}
      </Container>
      <Container>
        <GitHubLink
          href={`${process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}?tab=repositories&q=&type=source`}
          target="_blank"
          rel="noopener"
          outlined>
          More Projects{' '}
          <i className="bi bi-box-arrow-up-right" aria-hidden="true" />
        </GitHubLink>
      </Container>
    </Project>
  );
};

export default Index;
