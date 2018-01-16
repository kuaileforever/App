import {View, StyleSheet, Image, TouchableOpacity, ToastAndroid, Text} from 'react-native'
import React, {Component} from 'react'
import _Button from '../../../components/_Button'
import {px3dp} from '../../../util/ScreenUtil'
import {post} from '../../../util/HttpUtil'
import {ForgetURL, ResetURL, SendURL} from '../../../util/Url'
import _TextInput from '../../../components/_TextInput'

export default class ForgetPasswordScreen extends Component {
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '忘记密码',
        headerStyle: {
            backgroundColor: '#a4bdca',
            elevation: 0
        },
        headerTitleStyle: {
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

    constructor() {
        super();
        this.state = {
            email_phone: '',
            reg_result: true,
            code: '',
            countDown: false,
            disabled: false,
            countTitle: '获取验证码',
            isActived: false,
        };
    }

    _forgetPassTest_null(text) {
        text === '' ? this.setState({
            reg_result: true,
        }) : null
    }

    _forgetPassTest(text) {
        const forgetPass_phone = /^[1][34578]\d{9}$/;
        const forgetPass_email_phone = /^(\w-*\.*)+@(\w-?)+(\.\w{2,4})+$/;
        this.setState({
            reg_result: forgetPass_phone.test(text) || forgetPass_email_phone.test(text) || text === ''
        })
    }

    _sendMessage() {
        if (this.state.email_phone === '' || this.state.reg_result === false) {
            ToastAndroid.show('请输入正确的手机号码或邮箱', 0.2)
        } else {
            const params = {
                email_phone: this.state.email_phone
            };
            post(ForgetURL, params,
                (result) => {
                    if (result.errcode !== 1) {
                        ToastAndroid.show(result.errmsg, 0.1);
                        return;
                    }
                    let countNumber = 60;
                    this.setState({
                        disabled: !this.state.disabled,
                        isActived: !this.state.isActived
                    });
                    ToastAndroid.show("发送成功", 1);
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
                }, (error) => {
                    ToastAndroid.show('发送失败', 1);
                }
            )
        }
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
    }

    _positive() {
        if (this.state.email_phone === '' || this.state.reg_result === false) {
            ToastAndroid.show('请输入正确的手机号码或邮箱', 0.2);
        }else if(this.state.code ===''){
            ToastAndroid.show('请输入验证码', 0.2);
        }else {
            const params = {
                email_phone: this.state.email_phone,
                validate: this.state.code
            };
            post(ResetURL,
                params,
                (result) => {
                    if (result.errcode === 1) {
                        this.props.navigation.navigate('ResetPassword', {
                            email_phone: this.state.email_phone,
                            validate: this.state.code
                        })
                    } else if (result.errcode === 0) {
                        ToastAndroid.show(result.errmsg, 0.5)
                    } else if (result.errcode === -1) {
                        ToastAndroid.show(result.errmsg, 0.5)
                    } else if (result.errcode === -2) {
                        ToastAndroid.show(result.errmsg, 0.5)
                    }
                }
            )
        }

    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../../res/images/reg_bg.png')}>
                    <View style={styles.wrap}>
                        <View style={styles.image_wrap}>
                            <Image source={require('../../../../res/images/login_img_telenum.png')}
                                   style={styles.image}/>
                        </View>
                        <View style={styles.input_wrap}>
                            <_TextInput
                                onChangeText={(text) => {
                                    this.setState({
                                        email_phone: text,
                                    });
                                    this._forgetPassTest_null(text)
                                }}
                                onEndEditing={(event) => {
                                    this._forgetPassTest(event.nativeEvent.text)
                                }}
                                placeholder='手机号码/邮箱地址'
                                addstyle={{
                                    width: px3dp(530)
                                }}
                            />
                            <View style={styles.input_hr}/>
                            {
                                !this.state.reg_result
                                    ? <View style={styles.reg_test}>
                                        <Text style={[, styles.reg_warn]}>输入有误,请重新输入</Text>
                                    </View>
                                    : <View style={styles.reg_test}>
                                        <Text/>
                                    </View>
                            }
                        </View>
                    </View>
                    <View style={styles.wrap_code}>
                        <View style={styles.image_wrap}>
                            <Image source={require('../../../../res/images/reg_img_message.png')} style={styles.image}/>
                        </View>
                        <View style={styles.input_wrap}>
                            <_TextInput
                                onChangeText={(text) => this.setState({
                                    code: text,
                                })}
                                placeholder='验证码'
                                addstyle={{
                                    width: px3dp(280)
                                }}
                            />
                            <View style={styles.input_hr_last}/>
                        </View>
                        <_Button
                            addstyle_bt={[styles.send_message, {backgroundColor: this.state.isActived ? '#9eadb5' : '#7292a4'}]}
                            addstyle_text={styles.send_font}
                            text={this.state.countTitle}
                            disabled={this.state.disabled}
                            onPress={this._sendMessage.bind(this)}
                        />
                    </View>
                    <_Button text="确认"
                             onPress={
                                 this._positive.bind(this)
                             }
                             addstyle_bt={styles.positive}
                             addstyle_text={styles.positive_text}
                    />
                </Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        alignItems: 'center',
        width: null,
        height: null,
        flex: 1
    },
    wrap: {
        flexDirection: 'row',
        marginTop: px3dp(268)
    },
    wrap_code: {
        flexDirection: 'row',
        marginTop: px3dp(158)
    },
    image_wrap: {
        paddingTop: px3dp(24)
    },
    image: {
        width: px3dp(64),
        height: px3dp(64)
    },
    input_wrap: {
        flexDirection: 'column'
    },
    input_hr: {
        height: px3dp(6),
        width: px3dp(530),
        backgroundColor: '#456675',
        marginLeft: px3dp(16)
    },
    input_hr_last: {
        height: px3dp(6),
        width: px3dp(280),
        backgroundColor: '#456675',
        marginLeft: px3dp(16)
    },
    send_message: {
        marginTop: px3dp(18),
        width: px3dp(248),
        height: px3dp(90),
        backgroundColor: '#7292a4',
        borderRadius: px3dp(20)
    },
    send_font: {
        color: '#ffffff'
    },
    positive: {
        width: px3dp(530),
        height: px3dp(110),
        backgroundColor: '#7292a4',
        borderRadius: px3dp(20),
        marginLeft: px3dp(70),
        marginTop: px3dp(126)
    },
    positive_text: {
        color: '#ffffff'
    },
    reg_test: {
        paddingLeft: px3dp(10),
        width: px3dp(550),
        height: px3dp(10)
    },
    reg_warn: {
        color: '#f35757'
    },
});
