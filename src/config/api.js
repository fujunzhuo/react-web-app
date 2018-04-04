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
    }
};