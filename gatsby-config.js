module.exports = {
  siteMetadata: {
    title: `My Awesome Blog`,
    description: `This blog is the freakin' best!`,
    siteUrl: 'https://kind-bartik-9cea0f.netlify.com/',
    author: `Joey Dye`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Level Up Blog`,
        short_name: `LUTBlog`,
        start_url: `/`,
        background_color: `#524763`,
        theme_color: `#524763`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-netlify', // Make sure this one is last
  ],
}
