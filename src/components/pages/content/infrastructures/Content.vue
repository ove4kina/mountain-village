<template lang="pug">
    include ../../../../tools/mixins.pug
    div
         header-component(
             :color="'black'"
         )
         articles-component(
             :articles="content.articles"
         )
         footer-component
</template>

<script>
    import constants from '../../../../../content/constants.json';

    import Header from '../../../sections/Header.vue';
    import Articles from '../../../sections/Articles.vue';
    import Footer from '../../../sections/Footer.vue';


    export default {
        props: ['content'],
        data() {
            return {

            };
        },
        mounted(){
            console.log(this.content)
        },
        methods: {

        },
        components: {
            'header-component': Header,
            'articles-component': Articles,
            'footer-component': Footer
        }
    };
</script>


<style lang="scss">

</style>