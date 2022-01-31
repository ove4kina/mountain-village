<template lang="pug">
    include ../../tools/mixins

    +b.FOOTER.footer(
        ref="section"
    )
        +e.top
            +e.container.container
                +e.NAV.section
                    +e.nav-wrapper
                        +e.A(href="#").item--left О Mountain Village II
                        +e.A(href="#").item Виллы
                        +e.A(href="#").item--left Статьи
                        +e.A(href="#").item Контакты
                +e.section
                    +e.item--left.--yellow Написать нам
                    +e.A(href="#").item--absolute +7 999 231 20 20
                +e.section
                    +e.A(href="#").item--left.--border-left.--gray Facebook
                    +e.A(href="#").item.--gray Instagram
        +e.bottom
            +e.container.container
                +e.wrapper
                    p Свяжитесь с нами
                    +e.A(href="#").email hello@mountainvillage.com
                    +e.A(href="#").phone +7 (928) 212-35-40
                    +e.address Mountain Village II. 16/13 Moo 6, soi Rai Aoi, Najomtien, Sattahip, Chonburi, 20250, Thailand
                    +e.form
                        p Узнавайте о новостях и акциях первыми
                        +e.form-wrapper.form__(
                            :class="{'send': form.send}"
                        )
                            +e.body
                                +e.INPUT-COMPONENT.input(
                                    :type="'standart'"
                                    :background="'transparent'"
                                    :border="'gray'"
                                    :color="'gray'"
                                    :placeholder="'Электронная почта'"
                                    :value="input.value"
                                    :error="input.error"
                                    @input="onInput"
                                )
                                +e.BUTTON.button.button__.--green.--standart(
                                    @click="send"
                                ) Подписаться
                                +e.text Нажимая кнопку «Подписаться», вы соглашаетесь с политикой обработки ОПД
                            +e.response Вы успешно подписались на новостную рассылку!
                    +e.politics
                        img(src="/public/media/img/footer/logo.svg")
                        span 2019 © Mountain village
                        a(href="#") Политика ОПД
</template>

<script>

    import {removeFormSend} from "../../mixins/frontEnd/utility/removeFormSend";
    import Input from '../blanks/Input.vue'
    export default {
        mixins: [removeFormSend],
        data(){
            return{
                input:{
                    value: '',
                    error: false
                }
            }
        },
        methods: {
            onInput(value){
                this.input.value = value;
            },
            send(){
                if(this.input.value.length === 0){
                    this.input.error = true;
                } else {
                    this.form.send = true;
                }
            },
        },
        components:{
            'input-component': Input
        }
    }
</script>
