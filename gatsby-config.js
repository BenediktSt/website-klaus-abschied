const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        lang: config.lang,
        name: config.manifestName,
        short_name: config.manifestShortName,
        description: config.manifestDescription,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAJnCV0mzUuzS9tNDV_wenyVO9SD2C_NhA",
          authDomain: "kondolenz-klaus.firebaseapp.com",
          // databaseURL: "<YOUR_FIREBASE_DATABASE_URL>",
          projectId: "kondolenz-klaus",
          storageBucket: "kondolenz-klaus.appspot.com",
          messagingSenderId: "693109076423",
          appId: "1:693109076423:web:8db46978d61c6f642c69e2"
        }
      }
    }

  ],
};
