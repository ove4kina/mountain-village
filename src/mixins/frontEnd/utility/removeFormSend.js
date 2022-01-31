import {isAnyElementInViewport} from "./isAnyElementInViewport";

export const removeFormSend = {
    mixins: [isAnyElementInViewport],
    data(){
        return {
            form: {
                send: false,
            }
        }
    },
    watch: {
        'form.send': function (newValue) {
            if(newValue){
                document.addEventListener('scroll', this.onScroll);
            } else {
                document.removeEventListener('scroll', this.onScroll);
            }
        }
    },
    methods: {
        onScroll(){
            if(!this.isAnyElementInViewport(this.$refs.section)){
                this.form.send = false;
                this.input.value = '';
                if(this.input.name){
                    this.input.name.value = ''
                }
                if(this.input.email){
                    this.input.email.value = ''
                }
                if(this.input.phone){
                    this.input.phone.value = ''
                }

            }
        }
    }
};