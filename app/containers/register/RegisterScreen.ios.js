import {View, StyleSheet, Image, Alert, Text, TouchableOpacity,TextInput,AlertIOS,Keyboard} from 'react-native'
import React, {Component} from 'react'

import _Button from '../../components/_Button'
import {size,pixel,px3dp} from '../../util/ScreenUtil';
import _TextInput from '../../components/_TextInput'
import ImagePicker from 'react-native-image-picker'
import {ToastAndroid} from 'react-native'
import HomeScreen from '../../containers/home/HomeScreen.ios'
import {post} from '../../util/HttpUtil';
import {uploadImage} from '../../util/UploadIamge';
import {SendURL,RegisterURL} from '../../util/Url';
// import Toast,{DURATION} from 'react-native-easy-toast';

import Toast,{DURATION} from "../../components/Toast"

export default class RegisterScreen extends Component {

    static navigationOptions = ({navigation}) => ( {
        headerTitle: '注册',
        headerStyle: {
            backgroundColor: '#a4bdca',
            elevation: 0,
        },
        headerTitleStyle: {
            // fontFamily: '方正兰亭黑简体 Regular',
            color: '#3a3330',
            alignSelf: 'center',
        },
        headerLeft: (
            <TouchableOpacity onPress={() => {
                Keyboard.dismiss();
                navigation.goBack()
            }
            }>
                <Image
                    source={require('../../../res/images/nav_back_nor.png')}
                    style={{
                        width: px3dp(96),
                        height: px3dp(96),
                        marginLeft: px3dp(50)
                    }}
                />
            </TouchableOpacity>
        ),
        headerRight: (
            <View
                style={{
                    width: px3dp(96),
                    height: px3dp(96),
                    marginRight: px3dp(50)
                }}
            />
        )
    });


    constructor() {
        super();
        this.state = {
            nick: '',
            email_phone: '',
            password: '',
            repassword:'',
            validate:'',
            password_same:true,
            user_defined: false,
            imageUri: '',
            reg_result:true,
            countDown:false,
            countTitle:'获取验证码',
            disabled:false,
            isActived:false,

        }
    }

    _regTest_null(text){
        text==='' ? this.setState({
            reg_result:true
        }):null
    }

    _passwordValidate_null(text){
        text==='' ? this.setState({
            password_same:true
        }):null
    }


    _regTest(event){
        const reg_phone = /^[1][34578]\d{9}$/;
        const reg_email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        let prev = this.state.reg_result
        this.state.reg_result = reg_email.test(event.nativeEvent.text) || reg_phone.test(event.nativeEvent.text) || event.nativeEvent.text ===''
        if(this.state.reg_result!== prev){
            this.forceUpdate()
        }
            !this.state.reg_result
                ?this.refs.toast.show('电话号码或邮箱有误，请重新输入',DURATION.LENGTH_SHORT)

                :
                <Text/>


    }

    _test(event){
        if(event.nativeEvent.text===''){
            this.setState({
                password_same:true
            })
        }else {
            event.nativeEvent.text===this.state.password ?
                this.state.password_same=true:this.state.password_same=false,
                this._passwordValidate()
        }
            !this.state.password_same
                ?
                this.refs.toast.show('密码不一致，请重新输入',DURATION.LENGTH_SHORT)

                :
                    <Text/>

    }

    _passwordValidate(){
        this.forceUpdate()
    }

