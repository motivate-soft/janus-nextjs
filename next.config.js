const withImages = require('next-images')

module.exports = withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif"],
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        return config
    }
})

