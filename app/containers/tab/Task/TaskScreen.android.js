import {View,Text,StyleSheet,TouchableOpacity,Image,Button} from 'react-native'
import React,{Component} from 'react'
import {size,px3dp} from '../../../util/ScreenUtil'
import {_TabnavigationOptionsSet} from "../../../components/_TabNavigationOptions";
import {Overlay} from 'teaset'
import Label from "teaset/components/Label/Label";

export default class TaskScreen extends Component {

    static navigationOptions = ({navigation,})=>_TabnavigationOptionsSet('任务',require('../../../../res/images/tab_task_nor.png'),require('../../../../res/images/tab_task_press.png'),navigation)

    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.row,styles.addTop]}>
                    <View style={styles.wrap}>
                        <View >
                            <Image source={require('../../../../res/images/task_letterD_nor.png')}
                                   style={{width:px3dp(154),height:px3dp(154)}}
                            />
                            <View style={{width:px3dp(154),height:px3dp(80)}}/>
                            <Text style={styles.task_font} >日计划</Text>
                        </View>
                    </View>
                    <View style={styles.wrap}>
                        <View >
                            <Image source={require('../../../../res/images/task_letterW_nor.png')}
                                   style={{width:px3dp(154),height:px3dp(154)}}
                            />
                            <View style={{width:px3dp(154),height:px3dp(80)}}/>
                            <Text style={styles.task_font}>周计划</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.row,styles.addBottom]}>
                    <View style={styles.wrap}>
                        <View >
                            <Image source={require('../../../../res/images/task_letterM_nor.png')}
                                   style={{width:px3dp(154),height:px3dp(154)}}
                            />
                            <View style={{width:px3dp(154),height:px3dp(80)}}/>
                            <Text style={styles.task_font}>月计划</Text>
                        </View>
                    </View>
                    <View style={styles.wrap}>
                        <View >
                            <Image source={require('../../../../res/images/task_letterY_nor.png')}
                                   style={{width:px3dp(154),height:px3dp(154)}}
                            />
                            <View style={{width:px3dp(154),height:px3dp(80)}}/>
                            <Text style={styles.task_font}>年计划</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        width:size.width,
        height:px3dp(160),
        backgroundColor:'#c4e1ee',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    titleFont:{
        fontSize:px3dp(60),
        color:'#3a3330'
    },
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        justifyContent:'space-around'
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-around',
        // backgroundColor:'#132'
    },
    addTop:{
        paddingTop:px3dp(60)
    },
    addBottom:{
        paddingBottom:px3dp(60)
    },
    wrap:{
        backgroundColor:'#d4deec',
        width:px3dp(450),
        height:px3dp(600),
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:px3dp(20)
    },
    task_font:{
        color:'#3a3330',
        fontSize:px3dp(60)
    }

})

