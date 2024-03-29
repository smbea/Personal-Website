module.exports = {
    siteMetadata: {
        title: "Beatriz Mendes",
        description:
      "Wemcome to my website! Get to know me and my projects.",
        url: "https://beatrizmendes.me", // No trailing slash allowed!
        image: "./src/images/previewImage.png", // Path to your image you placed in the 'static' folder
        author: "Beatriz Mendes",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "262842220",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/favicon.png",
            },
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        "gatsby-plugin-jss",
        "gatsby-plugin-sass",
        "gatsby-plugin-fontawesome-css",
        "gatsby-plugin-smoothscroll",
        "gatsby-plugin-dark-mode",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
    ],
};
