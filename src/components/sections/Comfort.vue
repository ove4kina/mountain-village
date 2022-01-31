<template lang="pug">
    include ../../tools/mixins
    +b.SECTION.comfort
        +e.container.container
            +e.BUTTON.button.button__.--standart.--transparent.--border-grey.--color-grey Получить консультацию
            +e.wrapper.text--villa(
                v-html="content"
            )
                <!--            +e.wrapper-->
                <!--                i Выбор подходящего шезлонга весьма ответственная задача. При нынешнем изобилии формфакторов и конструкций достаточно сложно подобрать идеально подходящий вашей фигуре и виду отдыха вариант. За помощью мы обратились к нашему мастеру пляжных дел, господину Чонгуку.-->
                <!--                +e.title.description-->
                <!--                    h3 Наслаждайтесь комфортом-->
                <!--                p На вилле присутствуют все удобства, которые помогут вам забыть о городской суете и рабочем ритме: наслаждайтесь отдыхом в собственном бассейне, загорайте на открытой террасе или проводите время в тишине и комфортной обстановке внутри. На площадке 2 места парковки, вилла оборудована системой кондиционирования и спутниковым ТВ. Внутри дома две ванные комнаты и джакузи.-->
                <!--            +e.benefits-->
                <!--                +e.top-->
                <!--                    +e.benefit-->
                <!--                        img(src="/public/media/img/comfort/1.png")-->
                <!--                        p 2 места парковки-->
                <!--                    +e.benefit-->
                <!--                        img(src="/public/media/img/comfort/2.png")-->
                <!--                        p Открытая терраса-->
                <!--                    +e.benefit-->
                <!--                        img(src="/public/media/img/comfort/3.png")-->
                <!--                        p Частный сад-->
                <!--                    +e.benefit-->
                <!--                        img(src="/public/media/img/comfort/4.png")-->
                <!--                        p Зона барбекю-->
                <!--                +e.bottom-->
                <!--                    +e.benefit-->
                <!--                        img(src="/public/media/img/comfort/5.png")-->
                <!--                        p Климат-контроль-->
                <!--                    +e.benefit-->
                <!--                        img(src="/public/media/img/comfort/6.png")-->
                <!--                        p Джакузи-->
                <!--                    +e.benefit-->
                <!--                        img(src="/public/media/img/comfort/7.png")-->
                <!--                        p Спутниковое ТВ-->
                <!--                    +e.benefit-->
                <!--                        img(src="/public/media/img/comfort/8.png")-->
                <!--                        p Частный бассейн-->
                <!--            +e.wrapper-->
                <!--                p По вашему желанию можно обсудить дополнительные улучшения или изменения на вилле, при условии заключения договора о покупке виллы.-->

</template>

<script>

    export default {
        props:['content'],
        data() {
            return{

            }
        },
        mounted(){

        },
        methods: {

        }
    };
</script>