    _create() {
        if(this.state.email_phone ===''||this.state.reg_result===false){
            this.refs.toast.show('请输入手机号码或邮箱',DURATION.LENGTH_SHORT);
            return;
        }else if(this.state.password === ''||this.state.reg_result===false){
            this.refs.toast.show('请输入密码',DURATION.LENGTH_SHORT);
            return;
        }else if(this.state.validate ===''){
            this.refs.toast.show('请输入验证码',DURATION.LENGTH_SHORT);
            return
        }else {
            email_phone=this.state.email_phone;
            password = this.state.password;
            repassword=this.state.repassword;
            validate=this.state.validate;
        }

        if(this.state.email_phone&&this.state.password&&this.state.validate){
            let formData=new FormData()
            // let file={
            //     uri:this.state.imageUri,
            //     type:'mutipart/form-data',
            //     name:'image.png'
            // }
            // this.state.user_defined ? formData.append('avatar',file) : ''
            // formData.append('email_phone',this.state.email_phone)
            // formData.append('password',this.state.password)
            // formData.append('validate',this.state.validate)
            const params = {
                email_phone:this.state.email_phone,
                password:this.state.password,
                validate:this.state.validate
            };
            post(RegisterURL,params,
                (result)=>{
                    if(result.errcode===1){
                        this.refs.toast.show('注册成功',DURATION.LENGTH_SHORT);
                       /* this.props.navigator.push({
                            component:LoginScreen,
                            navigationBarHidden:true,
                        })*/


                        this.props.navigation.navigate('Home')

                    }
                    else if(result.errcode===-1){
                        alert(result.errmsg)
                    }else if(result.errcode===0){
                        alert(result.errmsg)
                    }
                },
                ()=>{
                    this.refs.toast.show('注册失败,请检查网络情况!',DURATION.LENGTH_SHORT);
                }
            )

        }


    }
    _sendMessage(){
        Keyboard.dismiss();
        if(this.state.email_phone==='') {
            this.refs.toast.show('请输入手机号码或邮箱', DURATION.LENGTH_SHORT);
        }else {
            const params = {
                email_phone: this.state.email_phone
            };
            post(SendURL, params,
                (result) => {
                    if (result.errcode === 1) {
                        let countNumber = 60
                        this.state.countDown ? null : this.setState({
                            disabled: !this.state.disabled,
                            isActived: !this.state.isActived
                        });
                        this.refs.toast.show('发送成功', DURATION.LENGTH_SHORT);
                        this.timer = setInterval(() => {
                            if (countNumber > 0) {
                                this.setState({
                                    countTitle: countNumber + '秒后重发'
                                });
                                countNumber--
                            } else {
                                countNumber = 60;
                                this.state.countTitle = '重新发送';
                                this.setState({
                                    isActived: !this.state.isActived,
                                    disabled: !this.state.disabled,
                                });
                                this.timer && clearInterval(this.timer)
                            }
                        }, 1000)
                    }
                    else if (result.errcode === 0) {
                        this.refs.toast.show(result.errmsg, DURATION.LENGTH_SHORT);
                    } else if (result.errcode === -1) {
                        this.refs.toast.show(result.errmsg, DURATION.LENGTH_SHORT);
                    }

                }, (error) => {
                    this.refs.toast.show('发送失败', DURATION.LENGTH_SHORT);
                    console.log(error)
                })
        }

    }

    componentWillUnmount(){
        this.timer && clearInterval(this.timer)
    }

    cameraAction() {
        ImagePicker.showImagePicker({
            title: '请选择',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择相册',
            maxWidth: 500,
            maxHeight: 500,
            quality: 0.75,
            allowsEditing: true,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        }, (response) => {
            if (response.didCancel) {
                return
            }
            else {
                let source = {uri: response.uri};
                this.setState({
                    user_defined: true,
                    imageUri: source
                });
            }
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={styles.container}>
                <Image style={styles.rgbg}source={require('../../../res/images/login_bg.png')}>
                    {/*<View style={styles.navStyle}>
                        <TouchableOpacity onPress={() => navigate('Home')}>
                            <Image source={require('../../../res/images/nav_back_nor.png')}
                                   style={styles.navBackIcon}
                                   resizeMode='contain'
                            />
                        </TouchableOpacity>
                        <Text style={[styles.registertext]}>注册</Text>
                    </View>*/}
                    <View style={styles.photostyle}>
                        <TouchableOpacity onPress={this.cameraAction.bind(this)}>
                        {
                            !this.state.user_defined ?


                            <Image style={styles.image}
                                   source={require('../../../res/images/reg_head_img_nor.png')}
                                   resizeMode="cover">
                                <Image source={require('../../../res/images/reg_carm_img_nor.png')}
                                       style={styles.takephoto}/>
                            </Image>
                            : <Image source={this.state.imageUri} style={styles.showImage} resizeMode="cover">
                            </Image>
                        }</TouchableOpacity>
                    </View>

                    <View style={styles.rginputstyle}>
                        <Image  source={require('../../../res/images/login_img_telenum.png')} style={styles.icon_image}
                                resizeMode='contain'
                        />
                        <TextInput onChangeText={(text) => {this.setState({
                                   email_phone: text,})
                                   this._regTest_null(text)}}
                                   onEndEditing={(event)=>{
                                       this._regTest(event)
                                   }}
                                   placeholder="手机号码/邮箱"
                                   placeholderTextColor='#e2f0f7'
                                   style={styles.rgTextInputStyle}
                                   // clearButtonMode='always'
                                   autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.rgline}/>
                    <View style={styles.rgpwinputstyle}>
                        <Image  source={require('../../../res/images/login_img_password.png')}
                                style={styles.icon_image}
                                resizeMode='contain'
                        />
                        <TextInput
                                   onEndEditing={(event)=>{
                                       this.state.password=event.nativeEvent.text
                                   }}
                                   placeholder="密码"
                                   placeholderTextColor='#e2f0f7'
                                   style={styles.rgTextInputStyle}
                                   autoCapitalize='none'
                                   secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.rgline}/>
                    <View style={styles.rgpwinputstyle}>
                        <Image  source={require('../../../res/images/reg_img_repassword.png')}
                                style={styles.icon_image}
                                resizeMode='contain'
                        />
                        <TextInput
                                   onChangeText={(text)=>{
                                       this._passwordValidate_null(text)
                                   }}
                                   onEndEditing=
                                       {(event)=>{
                                           this._test(event)
                                       }}

                                   placeholder="确认密码"
                                   placeholderTextColor='#e2f0f7'
                                   style={styles.rgTextInputStyle}
                                   autoCapitalize='none'
                                   secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.rgline}/>

