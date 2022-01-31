<template lang="pug">
    include ../../../../tools/mixins.pug
    div
         header-component(
             :color="'white'"
         )
         main-static-component
         #pinContainer
             .shadow-background
             #wrapper(ref="wrapper")
                 comfort-component(
                    :content="content.villa.contents[0].content"
                 )
                 #sectionInterier
                     title-component(
                         :textMobile="interior.textMobile"
                         :textDesktop="interior.textDesktop"
                         :fontSize="'small'"
                     )
                     slider-information-component(
                         ref="interier"
                         :content="contentX.interior"
                         :text="interior.text"
                     )
                     image-quote-component
                     consult-component(
                         :backgoundColor="'form-section--grey'"
                     )
                     slider-information-component(
                         ref="infrastructure"
                         :modifier="'padding-big'"
                         :content="contentX.exterior"
                     )
                 #sectionInfrastructure
                     title-component(
                         :textMobile="contentX.infrastructure.textMobile"
                         :textDesktop="contentX.infrastructure.textDesktop"
                         :fontSize="'small'"
                     )
                     slider-information-cards-component(
                         ref="sectionAreas"
                         :content="areas"
                         :sections="content.infrastructureSections"
                         :title="ecology.title"
                         :description="ecology.description"
                         :modifier="'padding-big'"
                     )
                     locations-component(
                         ref="sectionLocations"
                         :title="contentX.location.title"
                         :text="contentX.location.text"
                         :tabs="contentX.location.tabs"
                         :modifier="'padding-top'"
                     )
                     contact-form-component
                     villas-similar-cards-component(
                         :villaTypes="content.villaTypes"
                     )
                     footer-component
</template>

