<template lang="pug">
    include ../../tools/mixins

    +b.MAIN.main
        +e.slider
            +e.slide--active
                +e.background
                    img(:src="slide.background")
                +e.content
                    +e.container.container
                        +e.top
                            span $ 123,000
                            p Паттайя, Тайланд
                        +e.text
                            h2(v-html="slide.title")
                            p Аристократичный вид строения ассоциируется с классическим жилищем состоятельных успешных людей, для которых незаметная роскошь давно стала привычным атрибутом повседневной жизни.
                        +e.BUTTON.button--yellow.button__.--yellow.--standart {{ slide.button.yellow }}
                        +e.BUTTON.button--transparent.button__.--transparent.--border-white.--standart {{ slide.button.transparent }}
</template>

<script>
    import constants from '../../../content/constants.json';

    export default {
        data() {
            let language = this.$router.currentRoute.meta.language,
                obj = {
                    slide: {
                        background: '/public/media/img/main/mainbg.jpg',
                        text: 'Элитное жилье в Паттайе',
                        title: 'Виллы<br> люкс-класса для всей семьи в Тайланде',
                        button: {
                            yellow: 'Посмотреть объекты',
                            transparent: 'Получить консультацию'
                        }
                    },

                };
            return obj;
        },
    };
</script>
