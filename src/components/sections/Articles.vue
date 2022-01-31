<template lang="pug">
    include ../../tools/mixins

    +b.SECTION.articles
        +e.container.container
            +e.text.description
                h3.big Статьи и заметки
                p В нашем блоге мы публикуем заметки с обзором популярных мест Тайланда и новостей, а также отвечаем на популярные вопросы туристов. Если у вас есть вопрос, то можете #[a(href="#").link--green #[span написать нам]].
            +e.wrapper
                //+e.ARTICLE.item.article-card__(
                //    v-for="(article, index) in articles"
                //    :class="[article.modifier,{'article-card--background-color': article.background}]"
                //)
                +e.ROUTER-LINK.item.article-card__(
                    v-for="(article, index) in articles"
                    :class="{'article-card--main': index === 0, 'article-card--small': index !== 0}"
                    :key="index"
                    :to="'/'+ $route.params.locale + '/article/' + article.url"
                )
                    +e.image
                        +e.IMG(:src="article.image").background
                        //+e.IMG(
                        //    v-if="article.logo"
                        //    :src="article.logo"
                        //).logo
                    +e.wrapper
                        //span(v-if="index === 0")  {{ article.date }}
                        h4 {{ article.contents[0].header }}
                        p {{ article.contents[0].infrastructure }}
                        +e.BUTTON.button.button__.--yellow.--standart(
                            v-if="index === 0"
                        ) Подробнее
            +e.BUTTON.button.button__.--standart.--border-grey(
                v-on:click="loadMore"
                :class="{'hide': button.hide}"
            ) Загрузить еще

</template>

<script>
    export default {
        props: ['articles'],
        data() {
            return{
                button:{
                    hide: false
                },
                count: 0,
                currentLength: 0,
                //articles: [],
                content: [
                    {
                        modifier: 'article-card--main',
                        img: '/public/media/img/articles/1.jpg',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: 'Теперь вы можете записаться на курсы йоги на нашем новом йога кэмпе, наши профессиональные тренеры подберут вам индивидульную программу.  '
                    },
                    {
                        logo: '/public/media/img/articles/logo.png',
                        background: true,
                        modifier: 'article-card--big',
                        img: '/public/media/img/articles/2.png',
                        date: '19 марта',
                        title: 'Тренировочный лагерь',
                        text: 'Узнать больше про то, как тренироваться с лучшими бойцами на планете'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: 'Узнать больше про то, как тренироваться с лучшими бойцами на планете'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/4.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: '9 минут пешком'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/5.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: '9 минут пешком'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: '9 минут пешком'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: '9 минут пешком'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: 'Узнать больше про то, как тренироваться с лучшими бойцами на планете'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: 'Узнать больше про то, как тренироваться с лучшими бойцами на планете'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: '9 минут пешком'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: 'Узнать больше про то, как тренироваться с лучшими бойцами на планете'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: 'Узнать больше про то, как тренироваться с лучшими бойцами на планете'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: 'Узнать больше про то, как тренироваться с лучшими бойцами на планете'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: 'Узнать больше про то, как тренироваться с лучшими бойцами на планете'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: 'Узнать больше про то, как тренироваться с лучшими бойцами на планете'
                    },
                    {
                        modifier: 'article-card--small',
                        img: '/public/media/img/articles/3.png',
                        date: '19 марта',
                        title: 'Набор на занятия йогой',
                        text: 'Узнать больше про то, как тренироваться с лучшими бойцами на планете'
                    }
                ],
                windowMobile: false,
            }
        },
        mounted(){
            this.isMobile();
            this.loadMore();
        },
        methods: {
            loadMore(){
//                this.articles = this.content;
//                if(window.innerWidth < 767) {
//                    this.currentLength += 3;
//                } else if(window.innerWidth >= 768 && window.innerWidth < 1200){
//                    this.currentLength += 4;
//                } else{
//                    this.currentLength += 9;
//                }
//                for (let i = this.count; i < this.currentLength; i++) {
//                    if(this.content[i]){
//                        this.articles.push(this.content[i]);
//                        this.count += 1;
//                    }
//                }
//                if(this.count >= this.content.length){
//                    this.button.hide = true;
//                }
            },
            isMobile(){
                if(window.innerWidth < 1200){
                    this.windowMobile = true;
                } else{
                    this.windowMobile = false;
                }
            }
        }
    };
</script>