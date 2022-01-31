<template lang="pug">
    include ../../tools/mixins.pug
    +b.SECTION.form-section__(
        ref="section"
        :class="[backgoundColor,{'send': form.send}]"
    )
        +e.container.container
            +e.body
                +e.text--black Необходима консультация менеджера?
                +e.form.form__
                    +e.INPUT-COMPONENT.input(
                        :type="'standart'"
                        :background="'gray'"
                        :border="'transparent'"
                        :color="'primary'"
                        :placeholder="'Телефон или эл. почта'"
                        :value="input.value"
                        :error="input.error"
                        @input="onInput"
                    )
                    +e.BUTTON.button.button__.--green.--standart(
                        v-on:click="send"
                    ) Получить консультацию
                    +e.text Нажимая кнопку «Получить консультацию», вы соглашаетесь с политикой обработки ОПД
            +e.response
                p Ваша заявка отправлена!
                span Мы свяжемся с вами в течении 24 часов
</template>

<script>


    import {removeFormSend} from "../../mixins/frontEnd/utility/removeFormSend";
    import Input from '../blanks/Input.vue'
    export default {
        mixins: [removeFormSend],
        props: ['backgoundColor'],
        data() {
            return {
                input:{
                    value: '',
                    error: false
                }
            };
        },
        mounted(){

        },
        computed: {

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
        components: {
            'input-component': Input
        }
    };
</script>
