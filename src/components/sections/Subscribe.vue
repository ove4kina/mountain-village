<template lang="pug">
    include ../../tools/mixins
    +b.SECTION.form-section__.--black(
        ref="section"
        :class="{'send': form.send}"
    )
        +e.container.container
            +e.body
                +e.text--white Хотите первым узнать о новостях и скидках?
                +e.form.form__
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
                        v-on:click="send"
                    ) Подписаться на рассылку
                    +e.text Нажимая кнопку «Подписаться на рассылку», вы соглашаетесь с политикой обработки ОПД
            +e.response
                p Вы успешно подписались на новостную рассылку!
</template>

<script>

    import {removeFormSend} from "../../mixins/frontEnd/utility/removeFormSend";
    import Input from '../blanks/Input.vue'
    export default {
        mixins: [removeFormSend],
        data() {
            return {
                input:{
                    value: '',
                    error: false
                }
            };
        },
        methods:{
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
