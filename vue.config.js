module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/todadak/'
    : '/',
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