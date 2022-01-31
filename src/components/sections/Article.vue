<template lang="pug">
    include ../../tools/mixins

    +b.SECTION.article
        +e.main(ref="main")
            svg
                image(
                    :clip-path="`url(#${maskId})`"
                    :xlink:href="'/public/media/img/article/main.jpg'"
                    :style="{'height': animation.image.height,'width': animation.image.width,'transform': animation.image.transform}"
                )
                polygon(
                    :points="`${animation.mask.leftTop} ${animation.mask.rightTop} ${animation.mask.rightBottom} ${animation.mask.leftBottom}`"
                    :style="{'opacity':  animation.arrow.opacity}"
                )
            +e.container.container
                +e.arrow(
                    :style="{'opacity':  animation.arrow.opacity}"
                )
                +e.wrapper(
                    :style="{'transform': animation.title.transform}"
                )
                    +e.H1.title {{ content.contents[0].header }}
        +e.container.container
            +e.text.text__.--article(
                v-html="content.contents[0].content"
                ref="text"
            )
            +e.socials
                span Поделиться статьей
                +e.social Facebook
                +e.social Instagram
                +e.social Ссылка
            +e.next(v-if="windowMobile")
                img(:src="content.background")
                h1 {{ content.contents[0].header }}
        svg(width="0" height="0" v-if="!windowMobile")
            defs
            clipPath(:id="maskId")
                polygon(:points="`${animation.mask.leftTop} ${animation.mask.rightTop} ${animation.mask.rightBottom} ${animation.mask.leftBottom}`")
</template>

