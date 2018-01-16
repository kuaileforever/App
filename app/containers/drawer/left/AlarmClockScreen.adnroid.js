import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import {px3dp} from '../../../util/ScreenUtil'


export default class AlarmClockScreen extends Component {
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '闹钟设置',
        headerStyle: {
            backgroundColor: '#a4bdca',
            elevation: 0
        },
        headerTitleStyle: {
            fontFamily: '方正兰亭黑简体 Regular',
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
                        marginLeft: px3dp(50),
                    }}
                />
            </TouchableOpacity>
        )
    });
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')}>
                    <View style={{marginTop:px3dp(60)}}>
                        <View style={{flexDirection:'row',alignSelf:'center'}}>
                            <Text style={{alignSelf:'center',fontSize:px3dp(60)}}>提醒方式</Text>
                            <TouchableOpacity style={styles.text_input}>
                                <View style={{flexDirection:'row',alignSelf:'center'}}>
                                    <Text style={{fontSize:px3dp(45)}}>闹钟</Text>
                                    <Image source={require('../../../../res/images/combobox.png')}
                                           style={{width:px3dp(90),height:px3dp(60)}}>
                                    </Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',alignSelf:'center'}}>
                            <Text style={{alignSelf:'center',fontSize:px3dp(60)}}>提醒铃声</Text>
                            <TouchableOpacity style={styles.text_input}>
                                <View style={{flexDirection:'row',alignSelf:'center'}}>
                                    <Text style={{fontSize:px3dp(45)}}>提示音1</Text>
                                    <Image source={require('../../../../res/images/combobox.png')}
                                           style={{width:px3dp(90),height:px3dp(60)}}>
                                    </Image>
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
        flex: 1
    },
    bg: {
        width: null,
        height: null,
        flex: 1
    },
    text_input:{
        width:px3dp(300),
        margin:px3dp(30),
        backgroundColor:'#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        alignSelf:'center',
    },
});