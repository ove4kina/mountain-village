<template lang="pug">
    include ../../../../tools/mixins.pug
    div
        header-component(
            :color="'white'"
        )
        main-component(
            :gallery="content.galleries"
        )
        benefits-component(
            :benefits="content.benefitTypes[0].benefits"
        )
        objects-component
        consult-component(
            :background="'form-section--white'"
        )
        villas-cards-component(
            :villaTypes="content.villaTypes"
        )
        #pinContainer
            .shadow-background
            #wrapper(ref="wrapper")
                subscribe-component(
                    ref="subscribe"
                )
                infrastructure-component(
                    ref="infrastructure"
                    :infrastructures="content.infrastructures"
                )
            #sectionEcology
                title-component(
                    :textMobile="ecology.textMobile"
                    :textDesktop="ecology.textDesktop"
                    :fontSize="'big'"
                )
                ecology-component(
                    ref="sectionEcology"
                    :benefits="content.benefitTypes[1].benefits"
                )
                slider-information-cards-component(
                    ref="sectionAreas"
                    :content="areas"
                    :sections="content.ecology"
                    :title="ecology.title"
                    :description="ecology.description"
                    :modifier="'padding-big'"
                )
            #sectionInvestors
                title-component(
                    :textMobile="investors.textDesktop"
                    :textDesktop="investors.textDesktop"
                    :fontSize="'big'"
                )
                investors-component(
                    ref="sectionInvestors"
                    :benefits="content.benefitTypes[2].benefits"
                )
                locations-component(
                    ref="sectionLocations"
                    :title="'Как добраться?'"
                    :text="location.text"
                    :tabs="location.tabs"
                )
                footer-component
</template>

