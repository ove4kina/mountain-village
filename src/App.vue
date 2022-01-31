<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        created(){
            if (typeof document !== 'undefined' && window.innerWidth >= 1200) {
                window.addEventListener('resize', this.setHtmlFontSize);
            }
        },
        destroyed(){
            if (typeof document !== 'undefined' && window.innerWidth >= 1200){
                window.removeEventListener('resize', this.setHtmlFontSize);
            }
        },
        mounted() {
            if(window.innerWidth >= 1200){
                this.setHtmlFontSize();
            }
        },
        methods:{
            setHtmlFontSize (){
                let fontSize = window.innerWidth / 100;
                if(window.innerWidth >= 1440) fontSize = 13;
                if(window.innerWidth >= 1600) fontSize = 14;
                if(window.innerWidth >= 1800) fontSize = 15;
                document.documentElement.style.fontSize = fontSize + 'px';
            }
        }
    };
</script>

<style lang="scss">
    @import 'assets/scss/critical';
    @import 'assets/scss/main';
</style>