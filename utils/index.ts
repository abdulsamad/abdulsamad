export const initialProdLog = () => {
  // prettier-ignore
  if (process.env.NODE_ENV === 'production') {
    const txt = '%c This website is developed by AbdulSamad. Hopefully there are no error and warnings in console! 😄';
    const art = `%c
		___   _____   _____   _   _   _       _____       ___       ___  ___       ___   _____  
		/   | |  _  \\ |  _  \\ | | | | | |     /  ___/     /   |     /   |/   |     /   | |  _  \\ 
		/ /| | | |_| | | | | | | | | | | |     | |___     / /| |    / /|   /| |    / /| | | | | | 
		/ /_| | |  _  { | | | | | | | | | |     \\___  \\   / /_| |   / / |__/ | |   / /_| | | | | | 
		/ /  | | | |_| | | |_| | | |_| | | |___   ___| |  / /  | |  / /       | |  / /  | | | |_| | 
		/_/   |_| |_____/ |_____/ \\_____/ |_____| /_____/ /_/   |_| /_/        |_| /_/   |_| |_____/ `;
    
    console.log(art, 'font-weight: bold; color: #2f89fc;');
    console.log(txt, 'font-size: 16px; font-weight: 600; text-shadow: 1px 1px 2px #c4c4c4,1px 1px 2px #d3d3d3; margin: 5px 0;');
	}
};

// GitHub GraphQL query for fetching pinned repositories
export const githubPinnedReposQuery = JSON.stringify({
  query: `
		{
			user(login: "abdulsamad") {
				pinnedItems(first: 50) {
					edges {
						node {
							... on Repository {
								name
								id
								url
								description
								homepageUrl
								openGraphImageUrl
								repositoryTopics (first: 100) {
									edges {
										node {
											topic {
												name
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`,
});

export const technologies = [
  'html',
  'css',
  'scss',
  'javascript',
  'typescript',
  'react',
  'css-in-js',
  'material-ui',
  'dayjs',
  'vite',
  'emotion',
  'content-api',
  'mongoosejs',
  'localforage',
  'monaco-editor',
  'react-split',
  'styled-components',
  'xterm',
  'mongodb',
  'pwa',
  'node',
  'nodejs',
  'open-weather-map-api',
  'axios',
  'superagent',
  'redux',
  'redux-toolkit',
  'react-spring',
  'famer-motion',
  'react-router-dom',
  'nextjs',
  'gatsby',
  'reach-router',
  'alpine-js',
  'bulma',
  'jspdf',
  'parcel-bundler',
  'workbox',
];

export const redirects = {
  '/resume': {
    status: 301,
    destination: 'https://bit.ly/2Tbfyqx',
  },
  '/linkedin': {
    status: 301,
    destination: 'https://www.linkedin.com/in/abdulsamad-ansari',
  },
  '/github': {
    status: 301,
    destination: 'https://github.com/abdulsamad',
  },
  '/telegram': {
    status: 301,
    destination: 'https://t.me/AbdulSamadDev',
  },
  '/twitter': {
    status: 301,
    destination: 'https://twitter.com/AbdulSamadDev',
  },
  '/x': {
    status: 301,
    destination: 'https://x.com/AbdulSamadDev',
  },
  '/facebook': {
    status: 301,
    destination: 'https://facebook.com/AbdulSamadDev',
  },
  '/bluesky': {
    status: 301,
    destination: 'https://bsky.app/profile/abdulsamad.bsky.social',
  },
} as const;

export const socialLinks = [
  { name: 'LinkedIn', iconName: 'linkedin', url: redirects['/linkedin'].destination },
  { name: 'GitHub', iconName: 'github', url: redirects['/github'].destination },
  { name: 'Twitter', iconName: 'twitter', url: redirects['/twitter'].destination },
] as const;