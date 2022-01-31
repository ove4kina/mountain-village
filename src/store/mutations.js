import Vue from 'vue'

export default {
    SET_PAGE: (state, {url, page}) => {
        Vue.set(state.pages, url, page)
    },
    SET_VILLA: (state, {url, villa}) => {
        Vue.set(state.villas, url, villa)
    },
    SET_ARTICLE: (state, {url, article}) => {
        Vue.set(state.articles, url, article)
    },
}

