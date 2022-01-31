<template lang="pug">
    include ../../../../tools/mixins.pug
    div
         header-component(
             :color="'black'"
         )
         villas-cards-component(
             :content="content.villas"
             :insidePage="true"
         )
         footer-component
</template>

<script>
    import Header from '../../../sections/Header.vue';
    import VillasCards from '../../../sections/VillasCards.vue';
    import Footer from '../../../sections/Footer.vue';
    export default {

        props: ['content'],
        mounted() {
            console.log(this.content);
        },
        components: {
            'header-component': Header,
            'villas-cards-component': VillasCards,
            'footer-component': Footer,
        }
    }
</script>