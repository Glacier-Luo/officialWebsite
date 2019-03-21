import service from './request'
// import app from "../login/main.js";

// export const getPersonInfo = data => {
//     return service({
//         url: '/login',
//         method: 'post',
//         data
//     })
// };
export default {
    change_desc(data){
        return service.post('change-desc', data)
    },
    get_desc(){
        return service.get('get-desc')
    },
    login(data){
        return service.post('token-auth', data)
    },
    refresh_token(data){
        return service.post('api-token-refresh', data)
    },
    post_article(data){
        return service.post('post-article', data)
    },
    article_list(section, page){
        return service.get('article-list/' + section + '/' + page)
    },
    get_article(page){
        return service.get('article/' + page)
    },
    delete_article(page){
        return service.get('article-delete/' + page)
    }
}
