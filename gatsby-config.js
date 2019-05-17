module.exports = {
  siteMetadata: {
    title: `Scott Ollivier's Site`,
    description: `Site for my writings, projects, resume/CV`,
    author: `@sjollivier`,
  },
  plugins: [
    "gatsby-plugin-sass",
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137277022-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        optimizeId: "GTM-5DF4Q4C",
        // Enables Google Optimize Experiment ID //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3.... //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "sjollivier.info",
      },
    },
  ],
}
