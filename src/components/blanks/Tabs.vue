<template lang="pug">
    include ../../tools/mixins.pug

    +b.tabs
        +e.wrapper(ref="tabs")
            +e.slider(:style="{'width': sliderWidth, 'transform': sliderTranslate}")
            +e.item(
                v-for="(tab, index) in content"
                :class="{'active': index === activeIndex}"
                v-on:click="setTabIndex(index)"
                ref="tab"
            ) {{ tab }}

</template>

<script>
    export default {
        props: ['content','activeIndex'],
        data() {
            return {
                sliderWidth: null,
                sliderTranslate: null,
            };
        },
        methods: {
            setTabIndex(index){
                this.$emit('setTabIndex', index)
                let rect = this.$refs.tab[index].getBoundingClientRect();
                this.sliderWidth = `${rect.width}px`;
                this.sliderTranslate = `translateX(${rect.left - this.$refs.tabs.getBoundingClientRect().left}px)`;
            }
        },
        mounted(){
            this.sliderWidth = `${this.$refs.tab[0].getBoundingClientRect().width}px`;
        }
    };
</script>
