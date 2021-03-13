module.exports = {
    siteMetadata: {
        title: "My Website",
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
                icon: "src/images/icon.png",
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
        `gatsby-plugin-sass`,
        `gatsby-plugin-fontawesome-css`,
    ],
};