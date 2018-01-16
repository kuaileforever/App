import {View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native'
import React,{Component} from 'react'
import {size,px3dp} from '../../../util/ScreenUtil'
var {width,height} = Dimensions.get('window');
import {_TabnavigationOptionsSet} from "../../../components/_TabNavigationOptions";


export default class CommunityScreen extends Component {
    static navigationOptions = ({navigation})=>_TabnavigationOptionsSet('社区',require('../../../../res/images/tab_community_nor.png'),require('../../../../res/images/tab_community_press.png'),navigation)
    render(){
        return(
                <View style={styles.container}>
                    <View style={styles.searchStyle}>
                        <TextInput style={[styles.searchTextStyle,styles.marginLeft]}
                                   placeholder='手机号码/邮箱'
                        />
                        <Image source={require('../../../../res/images/nav_agenda_nor.png')} style={[styles.imageStyle]}/>
                    </View>
                    <View style={styles.segmentedStyle}>
                        <Text
                            style={{width:60,height:20, borderWidth:1,
                                borderColor:'red',}}
                            suppressHighlighting={false}
                        > 最新</Text>
                        <Text
                            onPress={alert('ewe')}
                            style={{width:60,height:20, borderWidth:1,
                                borderColor:'red',}}
                            suppressHighlighting={false}
                        > 关注</Text>
                    </View>

                </View>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'white'
   },
    marginLeft:{

    },
    searchStyle:{
       flexDirection:'row',
        height:30,
        borderWidth:1,
        borderColor:'blue'
    },
    searchTextStyle:{
       width:width-50,
        height:25,
        borderRadius:6,
        marginTop:2,
        borderWidth:1,
        borderColor:'red'
    },
    imageStyle:{
       width:20,
        height:20,
        borderWidth:1,
        borderColor:'red',
        marginTop:5,
        marginLeft:5
    },
    segmentedStyle:{
       width:width,
        height:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'pink',
    }

})

