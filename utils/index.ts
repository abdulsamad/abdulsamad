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

// Encode Form Data for Netlify
export const encodeNetlifyFormData = (data: any) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
