<template lang="pug">
    content-component(
        :content="content"
    )
</template>

<script>
    import Content from '../pages/content/article/Content.vue'
    export default {
        data() {
            return {};
        },
        // title(){
        //     return this.content.article.meta.title;
        // },
        // meta(){
        //     return this.content.article.meta.description;
        // },
        asyncData({store, route: {params: {locale, url}}}) {
            return store.dispatch('FETCH_ARTICLE', {locale, url})
        },
        computed: {
            content() {
                return this.$store.state.articles[this.$route.params.url];
            }
        },
        components: {
            'content-component': Content,
        }
    };
</script>