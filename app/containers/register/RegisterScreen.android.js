import {View, StyleSheet, Image, Text, TouchableOpacity, Keyboard} from 'react-native'
import React, {Component} from 'react'
import _Button from '../../components/_Button'
import {_RegStrategy} from '../../components/_RegStrategy'
import {px3dp} from '../../util/ScreenUtil'
import _TextInput from '../../components/_TextInput'
import ImagePicker from 'react-native-image-picker'
import {ToastAndroid} from 'react-native'
import {post} from '../../util/HttpUtil'
import {uploadImage} from '../../util/UploadIamge'
import {SendURL, RegisterURL} from '../../util/Url'

export default class RegisterScreen extends Component {

    static navigationOptions = ({navigation}) => ( {
        headerTitle: '注册',
        headerStyle: {
            backgroundColor: '#a4bdca',
            elevation: 0,
        },
        headerTitleStyle: {
            fontFamily: '方正兰亭黑简体 Regular',
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
            email_phone: '',
            password: '',
            repassword: '',
            validate: '',
            password_same: true,
            user_defined: false,
            imageUri: '',
            reg_result: true,
            countDown: false,
            countTitle: '获取验证码',
            disabled: false,
            isActived: false,
        }
    }

    _regTest_null(text) {
        text === '' ? this.setState({
            reg_result: true,
        }) : null
    }

    _passwordValidate_null(text) {
        text === '' ? this.setState({
            password_same: true
        }) : null
    }

    _regTest(event) {
        const reg_phone = /^[1][34578]\d{9}$/;
        const reg_email = /^(\w-*\.*)+@(\w-?)+(\.\w{2,4})+$/;
        this.setState({
            reg_result: reg_phone.test(event.nativeEvent.text) || reg_email.test(event.nativeEvent.text) || event.nativeEvent.text === ''
        })
    }

    _passwordValidate() {
        this.forceUpdate()
    }

    _create() {
        if (_RegStrategy(this.state)) {
            if (this.state.validate === '') {
                ToastAndroid.show('请输入验证码后注册', 0.2)
            } else {
                let formData = new FormData();
                let file = {
                    uri: this.state.imageUri,
                    type: 'mutipart/form-data',
                    name: 'image.png'
                };
                this.state.user_defined ? formData.append('avatar', file) : '';
                formData.append('email_phone', this.state.email_phone);
                formData.append('password', this.state.password);
                formData.append('validate', this.state.validate);
                uploadImage(RegisterURL, formData,
                    (result) => {
                        if (result.errcode === 1) {
                            ToastAndroid.show('注册成功', 0.5)
                            this.props.navigation.navigate('Home')
                        } else {
                            ToastAndroid.show(result.errmsg, 0.5)
                        }
                    },
                    () => {
                        ToastAndroid.show('注册失败,请检测网络情况', 0.5)
                    }
                )
            }
        }
    }

    _sendMessage() {
        Keyboard.dismiss();
        if (_RegStrategy(this.state)) {
            const params = {
                email_phone: this.state.email_phone
            };
            post(SendURL, params, (result) => {
                if (result.errcode !== 1) {
                    ToastAndroid.show(result.errmsg, 0.1)
                    return
                }
                let countNumber = 60;
                this.state.countDown ? null : this.setState({
                    disabled: !this.state.disabled,
                    isActived: !this.state.isActived
                });
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
            }, () => {
                ToastAndroid.show('发送失败，请检查网络情况', 0.2);
            })
        }
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
    }

    cameraAction() {
        ImagePicker.showImagePicker({
            title: '请选择:',
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
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../res/images/login_bg.png')}>
                    <TouchableOpacity onPress={this.cameraAction.bind(this)}>
                        {
                            !this.state.user_defined
                                ? <Image source={require('../../../res/images/reg_head_img_nor.png')}
                                         style={styles.image_logo}/>
                                : <Image source={this.state.imageUri} style={styles.image_logo}/>
                        }
                        <View style={styles.carm_wrap}>
                            <Image source={require('../../../res/images/reg_carm_img_nor.png')} style={styles.carm}/>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.wrap}>
                        <View style={styles.image_wrap}>
                            <Image source={require('../../../res/images/login_img_telenum.png')} style={styles.image}/>
                        </View>
                        <View style={styles.input_wrap}>
                            <_TextInput
                                onChangeText={(text) => {
                                    this.setState({
                                        email_phone: text,
                                    });
                                    this._regTest_null(text)
                                }
                                }
                                onEndEditing={(event) => {
                                    this._regTest(event);
                                }}
                                placeholder='手机号码/邮箱'
                                addstyle={{
                                    width: px3dp(530),
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
                    <View style={styles.wrap}>
                        <View style={styles.image_wrap}>
                            <Image source={require('../../../res/images/login_img_password.png')} style={styles.image}/>
                        </View>
                        <View style={styles.input_wrap}>
                            <_TextInput
                                onChangeText={(text) => {
                                    this.setState({
                                        password: text
                                    })
                                }}
                                onEndEditing={(event) => {
                                    this.state.password = event.nativeEvent.text
                                }}
                                secureTextEntry={true}
                                placeholder='密码'
                                addstyle={{
                                    width: px3dp(530)
                                }}
                            />
                            <View style={styles.input_hr}/>
                        </View>
                    </View>
                    <View style={styles.wrap}>
                        <View style={styles.image_wrap}>
                            <Image source={require('../../../res/images/reg_img_repassword.png')} style={styles.image}/>
                        </View>
                        <View style={styles.input_wrap}>
                            <_TextInput
                                onChangeText={(text) => {
                                    this.state.repassword = text;
                                    this._passwordValidate_null(text);
                                }}
                                onEndEditing={(event) => {
                                    this.state.password === event.nativeEvent.text ? this.setState({
                                        password_same: true
                                    }) : this.setState({
                                        password_same: false
                                    })
                                }}
                                secureTextEntry={true}
                                placeholder='确认密码'
                                addstyle={{
                                    width: px3dp(530)
                                }}
                            />
                            <View style={styles.input_hr}/>

                        </View>
                    </View>
                    <View style={styles.wrap}>
                        <View style={styles.image_wrap}>
                            <Image source={require('../../../res/images/reg_img_message.png')} style={styles.image}/>
                        </View>
                        <View style={styles.input_wrap}>
                            <_TextInput
                                onChangeText={(text) => {
                                    this.setState({
                                        validate: text,
                                    })
                                }
                                }
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

                    <_Button text="创建账号"
                             addstyle_bt={styles.setup}
                             addstyle_text={styles.setup_text}
                             onPress={this._create.bind(this)}
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
        alignItems: 'center',
        marginTop: px3dp(90),
    },
    input_wrap: {
        flexDirection: 'column',
    },
    input_hr: {
        height: px3dp(6),
        width: px3dp(530),
        backgroundColor: '#456675'
    },
    input_hr_last: {
        height: px3dp(6),
        width: px3dp(280),
        backgroundColor: '#456675'
    },
    paddingL_add: {
        paddingLeft: 5
    },
    image_logo: {
        width: px3dp(200),
        height: px3dp(200),
        borderRadius: px3dp(100)
    },
    carm: {
        width: px3dp(64),
        height: px3dp(64)
    },
    image: {
        width: px3dp(64),
        height: px3dp(64),
    },
    carm_wrap: {
        position: 'absolute',
        top: px3dp(142),
        left: px3dp(130)
    },
    send_message: {
        marginTop: px3dp(18),
        width: px3dp(248),
        height: px3dp(90),
        // backgroundColor:'#7292a4',
        borderRadius: px3dp(20),
    },
    send_font: {
        color: '#ffffff'
    },
    setup: {
        width: px3dp(530),
        height: px3dp(110),
        backgroundColor: '#7292a4',
        borderRadius: px3dp(20),
        marginLeft: px3dp(30),
        marginTop: px3dp(126)
    },
    setup_text: {
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
