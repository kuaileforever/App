import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity

} from 'react-native';
import _Button from '../../../components/_Button'
import {size,pixel,px3dp} from '../../../util/ScreenUtil';
import HomeScreen from '../../home/HomeScreen'
import Resetting from '../../../containers/password/resetpassword/ResetPassword.ios'
import {post} from '../../../util/HttpUtil';
import {SendURL,ForgetURL,ResetURL} from '../../../util/Url';
import Toast,{DURATION} from '../../../components/Toast';

// var {width,height} = Dimensions.get('window');
export default class ForgetPassword extends Component {

    static navigationOptions = ({navigation}) => ( {
        headerTitle: '忘记密码',
        headerStyle: {
            backgroundColor: '#a4bdca',
            elevation: 0
        },
        headerTitleStyle: {
            // fontFamily: '方正兰亭黑简体 Regular',
            color: '#3a3330',
            alignSelf: 'center',
            right: px3dp(50),
        },
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../../../res/images/nav_back_nor.png')}
                    style={{
                        width: px3dp(96),
                        height: px3dp(96),
                        marginLeft: px3dp(50)
                    }}
                />
            </TouchableOpacity>
        )
    });



    constructor(props) {
        super(props);
        this.state = {
            email_phone: '',
            reg_result:true,
            validate:'',
            countDown:false,
            disabled:false,
            countTitle:'获取验证码',
            isActived:false,
        };
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>

                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')}>
                    {/*<View style={styles.navStyle}>
                        <TouchableOpacity onPress={() => navigate('Home')}>
                            <Image source={require('../../../../res/images/nav_back_nor.png')}
                                   style={styles.navBackIcon}
                                   resizeMode='contain'
                            />
                        </TouchableOpacity>
                        <Text style={[styles.loginText]}>忘记密码</Text>
                    </View>*/}
                    <View style={styles.inputview}>
                        <Image source={require('../../../../res/images/login_img_telenum.png')}
                               style={styles.images}
                               resizeMode='contain'
                        />

                        <TextInput
                                   onChangeText={(text)=>this.setState({
                                       email_phone:text
                                   })}
                                   placeholder=" 手机号码/邮箱地址"
                                   placeholderTextColor='#e2f0f7'
                                   style={styles.TextInputStyle}
                                   clearButtonMode='always'
                                   autoCapitalize='none'
                                   onEndEditing={(event)=>{
                                       this._forgetPassTest(event)
                                   }}
                        />
                    </View>
                    <View style={styles.view}/>


                    <View style={styles.inputviewtwo}>
                        <Image source={require('../../../../res/images/reg_img_message.png')}
                               style={styles.images}
                               resizeMode='contain'
                        />

                        <TextInput
                                   onChangeText={(text)=>this.setState({
                                       validate:text
                                   })}
                                   placeholder="  验证码"
                                    //  提示文字颜色
                                   placeholderTextColor='#e2f0f7'
                                   style={styles.CodeInputStyle}
                                   clearButtonMode='always'
                                   keyboardType="number-pad"



                        />
                        <_Button addstyle_bt={[styles.login_massagestyle,{backgroundColor:this.state.isActived?'#9eadb5':'#7292a4'}]}
                                 text={this.state.countTitle}
                                 disabled={this.state.disabled}
                                 onPress={this._sendMessage.bind(this)}
                        />
                    </View>
                    <View style={styles.codeview}/>


                    <View style={styles.button }>
                        <_Button text="确定" onPress={this.goToResetting.bind(this)}
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
    //         component:HomeScreen,
    //         navigationBarHidden:true,
    //     })
    // }

    goToResetting(){
        if(this.state.email_phone===''){
            this.refs.toast.show('请输入手机号码或邮箱',DURATION.LENGTH_SHORT);
            return;
        }else if(this.state.validate===''){
            this.refs.toast.show('请输入验证码',DURATION.LENGTH_SHORT);
            return;
        } else {
            email_phone=this.state.email_phone;
            validate=this.state.validate;
        }
        if(this.state.email_phone && this.state.validate){
            const parmas={
                email_phone:this.state.email_phone,
                validate:this.state.validate
            };
            post(ResetURL,parmas,
                (result)=>{
                        if(result.errcode===1){
                            this.props.navigation.navigate('ResetPassword', {
                                email_phone: this.state.email_phone,
                                validate: this.state.code
                            })
                        }else if(result.errcode===-1){
                            alert(result.errmsg)
                        }else if(result.errcode===-2){
                            alert(result.errmsg)
                        }else if(result.errcode===-3){
                            alert(result.errmsg)
                        }else if(result.errcode===404){
                            alert(result.errmsg)
                        }


                },
                (err)=>{
                    alert(err);
                }
                )


            // alert('aaa')
        }



    }

    _forgetPassTest(event) {
        const reg_phone = /^[1][34578]\d{9}$/;
        const reg_email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        let prev = this.state.reg_result
        this.state.reg_result = reg_email.test(event.nativeEvent.text) || reg_phone.test(event.nativeEvent.text) || event.nativeEvent.text ===''
        if(this.state.reg_result!== prev){
            this.forceUpdate()
        }
        !this.state.reg_result
            ?this.refs.toast.show('输入有误，请重新输入',DURATION.LENGTH_SHORT)

            :
            <Text/>

    }

    _sendMessage(){
        if(this.state.email_phone===''){
            this.refs.toast.show('请输入手机号码或邮箱',DURATION.LENGTH_SHORT)
        }else {
        const params={
            email_phone:this.state.email_phone
        };
        post(ForgetURL,params,
            (result)=>{
                    if(result.errcode===1){

                        let countNumber=60
                        this.state.countDown ? null :this.setState({
                            disabled:!this.state.disabled,
                            isActived:!this.state.isActived
                        });
                        this.refs.toast.show('发送成功',DURATION.LENGTH_SHORT);
                        this.timer=setInterval(()=>{
                            if(countNumber>0){
                                this.setState({
                                    countTitle:countNumber+'秒后重发'
                                });
                                countNumber--
                            }else {
                                countNumber=60;
                                this.state.countTitle='重新发送';
                                this.setState({
                                    isActived:!this.state.isActived,
                                    disabled:!this.state.disabled,
                                });
                                this.timer && clearInterval(this.timer)
                            }
                        },1000)

                    }else {
                         this.refs.toast.show(result.errmsg,DURATION.LENGTH_SHORT);

                    }


            },(error)=>{
                this.refs.toast.show('发送失败',DURATION.LENGTH_SHORT);
                console.log(error)
            })
        }

    }

    componentWillUnmount(){
        this.timer && clearInterval(this.timer)
    }


}

const styles=StyleSheet.create({
    container:{
        flex:1,


    },
    login_massagestyle:{
        width:px3dp(248),
        marginLeft:px3dp(10),
        backgroundColor:'rgb(114,146,164)',
        height:px3dp(90),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:px3dp(20),
        marginTop:px3dp(-120)+px3dp(89)
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

    codeview:{
        backgroundColor:'#456675',
        height:px3dp(6),
        marginLeft:px3dp(300),
        width:px3dp(530)-px3dp(248)-px3dp(10),
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
        marginTop:px3dp(26)
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
      width:px3dp(530)-px3dp(248),
      marginLeft:px3dp(16)
    },
    images:{
        marginLeft:px3dp(214),
        width:px3dp(64),
        height:px3dp(64),

    }
});



