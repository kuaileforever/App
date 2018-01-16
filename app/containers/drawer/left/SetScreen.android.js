import React,{Component}from 'react'
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native'
import {px3dp} from "../../../util/ScreenUtil";

export default class SetScreen extends Component {
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
                            <Text style={styles.text}>设置</Text>
                        </View>
                        <View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.text_input} onPress={()=> {navigate('AlarmClock')}}>
                            <Text style={{fontSize:px3dp(55),alignSelf:'center',margin:px3dp(20)}}>闹钟设置</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.text_input} onPress={()=> {navigate('Theme')}}>
                            <Text style={{fontSize:px3dp(55),alignSelf:'center',margin:px3dp(20)}}>主题</Text>
                        </TouchableOpacity>
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
        alignItems:'flex-start',
    },
    text:{
        fontFamily:'方正兰亭黑简体 Regular',
        color:'#3a3330',
        alignSelf:'center',
        fontSize:px3dp(55)
    },
    text_input:{
        width:px3dp(600),
        margin:px3dp(30),
        backgroundColor:'#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        alignSelf:'center',
    },
});