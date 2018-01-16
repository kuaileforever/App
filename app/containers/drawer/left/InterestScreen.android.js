import React,{Component}from 'react'
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native'
import {px3dp} from "../../../util/ScreenUtil";

export default class InterestScreen extends Component {
    render(){
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
                        <Text style={styles.text}>我的关注</Text>
                        </View>
                        <View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:px3dp(30)}}>
                        <Text style={{backgroundColor:'#ffffff',width:px3dp(200),borderColor: '#000000', borderWidth: 1}}>关注</Text>
                        <Text style={{backgroundColor:'#ffffff',width:px3dp(200),borderColor: '#000000', borderWidth: 1}}>粉丝</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:px3dp(30),justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../../../../res/images/reg_head_img_nor.png')} style={{ width:px3dp(120), height:px3dp(120),borderRadius:px3dp(100)}}/>
                            <View>
                                <Text style={{margin:px3dp(30),fontSize:px3dp(48)}}>用户名</Text>
                            </View>
                        </View>
                        <Text style={{borderRadius:px3dp(20),alignSelf:'center',height:px3dp(60),margin:px3dp(30),backgroundColor:'#ffffff',borderColor: '#000000', borderWidth: 1}}>已关注</Text>
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
    text:{
        fontFamily:'方正兰亭黑简体 Regular',
        color:'#3a3330',
        alignSelf:'center',
        fontSize:px3dp(55)
    },
});
