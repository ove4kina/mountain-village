<template lang="pug">
    include ../../tools/mixins.pug

    +b.SECTION.contact-form(
        ref="section"
        :class="{'send': form.send}"
    )
        +e.container.container
            +e.content
                +e.title.description
                    h3 Заинтересовало наше #[br] предложение?
                +e.text Обсуждаем индивидуальные условия приобретения недвижимости и предоставляем комфортные условия для переезда вашей семье. Персональный консультант с радостью ответит на любой ваш вопрос и проинформирует о всех тонкостях жизни в Таиланде.
                +e.person
                    +e.image
                        img(src="/public/media/img/contact-form/1.jpg")
                    span Персональный менеджер
                    p Nong
                +e.contacts
                    +e.phone
                        a(href="tel:66992010232") +66 99 201 0232
                        span Телефон доступен с 9:00 до 17:00 по Москве, Пн-Пт
                    +e.email
                        a(href="#") info@topmountainvillage.com
                        span Почта для заявок 24/7
                +e.person
                    +e.image
                        img(src="/public/media/img/contact-form/2.jpg")
                    span Персональный менеджер
                    p Lika
                +e.contacts
                    +e.phone
                        a(href="tel:66896010102") +66 89 601 0102
                        span Телефон доступен с 9:00 до 17:00 по Москве, Пн-Пт
                    +e.email
                        a(href="#") info@topmountainvillage.com
                        span Почта для заявок 24/7
            +e.wrapper
                +e.form
                    +e.body
                        img(src="/public/media/img/comfort/4.png")
                        p Заполните форму #[br] и мы свяжемся с вами
                        +e.INPUT-COMPONENT.input(
                            :type="'standart'"
                            :background="'gray'"
                            :border="'transparent'"
                            :color="'primary'"
                            :placeholder="'Имя'"
                            :value="input.name.value"
                            :error="input.name.error"
                            @input="onInput($event, 'name')"
                        )
                        +e.INPUT-COMPONENT.input(
                            :type="'standart'"
                            :background="'gray'"
                            :border="'transparent'"
                            :color="'primary'"
                            :placeholder="'E-mail'"
                            :value="input.email.value"
                            :error="input.email.error"
                            @input="onInput($event, 'email')"
                        )
                        +e.INPUT-COMPONENT.input(
                            :type="'standart'"
                            :background="'gray'"
                            :border="'transparent'"
                            :color="'primary'"
                            :placeholder="'Телефон'"
                            :value="input.phone.value"
                            :error="input.phone.error"
                            @input="onInput($event, 'phone')"
                        )
                        +e.BUTTON.button.button__.--green.--standart(
                            @click="send"
                        ) Отправить заявку
                        +e.prompt Нажимая кнопку «Отправить заявку», вы соглашаетесь с политикой обработки ОПД
                    +e.response
                        img(src="/public/media/img/contact-form/response.png")
                        p Мы приняли вашу заявку
                        span Свяжемся с вами в течении 24 часов
</template>

<script>

    import {removeFormSend} from "../../mixins/frontEnd/utility/removeFormSend";
    import Input from '../blanks/Input.vue'
    export default {
        mixins: [removeFormSend],
        data() {
            return {
                input:{
                    name: {
                        value: '',
                        error: false
                    },
                    email: {
                        value: '',
                        error: false
                    },
                    phone: {
                        value: '',
                        error: false
                    },
                },
            };
        },
        mounted(){

        },
        computed: {

        },
        methods: {
            send(){
                if(this.validate()){
                    this.form.send = true;
                }
            },
            validate(){
                if(this.input.name.value === ''){
                    this.input.name.error = true;
                }
                if(this.input.email.value === ''){
                    this.input.email.error = true;
                }
                if(this.input.phone.value === ''){
                    this.input.phone.error = true;
                }
                return !this.input.phone.error && !this.input.email.error && !this.input.phone.error;
            },
            onInput(value,name){
                this.input[name].value = value;
            },
        },
        components: {
            'input-component': Input
        }
    };
</script>
