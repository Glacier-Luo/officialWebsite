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
    get_desc(){
        return service.get('get-desc')
    },
    login(data){
        return service.post('token-auth', data)
    },
    refresh_token(data){
        return service.post('api-token-refresh', data)
    },

    // cooperation
    get_cooperation(){
        return service.get('get-cooperation')
    },
    // files
    get_files(){
        return service.get('get-files')
    },
    // train
    get_train(){
        return service.get('get-train')
    },
    // services
    get_services(){
        return service.get('get-services')
    },
    // recruit
    get_recruit(){
        return service.get('get-recruit')
    },
    // news
    get_news(){
        return service.get('get-news')
    },

    // edit get content
    get_edit(column, page){
        return service.get('get-edit/' + column + '/' + page)
    },
    // edit submit
    edit(data, page) {
        return service.post('edit/' + page, data)
    },
    // edit profile get
    get_editprofile(){
        return service.get('get-editprofile')
    },
    // edit profile submit
    editprofile(data){
        return service.post('editprofile', data)
    },

    // index
    get_index(){
        return service.get('get-index')
    },

    // manage
    get_manage(){
        return service.get('get-manage')
    },
    delete(column, page){
        return service.post('delete/' + column + "/" + page)
    },
    to_edit(column, page){
        return service.get('to-edit/' + column + "/" + page)
    },

    // password
    password(data){
        return service.post('check-password', data)
    },

    // view
    get_view(column, page){
        return service.get('get-view/' + column + "/" + page)
    }
}
