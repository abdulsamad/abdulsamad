module.exports = {
  siteMetadata: {
    title: 'Portfolio - AbdulSamad Ansari',
    description: 'This is my portfolio',
    author: '@AbdulSamadDev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AbdulSamad Ansari',
        short_name: 'AbdulSamad',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Montserrat', 'Lora'],
        display: 'swap',
      },
    },
    'gatsby-plugin-smoothscroll',
  ],
};
