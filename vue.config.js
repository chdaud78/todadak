module.exports = {
    publicPath: '/todadak',
    outputDir: 'docs',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/sass/app.sass";
                `,
            }
        }
    },
}