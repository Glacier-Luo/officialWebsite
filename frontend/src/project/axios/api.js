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
    }
}
