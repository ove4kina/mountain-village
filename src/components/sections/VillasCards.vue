<template lang="pug">
    include ../../tools/mixins

    +b.SECTION.villas-cards(
        :class="{'villas-cards--gray': !insidePage}"
    )
        +e.container.container
            +e.title.title--white.--medium
                h2 Mountain Village II
            +e.text.description
                h3 Минимализм с нотками роскоши
                p  Мы стараемся не просто подчеркнуть все преимущества этого региона, но и дополнить их высокими стандартами обслуживания и качества недвижимости, характерными для более дорогих курортов.
            +e.toggles.toggles__(
                ref="toggles"
            )
                +e.item(
                    v-on:click="changeTab('Sale')"
                    :class="{'active': activeSliderName === 'Sale'}"
                    :style="{'width': togglesWidth.first}"
                    ref="firstToggle"
                )
                    p {{ villaTypes[0].contents[0].name }}
                    span {{ villaTypes[0].villas.length > 9 ? villaTypes[0].villas.length : '0' + villaTypes[0].villas.length }}
                    i
                        b(
                            :style="{'transform': `scaleX(${activeSliderName === 'Sale' ? progress.carouselSale : 0})`}"
                        )
                +e.item(
                    v-on:click="changeTab('Rent')"
                    :class="{'active': activeSliderName === 'Rent'}"
                    :style="{'width': togglesWidth.second}"
                    ref="secondToggle"
                )
                    p {{ villaTypes[1].contents[0].name }}
                    span  {{ villaTypes[1].villas.length > 9 ? villaTypes[1].villas.length : '0' + villaTypes[1].villas.length }}
                    i
                        b(
                            :style="{'transform': `scaleX(${activeSliderName === 'Rent' ? progress.carouselRent : 0})`}"
                        )
        +e.tabs(
            :class="{'disabled': disableTabs}"
        )
            +e.tab(
                v-swiper:carouselSale="swiper.carousel"
                :class="{'active': activeSliderName === 'Sale'}"
            )
                .swiper-wrapper
                    +e.item.villa-card__.swiper-slide(
                        v-for="(villa,index) in villaTypes[0].villas"
                        :key="index"
                    )
                        +e.photos.swiper-container(
                            v-on:mousemove="changeSlide(index,$event)"
                            ref="cardsSale"
                        )
                            .swiper-wrapper
                                +e.photo.swiper-slide(
                                    v-for="photo in villa.gallery"
                                )
                                    img.swiper-lazy(:data-src="photo.image")
                            .swiper-pagination
                        +e.description
                            +e.left
                                +e.name {{villa.contents[0].name}}
                                +e.tags
                                    +e.tag(
                                        v-for="tag in villa.contents[0].tag.split(',')"
                                    ) {{tag}}
                            +e.right
                                +e.prices
                                    +e.price--bold $ {{villa.price}}
                                    //+e.price--discount(
                                    //    v-if="villa.discount !== null"
                                    //) $ {{villa.discount}}
                                +e.A(href="#").button.button--small.--border-grey Подробнее
                            +e.discount(
                                v-if="villa.discount !== null"
                            ) Скидка {{villa.discount}}%
            +e.tab--absoluted(
                v-swiper:carouselRent="swiper.carousel"
                :class="{'active': activeSliderName === 'Rent'}"
            )
                .swiper-wrapper
                    +e.item.villa-card__.swiper-slide(
                        v-for="(villa,index) in villaTypes[1].villas"
                    )
                        +e.photos.swiper-container(
                            v-on:mousemove="changeSlide(index,$event)"
                            ref="cardsRent"
                        )
                            .swiper-wrapper
                                +e.photo.swiper-slide(
                                    v-for="photo in villa.gallery"
                                )
                                    img.swiper-lazy(:data-src="photo.image")
                            .swiper-pagination
                        +e.description
                            +e.left
                                +e.name {{villa.contents[0].name}}
                                +e.tags
                                    +e.tag(
                                        v-for="tag in villa.contents[0].tag.split(',')"
                                    ) {{tag}}
                            +e.right
                                +e.prices
                                    +e.price--bold $ {{villa.price}}
                                    //+e.price--discount(
                                    //    v-if="villa.discount !== null"
                                    //) $ {{villa.discount}}
                                +e.A(href="#").button.button--small.--border-grey Подробнее
                            +e.discount(
                                v-if="villa.discount !== null"
                            ) Скидка {{villa.discount}}%
        +e.container.container(
            v-if="!insidePage"
        )
            +e.A.button.button--standart.--border-grey Подробнее об окрестностях




</template>

