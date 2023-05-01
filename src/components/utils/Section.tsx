import type React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  class?: string;
}

const Section = ({ children, ...props }: Props) => {
  return (
    <section
      className={`relative px-[4vw] w-full max-w-[1920px] mx-auto ${props.class}`}
      {...props}>
      {children}
    </section>
  );
};

export default Section;
