<template lang="pug">
    include ../../tools/mixins
    +b.SECTION.objects
        +e.container.container
            +e.title.description
                h3 Объекты комплекса
            +e.TABS-COMPONENT.types(
                :content="tabs.list"
                :activeIndex="tabs.activeIndex"
                @setTabIndex="setTabIndex"
            )
        +e.items(
            ref="wrapper"
            @mouseleave="onWrapperMouseLeave"
        )
            +e.map(
                ref="object"
                @dblclick="scaleObject"
                @mousedown="onObjectMouseDown"
                @touchstart="onObjectMouseDown"
                @mouseup="onObjectMouseUp"
                @touchend="onObjectMouseUp"
                @mousemove="onObjectMouseMove"
                @touchmove="onObjectMouseMove"
                :class="{'grab': clicked,'height-align': object.heightAlign,'transition-none': object.transitionNone}"
                :style="{'transform': `translate(${coordinates.x}px,${coordinates.y}px) scale(${object.scale})`}"
            )
                img(
                    src="/public/media/img/objects/back1.png"
                    ref="image"
                )
                svg(
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 960 540"
                    style="enable-background:new 0 0 960 540;"
                    xml:space="preserve"
                )
                    path(
                        class="st0"
                        style="fill:#50B848;enable-background:new;"
                        d="M0,0v540h960V0H0z M289,478.4l-25.2-57.1L241,366.8l-20.6-52.3L200,266.5l-18.7-46.7l-24.3-61.8l60.7-24.1l67.1-19.8l27,57.2l-66.5,25l-7.6,2.8l19.9,45.3l20.6,47.4l22.8,50.9l24.1,53.1l24.7,56.6L289,478.4z M310.5,173.1L326,202l4,2.5l2.6,9.2l-12.5,4.7l-45.2,17.2l-19.5-42.2L310.5,173.1z M389.8,332.8l-58.3,24.1l-21.6-49.3l56.3-22.5l57.9-23.9l24.7,46.6L389.8,332.8z M612.3,175.5l-62.7,25.2l-63.5,26l-66.5,27.1L363,278.1l-57.9,22.2l-20.4-46.6l55.8-21.2l56-22l65.5-26.3l62.3-24.7l60.9-23.9l67.5-26.8l26.5,39.1L612.3,175.5z M642.8,95.4l-57.5,22.1l-60.9,23.2l-62.3,24l-64.2,24.4L333.9,213l-2.4-10.1l-4.5-1.3l-15.2-29.9l63.9-24.6l22,41.8L377,147.2l61.8-23.8l23.2,41.3l-22.2-41.3l60.2-21.7l60.3-22.1l56.5-21.3l20.7-9.3v-3.1l20.5-7.2l1.4,3.1l9.4-3.1l24.6,36.6L642.8,95.4z")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st1"
                        style="fill:#F4763F;enable-background:new;"
                        points="320.1,218.4 332.6,213.7 330,204.5 326,202 310.5,173.1 255.4,193.4 274.9,235.6 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        style="fill:#F4763F;" points="237.7,199 245.3,196.2 217.7,133.8 156.9,157.9 181.3,219.7 237.7,199 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="311.8,171.2 284.8,114.1 217.7,133.8 245.3,196.2 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="311.8,171.8 327,201.6 331.5,202.9 333.9,213 397.8,189.1 375.7,147.2 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="377,147.2 397.8,189.1 462,164.7 438.8,123.4 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="439.8,123.4 462,164.7 524.3,140.7 500,101.7 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="500,101.7 524.3,140.7 585.3,117.4 560.4,79.6 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="560.4,79.6 585.3,117.4 642.8,95.4 616.9,58.3 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="659.4,41.8 658,38.7 637.5,45.9 637.5,49 616.9,58.3 642.8,95.4 693.4,75.3 668.8,38.7 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="585.3,135.8 612.3,175.5 679.3,148.1 652.8,109 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="524.3,159.6 549.6,200.6 612.3,175.5 585.3,135.8 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="462,184.3 486,226.7 549.6,200.6 524.3,159.6 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="396.5,210.6 419.5,253.7 486,226.7 462,184.3 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="340.5,232.5 363,278.1 419.5,253.7 396.5,210.6 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="284.7,253.7 305.1,300.4 363,278.1 340.5,232.5 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="309.9,307.6 331.5,356.9 389.8,332.8 366.2,285.1 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="366.2,285.1 389.8,332.8 448.8,307.9 424.1,261.2 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="263.8,421.3 289,478.4 349.9,452.4 325.2,395.8 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="301.1,342.7 241,366.8 263.8,421.3 325.2,395.8 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="278.3,291.8 220.4,314.6 241,366.8 301.1,342.7 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="257.6,244.3 200,266.5 220.4,314.6 278.3,291.8 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="237.7,199 181.3,219.7 200,266.5 257.6,244.3 ")
                    polygon(
                        @mouseenter="onSegmentMouseEnter"
                        @mouseleave="onSegmentMouseLeave"
                        class="st2"
                        points="237.7,199 181.3,219.7 237.7,199 ")
            +e.A.baloon.baloon__(
                href="#"
                ref="baloon"
                @mousemove="onBaloonMouseMove"
                @mouseleave="onBaloonMouseLeave"
                :class="{'show': baloon.show,'inverse': baloon.inverse}"
                :style="{'top': baloon.top, 'left': baloon.left}"
            )
                +e.DIV.distance 190 м
                +e.DIV.title Вилла 5
                +e.DIV.benefits
                    span 2 этажа
                    span 8 спален
                    span 4 ванны
                +e.DIV.price $ 254 000
                +e.DIV.more Подробнее
