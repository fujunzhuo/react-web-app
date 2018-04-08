export const api =  {
    fakeHeader: {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    },
    realHeader: {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    },
    paths: {
        host: 'http://www.jiaoyukou.com',
        login: '/pub/Server/login',
        register: '/pub/register',
        home: '/home'
    },
    validation:{
        phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
        email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        password: /^[a-zA-Z]\w{5,17}$/
    }
};