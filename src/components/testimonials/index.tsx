import React from 'react';

import Testimonials from './Testimonials';
import Container from './Container';
import Heading from '../utils/Heading';
import Card from './Card';
import Quote from './Quote';
import Name from './Name';

const clients = [
  {
    name: 'Vinod Kumar D.',
    text:
      'Samad developed my website for one of my project with great quality and dedication. I should appreaciate him for his awesome understanding skill. I would like to hire him again in future.',
    country: 'India',
  },
  {
    name: 'Khadiga M',
    text:
      'Great work with Abdulsamad. He always kept me up to date with the progress, and handled any feedbacks I had well and delivered the requirements on time.',
    country: 'Canada',
  },
];

const Index: React.FC = () => {
  return (
    <Testimonials id='testimonials'>
      <Heading>Testimonials</Heading>
      <Container>
        {clients.map(({ name, text }) => (
          <Card>
            <Quote>{text}</Quote>
            <Name>{name}</Name>
          </Card>
        ))}
      </Container>
    </Testimonials>
  );
};

export default Index;