</template>

<script>

    import scrollLock from 'scroll-lock'
    import Tabs from '../blanks/Tabs.vue'
    import {tabsLogic} from "../../mixins/frontEnd/blanks/tabsLogic";

    export default {
        mixins: [tabsLogic],
        data() {
            return {
                tabs: {
                    list: ['Type — A', 'Type — B', 'Type — C', 'Type — D', 'Condominium', 'Sport Camp', 'Wellness center'],
                },
                baloon: {
                    left: null,
                    top: null,
                    show: false,
                    inverse: false,
                    height: null
                },
                wrapper: {
                    prop: null,
                    offset: null,
                },
                object: {
                    scale: 1,
                    prop: null,
                    heightAlign: false,
                    transitionNone: false
                },
                coordinates: {
                    x: 0,
                    y: 0,
                    initialX: 0,
                    initialY: 0,
                    prevX: 0,
                    prevY: 0
                },
                latestTap: null,
                clicked: false,
                checkedCoordinates: false,
            };
        },
        mounted(){
            this.setStartsVariables();
        },
        methods: {
            setStartsVariables(){
                this.object.prop = this.$refs.object.getBoundingClientRect();
                this.wrapper.offset = this.$refs.wrapper.offsetTop;
                this.wrapper.prop = this.$refs.wrapper.getBoundingClientRect();
                this.baloon.height = this.$refs.baloon.getBoundingClientRect().height;
                setTimeout(()=>{
                    this.checkObjectSize();
                },100)
            },
            checkObjectSize(){
                if(this.wrapper.prop.height > this.$refs.image.getBoundingClientRect().height){
                    this.object.heightAlign = true;
                    setTimeout(()=>{
                        this.object.prop = this.$refs.object.getBoundingClientRect();
                    },500)
                }
            },
            scaleObject(e){
                let event = e || window.event, x, y;
                if(e.type === 'touchmove'){
                    x = event.touches[0].pageX;
                    y = event.touches[0].pageY - this.wrapper.offset;
                } else {
                    x = event.pageX;
                    y = event.pageY - this.wrapper.offset;
                }
                if(this.object.scale === 1){
                    this.object.scale = 4;
                    if(window.innerWidth < 1200){
                        this.coordinates.x = -((x * 4) - (window.innerWidth * 2));
                        this.coordinates.y = -((y * 4) - (this.wrapper.prop.height * 2));
                    } else {
                        this.coordinates.x = -((x * 4) - (window.innerWidth * 2));
                        this.coordinates.y = -((y * 4) - (this.wrapper.prop.height * 2));
                    }
                    setTimeout(()=>{
                        this.object.prop = this.$refs.object.getBoundingClientRect();
                    },500)
                } else {
                    this.object.transitionNone = false;
                    this.object.scale = 1;
                    this.coordinates.x = 0;
                    this.coordinates.y = 0;
                    setTimeout(()=>{
                        this.object.prop = this.$refs.object.getBoundingClientRect();
                    },500)
                }
            },
            onBaloonMouseMove(){
                this.baloon.show = true;
                this.clicked = false;
            },
            onBaloonMouseLeave(){
                this.baloon.show = false;
            },
            onSegmentMouseEnter(e){
                let event = e || window.event,
                    target = event.target || event.srcElement,
                    targetLeft = target.getBoundingClientRect().left + (target.getBoundingClientRect().width / 2),
                    targetTop = target.getBoundingClientRect().top - this.baloon.height - this.$refs.wrapper.getBoundingClientRect().top + target.getBoundingClientRect().height;
                if(this.object.scale === 1){
                    if(targetTop <= this.baloon.height*0.5){
                        targetTop += this.baloon.height*1.5;
                        this.baloon.inverse = true;
                    } else {
                        this.baloon.inverse = false;
                    }
                } else {
                    if(targetTop <= this.baloon.height*1.5){
                        targetTop += this.baloon.height;
                        this.baloon.inverse = true;
                    } else {
                        targetTop -= this.baloon.height;
                        this.baloon.inverse = false;
                    }
                }
                this.baloon.left = `${targetLeft}px`;
                this.baloon.top = `${targetTop}px`;
                this.baloon.show = true;
            },
            onSegmentMouseLeave(){
                this.baloon.show = false;
            },
            onWrapperMouseLeave(){
                this.clicked = false;
            },
            tap(event){
                event.preventDefault()
                let now = new Date().getTime(),
                    timesince = now - this.latestTap;
                if((timesince < 600) && (timesince > 0)){
                    this.scaleObject(event);
                }else{
                    this.latestTap = null;
                }
                this.latestTap = new Date().getTime();
            },
            onObjectMouseDown(e){
                let event = e || window.event, x, y;
                if(e.type === 'touchstart'){
                    x = event.touches[0].pageX;
                    y = event.touches[0].pageY - this.wrapper.offset;
                } else {
                    x = event.pageX;
                    y = event.pageY - this.wrapper.offset;
                }
                if(window.innerWidth >= 1200){
                    document.body.style.userSelect = 'none';
                } else {
                    scrollLock.disablePageScroll(document.body);
                }
                this.clicked = true;
                this.coordinates.prevX = x;
                this.coordinates.prevY = y;
                if(window.innerWidth < 1200){
                    this.tap(e)
                }
            },
            onObjectMouseUp(){
                this.clicked = false;
                this.coordinates.initialX = 0;
                this.coordinates.initialY = 0;
                if(window.innerWidth >= 1200){
                    document.body.style.userSelect = null;
                } else {
                    scrollLock.enablePageScroll(document.body);
                }
            },
            onObjectMouseMove(e){
                if(this.clicked){
                    this.baloon.show = false;
                    let event = e || window.event, x, y;
                    if(e.type === 'touchmove'){
                        x = event.touches[0].pageX;
                        y = event.touches[0].pageY - this.wrapper.offset;
                    } else {
                        x = event.pageX;
                        y = event.pageY - this.wrapper.offset;
                    }

                    this.coordinates.initialX = this.coordinates.prevX - x;
                    this.coordinates.initialY = this.coordinates.prevY - y;

                    this.coordinates.x = this.coordinates.x - this.coordinates.initialX;
                    this.coordinates.y = this.coordinates.y - this.coordinates.initialY;

                    if(this.object.scale === 1){
                        if(this.coordinates.x > 0 ){
                            this.coordinates.x = 0;
                        }
                        if(this.coordinates.y > 0){
                            this.coordinates.y = 0;
                        }
                        if(this.coordinates.x < -(this.object.prop.width - window.innerWidth)){
                            this.coordinates.x = -(this.object.prop.width - window.innerWidth);
                        }
                        if(this.coordinates.y < -(this.object.prop.height - this.wrapper.prop.height)){
                            this.coordinates.y = -(this.object.prop.height - this.wrapper.prop.height);
                        }
                    } else {
                        this.object.transitionNone = true
                        if(this.coordinates.x > this.object.prop.width * 0.36 ){
                            this.coordinates.x = this.object.prop.width * 0.36;
                        }
                        if(this.coordinates.y > this.object.prop.height * 0.36){
                            this.coordinates.y = this.object.prop.height * 0.36;
                        }
                        if(this.coordinates.x < -(this.object.prop.width * 0.36)){
                            this.coordinates.x = -(this.object.prop.width * 0.36);
                        }
                        if(this.coordinates.y < -(this.object.prop.height * 0.36)){
                            this.coordinates.y = -(this.object.prop.height * 0.36);
                        }
                    }

                    this.coordinates.prevX = x;
                    this.coordinates.prevY = y;
                }
            }
        },
        components: {
            'tabs-component': Tabs
        }
    };
</script>