<script>
    import Swiper from 'vue-awesome-swiper/node_modules/swiper/dist/js/swiper.js'
    import {getScroll} from '../../mixins/frontEnd/utility/getScroll.js'
    import {getOffset} from '../../mixins/frontEnd/utility/getOffset.js'
    import {howMuchCentered} from '../../mixins/frontEnd/utility/howMuchCentered.js'
    import {isAnyElementInViewport} from '../../mixins/frontEnd/utility/isAnyElementInViewport.js'
    import {isElementInViewport} from '../../mixins/frontEnd/utility/isElementInViewport.js'

    export default {
        mixins: [getScroll,howMuchCentered,isAnyElementInViewport,isElementInViewport,getOffset],
        props: ['content'],
        data() {
            return{
                windowMobile: false,
                sliders: [],
                maskId: '',
                animation:{
                    arrow: {
                        opacity: 0,
                    },
                    main:{
                        height: null
                    },
                    image: {
                        height: null,
                        width: null,
                        transform: null
                    },
                    title: {
                        transform: null
                    },
                    mask:{
                        leftTop: '0,0',
                        rightTop: '0,0',
                        leftBottom: '0,0',
                        rightBottom: '0,0',
                    },
                },
                containerWidth: null,
                swiper:{
                    options:{
                        slidesPerView: 1,
                        speed: 500,
                        effect: 'fade',
                        loop: true,
                        pagination: {
                            el: '.text__count',
                            type: 'fraction',
                            renderFraction: function (currentClass, totalClass) {
                                return '0<span class="' + currentClass + '">0</span>' +
                                    ' / ' +
                                    '<i>0</i><span class="' + totalClass + '">0</span>';
                            },
                        },
                        navigation: {
                            nextEl: '.text__button--next',
                            prevEl: '.text__button--prev',
                        },
                    }
                },

            }
        },
        mounted(){
            this.$nextTick(this.initSwipers);
            this.checkWindowSize();
            document.addEventListener('scroll', this.onScroll);
        },
        destroyed(){
            document.removeEventListener('scroll', this.onScroll);
        },
        methods: {
            onScroll(){
                if(this.isAnyElementInViewport(this.$refs.main) && window.innerWidth >= 1200){
                    let k = ((this.getScroll().y - (this.getOffset(this.$refs.main).top - window.innerHeight))/ this.animation.main.height)*0.666667;
                    this.animation.arrow.opacity = 1.2 - k;

                    //let imageScale = 1/1.2
                    //if(imageScale < 1){
                    //    imageScale = 1;
                    //}
                    //if(imageScale > 1.2){
                    //    imageScale = 1.2;
                    //}
                    //console.log(imageScale)
                    //this.animation.image.transform= `scale(${imageScale})`

                    let titleTranslateX = 3*this.getParams().rem*(1-k);
                    let titleTranslateY = -12*this.getParams().rem*(1-k);
                    if(titleTranslateX < 0){
                        titleTranslateX = 0
                    }
                    if(titleTranslateX > 3*this.getParams().rem) {
                        titleTranslateX = 3*this.getParams().rem;
                    }
                    if(titleTranslateY > 0){
                        titleTranslateY = 0
                    }
                    if(titleTranslateY < -12*this.getParams().rem){
                        titleTranslateY = -12*this.getParams().rem;
                    }
                    this.animation.title.transform = `translate(${titleTranslateX}px,${titleTranslateY}px)`;

                    let leftTopX = this.getParams().rectText.left*(1-k);
                    let leftTopY = this.getParams().rectText.left*(1-k);
                    if(leftTopY > 80/12*this.getParams().rem){
                        leftTopY = 80/12*this.getParams().rem;
                    }
                    let deltaRightTopX = window.innerWidth - (window.innerWidth - this.getParams().rectText.left);
                    let rightTopX = (window.innerWidth - this.getParams().rectText.left)+deltaRightTopX*k;
                    let rightTopY = this.getParams().rectText.left*(1-k);
                    if(rightTopY > 80/12*this.getParams().rem){
                        rightTopY = 80/12*this.getParams().rem;
                    }

                    let leftBottomX = this.getParams().rectText.left*(1-k);
                    let leftBottomY = this.getParams().rectMain.height;

                    let rightBottomX = (window.innerWidth - this.getParams().rectText.left)+deltaRightTopX*k;
                    let rightBottomY = this.getParams().rectMain.height;

                    this.animation.mask.leftTop = `${leftTopX},${leftTopY}`;
                    this.animation.mask.rightTop = `${rightTopX},${rightTopY}`;
                    this.animation.mask.leftBottom = `${leftBottomX},${leftBottomY}`;
                    this.animation.mask.rightBottom = `${rightBottomX},${rightBottomY}`;
                }
            },
            checkWindowSize(){
                if(window.innerWidth >= 1200){
                    this.windowMobile = false;
                    this.setMaskParams();
                } else {
                    this.windowMobile = true;
                }
            },
            getParams(){
                let rem = null;
                if(window.innerWidth >= 1440 && window.innerWidth < 1720){
                    rem = 14;
                } else if(window.innerWidth >= 1720){
                    rem = 17.2;
                } else {
                    rem = window.innerWidth / 100;
                }
                return {
                    rectText: this.$refs.text.getBoundingClientRect(),
                    rectMain: this.$refs.main.getBoundingClientRect(),
                    rem: rem
                }
            },
            setMaskParams(){

                if(window.innerWidth >= 2000){
                    this.animation.image.width = '100%';

                } else {

                    this.animation.image.height = '100%';
                }
                this.maskId = 'articleMask' + Math.floor(Math.random() * (1001));

                this.animation.main.height = this.$refs.main.getBoundingClientRect().height;
                this.animation.mask.leftTop = `${0},${0}`;
                this.animation.mask.rightTop = `${window.innerWidth},${0}`;
                this.animation.mask.leftBottom = `${0},${this.getParams().rectMain.height}`;
                this.animation.mask.rightBottom = `${window.innerWidth},${this.getParams().rectMain.height}`;
            },
            initSwipers(){
                let imagesSlides = document.querySelectorAll('.text__photos');
                for (let i = 0; i < imagesSlides.length; i++) {
                    this.sliders.push(new Swiper(imagesSlides[i], this.swiper.options));
                }
            }
        }
    };
</script>