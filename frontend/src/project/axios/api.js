import service from './request'

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
    }
}
