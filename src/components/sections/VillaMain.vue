<template lang="pug">
    include ../../tools/mixins

    +b.MAIN.villa-main(v-on:click="changeSlide")
        +e.process(:style="{'transform': `scale${slider.process.direction}(${slider.process.time}) translateX(-100%)`, 'transition': slider.process.transition, 'left': progressLeft}")
        +e.swiper.swiper-container(
            v-swiper:mainSwiper="slider.options"
            :class="{'cursor-pointer': slider.cursorPointer}"
            v-on:mousemove="onMouseSwiper"
        )
            .swiper-wrapper
                .swiper-slide(
                    v-for="slide in slides"
                    :class="{'swiper-no-swiping': slider.notActive}"
                ) 1
        +e.slider
            +e.slide(
                v-for="(slide,index) in slides"
                :class="[classPosition(index),{'hide': index !== slider.activeSlide}]"
                :style="{'width': slidesStyles[index].width+'px', 'left':  slidesStyles[index].left+'px','zIndex': slidesStyles[index].zIndex}"
            )
                +e.background
                    img(:src="slide.background")
                +e.content(:class="{'transition': contentTransition}")
                    +e.container.container
                        +e.top
                            +e.price {{ slide.price }}
                            +e.text {{ slide.location }}
                        +e.title {{ slide.title }}
                        +e.description {{ slide.description }}
                        +e.BUTTON.button--yellow.button__.--yellow.--standart {{ slide.button.yellow }}
                        +e.BUTTON.button--transparent.button__.--transparent.--border-white.--standart {{ slide.button.transparent }}
        +e.bottom
            +e.container.container
                +e.wrapper
                    +e.buttons
                        +e.button--prev.button__.--nav
                        +e.button--next.button__.--nav
                    +e.slide-count {{ slider.activeSlide + 1 > 9 ? slider.activeSlide + 1 : '0' + (slider.activeSlide + 1) }} / #[span {{ slider.slidesLength - 2 > 9 ? slider.slidesLength - 2 : '0' + (slider.slidesLength - 2) }}]



</template>

