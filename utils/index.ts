import { githubOwner } from './github';

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
			user(login: "${githubOwner}") {
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

export { redirects } from './social-redirects';

export const socialLinks = [
  { name: 'Twitter', iconName: 'twitter', url: '/twitter' },
  { name: 'LinkedIn', iconName: 'linkedin', url: '/linkedin' },
  { name: 'GitHub', iconName: 'github', url: '/github' },
] as const;
