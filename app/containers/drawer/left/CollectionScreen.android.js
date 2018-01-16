import React,{Component}from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {px3dp} from "../../../util/ScreenUtil";
import _Button from "../../../components/_Button";


export default class CollectionScreen extends Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')}>
                    <View style={{flexDirection:'row',backgroundColor:'#a4bdca',justifyContent:'space-between',alignItems:'center'}}>
                        <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image
                                source={require('../../../../res/images/nav_back_nor.png')}
                                style={styles.back}
                            />
                        </TouchableOpacity>
                        </View>
                        <View>
                        <Text style={styles.text}>我的收藏</Text>
                        </View>
                        <View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row',margin:px3dp(30),justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row'}}>
                                    <Image source={require('../../../../res/images/reg_head_img_nor.png')} style={{ width:px3dp(200), height:px3dp(200),borderRadius:px3dp(100)}}/>
                                <View>
                                    <Text style={{margin:px3dp(30),fontSize:px3dp(48)}}>用户名:</Text>
                                    <Text style={{marginLeft:px3dp(30),fontSize:px3dp(48)}}>小明</Text>
                                </View>
                            </View>
                                <_Button
                                    text="取消收藏"
                                    addstyle_bt={{
                                        width:px3dp(400),
                                        height:px3dp(100),
                                        backgroundColor:'#d7c4bb',
                                        borderRadius:px3dp(50),
                                        alignItems:'center',
                                    }}
                                />
                        </View>
                        <View style={styles.text_input}>
                            <Text>分享内容</Text>
                        </View>
                        <View style={{flexDirection:'row',marginBottom:px3dp(30),marginRight:px3dp(30),marginLeft:px3dp(30),justifyContent:'space-between'}}>
                            <View>
                            <_Button
                                text="收藏"
                                addstyle_bt={{
                                    width:px3dp(150),
                                    height:px3dp(100),
                                    backgroundColor:'#FFF5EE',
                                    borderRadius:px3dp(15),
                                    alignItems:'center',
                                }}
                            />
                            </View>
                            <View>
                            <_Button
                                text="添加"
                                addstyle_bt={{
                                    width:px3dp(150),
                                    height:px3dp(100),
                                    backgroundColor:'#FFF5EE',
                                    borderRadius:px3dp(15),
                                    alignItems:'center',
                                }}
                            />
                            </View>
                            <View>
                            <_Button
                                text="评论"
                                addstyle_bt={{
                                    width:px3dp(150),
                                    height:px3dp(100),
                                    backgroundColor:'#FFF5EE',
                                    borderRadius:px3dp(15),
                                    alignItems:'center',
                                }}
                            />
                            </View>
                            <View>
                            <_Button
                                text="点赞"
                                addstyle_bt={{
                                    width:px3dp(150),
                                    height:px3dp(100),
                                    backgroundColor:'#FFF5EE',
                                    borderRadius:px3dp(15),
                                    alignItems:'center',
                                }}
                            />
                            </View>
                        </View>
                    </View>
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
        width: null,
        height: null,

    },
    back:{
        width:px3dp(96),
        height:px3dp(96),
        marginLeft:px3dp(50),
        alignItems:'flex-start',
    },
    text:{
        fontFamily:'方正兰亭黑简体 Regular',
        color:'#3a3330',
        alignSelf:'center',
        fontSize:px3dp(55)
    },
    text_input:{
        margin:px3dp(30),
        height:px3dp(600),
        backgroundColor:'#ffffff',
        borderColor: '#000000',
        borderWidth: 1
    },
});