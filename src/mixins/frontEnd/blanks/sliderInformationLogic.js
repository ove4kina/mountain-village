

import {getStyle} from "/mixins/frontEnd/utility/getStyle";

export const sliderInformationLogic = {
    mixins: [getStyle],
    props: ['content'],
    data(){
        return {
            activeTab: 0,
            disableTabs: false,
            showSlider: true,
            changeTimeout: null,
            progress: 0,
            swiper: {
                carousel: {
                    spaceBetween: 20,
                    slidesPerView: 'auto',
                    slidesOffsetAfter: 500,
                    grabCursor: true,
                    init: false,
                    breakpoints: {
                        1199: {
                            slidesPerView: 1,
                            slidesOffsetAfter: 0,
                            spaceBetween: 8
                        },
                    },
                    on: {
                        init: () => {
                            this.$nextTick(()=>{
                                this.progress = this.getSliderProgress(this.carousel.slides);
                            })
                        },
                        transitionEnd: () => {
                            this.$nextTick(()=>{
                                this.progress = this.getSliderProgress(this.carousel.slides);
                            })
                        },
                        progress: (progress)=>{


                            if(!this.showSlider){
                                return
                            }

                            let newIndexTab = this.activeTab;

                            if(progress > 1.05){
                                clearTimeout(this.changeTimeout);
                                this.disableTabs = true;





                                this.changeTimeout = setTimeout(()=>{

                                    if(this.activeTab < this.content.slider.length - 1){
                                        newIndexTab++;
                                    } else {
                                        newIndexTab = 0;
                                    }
                                    this.changeTab(newIndexTab)
                                },300)
                            } else if(progress < -0.05){
                                clearTimeout(this.changeTimeout);
                                this.disableTabs = true;



                                this.changeTimeout = setTimeout(()=>{
                                    if(this.activeTab > 0){
                                        newIndexTab--;
                                    } else {
                                        newIndexTab = this.content.slider.length - 1;
                                    }
                                    this.changeTab(newIndexTab);

                                },300)
                            }



                        }
                    }
                },
                card: {
                    effect: 'fade',
                    loop: false,
                    breakpoints: {
                        1199: {
                            loop: true,
                        },
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
                                this.imagesIndexes[this.activeSliderIndex].index = this.cardsSwipers[this.activeSliderIndex].activeIndex;
                            } else {
                                this.imagesIndexes[this.activeSliderIndex].index = this.cardsSwipers[this.activeSliderIndex].realIndex;
                            }
                        }
                    }
                },
            },
            activeSliderIndex: 0,
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
            cardsSwipers: [],
            activeContent: {
                list: []
            },

            togglesWidth: {
                active: null,
                small: null,
                spaceBetween: null
            },
            descriptions: {
                height: null
            }
        }
    },
    methods: {
        init(){
            this.carousel.init();
            if(typeof this.createSwiperInsideCards !== 'undefined'){
                this.createSwiperInsideCards();
            }
            this.togglesWidth.active = `${this.$refs.toggle[0].getBoundingClientRect().width}px`;
            this.togglesWidth.small = `${window.innerWidth*0.15}px`;
            this.togglesWidth.spaceBetween = this.getStyle(this.$refs.toggle[1],'margin-left');


            if(typeof this.$refs.description !== 'undefined'){
                this.descriptions.height = `${this.$refs.description[0].getBoundingClientRect().height}px`;
            }
        },
        getSliderProgress(slides){
            let progress = 0;

            for (let i = 0; i < slides.length; i++) {
                let rect = slides[i].getBoundingClientRect();

                if(rect.left + rect.width < window.innerWidth){
                    progress += 1;
                } else if(rect.left < window.innerWidth) {
                    progress += (window.innerWidth - rect.left)/rect.width
                } else {
                    progress += 0;
                }
            }
            return progress/slides.length;
        },
        changeTab(index){
            this.activeTab = index;
            this.showSlider = false;

            if(typeof this.$refs.description !== 'undefined'){
                this.descriptions.height = `${this.$refs.description[index].getBoundingClientRect().height}px`;
            }

            setTimeout(()=>{
                if(typeof this.destroySwiperInsideCards !== 'undefined'){
                    this.destroySwiperInsideCards();
                }
                this.activeContent = this.content.slider[index];
                this.carousel.slideTo(0,1);

                this.$nextTick(()=>{
                    this.progress = this.getSliderProgress(this.carousel.slides)
                })

                setTimeout(()=>{
                    if(typeof this.createSwiperInsideCards !== 'undefined'){
                        this.createSwiperInsideCards();
                    }
                    this.showSlider = true;
                    this.disableTabs = false
                },100)
            },301)
        },
        setToggleWidth(index){
            if(typeof window !== 'undefined' && typeof this.$refs.toggles !== 'undefined'){
                let newWidth = null;

                if(index === this.activeTab){
                    if(this.activeTab === 0){
                        newWidth = this.togglesWidth.active;
                    } else if(this.activeTab === this.content.slider.length - 1){
                        newWidth = `${window.innerWidth - this.$refs.toggles.getBoundingClientRect().left - parseInt(this.togglesWidth.spaceBetween,10)*(this.content.slider.length - 1) - parseInt(this.togglesWidth.small,10) * (this.content.slider.length - 1)}px`
                    } else {
                        newWidth = `${parseInt(this.togglesWidth.small,10) * 2.5}px`;
                    }
                } else if(index === this.activeTab + 1){
                    if(this.activeTab === 0){
                        newWidth = `${window.innerWidth - this.$refs.toggles.getBoundingClientRect().left - parseInt(this.togglesWidth.spaceBetween,10)*index - parseInt(this.togglesWidth.active,10)}px`;
                    } else {
                        newWidth = `${window.innerWidth - this.$refs.toggles.getBoundingClientRect().left - parseInt(this.togglesWidth.spaceBetween,10)*index - parseInt(this.togglesWidth.small,10) * 3.5}px`;
                    }
                }  else {
                    newWidth = this.togglesWidth.small;
                }

                return newWidth;
            }


        },
    },
    created(){
        this.activeContent = this.content.slider[0];
    },
    mounted(){
        this.$nextTick(this.init)
    },
}