import service from './request'
 
export const getPersonInfo = data => {
    return service({
        url: '/login',
        method: 'post',
        data
    })
};