                    <View style={styles.rgvdinputstyle}>
                        <Image  source={require('../../../res/images/reg_img_message.png')}
                                style={styles.icon_image}
                                resizeMode='contain'
                        />
                        <TextInput
                                   onChangeText={(text) => this.setState({validate: text})}
                                   value={this.state.validate}
                                   placeholder="验证码"
                                   placeholderTextColor='#e2f0f7'
                                   style={styles.rgvdTextInputStyle}
                                   autoCapitalize='none'

                        />

                        <_Button addstyle_bt={[styles.login_massagestyle,{backgroundColor:this.state.isActived?'#9eadb5':'#7292a4'}]}
                                 text={this.state.countTitle}
                                 disabled={this.state.disabled}
                                 onPress={this._sendMessage.bind(this)}
                        />

                    </View>
                    <View style={styles.rgvdline}/>

                    <_Button text="建立账户" onPress={this._create.bind(this)}
                                 addstyle_bt={{
                                     alignSelf:'center',
                                     backgroundColor:'#7292a4',
                                     width:px3dp(530),
                                     height:px3dp(90),
                                     borderRadius:px3dp(20),
                                 }}
                                 addstyle_text={{
                                     color:'#ffffff',
                                     fontSize:px3dp(48),
                                 }}
                        />

                </Image>

                <Toast ref="toast"/>
            </View>

        )
    }
    // goBack(){
    //     this.props.navigator.pop({
    //         component:HomeScreen,
    //         navigationBarHidden:true,
    //     })
    // }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    paddingL_add: {
        paddingLeft: 5
    },
    image: {
        width: px3dp(200),
        height: px3dp(200),
        alignSelf:'center',
    },
    showImage: {
        width: px3dp(200),
        height: px3dp(200),
        borderRadius: px3dp(100),
        alignSelf:'center'
    },
    takephoto:{
        width:px3dp(64),
        height:px3dp(64),
        marginTop:px3dp(142),
        marginLeft:px3dp(126)
    },
    navBackIcon: {
        marginLeft: px3dp(54),
        width: px3dp(96),
        height: px3dp(96),
        // marginTop: (px3dp(94) - px3dp(60)) / 2,
        alignSelf:'center'

    },
    navStyle:{
        marginTop:px3dp(50),
        backgroundColor:'rgb(164,189,201)',
        height:px3dp(159),
        flexDirection:'row',
    },
    registertext:{
        fontSize:px3dp(60),
        marginLeft:px3dp(354),
        marginTop:(px3dp(94)-px3dp(60))/2,
        color:'#3a3330'
    },
    rgbg:{
        width:null,
        height:null,
        flex:1,
        // alignItems:'center',
    },
    rginputstyle:{
        marginTop:px3dp(44),
        flexDirection:'row',
        width:px3dp(530),
    },
    rgpwinputstyle:{
        marginTop:px3dp(96),
        flexDirection:'row',
        width:px3dp(530),
    },

    rgvdinputstyle:{
        marginTop:px3dp(96),
        flexDirection:'row',
        width:px3dp(320),
    },
    icon_image:{
        marginLeft:px3dp(214),
        width:px3dp(64),
        height:px3dp(64),
    },
    rgTextInputStyle:{
        width:px3dp(530),
        marginLeft:10,
    },
    rgvdTextInputStyle:{
        width:px3dp(530)-px3dp(248)-px3dp(10),
        marginLeft:10,
    },
    rgline:{
        backgroundColor:'#456675',
        height:px3dp(6),
        marginLeft:px3dp(300),
        width:px3dp(530)
    },
    rgvdline:{
        backgroundColor:'#456675',
        height:px3dp(6),
        marginLeft:px3dp(300),
        width:px3dp(530)-px3dp(248)-px3dp(10)
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
    rgButtonStyle:{
        height:px3dp(90),
        marginTop:px3dp(126),
        width:px3dp(530),
        alignSelf:'center',
        alignItems:'center',
        borderRadius:px3dp(20),
    },
    rgBtnText:{
        color:'#fff',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:px3dp(26)
    },
    reg_test:{
        paddingLeft:px3dp(300),
        width:px3dp(830),
        height:px3dp(10),
    },
    reg_warn:{
        color:'#f35757',

    },
    photostyle:{
        width:px3dp(200),
        height:px3dp(200),
        alignSelf:'center'
    }

});