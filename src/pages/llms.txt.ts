import type { APIRoute } from 'astro';
import * as myInfo from '@content/my-info.mdx';
import projects from '@data/projects.json';
import { redirects } from '@utils/social-redirects';

const profiles = [
  { label: 'GitHub', note: 'Source code and open-source projects', url: redirects['/github'].destination },
  { label: 'LinkedIn', note: 'Professional background and experience', url: redirects['/linkedin'].destination },
  { label: 'X', note: 'Updates and posts', url: redirects['/x'].destination },
  { label: 'Blog', note: 'Writing', url: 'https://blog.abdulsamad.dev' },
  { label: 'DEV Community', note: 'Articles', url: 'https://dev.to/abdulsamad' },
];

type Frontmatter = {
  name: string;
  tagline: string;
  location: string;
  skills: { frontend: string[]; backend: string[]; tools: string[] };
};

// Astro's MDX typings do not expose frontmatter, so describe the shape used here.
const frontmatter = (myInfo as unknown as { frontmatter: Frontmatter }).frontmatter;

const email = redirects['/email'].destination.replace('mailto:', '');

const formatSkills = (skills: string[]) => skills.join(', ');

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://abdulsamad.dev')).origin;
  const { name, tagline, location, skills } = frontmatter;

  const work = projects.map((project) => {
    const source = 'githubUrl' in project ? ` ([source](${project.githubUrl}))` : '';
    return `- [${project.name}](${project.homepageUrl}): ${project.description}${source}`;
  });

  const body = [
    `# ${name}`,
    '',
    `> Software engineer based in ${location}, specializing in frontend and AI engineering. ${tagline}.`,
    '',
    'This is the personal portfolio of Abdul Samad Ansari. Everything an agent needs to know about me is on this page or linked below.',
    '',
    '## Profiles',
    '',
    ...profiles.map(({ label, note, url }) => `- [${label}](${url}): ${note}`),
    '',
    '## Selected work',
    '',
    ...work,
    '',
    '## Skills',
    '',
    `- Frontend: ${formatSkills(skills.frontend)}`,
    `- Backend: ${formatSkills(skills.backend)}`,
    `- Tools: ${formatSkills(skills.tools)}`,
    '',
    '## Contact',
    '',
    `- Email: ${email}`,
    '- For anything else, reach out through the profiles above.',
    '',
    '## Optional',
    '',
    `- [Home page](${origin}): Full portfolio`,
    `- [Sitemap](${origin}/sitemap.xml)`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
