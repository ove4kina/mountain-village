<template lang="pug">
    content-component(
        :content="content"
    )
</template>

<script>
    import Content from '../pages/content/index/Content.vue'
    export default {
        data() {
            return {

            };
        },
        title(){
            return 'Главная';
        },
        asyncData({store, route: {params: {locale}}}) {
            let url = 'index';
            return store.dispatch('FETCH_PAGE', {locale, url})
        },
        computed: {
            content() {
                return this.$store.state.pages.index
            }
        },
        components: {
            'content-component': Content,
        }
    };
</script>