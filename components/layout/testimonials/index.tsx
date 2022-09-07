import React from "react";

import Testimonials from "./Testimonials";
import Container from "./Container";
import Heading from "../../utils/Heading";
import Card from "./Card";
import Quote from "./Quote";
import Name from "./Name";
import Company from "./Company";

interface reviewTypes {
  name: string;
  text: string;
  company: string;
}

const reviews: reviewTypes[] = [
  {
    name: "Vinod Kumar Dhara",
    text: "Samad developed my website for one of my project with great quality and dedication. I should appreaciate him for his awesome understanding skill. I would like to hire him again in future.",
    company: "4inall, India",
  },
  {
    name: "Khadiga M",
    text: "Great work with Abdulsamad. He always kept me up to date with the progress, and handled any feedbacks I had well and delivered the requirements on time.",
    company: "Klenka IT Solutions, Egypt",
  },
];

const Index = () => (
  <Testimonials id="testimonials">
    <Heading>Testimonials</Heading>
    <Container>
      {reviews.map(({ name, text, company }) => (
        <Card key={name}>
          <Quote>{text}</Quote>
          <Name>{name}&#44;</Name>
          <Company>{company}</Company>
        </Card>
      ))}
    </Container>
  </Testimonials>
);

export default Index;
