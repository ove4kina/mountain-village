import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Index from '../components/pages/Index.vue';

import Blog from '../components/pages/Articles.vue';

import Infrastructures from '../components/pages/Infrastructures.vue';

import Article from '../components/pages/Article.vue';

import Villa from '../components/pages/Villa.vue';

import Villas from '../components/pages/Villas.vue';

import Privacy from '../components/pages/Privacy.vue';

import NotFound from '../components/pages/NotFound.vue';

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({y: 0}),
        routes: [
            {
                path: '/:locale(en|ru)',
                name: 'main',
                component: Index,
                meta: {
                    language: 'ru',
                    type: 'main',
                    animation: 'slice'
                }
            },

            {
                path: '/:locale(en|ru)/blog',
                name: 'blog',
                component: Blog,
                meta: {
                    language: 'ru',
                    type: 'articles'
                }
            },

            {
                path: '/:locale(en|ru)/infrastructures',
                name: 'infrastructures',
                component: Infrastructures,
                meta: {
                    language: 'ru',
                    type: 'articles'
                }
            },

            {
                path: '/:locale(en|ru)/villa/:url',
                name: 'villa',
                component: Villa,
                meta: {
                    language: 'ru',
                    type: 'villa'
                }
            },
            {
                path: '/:locale(en|ru)/villas',
                name: 'villas',
                component: Villas,
                meta: {
                    language: 'ru',
                    type: 'villas'
                }
            },
            {
                path: '/:locale(en|ru)/article/:url',
                name: 'article',
                component: Article,
                meta: {
                    language: 'ru',
                    type: 'article'
                }
            },

            {
                path: '/:locale(en|ru)/privacy',
                name: 'privacy',
                component: Privacy,
                meta: {
                    language: 'ru',
                    type: 'privacy'
                }
            },
            {
                path: '*',
                name: '404En',
                component: NotFound,
                meta: {
                    title: '404',
                    language: 'ru',
                    type: '404'
                }
            }
        ]
    });
}