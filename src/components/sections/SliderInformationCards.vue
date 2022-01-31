<template lang="pug">
    include ../../tools/mixins
    +b.SECTION.slider-information(:class="['slider-information--'+ modifier]")
        +e.container.container
            +e.text--top.description(v-if="title !== '' || description !== ''")
                h3(
                    v-if="title"
                ) {{ title }}
                p(
                    v-if="description"
                ) {{ description}}
            +e.toggles.toggles__(
                ref="toggles"
                :class="{'hide-lines': !showSlider}"
            )
                +e.item(
                    v-on:click="changeTab(tabIndex)"
                    :class="{'active': activeTab === tabIndex}"
                    v-for="(tab,tabIndex) in sections"
                    ref="toggle"
                    :style="{'width': setToggleWidth(tabIndex)}"
                )
                    p {{tab.contents[0].name}}
                    span {{tab.articles.length > 10 ? tab.articles.length : '0' + tab.articles.length}}
                    i
                        b(
                            :style="{'transform': `scaleX(${activeTab === tabIndex ? progress : 0})`}"
                        )
        +e.wrapper(
            :class="{'show-slider': showSlider,'disabled': disableTabs}"
        )
            +e.cards.swiper-container(
                v-swiper:carousel="swiper.carousel"
            )
                .swiper-wrapper
                    +e.item.swiper-slide.slider-card__(
                        v-for="(card, slideIndex) in sections[activeTab].articles"
                    )
                        +e.top
                            +e.images.swiper-container(
                                ref="cardImages"
                                v-on:mousemove="changeSlide(slideIndex,$event)"
                            )
                                +e.count {{imagesIndexes[slideIndex].index + 1 >= 10 ? imagesIndexes[slideIndex].index + 1 : '0' + (imagesIndexes[slideIndex].index + 1)}} / #[span {{ card.article.galleries.length >= 10 ? card.article.galleries.length : '0' + card.article.galleries.length }}]
                                +e.pagination.swiper-pagination
                                .swiper-wrapper
                                    +e.image.swiper-slide(
                                        v-for="(image,index) in card.article.galleries"
                                    )
                                        img.swiper-lazy(
                                            :data-src="image.value"
                                            v-img="{src: image.value, group: `${activeTab}${slideIndex}`}"
                                        )
                        +e.bottom
                            h4 {{ card.article.contents[0].header }}
                            p {{ card.article.contents[0].infrastructure }}
        +e.container.container
            +e.descriptions(
                v-if="content.slider[0].description !== ''"
                :style="{height: descriptions.height}"
            )
                +e.description(
                    v-for="(description,descriptionIndex) in content.slider"
                    v-html="description.description"
                    ref="description"
                    :class="{'active': descriptionIndex === activeTab}"
                )
            +e.ROUTER-LINK.button.button--standart.--border-grey(
                v-if="content.buttonLink !== ''"
                :to="content.buttonLink"
            ) Подробнее об окрестностях

</template>

<script>
    import {sliderInformationLogic} from "../../mixins/frontEnd/blanks/sliderInformationLogic";
    import Swiper from 'vue-awesome-swiper/node_modules/swiper/dist/js/swiper.js'
    export default {
        mixins: [sliderInformationLogic],
        props: ['title','description','modifier', 'sections'],
        data() {
            return{
            }
        },
        computed: {
            modifierClass: function () {
                if(typeof this.modifier !== 'undefined'){
                    return this.modifier;
                }
            }
        },
        methods: {
            createSwiperInsideCards(){
                this.cardsSwipers = [];
                this.imagesIndexes = [{index: 0},{index: 0},{index: 0},{index: 0}];
                for(let i = 0; i < this.$refs.cardImages.length; i++){
                    this.cardsSwipers.push(new Swiper(this.$refs.cardImages[i], this.swiper.card))
                    this.imagesIndexes.push({index: 0});
                }
            },
            destroySwiperInsideCards(){
                this.cardsSwipers.map((swiper)=>{
                    swiper.destroy(true,true);
                })
                this.cardsSwipers = [];
            },
            changeSlide(index,e){
                if(window.innerWidth >= 1200){
                    let element = this.$refs.cardImages[index],
                        rect = element.getBoundingClientRect(),
                        mouseX = e.pageX - rect.left,
                        slideIndex = 0,
                        slides = this.cardsSwipers[index].slides,
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
                    this.cardsSwipers[index].slideTo(slideIndex)
                }
            },
        }
    };
</script>