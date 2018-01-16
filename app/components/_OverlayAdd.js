import React,{Component} from 'react'
import {Overlay} from 'teaset'
import {FlatList, Image, Text, TouchableOpacity, View, AsyncStorage, TextInput} from "react-native";
import {px3dp} from "../util/ScreenUtil";
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import {styles} from '../../res/styles/OverlayRight'
import {overlayTimer} from './_OverlayTimer'

let OverlayAdd = ()=>{
    return(
        <Overlay.PopView
            style={{ flex:1,alignItems: 'center', justifyContent: 'center'}}
            ref = { (x)=>this.add = x}
        >
            <View style={styles.mdtitlestyle}>
                <TouchableOpacity onPress={()=>this.add.close()}>
                    <Image style={styles.cancel}
                           source={require('../../res/images/agenda_cancebtn_nor.png')}/>
                </TouchableOpacity>
                <TouchableOpacity >
                     <Image style={styles.surestyle}
                               source={require('../../res/images/agenda_okbtn_nor.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.alert1style}>
                <View style={styles.alert1image}>
                    <Image style={styles.edittime}
                           source={require('../../res/images/re-editagenda_timebtn_nor.png')}/>
                    <TouchableOpacity onPress={()=>Overlay.show(overlayTimer())}>
                        <Image style={styles.edit1time}
                               source={require('../../res/images/re-editagenda_clockbtn_nor.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.alertimage}>
                    <Image style={styles.iconstyle}
                           source={require('../../res/images/agenda_classify_icon.png')}/>
                    <Text style={styles.textStyle}>分类</Text>
                    <View style={styles.linestyle}/>
                    <View style={[styles.tsbtnstyle, {backgroundColor:'#c5e4e7'}]}>
                        <Text style={styles.textbuttonstyle}>个人</Text></View>
                    <View style={[styles.tsbtn1style,{backgroundColor:'#e9c9d2'}]}>
                        <Text style={styles.textbuttonstyle}>工作</Text></View>
                    <View style={[styles.tsbtn2style,{backgroundColor:'#cae0bb'}]}>
                        <Text style={styles.textbuttonstyle}>家庭</Text></View>
                </View>
                <TextInput style={styles.tistyle}
                           placeholder="编辑待办事项"
                           placeholderTextColor='#989593'
                           multiline= {true}>
                </TextInput>
                {/*<View style={styles.tsbtn3style}>*/}
                    {/*<Text style={styles.textbuttonstyle}>分享</Text></View>*/}
            </View>
        </Overlay.PopView>
    )
}

module.exports = {
    OverlayAdd:OverlayAdd
}