<template lang="pug">
    content-component(
        :content="content"
    )
</template>

<script>
    import Content from '../pages/content/infrastructures/Content.vue'
    export default {
        data() {
            return {};
        },
        title(){
            return 'Инфраструктуры';
        },
        asyncData({store, route: {params: {locale}}}) {
            let url = 'infrastructures';
            return store.dispatch('FETCH_PAGE', {locale, url})
        },
        computed: {
            content() {
                return this.$store.state.pages.infrastructures
            }
        },
        components: {
            'content-component': Content,
        }
    };
</script>