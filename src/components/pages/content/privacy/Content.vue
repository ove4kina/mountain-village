<template lang="pug">
    include ../../../../tools/mixins.pug
</template>

<script>
    export default {
        data() {
            let language = this.$router.currentRoute.meta.language,
                obj = {};

            if (language === 'en') {
                obj.content = this.$attrs.content.content.en;
            } else {
                obj.content = this.$attrs.content.content.ru;
            }
            return obj;
        },
        title() {
            return this.content.meta.title;
        },
        meta() {
            return this.content.meta.meta;
        },
    }
</script>