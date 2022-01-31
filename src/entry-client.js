import Vue from 'vue'
import 'es6-promise/auto'
import {createApp} from './app'
import ProgressBar from './components/sections/ProgressBar.vue'

import VueImg from 'v-img';
Vue.use(VueImg);

import Vuebar from 'vuebar';
Vue.use(Vuebar);

import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);

// import * as VueGoogleMaps from 'vue2-google-maps';
// Vue.use(VueGoogleMaps, {
//     load: {
//         key: 'AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk',
//         libraries: 'places', // This is required if you use the Autocomplete plugin
//         // OR: libraries: 'places,drawing'
//         // OR: libraries: 'places,drawing,visualization'
//         // (as you require)
//
//         //// If you want to set the version, you can do so:
//         // v: '3.26',
//     },
//
//     //// If you intend to programmatically custom event listener code
//     //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
//     //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
//     //// you might need to turn this on.
//     // autobindAllEvents: false,
//
//     //// If you want to manually install components, e.g.
//     //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
//     //// Vue.component('GmapMarker', GmapMarker)
//     //// then disable the following:
//     // installComponents: true,
// })

// global progress bar
const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount();
document.body.appendChild(bar.$el);

// a global mixin that calls `asyncData` when a route component's params change

Vue.mixin({
    beforeRouteUpdate(to, from, next) {
        const {asyncData} = this.$options
        if (asyncData) {
            asyncData({
                store: this.$store,
                route: to
            }).then(next).catch(next)
        } else {
            next()
        }
    }
});


import KsVueScrollmagic from 'ks-vue-scrollmagic'
Vue.use(KsVueScrollmagic)


const {app, router, store} = createApp();

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
    // Add router hook for handling asyncData.
    // Doing it after initial route is resolved so that we don't double-fetch
    // the data that we already have. Using router.beforeResolve() so that all
    // async components are resolved.

    router.beforeResolve((to, from, next) => {
        router.pageFrom = from.name;
        router.pageFromAnimation = from.meta.animation;
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)
        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        });
        const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
        if (!asyncDataHooks.length) {
            return next()
        }
        bar.start()
        Promise.all(asyncDataHooks.map(hook => hook({store, route: to})))
            .then(() => {
                bar.finish()
                next()
            })
            .catch(next)

    });
    // actually mount to DOM
    app.$mount('#app')

});


// service worker
if ('https:' === location.protocol && navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js')
}
