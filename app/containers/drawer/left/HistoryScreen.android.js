import React,{Component}from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid, Image, TextInput} from 'react-native'
import {px3dp} from "../../../util/ScreenUtil";

export default class HistoryScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')}>
                    <View style={{flexDirection:'row',backgroundColor:'#a4bdca',justifyContent:'space-between',alignItems:'center'}}>
                        <View>
                            <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                                 <Image
                                    source={require('../../../../res/images/nav_back_nor.png')}
                                    style={styles.back}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.titletext}>历史搜索</Text>
                        </View>
                        <View>
                        </View>
                    </View>
                    <View style={styles.searchBox}>
                        <Image source={require('../../../../res/images/search.png')} style={styles.searchIcon}/>
                            <TextInput
                                keyboardType='web-search'
                                placeholder='搜索'
                                style={styles.inputText}/>
                        <Image source={require('../../../../res/images/voice.png')} style={styles.voiceIcon}/>
                    </View>
                    <View style={{flexDirection:'row',marginTop:px3dp(60),backgroundColor:'#ffffff',justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={{marginLeft:px3dp(80),marginTop:px3dp(30),justifyContent:'flex-end'}}>时间</Text>
                        <Text style={{marginRight:px3dp(80),marginTop:px3dp(30),justifyContent:'flex-end'}}>内容</Text>
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
        flex: 1
    },
    back:{
        width:px3dp(96),
        height:px3dp(96),
        marginLeft:px3dp(50),
        alignSelf:'flex-start'
    },
    titletext:{
        fontFamily:'方正兰亭黑简体 Regular',
        color:'#3a3330',
        alignSelf:'center',
        fontSize:px3dp(55)
    },
    inputText: {
        flex:1,
        backgroundColor: 'transparent',
        fontSize: 14,
        width:200,
        height:200,

    },
    searchBox: {
        height: 30,
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 12,
        marginRight: 12,
        marginTop:20,
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 16,
        height: 16,
        resizeMode: 'stretch'
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
});