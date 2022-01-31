import {
    fetchPage,
    fetchVilla,
    fetchArticle,
} from '../api'

export default {
    FETCH_PAGE: ({commit, state}, {locale, url}) => {
        return state.pages[url]
            ? Promise.resolve(state.pages[url])
            : fetchPage(locale, url).then(page => commit('SET_PAGE', {url, page}))
    },
    FETCH_VILLA: ({commit, state}, {locale, url}) => {
        return state.villas[url]
            ? Promise.resolve(state.villas[url])
            : fetchVilla(locale, url).then(villa => commit('SET_VILLA', {url, villa}))
    },
    FETCH_ARTICLE: ({commit, state}, {locale, url}) => {
        return state.articles[url]
            ? Promise.resolve(state.articles[url])
            : fetchArticle(locale, url).then(article => commit('SET_ARTICLE', {url, article}))
    }
}
