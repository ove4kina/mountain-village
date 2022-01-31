<template lang="pug">
    include ../../tools/mixins.pug
    +b.SECTION.infrastructure
        +e.container.container
            +e.title.description
                h3 Инфраструктура
            +e.TABS-COMPONENT.tabs-wrapper(
                :content="formatTabs"
                :activeIndex="tabs.activeIndex"
                @setTabIndex="setTabIndex"
            )
            +e.slider.swiper-container(v-swiper:mySwiper="swiper.options")
                .swiper-wrapper
                    +e.ROUTER-LINK.slide.swiper-slide.slider-card__.--big(
                        v-for="(slide, slideIndex) in infrastructures"
                        :key="slideIndex"
                        :to="`/article/${slide.article.url}`"
                        :class="{'swiper-no-swiping': false}"
                    )
                        +e.top
                            +e.images.swiper-container(
                                ref="images"
                                v-on:mousemove="changeSlide(slideIndex,$event)"
                            )
                                +e.pagination.swiper-pagination
                                +e.count {{ imagesIndexes[slideIndex].index + 1 >= 10 ? imagesIndexes[slideIndex].index + 1 : '0' + (imagesIndexes[slideIndex].index + 1) }} / #[span {{ slide.article.galleries.length >= 10 ? slide.article.galleries.length : '0' + slide.article.galleries.length }}]
                                .swiper-wrapper
                                    +e.image.swiper-slide(
                                        v-for="(image,index) in slide.article.galleries"
                                    )
                                        img.swiper-lazy(:data-src="'/public/media/img/infrastructure/' + image.value")
                        +e.bottom
                            h4 {{ slide.article.contents[0].header }}
                            p {{ slide.article.contents[0].infrastructure }}
            +e.BUTTON.button.button__.--standart.--transparent.--border-grey Подробнее об окрестностях
</template>

<script>
    import Swiper from 'vue-awesome-swiper/node_modules/swiper/dist/js/swiper.js'
    import Tabs from '../blanks/Tabs.vue'

    import {tabsLogic} from "../../mixins/frontEnd/blanks/tabsLogic";

    export default {
        mixins: [tabsLogic],
        props: ['infrastructures'],
        data() {
            return {
                isMobile: true,
                tabs: {
                    activeIndex: 0,
                },
                imagesSwipers: [],
                imagesIndexes: [
                    {
                        index: 0
                    },
                    {
                        index: 0
                    },
                    {
                        index: 0
                    },
                    {
                        index: 0
                    }
                ],
                activeSliderIndex: 0,
                swiper:{
                    options:{
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                        effect: 'slide',
                        loop: false,
                        speed: 300,
                        breakpoints: {
                            1199:{
                                allowTouchMove: false,
                            }
                        },
                    },
                    imagesOptions:{
                        effect: 'fade',
                        loop: false,
                        breakpoints: {
                            1199:{
                                loop: true,
                            }
                        },
                        pagination: {
                            el: '.slider-card__pagination',
                            type: 'bullets',
                            clickable: true,
                            bulletClass: 'bullet',
                            bulletActiveClass: 'active'
                        },
                        lazy: {
                            loadPrevNext: true,
                        },
                        on:{
                            slideChange: () => {
                                if(window.innerWidth >= 1200){
                                    this.imagesIndexes[this.activeSliderIndex].index = this.imagesSwipers[this.activeSliderIndex].activeIndex;
                                } else {
                                    this.imagesIndexes[this.activeSliderIndex].index = this.imagesSwipers[this.activeSliderIndex].realIndex;
                                }
                            }
                        }
                    }
                }
            };
        },
        mounted(){
            this.checkWindowSize();
            this.initCardPhotosSwiper();
        },
        computed: {
            formatTabs: function () {
                let tabs = [];
                this.infrastructures.map((infrastructure)=>{
                    tabs.push(infrastructure.article.contents[0].header)
                })
                return tabs;
            }
        },
        methods: {
            changeSlide(index,e){
                if(window.innerWidth >= 1200){
                    let element = this.$refs.images[index],
                        rect = element.getBoundingClientRect(),
                        mouseX = e.pageX - rect.left,
                        slideIndex = 0,
                        slides = this.imagesSwipers[index].slides,
                        breakpoints = [0];

                    for (let i = 1; i < slides.length; i++) {
                        let newBreakPoint = breakpoints[i-1] + 1/slides.length;
                        breakpoints.push(newBreakPoint);
                    }


                    for (let i = 0; i < breakpoints.length; i++) {
                        if(i === breakpoints.length - 1 && mouseX/rect.width >= breakpoints[i]){
                            slideIndex = i;
                            break;
                        }
                        if(mouseX/rect.width > breakpoints[i] && mouseX/rect.width <  breakpoints[i + 1] ){
                            slideIndex = i;
                        }

                    }
                    this.activeSliderIndex = index;
                    this.imagesSwipers[index].slideTo(slideIndex)
                }
            },
            checkWindowSize(){
                if(window.innerWidth >= 1200){
                    this.isMobile = false;
                } else {
                    this.isMobile = true;
                }
            },
            setTabIndex(index){
                this.tabs.activeIndex = index;
                this.mySwiper.slideTo(index);
            },
            initCardPhotosSwiper(){
                for(let i = 0; i < this.$refs.images.length; i++){
                    this.imagesSwipers.push(new Swiper(this.$refs.images[i], this.swiper.imagesOptions));
                    this.imagesIndexes.push({index: 0});
                }
            },
        },
        components: {
            'tabs-component': Tabs
        }
    };
</script>
