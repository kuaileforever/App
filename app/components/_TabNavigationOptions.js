import React from 'react'
import {Image, Text, TouchableOpacity, View,AsyncStorage} from 'react-native'
import {px3dp} from '../util/ScreenUtil'
import {Overlay} from 'teaset'
import {overlayView} from './_Overlay'
import {OverlayAdd} from "./_OverlayAdd";
import OverlayEdit from "./_OverlayEdit";
import ModalRight from "./_Modal";

const _TabnavigationOptionsSet = (_title,_iconInActive,_inconActive,navigation,custom)=> {
    const title = _title
    const headerStyle = {
        elevation:0,
        backgroundColor:'#c4e1ee',
        height:px3dp(190)
    };
    const headerTitleStyle = {
        alignSelf:'center',
        fontSize:px3dp(60),
        color:'#3a3330'
    }
    const headerLeft = (
        <TouchableOpacity style={{paddingLeft:px3dp(54),paddingRight:px3dp(54)}} onPress={()=>navigation.navigate('DrawerOpen')}>
            <Image source={require('../../res/images/nav_infor_nor.png')} style={{width:px3dp(96),height:px3dp(96)}}/>
        </TouchableOpacity>
    )
    const headerRight =
            custom == null ?  <TouchableOpacity style={{paddingRight:px3dp(54),paddingLeft:px3dp(54)}} onPress={()=>{
            AsyncStorage.getItem('tasklist',(error,data)=>{
                if(!error){
                    Overlay.show(overlayView(JSON.parse(data)))
                }
            })
        }}>
            <Image source={require('../../res/images/nav_agenda_nor.png')} style={{width:px3dp(96),height:px3dp(96)}}/>
        </TouchableOpacity>:
                <TouchableOpacity style={{paddingLeft:px3dp(54),paddingRight:px3dp(54)}} onPress={()=>navigation.navigate('AddSigninTask')}>
                    <Image source={require('../../res/images/agenda_addagenda_nor.png')} style={{width:px3dp(96),height:px3dp(96)}}/>
                </TouchableOpacity>

    const tabBarIcon = ({focused})=>(
        <View style={{paddingTop:px3dp(5)}}>
            {
                !focused?
                <Image source={_iconInActive}
                       style={{width:px3dp(72),height:px3dp(72)}}
                />:
                <Image source={_inconActive}
                       style={{width:px3dp(72),height:px3dp(72)}}
                />
            }
        </View>
    )


    return {
        title,
        headerStyle,
        headerTitleStyle,
        headerLeft,
        headerRight,
        tabBarIcon,

    }
}

module.exports = {
    _TabnavigationOptionsSet
}


