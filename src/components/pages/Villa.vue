<template lang="pug">
    content-component(
        :content="content"
    )
</template>

<script>
    import Content from '../pages/content/villa/Content.vue'
    export default {
        data() {
            return {};
        },
        title(){
            return this.content.villa.contents[0].meta_title;
        },
        // meta(){
        //    return this.content.villa.meta.description;
        // },
        asyncData({store, route: {params: {locale, url}}}) {
            return store.dispatch('FETCH_VILLA', {locale, url})
        },
        computed: {
            content() {
                return this.$store.state.villas[this.$route.params.url];
            }
        },
        components: {
            'content-component': Content,
        }
    };
</script>