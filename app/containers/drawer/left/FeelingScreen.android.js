import React,{Component}from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import {px3dp} from "../../../util/ScreenUtil";
import _Button from "../../../components/_Button";

export default class FeelingScreen extends Component {
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '任务感受',
        headerStyle: {
            backgroundColor: '#a4bdca',
            elevation: 0
        },
        headerTitleStyle: {
            fontFamily: '方正兰亭黑简体 Regular',
            color: '#3a3330',
            alignSelf: 'center',
        },
        headerLeft: (
                <_Button
                    text="取消"
                    onPress={() => navigation.goBack()}
                    addstyle_bt={{
                        width: px3dp(150),
                        height: px3dp(90),
                        marginLeft: px3dp(50),
                        marginBottom:px3dp(120),
                        backgroundColor:'#CD1076',
                        borderRadius:px3dp(25),
                    }}
                />
        ),
        headerRight: (
                <_Button
                    text="确定"
                    onPress={() => navigation.goBack()}
                    addstyle_bt={{
                        width: px3dp(150),
                        height: px3dp(90),
                        marginRight: px3dp(50),
                        marginBottom:px3dp(120),
                        backgroundColor:'#CD1076',
                        borderRadius:px3dp(25),
                    }}
                />
        )
    });

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')}>
                    <View>
                        <TextInput style={{margin:px3dp(30),height:px3dp(900),backgroundColor:'#ffffff', borderColor: '#000000', borderWidth: 1}}
                                   placeholder="编辑内容"
                                   underlineColorAndroid="transparent"
                                   multiline={true}
                        />
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
});