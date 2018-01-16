import React,{Component}from 'react'
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native'
import {px3dp} from "../../../util/ScreenUtil";

export default class TimeStampScreen extends Component {
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
                            <Text style={styles.text}>时间戳</Text>
                        </View>
                        <View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.text_input} onPress={()=> {navigate('Feeling')}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:px3dp(55),backgroundColor:'#FF7256',borderRadius:px3dp(100),margin:px3dp(20)}}>任务</Text>
                            <Text style={{fontSize:px3dp(55),margin:px3dp(20)}}>看书</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:px3dp(55),backgroundColor:'#FF7256',borderRadius:px3dp(100),margin:px3dp(20)}}>感受</Text>
                            <Text style={{fontSize:px3dp(55),margin:px3dp(20)}}>今天看了xx书，讲了xx，好开心</Text>
                        </View>
                    </TouchableOpacity>
                        <Text style={{margin:px3dp(30),fontSize:px3dp(45),margin:px3dp(20)}}>2017.09.14 10:00</Text>
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
        height:px3dp(300),
        backgroundColor:'#ffffff',
        borderColor: '#000000',
        borderWidth: 1
    },
});