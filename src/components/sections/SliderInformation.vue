<template lang="pug">
    include ../../tools/mixins.pug

    +b.SECTION.slider-information(:class="['slider-information--'+ modifier]")
        +e.content
            +e.container.container
                +e.text--top.description(
                    v-if="content.topDescription.title !== '' || content.topDescription.text !== ''"
                )
                    h3(
                        v-if="content.topDescription.title"
                    ) {{content.topDescription.title}}
                    p(
                        v-if="content.topDescription.text"
                    ) {{content.topDescription.text}}
                +e.toggles.toggles__(
                    ref="toggles"
                    :class="{'hide-lines': !showSlider}"
                )
                    +e.item(
                        v-on:click="changeTab(tabIndex)"
                        :class="{'active': activeTab === tabIndex}"
                        v-for="(tab,tabIndex) in content.slider"
                        ref="toggle"
                        :style="{'width': setToggleWidth(tabIndex)}"
                    )
                        p {{tab.tabTitle}}
                        span {{tab.images.length > 10 ? tab.images.length : '0' + tab.images.length}}
                        i
                            b(
                                :style="{'transform': `scaleX(${activeTab === tabIndex ? progress : 0})`}"
                            )
            +e.wrapper--hover-overlay(
                :class="{'show-slider': showSlider,'disabled': disableTabs}"
            )
                +e.cards.swiper-container(
                    v-swiper:carousel="swiper.carousel"
                )
                    .swiper-wrapper
                        +e.item.swiper-slide.slider-card__(
                            v-for="(src, srcIndex) in activeContent.images"
                        )
                            +e.top
                                +e.images
                                    +e.image--overlay
                                        img.swiper-lazy-loaded(:src="src")
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
                +e.params(
                    v-if="typeof content.params !== 'undefined'"
                )
                    +e.param(
                        v-for="param in content.params"
                        v-html="param"
                    )
                +e.ROUTER-LINK.button.button--standart.--border-grey(
                    v-if="content.buttonLink !== ''"
                    :to="content.buttonLink"
                ) Подробнее об окрестностях

</template>

<script>

    import {sliderInformationLogic} from "../../mixins/frontEnd/blanks/sliderInformationLogic";

    export default {
        mixins: [sliderInformationLogic],
        props: ['modifier','text','content'],
        data() {
            return {
            }
        },
        mounted(){

        },
        computed: {
            modifierClass: function () {
                if(typeof this.modifier !== 'undefined'){
                    return this.modifier;
                }
            }
        }
    };
</script>