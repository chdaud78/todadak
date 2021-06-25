module.exports = {
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