<script>
    import Swiper from 'vue-awesome-swiper/node_modules/swiper/dist/js/swiper.js'

    export default {
        props: ['villaTypes','insidePage'],
        data() {
            return{
                activeSliderName: 'Sale',
                disableTabs: false,
                changeTimeout: null,
                togglesWidth: {
                    first: null,
                    second: null
                },
                progress: {
                    carouselSale: 0,
                    carouselRent: 0
                },
                swiper: {
                    carousel: {
                        spaceBetween: 20,
                        slidesPerView: 'auto',
                        slidesOffsetAfter: 800,
                        grabCursor: true,
                        breakpoints: {
                            1199: {
                                slidesOffsetAfter: 80,
                                spaceBetween: 8
                            },
                        },
                        on: {
                            init: () => {
                                setTimeout(()=>{
                                    this.progress.carouselSale = this.getSliderProgress(this[`carouselSale`].slides);
                                    this.progress.carouselRent = this.getSliderProgress(this[`carouselRent`].slides);
                                })
                            },
                            transitionEnd: () => {
                                this.progress[`carousel${this.activeSliderName}`] = this.getSliderProgress(this[`carousel${this.activeSliderName}`].slides)
                            },
                            progress: (progress)=>{
                                if(progress > 1.05){
                                    this.disableTabs = true;
                                    clearTimeout(this.changeTimeout)

                                    this.changeTimeout = setTimeout(()=>{
                                        if(this.activeSliderName === 'Sale') {
                                            this.changeTab('Rent')
                                        } else if(this.activeSliderName === 'Rent'){
                                            this.changeTab('Sale')
                                        }
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
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                            bulletClass: 'bullet',
                            bulletActiveClass: 'active'
                        },
                        lazy: {
                            loadPrevNext: true,
                        },

                    },
                    toggles: {
                        spaceBetween: 24,
                        slidesPerView: 'auto',
                        slidesOffsetAfter: 500,
                        breakpoints: {
                            1199: {
                                slidesOffsetAfter: 80,
                                spaceBetween: 16,
                            },
                        },
                    }
                },
                content: {
                    sale: [
                        {
                            photos: ['/public/images/test/villa1/1.jpg','/public/images/test/villa1/2.jpg','/public/images/test/villa1/3.jpg','/public/images/test/villa1/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '254 000',
                            priceDiscount: '354 000',
                            discount: '12'
                        },
                        {
                            photos: ['/public/images/test/villa2/1.jpg','/public/images/test/villa2/2.jpg','/public/images/test/villa2/3.jpg','/public/images/test/villa2/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '134 000',
                            priceDiscount: null,
                            discount: null
                        },
                        {
                            photos: ['/public/images/test/villa3/1.jpg','/public/images/test/villa3/2.jpg','/public/images/test/villa3/3.jpg','/public/images/test/villa3/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '411 000',
                            priceDiscount: null,
                            discount: null
                        },
                        {
                            photos: ['/public/images/test/villa4/1.jpg','/public/images/test/villa4/2.jpg','/public/images/test/villa4/3.jpg','/public/images/test/villa4/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '566 000',
                            priceDiscount: '120 000',
                            discount: '10'
                        },
                        {
                            photos: ['/public/images/test/villa4/1.jpg','/public/images/test/villa4/2.jpg','/public/images/test/villa4/3.jpg','/public/images/test/villa4/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '566 000',
                            priceDiscount: '120 000',
                            discount: '10'
                        },
                        {
                            photos: ['/public/images/test/villa4/1.jpg','/public/images/test/villa4/2.jpg','/public/images/test/villa4/3.jpg','/public/images/test/villa4/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '566 000',
                            priceDiscount: '120 000',
                            discount: '10'
                        },
                        {
                            photos: ['/public/images/test/villa4/1.jpg','/public/images/test/villa4/2.jpg','/public/images/test/villa4/3.jpg','/public/images/test/villa4/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '566 000',
                            priceDiscount: '120 000',
                            discount: '10'
                        }
                    ],
                    rent: [
                        {
                            photos: ['/public/images/test/villa1/1.jpg','/public/images/test/villa1/2.jpg','/public/images/test/villa1/3.jpg','/public/images/test/villa1/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '254 000',
                            priceDiscount: '354 000',
                            discount: '12'
                        },
                        {
                            photos: ['/public/images/test/villa2/1.jpg','/public/images/test/villa2/2.jpg','/public/images/test/villa2/3.jpg','/public/images/test/villa2/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '134 000',
                            priceDiscount: null,
                            discount: null
                        },
                        {
                            photos: ['/public/images/test/villa3/1.jpg','/public/images/test/villa3/2.jpg','/public/images/test/villa3/3.jpg','/public/images/test/villa3/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '411 000',
                            priceDiscount: null,
                            discount: null
                        },
                        {
                            photos: ['/public/images/test/villa4/1.jpg','/public/images/test/villa4/2.jpg','/public/images/test/villa4/3.jpg','/public/images/test/villa4/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '566 000',
                            priceDiscount: '120 000',
                            discount: '10'
                        },
                        {
                            photos: ['/public/images/test/villa4/1.jpg','/public/images/test/villa4/2.jpg','/public/images/test/villa4/3.jpg','/public/images/test/villa4/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '566 000',
                            priceDiscount: '120 000',
                            discount: '10'
                        },
                        {
                            photos: ['/public/images/test/villa4/1.jpg','/public/images/test/villa4/2.jpg','/public/images/test/villa4/3.jpg','/public/images/test/villa4/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '566 000',
                            priceDiscount: '120 000',
                            discount: '10'
                        },
                        {
                            photos: ['/public/images/test/villa4/1.jpg','/public/images/test/villa4/2.jpg','/public/images/test/villa4/3.jpg','/public/images/test/villa4/4.jpg'],
                            name: 'Вилла #1',
                            tags: ['Тип С', 'Бассейн', 'Зона барбекю', 'Солнечная терраса','2 Ванные комнаты'],
                            price: '566 000',
                            priceDiscount: '120 000',
                            discount: '10'
                        }
                    ]
                },
                cardsSwipers: {
                    sale: [],
                    rent: []
                },
            }
        },
        mounted(){
            setTimeout(()=>{
                this.init();
            })
        },
        methods: {
            init(){
                this.togglesWidth.first = `${this.$refs.firstToggle.getBoundingClientRect().width}px`;
                this.togglesWidth.second = `${window.innerWidth - this.$refs.secondToggle.getBoundingClientRect().left}px`;

                for(let i = 0; i < this.$refs.cardsSale.length; i++){
                    this.cardsSwipers.sale.push(new Swiper(this.$refs.cardsSale[i], this.swiper.card))
                }
                for(let i = 0; i < this.$refs.cardsRent.length; i++){
                    this.cardsSwipers.rent.push(new Swiper(this.$refs.cardsRent[i], this.swiper.card))
                }
            },
            changeSlide(index,e){
                if(window.innerWidth >= 1200){
                    let element = this.$refs[[`cards${this.activeSliderName}`]][index],
                        rect = element.getBoundingClientRect(),
                        mouseX = e.pageX - rect.left,
                        slideIndex = 0;

                    if(mouseX/rect.width > 0 && mouseX/rect.width < 0.25 ){
                        slideIndex = 0;
                    }
                    if(mouseX/rect.width >= 0.25 && mouseX/rect.width < 0.5 ){
                        slideIndex = 1;
                    }
                    if(mouseX/rect.width >= 0.5 && mouseX/rect.width < 0.75 ){
                        slideIndex = 2;
                    }
                    if(mouseX/rect.width >= 0.75){
                        slideIndex = 3;
                    }
                    this.cardsSwipers[this.activeSliderName.toLowerCase()][index].slideTo(slideIndex)
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
            changeTab(name){

                this.activeSliderName = name;

                switch (name) {
                    case 'Sale':
                        if(window.innerWidth < 1200){
                            this.togglesWidth.first = `68.75%`;
                        } else {
                            this.togglesWidth.first = `75%`;
                        }

                        this.togglesWidth.second = `${window.innerWidth - this.$refs.secondToggle.getBoundingClientRect().left}px`;


                        setTimeout(()=>{
                            this.carouselRent.slideTo(0,1);
                            setTimeout(()=>{
                                this.progress.carouselRent = this.getSliderProgress(this.carouselRent.slides);
                                this.disableTabs = false
                            },100)
                        },300)
                        break;
                    case 'Rent':





                        if(window.innerWidth < 1200){
                            this.togglesWidth.first = '8.75rem';
                            this.togglesWidth.second = `${window.innerWidth - this.$refs.firstToggle.getBoundingClientRect().left - 140 - 12}px`;
                        } else {
                            let rem = window.innerWidth/12;

                            if(window.innerWidth >=1800){
                                rem = 18;
                            }


                            this.togglesWidth.first = '20.75rem';
                            this.togglesWidth.second = `${window.innerWidth - this.$refs.firstToggle.getBoundingClientRect().left - 20.75*rem - 2*rem}px`;
                        }


                        setTimeout(()=>{
                            this.carouselSale.slideTo(0,1);
                            setTimeout(()=>{
                                this.progress.carouselSale = this.getSliderProgress(this.carouselSale.slides);
                                this.disableTabs = false
                            },100)
                        },300)
                        break;
                }

            }
        }
    };
</script>