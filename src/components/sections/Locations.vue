<template lang="pug">
    include ../../tools/mixins
    +b.SECTION.locations(
        :class="[modifierClass]"
    )
        +e.container.container
            +e.text.description
                h3 {{ title }}
                p {{ text }}
            +e.TABS-COMPONENT.tabs(
                :content="tabsContent"
                :activeIndex="tab.activeIndex"
                @setTabIndex="setTabIndex"
            )
        +e.wrapper
            +e.map-wrapper
                +e.map(
                    ref="map"
                )
                <!--+e.GOOGLEMAPS-MAP.map(-->
                    <!--ref="map"-->
                    <!--:center.sync="map.center"-->
                    <!--:zoom.sync="map.zoom"-->
                    <!--:options="map.options"-->
                    <!--v-if="map.init"-->
                <!--)-->
                    <!--+e.GOOGLEMAPS-MARKER.marker(-->
                        <!--v-for="(item,index) in tabs[tab.activeIndex].locations"-->
                        <!--:title="item.title"-->
                        <!--:key ="index"-->
                        <!--:position="item.position"-->
                        <!--:icon="index === 0 ? map.icon.start.url : map.icon.end.url"-->
                        <!--:clickable="true"-->
                        <!--@click="map.center=item.position"-->
                        <!--:ref="'marker' + index"-->
                    <!--)-->
            +e.roads-wrapper
                +e.container.container
                    +e.roads
                        +e.scroller(
                            v-bar="{preventParentScroll: true, scrollThrottle: 30}"
                            ref="bar"
                            :class="{'limit-height': scroller.limitHeight}"
                        )
                            div(ref="scroller")
                                +e.item(
                                    v-for="location in tabs[tab.activeIndex].locations"
                                )
                                    p {{ location.title }} #[span {{ location.price }}]
                                    span {{ location.text }}

</template>

<script>
    import Tabs from '../blanks/Tabs.vue'
    import {tabsLogic} from "../../mixins/frontEnd/blanks/tabsLogic";

    export default {
        props: ['title','text','tabs','modifier'],
        mixins: [tabsLogic],
        data() {
            return {
                map:{
                    object: null,
                    markers: [],
                    directionsService: null,
                    directionsRenderer: null,
                    route: null
                },
                 // map:{
                 //     init: true,
                 //     center: {lat: 12.8008, lng: 100.902658},
                 //     zoom: 11,
                 //     options: {
                 //         zoomControl: true,
                 //         mapTypeControl: false,
                 //         scaleControl: false,
                 //         streetViewControl: false,
                 //         rotateControl: false,
                 //         fullscreenControl: false,
                 //         disableDefaultUi: false
                 //     },
                 //     icon: {
                 //         start: {
                 //             url: '/public/media/img/location/map-icon.svg'
                 //         },
                 //         end: {
                 //             url: '/public/media/img/location/map-icon2.svg'
                 //         }
                 //     },
                 // },
                scroller: {
                    limitHeight: false
                }
            };
        },
        mounted(){
            this.scroller.limitHeight = this.tabs[this.tab.activeIndex].locations.length > 2;
            // this.initMarkers(this.tab.activeIndex);

            this.initNativeMap();
        },
        methods: {
            initMarkers(index){
                let map = this.$refs.map.$_map;
                setTimeout(() => {
                    this.tabs[index].locations.map((marker, index)=>{
                        let infowindow = new google.maps.InfoWindow({
                            content: `<p>${marker.title}</p>`
                        });
                        if(typeof this.$refs['marker' + index] !== 'undefined'){
                            infowindow.open(map, this.$refs['marker' + index][0].$_marker);
                        }
                    })
                },1000)
            },
            clearMarkers(){
                this.map.init = false;
                for ( let ref in this.$refs) {
                    if(ref.indexOf('marker') !== -1) {
                        delete this.$refs[ref]
                    }
                }
            },
            initNativeMap(){

                this.$nextTick(()=>{
                    this.map.directionsService = new google.maps.DirectionsService();
                    this.map.directionsRenderer = new google.maps.DirectionsRenderer(
                        {
                            polylineOptions: {
                                strokeColor: "#53A866"
                            },
                            suppressMarkers: true
                        }
                    );
                    this.map.object = new google.maps.Map(this.$refs.map, {
                        center: {lat: 12.8008, lng: 100.902658},
                        zoom: 11,
                    });
                    this.map.directionsRenderer.setMap(this.map.object);
                    this.initNativeMarker(this.tabs[this.tab.activeIndex].locations);
                })


            },
            initNativeMarker(markers){
                markers.map((marker,index)=>{
                    let LatLng = new google.maps.LatLng(marker.position.lat,marker.position.lng);
                    let icon = index === 0 ? '/public/media/img/location/map-icon.svg' : '/public/media/img/location/map-icon2.svg'
                    let newMarker = new google.maps.Marker({
                        position: LatLng,
                        icon: icon
                    });
                    this.map.markers.push(newMarker);
                    newMarker.setMap(this.map.object);
                })
                this.drawRoute(markers)
            },
            drawRoute(markers){

                 let start = new google.maps.LatLng(markers[0].position.lat,markers[0].position.lng);
                 let end = new google.maps.LatLng(markers[1].position.lat,markers[1].position.lng);

                this.map.directionsService.route(
                    {
                        origin: start,
                        destination: end,
                        travelMode: 'DRIVING'
                    },
                    (response, status) => {
                        if (status === 'OK') {
                            this.map.directionsRenderer.setDirections(response);
                        }
                    });
            },
            clearNativeMarkers(){
                this.map.markers.map((marker) =>{
                    marker.setMap(null);
                });
                this.map.markers = [];
            }
        },
        watch: {
            'tab.activeIndex': function () {
                this.scroller.limitHeight = this.tabs[this.tab.activeIndex].locations.length > 2;
                this.clearNativeMarkers();
                this.initNativeMarker(this.tabs[this.tab.activeIndex].locations);
            }
        },
        computed:{
            modifierClass: function(){
                switch (this.modifier){
                    case 'padding-top':
                        return 'locations--padding-top'
                }
            },
            tabsContent: function () {
                let tabs = [];
                this.tabs.map((tab)=>{
                    tabs.push(tab.tabName);
                });
                return tabs;
            }
        },
        components: {
            'tabs-component': Tabs
        }
    };
</script>
