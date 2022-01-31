<template lang="pug">
    content-component(
        :content="content"
    )
</template>

<script>
    import Content from '../pages/content/villas/Content.vue'
    export default {
        data() {
            return {};
        },
        // title(){
        //     // return this.content.villa.meta.title;
        // },
        //meta(){
        //    return this.content.villa.meta.description;
        //},
        asyncData({store, route: {params: {locale}}}) {
            let url = 'villas';
            return store.dispatch('FETCH_PAGE', {locale, url})
        },
        computed: {
            content() {
                return this.$store.state.pages.villas
            }
        },
        // asyncData({store, route: {params: {url}}}) {
        //     return store.dispatch('FETCH_VILLA', {url})
        // },
        // computed: {
        //     content() {
        //         return {
        //             main: {
        //                 mHeader: 'Минимализм Заголовок',
        //                 mTitle: 'Шапка страницы Подпись',
        //                 mDescription: 'Минимализм Описание'
        //             }
        //         }
        //     }
        // },
        components: {
            'content-component': Content,
        }
    };
</script>