<script>
    import Header from '../../../sections/Header.vue';
    import VillaMain from '../../../sections/VillaMain.vue';
    import Main from '../../../sections/Main.vue';
    import MainStatic from '../../../sections/MainStatic.vue';
    import Comfort from '../../../sections/Comfort.vue';
    import Consult from '../../../sections/Consult.vue';
    import ImageQuote from '../../../sections/ImageQuote.vue';
    import SliderInformationCards from '../../../sections/SliderInformationCards.vue';
    import SliderInformation from '../../../sections/SliderInformation.vue';
    import Locations from '../../../sections/Locations.vue';
    import VillasSimilarCards from '../../../sections/VillasSimilarCards.vue';
    import Footer from '../../../sections/Footer.vue';
    import ContactForm from '../../../sections/ContactForm.vue';
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
                interior: {
                    textMobile: 'Интерьер<br>и экстеръер',
                    textDesktop: 'Интерьер и экстеръер',
                    text: 'В интерьере виллы преобладают белые цвета, в которые вплетаются древесные мотивы и разные яркие акценты в виде аксессуаров. Кухня зонирована с помощью подиума, а напольное покрытие выполнено из той же древесины, что использована на улице.'
                },
                contentX:{
                     interior: {
                         textMobile: 'Интерьер<br>и экстеръер',
                         textDesktop: 'Интерьер и экстеръер',
                         slider: [
                             {
                                 tabTitle: 'Кухня',
                                 images: [
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg'
                                 ],
                                 description: ''
                             },
                             {
                                 tabTitle: 'Ванная',
                                 images: [
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg'
                                 ],
                                 description: ''
                             },
                             {
                                 tabTitle: 'Спальня',
                                 images: [
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg'
                                 ],
                                 description: ''
                             },
                             {
                                 tabTitle: 'Туалет',
                                 images: [
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg'
                                 ],
                                 description: ''
                             }
                         ],
                         topDescription: {
                             title: '',
                             text: 'В интерьере виллы преобладают белые цвета, в которые вплетаются древесные мотивы и разные яркие акценты в виде аксессуаров. Кухня зонирована с помощью подиума, а напольное покрытие выполнено из той же древесины, что использована на улице.'
                         },
                         params: [
                             '<h4>420 м<span>2</span></h4><p>Жилая площадь</p>',
                             '<h4>5</h4><p>Жилых комнат</p>',
                             '<h4>2</h4><p>Спальни на 2 пары</p>',
                             '<h4>56 м<span>2</span></h4><p>Бассейн во дворе</p>',
                             '<h4>4</h4><p>Ванные комнаты</p>'
                         ],
                         buttonLink: ''
                     },
                     location: {
                         title: 'Расположение на карте',
                         text: 'Комплекс вилл находится в тихом месте, куда не попадает основной поток туристов и за чистотой вокруг пристально следит местное население. В этом районе много храмов и природоохранных объектов. Вокруг коттеджного поселка густая растительность и парковые зоны.',
                         tabs: [
                             {
                                 tabName: 'Магазины',
                                 locations: [
                                     {
                                         title: 'Топовый магазин1',
                                         price: 'от $15 сутки',
                                         text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                         position: {lat: 12.805, lng: 100.95658},
                                     },
                                     {
                                         title: 'Топовый магазин2',
                                         price: 'от $15 сутки',
                                         text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                         position: {lat: 12.804, lng: 100.92558},
                                     },
                                     {
                                         title: 'Топовый магазин3',
                                         price: 'от $15 сутки',
                                         text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                         position: {lat: 12.794, lng: 100.92458},
                                     },
                                 ]
                             },
                             {
                                 tabName: 'Достопримечательности',
                                 locations: [
                                     {
                                         title: 'Топовый магазин312321',
                                         price: 'от $15 сутки',
                                         text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                         position: {lat: 12.8, lng: 100.95158},
                                     },
                                     {
                                         title: 'Топовый магазин4444',
                                         price: 'от $15 сутки',
                                         text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                         position: {lat: 12.8, lng: 100.92258},
                                     },
                                     {
                                         title: 'Топовый магазин3',
                                         price: 'от $15 сутки',
                                         text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                         position: {lat: 12.8, lng: 100.92358},
                                     },
                                 ]
                             },
                             {
                                 tabName: 'Academy Sport Camp',
                                 locations: [
                                     {
                                         title: 'Топовый магазин15',
                                         price: 'от $15 сутки',
                                         text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                         position: {lat: 12.8, lng: 100.95758},
                                     },
                                     {
                                         title: 'Топовый магазин123215',
                                         price: 'от $15 сутки',
                                         text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                         position: {lat: 12.8, lng: 100.92858},
                                     },
                                     {
                                         title: 'Топовый магазин3312',
                                         price: 'от $15 сутки',
                                         text: 'Находится на Северной улице (Pattaya Nua) сразу после фитнес-центра Fairtex.',
                                         position: {lat: 12.8, lng: 100.92958},
                                     },
                                 ]
                             },

                         ],
                     },
                     exterior: {
                         slider: [
                             {
                                 tabTitle: 'Бассейн',
                                 images: [
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg'
                                 ],
                                 description: '<p>Эта кухня удивительно гармонично соединяет изящество и простоту, создает романтический настрой и «легкость», но при этом «традиционно функциональна». Чистые линии, правильные формы, пастельные тона позволят вам ощутить себя на загородной вилле в уединенном уголке Франции с присущей ей неторопливостью и размеренностью.</p>'
                             },
                             {
                                 tabTitle: 'Джакузи',
                                 images: [
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg'
                                 ],
                                 description: '<p>Эта кухня удивительно гармонично соединяет изящество и простоту, создает романтический настрой и «легкость», но при этом «традиционно функциональна».</p>'
                             },
                             {
                                 tabTitle: 'Зона барбекю',
                                 images: [
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg'
                                 ],
                                 description: '<p>Эта кухня удивительно гармонично соединяет изящество и простоту, создает романтический настрой и «легкость».</p>'
                             },
                             {
                                 tabTitle: 'Гараж',
                                 images: [
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/1.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg',
                                     '/public/media/img/infrastructure/2/2.jpg'
                                 ],
                                 description: '<p>Эта кухня удивительно гармонично соединяет изящество и простоту, создает романтический настрой и «легкость».123 213 12 12312dsad asdas</p>'
                             }
                         ],
                         topDescription: {
                             title: 'Экстерьер и внутренний двор',
                         },
                         buttonLink: ''
                     },
                     infrastructure: {
                         textMobile: 'Инфра-<br>структура',
                         textDesktop: 'Инфраструктура',
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
                                 description: '<ul><li><h5>Магазины</h5><p>Недалеко от комплекса вилл находится рынок на воде, а на скутере можно доехать за 10 минут до ближайшего торгового центра</p></li><li><h5>Медицина</h5><p>Недалеко от комплекса вилл находится рынок на воде, а на скутере можно доехать за 10 минут до ближайшего торгового центра</p></li><li><h5>Досуг</h5><p>В паре километров от комплекса MV 2 находится один из крупнейших аквапарков, а также два пляжа и самый центр Паттайи</p></li></ul>'
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
                                 ],
                                 description: '<ul><li><h5>Магазины1</h5><p>Недалеко от комплекса вилл находится рынок на воде, а на скутере можно доехать за 10 минут до ближайшего торгового центра</p></li><li><h5>Медицина</h5><p>Недалеко от комплекса вилл находится рынок на воде, а на скутере можно доехать за 10 минут до ближайшего торгового центра</p></li><li><h5>Досуг</h5><p>В паре километров от комплекса MV 2 находится один из крупнейших аквапарков, а также два пляжа и самый центр Паттайи</p></li></ul>'
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
                                 ],
                                 description: '<ul><li><h5>Магазины2</h5><p>Недалеко от комплекса вилл находится рынок на воде, а на скутере можно доехать за 10 минут до ближайшего торгового центра</p></li><li><h5>Медицина</h5><p>Недалеко от комплекса вилл находится рынок на воде, а на скутере можно доехать за 10 минут до ближайшего торгового центра</p></li><li><h5>Досуг</h5><p>В паре километров от комплекса MV 2 находится один из крупнейших аквапарков, а также два пляжа и самый центр Паттайи</p></li></ul>'
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
                                 ],
                                 description: '<ul><li><h5>Магазины3</h5><p>Недалеко от комплекса вилл находится рынок на воде, а на скутере можно доехать за 10 минут до ближайшего торгового центра</p></li><li><h5>Медицина</h5><p>Недалеко от комплекса вилл находится рынок на воде, а на скутере можно доехать за 10 минут до ближайшего торгового центра</p></li><li><h5>Досуг</h5><p>В паре километров от комплекса MV 2 находится один из крупнейших аквапарков, а также два пляжа и самый центр Паттайи</p></li></ul>'
                             }
                         ],
                         topDescription: {
                             title: '123123',
                             text: '32234234'
                         },
                         buttonLink: ''
                     }
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
                    duration = '800%';

                if(this.$refs.wrapper.getBoundingClientRect().height > window.innerHeight){
                    offset = this.$refs.wrapper.getBoundingClientRect().height - window.innerHeight;
                } else {
                    offset= 0;
                }

                if(window.innerWidth < 1200){
                    duration = '800%';
                }

                this.magicScroll.controller = new window.ScrollMagic.Controller();
                let wipeAnimation = new TimelineMax()
                    .fromTo("#sectionInterier", 1, {y: '0'}, {y: "-100%", ease: Linear.easeNone})
                    .fromTo(".shadow-background", 0.2, {opacity: '0'}, {opacity: "0.8", ease: Linear.easeNone},{timeScale: 0.5})
                    .to(".shadow-background", 0,{css:{opacity: "0",zIndex: 6}, ease: Linear.easeNone},"#sectionInterier")
                    .fromTo("#sectionInfrastructure", 1, {y: '0'}, {y: "-100%", ease: Linear.easeNone},"#sectionInterier")
                    .fromTo(".shadow-background", 0.2, {opacity: '0'}, {opacity: "0.8", ease: Linear.easeNone},"#sectionInterier",{timeScale:0.5})

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
            'header-component': Header,
            'villa-main-component': VillaMain,
            'main-component': Main,
            'main-static-component': MainStatic,
            'comfort-component': Comfort,
            'consult-component': Consult,
            'image-quote-component': ImageQuote,
            'slider-information-cards-component': SliderInformationCards,
            'slider-information-component': SliderInformation,
            'locations-component': Locations,
            'villas-similar-cards-component': VillasSimilarCards,
            'footer-component': Footer,
            'contact-form-component': ContactForm,
            'title-component': Title
        }
    };
</script>