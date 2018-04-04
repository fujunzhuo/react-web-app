import * as type from './type'

let initState = {
    account: '',
    password: ''
}

export const login = (state = initState,action) => {
    switch(action.type){
        case type.TYPE_LOGIN:
            return {...state,redirectTo:'/home'};
        case type.ERROR_MSG:
            return {...state,msg:action.msg};
        default:
            return state;
    }
}

