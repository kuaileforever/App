import React,{Component} from 'react'
import {StyleSheet, Image, View, Text, TouchableOpacity, TextInput,} from 'react-native'
import {DrawerNavigator} from 'react-navigation'
import {px3dp} from "../util/ScreenUtil";
import {TabScreen} from "./tabRouter";

import {size} from '../util/ScreenUtil'
import HistoryScreen from "../containers/drawer/left/HistoryScreen.ios";
import InterestScreen from "../containers/drawer/left/InterestScreen.ios";
import CollectionScreen from "../containers/drawer/left/CollectionScreen.ios";
import ShareScreen from "../containers/drawer/left/ShareScreen.ios";
import TimeStampScreen from "../containers/drawer/left/TimeStampScreen.ios";
import SetScreen from "../containers/drawer/left/SetScreen.ios";

const DrawerScreen = DrawerNavigator({
    Tab:{screen:TabScreen},
    History:{screen:HistoryScreen},
    Interest:{screen:InterestScreen},
    Collection:{screen:CollectionScreen},
    Share:{screen:ShareScreen},
    TimeStamp:{screen:TimeStampScreen},
    Set:{screen:SetScreen}
},{
    initialRouteName:'Tab',
    drawerWidth:px3dp(520),
    drawerPosition:'left',
    contentComponent:({navigation})=>{
        return(
            <View style={{height:size.height,alignItems:'center',backgroundColor:'#286c8d'}}>
                <TouchableOpacity  style={{marginTop:px3dp(134),alignItems:'center'}} >
                    <Image source={require('../../res/images/reg_head_img_nor.png')}
                           style={{ width:px3dp(200), height:px3dp(200),borderRadius:px3dp(100)}}/>
                    <View style={{ position:'absolute', top:px3dp(142), left:px3dp(130)}}>
                        <Image source={require('../../res/images/reg_carm_img_nor.png')}
                               style={{ width:px3dp(64), height:px3dp(64)}} />
                    </View>
                </TouchableOpacity>
                <View style={{marginTop:px3dp(30),flexDirection:'row'}}>
                    <Text underlineColorAndroid="transparent"
                          style={{width:px3dp(230),color:'#ffffff',fontSize:px3dp(48)}}>我的小明</Text>
                    <View style={{justifyContent:'center'}}>
                        <Image source={require('../../res/images/leftbar_editname_nor.png')} />
                    </View>
                </View>
                <View style={{width:px3dp(460),height:px3dp(3),
                    backgroundColor:'#195a87',marginTop:px3dp(107)}}>

                </View>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',
                    alignItems:'center',marginTop:px3dp(100),width:px3dp(520),height:px3dp(130)}}
                                  onPress={()=>{navigation.navigate('History')}}>
                    <Image source={require('../../res/images/leftbar_historysearch_nor.png')}
                           style={{width:px3dp(64),height:px3dp(64)}}/>
                    <Text style={{color:'#ffffff',fontSize:px3dp(48),width:px3dp(330),
                        paddingLeft:px3dp(14)}}>
                        搜索历史任务
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',
                    alignItems:'center',width:px3dp(520),height:px3dp(130)}}
                                  onPress={()=>{navigation.navigate('Interest')}}>
                    <Image source={require('../../res/images/leftbar_attention_nor.png')}
                           style={{width:px3dp(64),height:px3dp(64)}}/>
                    <Text style={{color:'#ffffff',fontSize:px3dp(48),width:px3dp(330),
                        paddingLeft:px3dp(14)}}>
                        我的关注
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',
                    alignItems:'center',width:px3dp(520),height:px3dp(130)}}
                                  onPress={()=>{navigation.navigate('Collection')}}>
                    <Image source={require('../../res/images/leftbar_collection_nor.png')}
                           style={{width:px3dp(64),height:px3dp(64)}}/>
                    <Text style={{color:'#ffffff',fontSize:px3dp(48),width:px3dp(330),paddingLeft:px3dp(14)}}>
                        我的收藏
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
                    width:px3dp(520),height:px3dp(130)}}
                                  onPress={()=>{navigation.navigate('Share')}}>
                    <Image source={require('../../res/images/leftbar_shared_nor.png')}
                           style={{width:px3dp(64),height:px3dp(64)}}/>
                    <Text style={{color:'#ffffff',fontSize:px3dp(48),width:px3dp(330),paddingLeft:px3dp(14)}}>
                        我的分享
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',
                            alignItems:'center',width:px3dp(520),height:px3dp(130)}}
                            onPress={()=>{navigation.navigate('TimeStamp')}}>
                    <Image source={require('../../res/images/leftbar_timestamp_nor.png')}
                           style={{width:px3dp(64),height:px3dp(64)}}/>
                    <Text style={{color:'#ffffff',fontSize:px3dp(48),width:px3dp(330),paddingLeft:px3dp(14)}}>
                        时间戳
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',
                    alignItems:'center',width:px3dp(520),height:px3dp(130)}}
                                  onPress={()=>{navigation.navigate('Set')}}>
                    <Image source={require('../../res/images/leftbar_settings_nor.png')}
                           style={{width:px3dp(64),height:px3dp(64)}}/>
                    <Text style={{color:'#ffffff',fontSize:px3dp(48),width:px3dp(330),paddingLeft:px3dp(14)}}>
                        设置
                    </Text>
                </TouchableOpacity>
                <Text style={{position:'absolute',bottom:px3dp(238),color:'#ffffff',fontSize:px3dp(48)}}>
                    退出登录</Text>
            </View>
        )}
})


module.exports = {
    DrawerScreen:DrawerScreen
}