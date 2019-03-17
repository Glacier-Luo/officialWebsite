import service from './request'
 
export const login = data => {
    return service({
        url: '/register',
        method: 'post',
        data
    })
};