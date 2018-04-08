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
    if(!account) return errorMsg('用户名不能为空')
    if(!api.validation.phone.test(account)) return errorMsg('请输入正确的手机号')
    if(!password) return errorMsg('密码不能为空')
    return dispatch => {
        axios.post(api.paths.login,{account,password,type:1})
            .then(res =>{
                dispatch(loginSuccess())
                //console.log('res',res)
                if(res.status == 200 && res.data.code === 0){
                    dispatch(loginSuccess())
                }
                else {
                    dispatch(errorMsg(res.data.msg))
                }
            }).catch( e => {
                //console.log('error',e)
            })
    }
}