import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,

} from 'react-native';
import _Button from '../../../components/_Button'
import {size,pixel,px3dp} from '../../../util/ScreenUtil';
import LoginScreen from '../../login/LoginScreen.ios'
import {ResetURL} from '../../../util/Url';
import {post} from '../../../util/HttpUtil';
import Toast,{DURATION} from "../../../components/Toast"

export default class ResetPassword extends Component {


    static navigationOptions = ({navigation})=>( {
        headerTitle:'重置密码',
        headerStyle:{
            backgroundColor:'#a4bdca',
            elevation:0
        },
        headerTitleStyle:{
            // fontFamily:'方正兰亭黑简体 Regular',
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
            repassword:'',
            // email_phone:this.props.email_phone,
            // validate:this.props.validate
        }
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>

                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')}>
                   {/* <View style={styles.navStyle}>
                        <TouchableOpacity onPress={() => navigate('Home')}>
                            <Image source={require('../../../../res/images/nav_back_nor.png')}
                                   style={styles.navBackIcon}
                                   resizeMode='contain'
                            />
                        </TouchableOpacity>
                        <Text style={[styles.loginText]}>重置密码</Text>
                    </View>*/}
                    <View style={styles.inputview}>
                        <Image source={require('../../../../res/images/login_img_password.png')} style={styles.images}
                               resizeMode='contain'
                        />


                        <TextInput
                                   onChangeText={(text)=>this.setState({
                                       password:text
                                   })}
                                   placeholder=" 新密码"
                                   placeholderTextColor='#e2f0f7'
                                   style={styles.TextInputStyle}
                                   clearButtonMode='always'
                                   autoCapitalize='none'
                                   secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.view}/>


                    <View style={styles.inputviewtwo}>
                        <Image source={require('../../../../res/images/reg_img_repassword.png')} style={styles.images}
                               resizeMode='contain'
                        />

                        <TextInput
                                   onChangeText={(text)=>this.setState({
                                       repassword:text
                                   })}
                                   placeholder="  确认新密码"
                                   placeholderTextColor='#e2f0f7'
                                   style={styles.CodeInputStyle}
                                   clearButtonMode='always'
                                   autoCapitalize='none'
                                   secureTextEntry={true}

                        />

                    </View>
                    <View style={styles.codeview}/>


                    <View style={styles.button }>
                        <_Button
                                 text="重置密码" onPress={this.goToLoginScreen.bind(this)}
                                 addstyle_bt={{
                                     backgroundColor:'#7292a4',
                                     width:px3dp(530),
                                     height:px3dp(120),
                                     borderRadius:px3dp(20),
                                 }}
                                 addstyle_text={{
                                     color:'#ffffff',
                                     fontSize:px3dp(48),
                                 }}

                        />
                    </View>

                </Image>
                <Toast ref="toast"/>
            </View>
        );
    }
    // goBack(){
    //     this.props.navigator.pop({
    //         // component:HomeScreen,
    //         navigationBarHidden:true,
    //     })
    // }
    goToLoginScreen(){
        if(this.state.password===''){
            this.refs.toast.show('请输入密码',DURATION.LENGTH_SHORT);
            return;
        }else {
            password=this.state.password;
        }
        if(this.state.password!==this.state.repassword){
            this.refs.toast.show('输入的密码不一致',DURATION.LENGTH_SHORT);
            return;
        }
        if(this.state.password && this.state.repassword){
           /* const parmas={

                password:this.state.password,
                email_phone:this.state.email_phone,
                validate:this.state.validate
            };*/
            const params = {
                email_phone:this.props.navigation.state.params.email_phone,
                validate:this.props.navigation.state.params.validate,
                password:this.state.repassword
            };
            post(ResetURL,params,
                (result)=>{
                        if(result.errcode===1){
                            this.props.navigation.navigate('Login')
                        }else if(result.errcode===0){
                            this.refs.toast.show(result.errmsg,DURATION.LENGTH_SHORT);
                        }else if(result.errcode===-1){
                            this.refs.toast.show(result.errmsg,DURATION.LENGTH_SHORT);
                        }


                },
                (err)=>{
                    alert(err);
                }

                )


        }



    }


}
const styles=StyleSheet.create({
    container:{
        flex:1,


    },

    navStyle:{
        marginTop:px3dp(50),
        backgroundColor:'rgb(164,189,201)',
        height:px3dp(159),
        flexDirection:'row'
    },
    navBackIcon:{
        marginLeft:px3dp(54),
        width:px3dp(96),
        height:px3dp(96),
        // marginTop:px3dp(10),

    },
    loginText:{
        fontSize:px3dp(60),
        marginLeft:px3dp(330),
        marginTop:(px3dp(94)-px3dp(60))/2,
        color:'#3a3330'
    },
    view:{
        backgroundColor:'#456675',
        height:px3dp(6),
        width:px3dp(530),
        marginLeft:px3dp(300),
        marginRight:px3dp(250)

    },
    codeViewStyle:{
        // width:px3dp(200),
        // height:px3dp(90),
        backgroundColor:'rgb(114,146,164)',
        height:px3dp(90),
        width:px3dp(248),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:px3dp(20),
        marginLeft:px3dp(10)


    },
    codeview:{
        backgroundColor:'#456675',
        height:px3dp(6),
        marginLeft:px3dp(300),
        width:px3dp(530),
    },

    inputview:{
        marginTop:px3dp(268),
        flexDirection:'row',
        width:px3dp(530),


    },
    inputviewtwo:{
        marginTop:px3dp(158),
        flexDirection:'row',
        // width:px3dp(530),
        alignItems:'center'



    },

    button:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:px3dp(20)
    },
    bg:{
        // alignItems:'center',
        width:null,
        height:null,
        flex:1,
        // marginTop:100
    },
    TextInputStyle:{
        width:px3dp(530),
        marginLeft:10,

    },
    CodeInputStyle:{
        width:px3dp(530),
        marginLeft:px3dp(16)
    },
    images:{
        marginLeft:px3dp(214),
        width:px3dp(64),
        height:px3dp(64),

    }
});
