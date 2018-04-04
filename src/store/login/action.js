import * as type from './type'
import axios from 'axios'
import { api } from '../../config/api'

function errorMsg(msg) {
    return {msg,type:type.ERROR_MSG}
}


function loginSuccess() {
    return {type:type.TYPE_LOGIN}
}


export function login({account,password}){
    if(!account || !password){
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post(api.paths.login,{account,password,type:1})
            .then(res =>{
                console.log('res',res)
                return dispatch(loginSuccess())



    /*
                if(res.status == 200 && res.data.code === 0){
                    dispatch(authSuccess(res.data.data))
                }
                else {
                    dispatch(errorMsg(res.data.msg))
                }
*/

            }).catch( e => {
                console.log('error',e)
        })
    }
}