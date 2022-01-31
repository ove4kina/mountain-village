<template lang="pug">
    include ../../tools/mixins.pug

    +b.title__.--gradient.--white(
        :style="{'opacity': opacity}"
        ref="title"
        :class="[fontSizeClass]"
    )
        +e.container.container
            h2(v-html="textMobile" v-if="windowMobile")
            h2(v-html="textDesktop" v-else)
</template>

<script>
    import {getScroll} from '../../mixins/frontEnd/utility/getScroll.js'
    import {getStyle} from '../../mixins/frontEnd/utility/getStyle.js'
    import {getOffset} from '../../mixins/frontEnd/utility/getOffset.js'
    import {howMuchCentered} from '../../mixins/frontEnd/utility/howMuchCentered.js'
    import {isAnyElementInViewport} from '../../mixins/frontEnd/utility/isAnyElementInViewport.js'
    import {isElementInViewport} from '../../mixins/frontEnd/utility/isElementInViewport.js'

    export default {
        mixins: [getScroll,howMuchCentered,isAnyElementInViewport,isElementInViewport,getOffset,getStyle],
        props: ['fontSize','textMobile','textDesktop','margin'],
        data() {
            return {
                windowMobile: false,
                height: null,
                opacity: 1
            };
        },
        watch: {

        },
        methods: {
            onScroll(){

                if(this.isAnyElementInViewport(this.$refs.title) && this.howMuchCentered(this.$refs.title) >= -0.3 && window.innerWidth >= 1200){
                    let k = 1 - (0.3 + this.howMuchCentered(this.$refs.title))*1/0.85;
                    this.opacity = k;
                }
            }
        },
        mounted(){
            if(this.$router.history.current.name === 'article'){
                this.height = this.$refs.title.getBoundingClientRect().height;
                document.addEventListener('scroll', this.onScroll);
            }
            if(window.innerWidth >= 1200){
                this.windowMobile = false;
            } else {
                this.windowMobile = true;
            }
        },
        computed: {
            fontSizeClass(){
                switch (this.fontSize){
                    case 'small': {
                        return 'title--small'
                    }
                    case 'medium': {
                        return 'title--medium'
                    }
                    case 'big': {
                        return 'title--big'
                    }
                }
            },
        }
    };
</script>
