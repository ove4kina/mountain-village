<template lang="pug">
    include ../../tools/mixins

    +b.HEADER.header(
        ref="header"
        :class="['header--' + color, {'show-sidebar': sidebar.active}]"
    )
        +e.sidebar.sidebar__(
            :class="{'show-sub-list': sidebar.subListActive}"
            :style="{'height': sidebar.height}"
            v-on:click.stop="true === true"
            ref="sidebar"
        )
            +e.wrapper(
                ref="wrapper"
            )
                +e.scroller(
                    v-bar="{preventParentScroll: true, scrollThrottle: 30}"
                    ref="bar"
                )
                    div(
                        ref="scroller"
                        v-on:scroll="onSideBarScroll"
                    )
                        +e.navigation(
                            ref="navigation"
                        )
                            +e.item
                                a(href="#") О Mountain Village II
                            +e.item
                                +e.sub-list
                                    +e.toggle(
                                        v-on:click="toggleSubList"
                                    ) Виллы
                                    +e.list
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-7
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-6
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-12
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-4
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1
                                        +e.A.sub-item(href="#")
                                            +e.background
                                                img(src="/public/images/test/small.jpg")
                                            p B-1

                            +e.item
                                a(href="#") Статьи
                            +e.item
                                a(href="#") Контакты
                            +e.item
                                a(href="#") Контакты
                            +e.item
                                a(href="#") Контакты
                            +e.item
                                a(href="#") Контакты
                            +e.item
                                a(href="#") Контакты
                            +e.item
                                a(href="#") Контакты
                        +e.buttons(
                            ref="buttons"
                        )
                            +e.BUTTON.button--write.button--standart.--yellow Написать нам
                            +e.A.button--social.button--standart.--gray(href="#") Facebook
                            +e.A.button--social.button--standart.--gray(href="#") Instagram
            +e.bottom(
                :class="{'active': sidebar.bottomShadowActive}"
                ref="bottom"
            )
        +e.container.container(
            :class="{'overscrolled': sidebar.overscrolled}"
        )
            +e.ROUTER-LINK.logo(
                to="/"
            )
                img(:src="'/public/images/utility/logo-' + (isDesktop ? color === 'white' ? 'white' : 'black' : 'black') + '.png'")
            +e.menu
                +e.A.item(
                    href="#"
                    :class="'header__item--' + color"
                )
                    span Виллы
                +e.A.item(
                    href="#"
                    :class="'header__item--' + color"
                )
                    span Инфраструктура
                +e.A.item(
                    href="#"
                    :class="'header__item--' + color"
                )
                    span Окрестности
                +e.A.item(
                    href="#"
                    :class="'header__item--' + color"
                )
                    span Инвестирование
                +e.A.item(
                    href="#"
                    :class="'header__item--' + color"
                )
                    span Расположение
            +e.phone(
                :class="'header__phone--' + color"
            )
                a(href="tel:+79992312020") +7 999 231 20 20
            +e.A.lang(
                href="#"
                :class="'header__lang--' + color"
            )   Ru
            +e.hamburger(
                :class="{'active': sidebar.active}"
                v-on:click="toggleSideBar"
            )
                span
                span

</template>

<script>
    import constants from '../../../content/constants.json';

    import {handlerOnEsc} from "../../mixins/frontEnd/utility/handlerOnEsc";

    import { disablePageScroll, enablePageScroll } from 'scroll-lock';

    export default {
        props: ['color'],
        mixins: [handlerOnEsc],
        data() {
            let language = this.$router.currentRoute.meta.language,
                obj = {
                    isDesktop: true,
                    sidebar:{
                        height: null,
                        subListActive: false,
                        active: false,
                        overscrolled: false,
                        bottomShadowActive: false
                    }
                };
            return obj;
        },
        created(){
            if (typeof window !== 'undefined'){
                if (window.innerWidth < 1200){
                    this.isDesktop = false
                }
            }
        },
        destroyed(){

        },
        mounted(){
            if(window.innerWidth >= 1200){
                this.$nextTick(this.toggleBottomShadow)
            } else {
                this.sidebar.height = `${this.$refs.buttons.getBoundingClientRect().height + this.$refs.header.getBoundingClientRect().height + this.$refs.navigation.getBoundingClientRect().height + 64}px`;
            }
        },
        methods: {
            toggleSubList(){
                this.sidebar.subListActive = !this.sidebar.subListActive;
                if(window.innerWidth >= 1200){
                    this.$nextTick(this.toggleBottomShadow)
                }
            },
            onSideBarScroll(e){
                let target = e.target || e.srcElement;

                if(target.scrollTop > 0) {
                    this.sidebar.overscrolled = true
                } else {
                    this.sidebar.overscrolled = false
                }
            },

            toggleSideBar(){
                this.sidebar.active = !this.sidebar.active;
                if(window.innerWidth < 1200){
                    if(this.sidebar.active) {
                        disablePageScroll(this.$refs.wrapper)
                    } else {
                        enablePageScroll(this.$refs.wrapper)
                    }
                }

            },
            closeSideBar(){
                this.sidebar.active = false;
                enablePageScroll(this.$refs.sidebar)
            },
            toggleBottomShadow(){
                let buttonsRect = this.$refs.buttons.getBoundingClientRect(),
                    bottomRect = this.$refs.bottom.getBoundingClientRect();



                this.sidebar.bottomShadowActive = buttonsRect.top + buttonsRect.height > bottomRect.top;
            }
        },
        watch: {
            'sidebar.active': function (newValue) {

                if(newValue){
                    document.addEventListener('keydown', (e)=>{
                        this.handlerOnEsc(this.closeSideBar,e)
                    })
                    setTimeout(()=>{
                        document.addEventListener('click',this.closeSideBar)
                    })
                } else {
                    document.removeEventListener('keydown', (e)=>{
                        this.handlerOnEsc(this.closeSideBar,e)
                    })
                    document.removeEventListener('click',this.closeSideBar)
                }

            }
        }
    };
</script>
