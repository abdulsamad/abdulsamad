interface ProjectListTypes {
  title: string;
  description: string;
  url: string;
  source: string;
}

const projectsList: ProjectListTypes[] = [
  {
    title: 'E-Commerce Project',
    description: 'An E-Commerce Store with admin controls',
    url: 'https://github.com/samad/MERN_E-COMMERCE',
    source: 'https://github.com/samad/MERN_E-COMMERCE',
  },
  {
    title: 'Peek History',
    description:
      'A simple and minimal extension for quickly peeking and managing history.',
    url:
      'https://chrome.google.com/webstore/detail/peek-history/gknodemjjckmkncijnedcpogffimkmbm?source=portfolio',
    source: 'https://github.com/abdulsamad/peek_history',
  },
  {
    title: 'WeatherX',
    description: 'A clean and minimal weather PWA aim towards mobile.',
    url: 'https://weatherx-abdulsamad.netlify.app?source=portfolio',
    source: 'https://github.com/abdulsamad/weatherx',
  },
  {
    title: 'Loan Calculator',
    description:
      "This program help's you to calculate the loan repayment amount.",
    url: 'https://abdulsamad.github.io/loan_calculator?source=portfolio',
    source: 'https://github.com/abdulsamad/loan_calculator',
  },
];

export default projectsList;
