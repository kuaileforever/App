import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import Listdata from './data.json'
import {px3dp} from "../../../util/ScreenUtil";
import {OverlayAdd} from "../../../components/_OverlayAdd";
import {OverlayEdit} from "../../../components/_OverlayEdit";
import {Overlay} from 'teaset'
import {SwipeRow} from 'react-native-swipe-list-view'


let _renderList = (i)=>{
    let _data = Listdata.data[i]
    if(_data!=null){
        if(_data.completed === 'true'){
            if(_data.class === 'person'){
                return (
                    <TouchableOpacity style={{flex:1,marginTop:10 }} onPress={()=>{Overlay.show(OverlayAdd())}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:px3dp(64),height:px3dp(64),backgroundColor:'#758fff'}}/>
                            <Text style={{textDecorationLine:'line-through'}}>{_data.content}</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#666',marginTop:10}}/>
                    </TouchableOpacity>
                )
            }else {
                return (
                    <TouchableOpacity style={{flex:1,marginTop:10}} onPress={()=>{Overlay.show(OverlayAdd())}}>
                        <SwipeRow
                            rightOpenValue={px3dp(-210)}
                            closeOnRowPress={true}
                            disableRightSwipe={true}
                        >
                            <View style={{flexDirection:'row',justifyContent:"flex-end",backgroundColor:'#acb6c6'}}>
                                <Image source={require('../../../../res/images/agenda_edit_nor.png')} style={{width:px3dp(64),height:px3dp(64),marginRight:8}}/>
                                <Image source={require('../../../../res/images/agenda_deletebtn_nor.png')} style={{width:px3dp(64),height:px3dp(64),marginRight:8}}/>
                            </View>
                            <View style={{flexDirection:'row',backgroundColor:'#fff'}}>
                                <View style={{width:px3dp(64),height:px3dp(64),backgroundColor:'#cb8f20',borderRadius:px3dp(32)}}/>
                                <Text style={{textDecorationLine:'line-through'}}>{_data.content}</Text>
                            </View>
                        </SwipeRow>
                        <View style={{height:1,backgroundColor:'#666',marginTop:10}}/>
                    </TouchableOpacity>

                )
            }
        }else {
            if(_data.class === 'person'){
                return (
                    <TouchableOpacity style={{flex:1,marginTop:10}} onPress={()=>{Overlay.show(OverlayAdd())}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:px3dp(64),height:px3dp(64),borderColor:'#758fff',borderWidth:1}}/>
                            <Text >{_data.content}</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#666',marginTop:10}}/>
                    </TouchableOpacity>
                )
            }else {
                return (
                    <TouchableOpacity style={{flex:1,marginTop:10}} onPress={()=>{Overlay.show(OverlayAdd())}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:px3dp(64),height:px3dp(64),borderColor:'#cb8f20',borderRadius:px3dp(32),borderWidth:1}}/>
                            <Text>{_data.content}</Text>
                        </View>
                        <View style={{height:1,backgroundColor:'#666',marginTop:10}}/>
                    </TouchableOpacity>

                )
            }
        }
    }else {
        return(
            <View style={{flex:1}}  >
                <TouchableOpacity style={{height:30}} onPress={()=>{Overlay.show(OverlayEdit())}}/>
                <View style={{height:1,backgroundColor:'#666',marginTop:10}}/>
            </View>
        )

    }
}

module.exports = {
    _renderList:_renderList
}