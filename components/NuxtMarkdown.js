let mdxPageNames = [];

let mdxPages = require.context('@/pages', false, /\.mdx$/)

mdxPages.keys().map(key => {

    mdxPageNames.push({
        path: key,
        component: mdxPages(key).default
    });

});

export default {
    name: 'NuxtMarkdown',

    render(h) {

        let path = this.$route.path;

        // TODO
        let mdxPage = mdxPageNames.find(mdx => mdx.path == "." + path + ".mdx");

        return mdxPage ? < mdxPage.component / > : < Nuxt / >
    }
}