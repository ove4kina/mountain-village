<template lang="pug">
    include ../../tools/mixins.pug

    +b.input(
        :class="[borderClass,colorClass,backgroundClass,typeClass,{'focus': focus, 'blur': !focus,'error': error}]"
    )
        input(
            ref="input"
            @focus="focus = true"
            @blur="onBlur"
            @input="$emit('input',$event.target.value)"
            :placeholder="placeholder"
            :value="value"
        )
</template>

<script>
    export default {
        props: ['placeholder','border','color','background','type','value','error'],
        data() {
            return {
                focus: false,
            };
        },
        methods: {
            onBlur(){
                if(this.$refs.input.value.length === 0){
                    this.focus = false;
                }
            }
        },
        watch: {

        },
        computed: {
            typeClass(){
                switch (this.type){
                    case 'standart': {
                        return 'input--standart'
                    }
                }
            },
            borderClass(){
                switch (this.border){
                    case 'gray': {
                        return 'input--border-gray'
                    }
                    case 'transparent': {
                        return 'input--border-transparent'
                    }
                }
            },
            backgroundClass(){
                switch (this.background){
                    case 'transparent': {
                        return 'input--transparent'
                        break;
                    }
                    case 'gray': {
                        return 'input--gray'
                        break;
                    }
                }
            },
            colorClass(){
                switch (this.color){
                    case 'primary': {
                        return 'input--color-primary'
                        break;
                    }
                    case 'gray': {
                        return 'input--color-gray'
                        break;
                    }
                }
            },
        }
    };
</script>
