<template lang="pug">
    content-component(
        :content="content"
    )
</template>

<script>
    import Content from '../pages/content/articles/Content.vue'
    export default {
        data() {
            return {};
        },
        title(){
            return 'Блог';
        },
        asyncData({store, route: {params: {locale}}}) {
            let url = 'blog';
            return store.dispatch('FETCH_PAGE', {locale, url})
        },
        computed: {
            content() {
                return this.$store.state.pages.blog
            }
        },
        components: {
            'content-component': Content,
        }
    };
</script>