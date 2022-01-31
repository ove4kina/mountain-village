<template lang="pug">
    include ../../tools/mixins
    +b.SECTION.benefits
        +e.wrapper
            +e.container.container
                +e.list.benefits-list__
                    +e.item.benefit__(
                        v-for="benefit in benefits"
                    )
                        +e.image
                            img(:src="`/public/images/icons/${benefit.icon.name}`")
                        +e.text
                            span {{benefit.contents[0].value}}
                            p {{benefit.contents[0].description}}
</template>

<script>
    export default {
        props: ['benefits'],
        data() {
            return {
                breakTitle: false,
            };
        },
        mounted(){
            if(window.innerWidth < 410){
                this.breakTitle = true;
            }
        },
    };
</script>
