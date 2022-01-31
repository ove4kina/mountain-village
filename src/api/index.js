import axios from 'axios'

let site = 'http://localhost:5555';

export function fetchPage(locale, url) {
    return axios({
        method: 'post',
        url: site + '/api/' + locale +'/page/' + url
    })
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            return '404';
        });
}
export function fetchVilla(locale, url) {
    return axios({
        method: 'post',
        url: site + '/api/' + locale +'/villa/' + url
    })
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            return '404';
        });
}
export function fetchArticle(locale, url) {
    return axios({
        method: 'post',
        url: site + '/api/' + locale +'/article/' + url
    })
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            return '404';
        });
}
