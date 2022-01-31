<template lang="pug">
    include ../../tools/mixins
    +b.SECTION.benefits
        +e.container.container
            +e.list.benefits-list__
                +e.item.benefit__(
                    v-for="benefit in benefits"
                )
                    +e.image
                        img(:src="`/public/images/icons/${benefit.icon.name}`")
                    +e.text
                        p.bold {{benefit.contents[0].title}}
                        p {{benefit.contents[0].description}}
</template>

<script>
    export default {
        props: ['benefits'],
        data() {
            return {

            };
        },
    };
</script>
