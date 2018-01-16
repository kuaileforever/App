import {View, Text, StyleSheet, Image, TouchableOpacity,Keyboard,BackHandler} from 'react-native'
import React, {Component} from 'react'
import _Button from '../../components/_Button'
import {size,pixel,px3dp} from '../../util/ScreenUtil'


export default class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            isActive_wechat:false,
            isActive_qq:false,
            isActive_sina:false
        }
    }

    componentWillMount(){
        Keyboard.dismiss()
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../res/images/first_bg.png')}>
                    <View style={styles.logo}/>
                    <Text style={styles.logo_text}>To Do List</Text>
                    <_Button
                        text="登录"
                        onPress={() => navigate('Login')}
                        addstyle_bt={{
                            width:px3dp(700),
                            height:size.height*0.083,
                            backgroundColor:'#d7c4bb',
                            borderRadius:px3dp(50)
                        }}
                    />
                    <_Button
                            text="注册"
                             onPress={() => navigate('Register')}
                            addstyle_bt={{
                                width:px3dp(700),
                                height:size.height*0.083,
                                backgroundColor:'#d7c4bb',
                                borderRadius:px3dp(50)
                            }}
                    />
                    <Text style={[styles.forget]} onPress={()=>navigate('ForgetPassword')}>忘记密码？</Text>
                    <View style={styles.footer}>
                        <View style={styles.otherLogin_contanier}>
                            <View style={styles.hr}/>
                            <Text>其他登录方式</Text>
                            <View style={styles.hr}/>
                        </View>
                        <View style={styles.otherLogin}>
                            <TouchableOpacity onPress={()=>{this.setState({isActive_wechat:!this.state.isActive_wechat})}}>
                                {
                                    !this.state.isActive_wechat
                                        ? <Image style={styles.otherLogin_image} source={require('../../../res/images/wechat_btn_nor.png')}/>
                                        : <Image style={styles.otherLogin_image} source={require('../../../res/images/wechat_btn_highlighted.png')}/>
                                }
                                <View style={styles.otherLogin_fontContainer}>
                                    <Text style={styles.otherLogin_font}>微信</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({isActive_qq:!this.state.isActive_qq})}>
                                {
                                    !this.state.isActive_qq
                                        ? <Image style={styles.otherLogin_image} source={require('../../../res/images/QQ_btn_nor.png')}/>
                                        : <Image style={styles.otherLogin_image} source={require('../../../res/images/QQ_btn_highlighted.png')}/>
                                }
                                <View style={styles.otherLogin_fontContainer}>
                                    <Text style={styles.otherLogin_font}>QQ</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({isActive_sina:!this.state.isActive_sina})}>
                                {
                                    !this.state.isActive_sina
                                        ? <Image style={styles.otherLogin_image} source={require('../../../res/images/sina_btn_nor.png')}/>
                                        : <Image style={styles.otherLogin_image} source={require('../../../res/images/sina_btn_highlighted.png')}/>
                                }
                                <View style={styles.otherLogin_fontContainer}>
                                    <Text style={styles.otherLogin_font}>微博</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Image>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#123"
    },
    bg:{
        alignItems:'center',
        width:null,
        height:null,
        flex:1
    },
    logo:{
        width:size.height*0.102,
        height:size.height*0.102,
        marginTop:size.height*0.09,
        borderWidth:px3dp(3),
        borderRadius:px3dp(100),
        backgroundColor:'#bbc0d7',
        borderColor:'#bbc0d7'
    },
    logo_text: {
        marginTop:size.height*0.0462,
        color:'#3a3330',
        fontFamily:'Courier New Regular',
        fontSize:px3dp(72)
    },
    login_register: {
        width: size.width * 0.65,
        height: size.height * 0.05,
        borderWidth: 1,
        borderColor: '#292929',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: px3dp(20),
        justifyContent: 'center'
    },
    forget: {
        marginTop:px3dp(60),
        width: size.width * 0.65,
        paddingRight: size.width*0.03,
        textAlign: 'right',
        color: '#00BFFF',
        fontSize:px3dp(40)
    },
    otherLogin_contanier: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:'center'
    },
    hr: {
        height: pixel * 2,
        width:px3dp(330),
        backgroundColor: '#0f0f0f',
    },
    otherLogin_text:{
        fontFamily:'方正兰亭超细黑简',
        fontSize:px3dp(36)
    },

    otherLogin_image:{
        width:size.height*0.0822,
        height:size.height*0.0822
    },
    otherLogin: {
        marginTop:px3dp(85),
        width: size.width,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    otherLogin_fontContainer:{
        marginTop:px3dp(36),
        alignItems:'center',
    },
    otherLogin_font:{
        fontFamily:'方正兰亭超细黑简',
        fontSize:px3dp(36),
        color:'#3a3330'
    },
    footer:{
        marginTop:size.height*0.12
    }
});