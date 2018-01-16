import React from 'react'
import {ToastAndroid} from 'react-native'

const _RegStrategy = (state)=>{
    if(state.registed === true){
        ToastAndroid.show('该用户已注册,请重新输入',0.2);
        return false
    }else if(state.email_phone===''||state.reg_result===false||state.registed===true){
        ToastAndroid.show('请输入正确的手机号码或邮箱',0.2);
        return false
    }else if(state.password===''){
        ToastAndroid.show('请输入密码',0.2);
        return false
    }else if(state.repassword===''){
        ToastAndroid.show('请输入确认密码',0.2);
        return false
    }else if(state.password!==state.repassword){
        ToastAndroid.show('两次密码输入不一致,请重新输入',0.2);
        return false
    }else {
        return true
    }
}

module.exports = {
    _RegStrategy
}


