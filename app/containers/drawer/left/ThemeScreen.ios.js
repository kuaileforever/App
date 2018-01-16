import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {px3dp} from '../../../util/ScreenUtil';

export default class ThemeScreen extends Component{

    static navigationOptions = ({navigation}) => ( {
        headerTitle: '主题',
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
                    <View style={{flexDirection:'row',margin:px3dp(30),justifyContent:'space-between'}}>
                        <View>
                            <Image source={require('../../../../res/images/theme.png')}
                                   style={{width:px3dp(180),height:px3dp(180),marginLeft:px3dp(90)}}
                            />
                            <Text style={{alignSelf:'center',marginLeft:px3dp(90)}}>主题1</Text>
                        </View>
                        <View>
                            <Image source={require('../../../../res/images/theme.png')}
                                   style={{width:px3dp(180),height:px3dp(180)}}
                            />
                            <Text style={{alignSelf:'center'}}>主题2</Text>
                        </View>
                        <View>
                            <Image source={require('../../../../res/images/theme.png')}
                                   style={{width:px3dp(180),height:px3dp(180),marginRight:px3dp(90)}}
                            />
                            <Text style={{alignSelf:'center',marginRight:px3dp(90)}}>主题3</Text>
                        </View>
                    </View>
                </Image>
            </View>
        );
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