<script>
    import Main from '../../../sections/Main.vue';
    import Header from '../../../sections/Header.vue';
    import Benefits from '../../../sections/Benefits.vue';
    import Objects from '../../../sections/Objects.vue';
    import Consult from '../../../sections/Consult.vue';
    import VillasCards from '../../../sections/VillasCards.vue';
    import Subscribe from '../../../sections/Subscribe.vue';
    import Infrastructure from '../../../sections/Infrastructure.vue';
    import Ecology from '../../../sections/Ecology.vue';
    import Investors from '../../../sections/Investors.vue';
    import SliderInformationCards from '../../../sections/SliderInformationCards.vue';
    import Locations from '../../../sections/Locations.vue';
    import Footer from '../../../sections/Footer.vue';
    import Title from '../../../blanks/Title.vue';

    export default {
        props: ['content'],
        data() {
            return {
                magicScroll: {
                    controller: null,
                    scene: null,
                    init: false,
                },
                display: {
                  height: {
                      last: null
                  }
                },
                location: {
                    text: '12312321323',
                    tabs: [
                        {
                            tabName: 'От аэропорта',
                            locations: [
                                {
                                    title: 'Mountain Village II',
                                    //price: 'от $15 сутки',
                                    //text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                    position: {lat: 12.7843039, lng: 100.9425508},
                                },
                                {
                                    title: 'Aэропорт',
                                    //price: 'от $15 сутки',
                                    //text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                    position: {lat: 12.8390286, lng: 100.9252739},
                                },
                            ]
                        },
                        {
                            tabName: 'От вокзала',
                            locations: [
                                {
                                    title: 'Mountain Village II',
                                    //price: 'от $15 сутки',
                                    //text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                    position: {lat: 12.7843039, lng: 100.9425508},
                                },
                                {
                                    title: 'Вокзал',
                                    //price: 'от $15 сутки',
                                    //text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                    position: {lat: 13.001213, lng: 100.9174017},
                                },
                            ]
                        },
                        {
                            tabName: 'От Mountain Village I',
                            locations: [
                                {
                                    title: 'Mountain Village II',
                                    //price: 'от $15 сутки',
                                    //text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                    position: {lat: 12.7843039, lng: 100.9425508},
                                },
                                {
                                    title: 'Mountain Village I',
                                    //price: 'от $15 сутки',
                                    //text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                    position: {lat: 12.7817667, lng: 100.9316343},
                                },
                            ]
                        },

                    ],
                },
                ecology: {
                     textMobile: 'Эко-<br>логия',
                     textDesktop: 'Экология',
                     title: 'Живописные окрестности',
                     description: 'Комплекс вилл находится в тихом месте, куда не попадает основной поток туристов и за чистотой вокруг пристально следит местное население. В этом районе много храмов и природоохранных объектов. Вокруг коттеджного поселка густая растительность и парковые зоны.'
                 },
                areas: {
                    slider: [
                        {
                            tabTitle: 'Прямая доступность',
                            list: [
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/1/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/4.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/4.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        }
                                    ],
                                    title: 'Школы Тайланда',
                                    text: 'В прямой доступности 6 школ'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/2/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/4.jpg'
                                        }
                                    ],
                                    title: 'Зал йоги',
                                    text: 'Коврики, ремни, планки и другое'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/3/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/4.jpg'
                                        }
                                    ],
                                    title: 'Пляжи',
                                    text: 'В прямой более 5-ти пляжей'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/4/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/4.jpg'
                                        }
                                    ],
                                    title: 'Инфарструктура',
                                    text: 'В прямой доступности 6 школ'
                                }
                            ],
                            description: ''
                        },
                        {
                            tabTitle: 'На скутере',
                            list: [
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/2/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/4.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/4.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/3.jpg'
                                        }
                                    ],
                                    title: 'Школы Тайланда1',
                                    text: 'В прямой доступности 62 школ'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/2/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/4.jpg'
                                        }
                                    ],
                                    title: 'Зал йоги',
                                    text: 'Коврики, ремни, планки и другое'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/3/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/4.jpg'
                                        }
                                    ],
                                    title: 'Пляжи',
                                    text: 'В прямой более 5-ти пляжей'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/4/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/4.jpg'
                                        }
                                    ],
                                    title: 'Инфарструктура',
                                    text: 'В прямой доступности 6 школ'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/4/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/4.jpg'
                                        }
                                    ],
                                    title: 'Инфарструктура',
                                    text: 'В прямой доступности 6 школ'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/4/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/4.jpg'
                                        }
                                    ],
                                    title: 'Инфарструктура',
                                    text: 'В прямой доступности 6 школ'
                                }
                            ]
                        },
                        {
                            tabTitle: 'Достопримечательности острова',
                            list: [
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/1/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/4.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/4.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        }
                                    ],
                                    title: 'Школы Тайланда',
                                    text: 'В прямой доступности 6 школ'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/2/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/4.jpg'
                                        }
                                    ],
                                    title: 'Зал йоги',
                                    text: 'Коврики, ремни, планки и другое'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/3/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/4.jpg'
                                        }
                                    ],
                                    title: 'Пляжи',
                                    text: 'В прямой более 5-ти пляжей'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/4/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/4.jpg'
                                        }
                                    ],
                                    title: 'Инфарструктура',
                                    text: 'В прямой доступности 6 школ'
                                }
                            ]
                        },
                        {
                            tabTitle: 'Ближайшие поселения',
                            list: [
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/1/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/4.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/4.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/1/3.jpg'
                                        }
                                    ],
                                    title: 'Школы Тайланда',
                                    text: 'В прямой доступности 6 школ'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/2/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/2/4.jpg'
                                        }
                                    ],
                                    title: 'Зал йоги',
                                    text: 'Коврики, ремни, планки и другое'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/3/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/3/4.jpg'
                                        }
                                    ],
                                    title: 'Пляжи',
                                    text: 'В прямой более 5-ти пляжей'
                                },
                                {
                                    images: [
                                        {
                                            src: '/public/media/img/infrastructure/4/1.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/2.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/3.jpg'
                                        },
                                        {
                                            src: '/public/media/img/infrastructure/4/4.jpg'
                                        }
                                    ],
                                    title: 'Инфарструктура',
                                    text: 'В прямой доступности 6 школ'
                                }
                            ]
                        }
                    ],
                    buttonLink: '#'
                },
                investors: {
                    textMobile: 'Инве-<br>сторам',
                    textDesktop: 'Инвесторам',
                },
            };
        },
        mounted(){
            console.log(this.content)
            if(window.innerWidth >= 1200){
                setTimeout(()=>{
                    this.initScrollMagic();
                },100)
            } else {
                this.display.height.last = window.innerHeight;
                window.addEventListener('resize', this.onResize);
            }
        },
        methods: {
            onResize(){
                if(this.display.height.last < window.innerHeight && !this.magicScroll.init){
                    this.magicScroll.init = true;
                    setTimeout(()=>{
                        this.initScrollMagic();
                    },100)
                }
            },
            initScrollMagic(){
                let offset = null,
                    duration = '300%';

                if(this.$refs.wrapper.getBoundingClientRect().height > window.innerHeight){
                    offset = this.$refs.wrapper.getBoundingClientRect().height - window.innerHeight;
                } else {
                    offset= 0;
                }

                if(window.innerWidth < 1200){
                    duration = '600%';
                }

                this.magicScroll.controller = new window.ScrollMagic.Controller();
                let wipeAnimation = new TimelineMax()
                    .fromTo("#sectionEcology", 1, {y: '0'}, {y: "-100%", ease: Linear.easeNone})
                    .fromTo(".shadow-background", 0.5, {opacity: '0'}, {opacity: "0.8", ease: Linear.easeNone},{timeScale:0.5})
                    .to(".shadow-background", 0,{css:{opacity: "0",zIndex: 6}, ease: Linear.easeNone},"#sectionEcology")
                    .fromTo("#sectionInvestors", 1, {y: '0'}, {y: "-100%", ease: Linear.easeNone},"#sectionEcology")
                    .fromTo(".shadow-background", 0.3, {opacity: '0'}, {opacity: "0.8", ease: Linear.easeNone},"#sectionEcology",{timeScale:0.5})

                this.magicScroll.scene = new window.ScrollMagic.Scene({
                    triggerElement: "#pinContainer",
                    triggerHook: "0",
                    duration: duration,
                    offset: offset
                })
                    .setPin("#pinContainer")
                    .setTween(wipeAnimation)
                    .addTo(this.magicScroll.controller)

            },

        },
        components: {
            'main-component': Main,
            'header-component': Header,
            'benefits-component': Benefits,
            'objects-component': Objects,
            'consult-component': Consult,
            'villas-cards-component': VillasCards,
            'subscribe-component': Subscribe,
            'infrastructure-component': Infrastructure,
            'ecology-component': Ecology,
            'investors-component': Investors,
            'slider-information-cards-component': SliderInformationCards,
            'locations-component': Locations,
            'footer-component': Footer,
            'title-component': Title
        }
    };
</script>


<style lang="scss">

</style>