<script>
    export default {
        data() {
            let language = this.$router.currentRoute.meta.language,
                obj = {
                    contentTransition: false,
                    slides: [
                        {
                            background: '/public/media/img/main/bg.jpg',
                            location: 'Элитное жилье в Паттайе',
                            price: '$ 442,000',
                            title: 'Виллы люкс-класса для всей семьи в Тайланде',
                            description: 'Аристократичный вид строения ассоциируется с классическим жилищем состоятельных успешных людей, для которых незаметная роскошь давно стала привычным атрибутом повседневной жизни.',
                            button: {
                                yellow: 'Подробнее о вилле',
                                transparent: 'Получить консультацию'
                            }
                        }
                    ],
                    slidesStyles: [],
                    progressLeft: null,
                    activeIndex: 0,
                    slider: {
                        init: false,
                        cursorPointer: false,
                        slidesLength: 0,
                        activeSlide: 0,
                        notActive: false,
                        process:{
                            direction: null,
                            time: 0,
                            transition: null
                        },
                        options: {
                            sliderPerView: 1,
                            speed: 700,
                            effect: 'fade',
                            loop: true,
                            autoplay: {
                                delay: 6000,
                                disableOnInteraction: false
                            },
                            navigation: {
                                nextEl: '.villa-main__button--next',
                                prevEl: '.villa-main__button--prev',
                            },
                            on: {
                                init: ()=>{
                                    this.slider.process.transition = 'transform 5.5s ease';
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
                                slidePrevTransitionStart: ()=>{
                                    this.slides.map((slide, index)=>{
                                        if(this.classPosition(index) === 'position--prev'){
                                            this.slidesStyles[index].zIndex = -2;
                                        }
                                    })
                                },
                                slideChange: ()=>{
                                    this.contentTransition = true;
                                    this.slider.notActive = true;
                                    this.slider.process.transition = null;
                                    this.slider.process.time = 0;
                                    setTimeout(() => {
                                        this.slider.process.transition = 'transform 5.5s ease';
                                        this.slider.process.time = 1;
                                        this.slider.notActive = false;
                                    },1000)
                                    this.slider.activeSlide = this.mainSwiper.realIndex;
                                    this.setSlideStyle(this.mainSwiper.realIndex);
                                }
                            }
                        }
                    }
                };
            return obj;
        },
        created(){
            if(this.slides.length < 6){
                this.slides.unshift(this.slides[this.slides.length - 1])
                this.slides.push(this.slides[1])
            }
            this.slides.map((slide,index)=>{
                this.slidesStyles.push({width: 0,left: 0, zIndex: 0});
            })
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
            this.setSlideStyle(this.mainSwiper.realIndex)
            if(window.innerWidth >= 1200){
                this.progressLeft = `${window.innerWidth*0.7}px`
            }
            this.slidesStyles.map((slide,index)=>{
                if(window.innerWidth >= 1200){
                    if(index === 0){
                        slide.width = window.innerWidth*0.7;
                    } else {
                        slide.width = window.innerWidth*0.3;
                    }
                } else {
                    slide.width = window.innerWidth;
                }
            })
        },
        methods: {
            setSlideStyle(index){
                if(typeof window !== 'undefined' && window.innerWidth >= 1200){
                    let time = 1;
                    if(!this.slider.init){
                        this.slider.init = true;
                        time = 0
                    }
                    this.slidesStyles.map((slide, indexSlide)=>{
                        let newWidth = null,
                            newLeft = null;
                        if(indexSlide === this.slider.activeSlide){
                            newWidth =  window.innerWidth*0.7
                        } else {
                            newWidth =  window.innerWidth*0.3
                        }
                        switch (this.classPosition(indexSlide)){
                            case 'position--next':{
                                newLeft = window.innerWidth*0.7;
                                this.slidesStyles[indexSlide].zIndex = 1;
                                break;
                            }
                            case 'position--prev':{
                                newLeft = -(window.innerWidth*0.3);
                                this.slidesStyles[indexSlide].zIndex = 0;
                                break;
                            }
                            case 'static':{
                                newLeft = window.innerWidth;
                                this.slidesStyles[indexSlide].zIndex = -1;
                                break;
                            }
                            case 'active':{
                                newLeft = 0;
                                this.slidesStyles[indexSlide].zIndex = 2;
                                break;
                            }
                        }
                        TweenLite.to(
                            slide,
                            time,
                            {
                                width: newWidth,
                                onUpdate: (() => {
                                    //console.log(slide.width)
                                }),
                                ease: Power2.easeOut
                            },
                        ).delay(0.2);
                        TweenLite.to(
                            slide,
                            time,
                            {
                                left: newLeft,
                                onUpdate: (() => {
                                    //console.log(slide.width)
                                }),
                                ease: Power2.easeOut
                            },
                        ).delay(0.2);
                    })
                }
            },
            onMouseSwiper(e){
                let x = e.pageX / window.innerWidth;
                this.slider.cursorPointer = (x > 0.7);

            },
            changeSlide(e){
                let x = e.pageX / window.innerWidth;
                if(x > 0.7 && !this.slider.notActive){
                    this.mainSwiper.slideTo(this.slider.activeSlide + 2);
                }
            },
            classPosition(index){
                if(this.slider.activeSlide === 0 && index === this.slides.length - 1){
                    return 'position--prev';
                }
                if(this.slider.activeSlide === this.slides.length - 1) {
                    if (index === 0) {
                        return 'position--next';
                    }
                }
                if(this.slider.activeSlide === this.slides.length - 2) {
                    if (index === 0) {
                        return 'position--next';
                    }
                }
                if(index === this.slider.activeSlide){
                    return 'active';
                }else if(index === this.slider.activeSlide + 1) {
                    return 'position--next';
                } else if(index === this.slider.activeSlide - 1){
                    return 'position--prev'
                } else {
                    return 'static';
                }
            }
        },
        components: {

        }
    };
</script>
