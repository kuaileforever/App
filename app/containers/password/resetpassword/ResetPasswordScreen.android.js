/**
 * 重置密码
 */

import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import _Button from '../../../components/_Button'
import _TextInput from '../../../components/_TextInput'
import {size,px3dp} from '../../../util/ScreenUtil'
import {ToastAndroid} from 'react-native'
import {post} from "../../../util/HttpUtil";
import {ResetURL} from "../../../util/Url";


export default class ResetPasswordScreen extends Component {
    static navigationOptions = ({navigation})=>( {
        headerTitle:'重置密码',
        headerStyle:{
            backgroundColor:'#a4bdca',
            elevation:0
        },
        headerTitleStyle:{
            fontFamily:'方正兰亭黑简体 Regular',
            color:'#3a3330',
            alignSelf:'center',
            right:px3dp(50),
        },
        headerLeft:(
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../../../res/images/nav_back_nor.png')}
                    style={{
                        width:px3dp(96),
                        height:px3dp(96),
                        marginLeft:px3dp(50),
                    }}
                />
            </TouchableOpacity>
        )
    });

    constructor(){
        super();
        this.state={
            password:'',
            password_same:'',
        };
    }

    _passwordValidate_null(text){
        text===''?this.setState({
            password_same:true
        }):null
    }

    _reset(){
        // 向服务器发送请求前，对输入新密码进行判定,并且判断2次密码是否一致
        if(this.state.password===''){
            ToastAndroid.show('请输入新密码', 0.5);
        }else if(this.state.password_same===''){
            ToastAndroid.show('请再次输入新密码', 0.5);
        }else if(this.state.password!==this.state.password_same){
            ToastAndroid.show('两次密码输入不一致,请重新输入',0.2);
        }else{
            const params = {
                email_phone:this.props.navigation.state.params.email_phone,
                validate:this.props.navigation.state.params.validate,
                password:this.state.password_same
            };
            post(ResetURL,
                params,
                (result)=>{
                    if (result.errcode===1){
                        ToastAndroid.show('重置密码成功', 0.5);
                        this.props.navigation.navigate('Login')
                    } else {
                        ToastAndroid.show(result.errmsg, 0.5)
                    }
                }
            )
        }

    };
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')}>
                        <View style={styles.wrap}>
                            <View style={styles.image_wrap}>
                                <Image source={require('../../../../res/images/login_img_password.png')} style={styles.image} />
                            </View>
                            <View style={styles.input_wrap}>
                                <_TextInput
                                    onChangeText={(text)=>{
                                        this.setState({
                                            password:text
                                        })
                                    }}
                                    onEndEditing={(event)=>{
                                        this.state.password = event.nativeEvent.text
                                    }}
                                    secureTextEntry={true}
                                    placeholder='新密码'
                                    addstyle={{
                                        width:px3dp(530)
                                    }}
                                />
                                <View style={styles.input_hr}/>
                            </View>
                        </View>
                        <View style={[styles.wrap,styles.wrap_add]}>
                            <View style={styles.image_wrap}>
                                <Image source={require('../../../../res/images/reg_img_repassword.png')} style={styles.image} />
                            </View>
                            <View style={styles.input_wrap}>
                                <_TextInput
                                     onChangeText={(text)=>{
                                         this.state.password_same=text;
                                        this._passwordValidate_null(text);
                                     }}
                                    onEndEditing={(event)=>{
                                        this.state.password_same = event.nativeEvent.text
                                    }}
                                    secureTextEntry={true}
                                    placeholder='确认新密码'
                                    addstyle={{
                                        width:px3dp(530)
                                    }}
                                />
                                <View style={styles.input_hr}/>
                            </View>
                        </View>
                    <_Button text="重置密码"
                             addstyle_bt={styles.setup}
                             addstyle_text={styles.setup_text}
                             onPress={this._reset.bind(this)}
                    />
                </Image>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bg:{
        alignItems:'center',
        width:null,
        height:null,
        flex:1
    },
    wrap:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:px3dp(268),
    },
    wrap_add:{
        marginTop:px3dp(158)
    },
    input_wrap:{
        flexDirection:'column',
    },
    input_hr:{
        height:px3dp(6),
        width:px3dp(530),
        backgroundColor:'#456675'
    },
    image: {
        width: px3dp(64),
        height: px3dp(64),
    },
    image_wrap:{
        paddingTop:px3dp(20)
    },
    setup:{
        width:px3dp(530),
        height:px3dp(110),
        backgroundColor:'#7292a4',
        borderRadius:px3dp(20),
        marginLeft:px3dp(30),
        marginTop:px3dp(126)
    },
    setup_text:{
        color:'#ffffff'
    },
    reg_test:{
        paddingLeft:px3dp(10),
        width:px3dp(550),
        height:px3dp(10)
    },
    reg_warn:{
        color:'#f35757'
    },
});