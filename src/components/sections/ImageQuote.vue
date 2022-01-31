<template lang="pug">
    include ../../tools/mixins
    +b.SECTION.image-quote(ref="section")
        img(
            :style="{'transform': `translate(-50%,-50%) scale(${animation.imageScale})`, 'opacity': animation.imageOpacity, }"
            src="/public/media/img/image-quote/1.jpg"
        )
        +e.shadow(:style="{'opacity': animation.shadowOpacity}")
        +e.container.container
            h3(
                :style="{'opacity': animation.textOpacity, 'transform': `translateY(${animation.textTranslate})`,}"
            ) Комфорт в каждой мелочи.
</template>

<script>

   import {getScroll} from '../../mixins/frontEnd/utility/getScroll.js'
   import {getOffset} from '../../mixins/frontEnd/utility/getOffset.js'
   import {howMuchCentered} from '../../mixins/frontEnd/utility/howMuchCentered.js'
   import {isAnyElementInViewport} from '../../mixins/frontEnd/utility/isAnyElementInViewport.js'
   import {isElementInViewport} from '../../mixins/frontEnd/utility/isElementInViewport.js'

    export default {
       mixins: [getScroll,howMuchCentered,isAnyElementInViewport,isElementInViewport,getOffset],
        data() {
            return{
                section:{
                    height: null,
                    offset: null
                },
                animation:{
                    shadowOpacity: 0,
                    imageOpacity: 0,
                    imageScale: 1.1,
                    textTranslate: null,
                    textOpacity: 0
                }
            }
        },
        mounted(){
            this.init();
            this.animationOnScroll();
            document.addEventListener('scroll', this.animationOnScroll);
        },
        destroyed(){
            document.removeEventListener('scroll', this.animationOnScroll);
        },
        methods: {
            init(){
                this.section.height = this.$refs.section.getBoundingClientRect().height;
                this.section.offset = this.getOffset(this.$refs.section).top;
            },
            animationOnScroll(){
                if(this.isAnyElementInViewport(this.$refs.section)){
                    let k = (this.getScroll().y - (this.section.offset - window.innerHeight))/this.section.height;
                    if(k>1){
                        k = 1;
                    }
                    this.animation.imageOpacity = k;
                    this.animation.imageScale = 1+0.1*(1-k);
                    if(k>0.7){
                        this.animation.shadowOpacity = (k-0.7)*3.3333;
                    }
                    if(this.howMuchCentered(this.$refs.section) > -0.25 && this.howMuchCentered(this.$refs.section) <= 0.25){
                        let t = (this.howMuchCentered(this.$refs.section)+0.25)*2;
                        this.animation.textTranslate = (100 *( 1 - t))+'px';
                        this.animation.textOpacity = t;
                    }
                } else {
                    this.animation = {
                        shadowOpacity: 0,
                            imageOpacity: 0,
                            imageScale: 1.1,
                            textTranslate: null,
                            textOpacity: 0
                    }
                }
            }
        }
    };
</script>