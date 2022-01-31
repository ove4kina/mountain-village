<template lang="pug">
    include ../../tools/mixins

    +b.MAIN.main
        +e.process(:style="{'transform': `scale${slider.process.direction}(${slider.process.time})`, 'transition': slider.process.transition}")
        +e.slider.swiper-container(v-swiper:mainSwiper="slider.options")
            .swiper-wrapper
                +e.slide.swiper-slide(v-for="slide in gallery")
                    +e.background
                        img.swiper-lazy(:data-src="'/public/media/img/main/' + slide.image")
                    +e.content
                        +e.container.container
                            +e.text(v-if="slide.contents.length !== 0")
                                span {{slide.contents[0].title}}
                                h2 {{slide.contents[0].description}}
                            +e.ROUTER-LINK.button--yellow.button__.--yellow.--standart(
                                v-if="slide.buttons[0]"
                                :to="slide.buttons[0].link"
                            ) {{ slide.buttons[0].name }}
                            +e.BUTTON.button--transparent.button__.--transparent.--border-white.--standart(
                                v-if="slide.buttons[1]"
                                :to="slide.buttons[1].link"
                            ) {{ slide.buttons[1].name }}
        +e.bottom
            +e.container.container
                +e.wrapper
                    +e.button--prev.button__.--nav
                    +e.button--next.button__.--nav
                    +e.slide-count 0{{ slider.activeSlide + 1 }} / #[span 0{{ slider.slidesLength - 2 }}]
</template>

<script>
    import constants from '../../../content/constants.json';

    export default {
        props: ['gallery'],
        data() {
            let language = this.$router.currentRoute.meta.language,
                obj = {
                    slides: [
                        {
                            background: '../../../../../public/media/img/main/bg.jpg',
                            text: 'Элитное жилье в Паттайе',
                            title: 'Виллы<br> люкс-класса для всей семьи в Тайланде',
                            button: {
                                yellow: 'Посмотреть объекты',
                                transparent: 'Получить консультацию'
                            }
                        }
                    ],
                    slider: {
                        slidesLength: 0,
                        activeSlide: 0,
                        process:{
                            direction: null,
                            time: 0,
                            transition: null
                        },
                        options: {
                            sliderPerView: 1,
                            speed: 500,
                            loop: true,
                            effect: 'fade',
                            lazy: {
                                loadPrevNext: true,
                            },
                            autoplay: {
                                delay: 6000,
                                disableOnInteraction: false
                            },
                            navigation: {
                                nextEl: '.main__button--next',
                                prevEl: '.main__button--prev',
                            },
                            on: {
                                init: ()=>{
                                    this.slider.process.transition = 'transform 6s linear';
                                    this.slider.process.time = 0;
                                    setTimeout(() => {
                                        this.slider.process.time = 1;
                                        this.slider.slidesLength = this.mainSwiper.slides.length;
                                    })
                                },
                                touchMove: (event)=>{
                                    this.slider.process.transition = null;
                                    this.slider.process.time = 0;
                                },
                                slideChange: ()=>{
                                    this.slider.process.transition = null;
                                    this.slider.process.time = 0;
                                    setTimeout(() => {
                                        this.slider.process.transition = 'transform 6s linear';
                                        this.slider.process.time = 1;
                                    })
                                    this.slider.activeSlide = this.mainSwiper.realIndex;
                                }
                            }
                        }

                    }

                };
            return obj;
        },
        created(){
            if(typeof window !== 'undefined'){
                if(window.innerWidth >= 1200){
                    this.slider.process.direction = 'Y';
                } else {
                    this.slider.process.direction = 'X';
                }
            }
        },
        destroyed(){

        },
        mounted(){

        },
        methods: {

        },
        components: {
        }
    };
</script>
