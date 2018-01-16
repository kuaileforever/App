import React from 'react'
import {TabNavigator, TabBarBottom, StackNavigator} from 'react-navigation'
import  CommunityScreen from '../../app/containers/tab/Community/CommunityScreen.android'
import  SigninScreen from '../../app/containers/tab/Signin/SigninScreen.android'
import  TaskScreen from '../../app/containers/tab/Task/TaskScreen.android'
import {px3dp} from '../util/ScreenUtil'


const TabScrren = TabNavigator({
    Task:{
        screen:TaskScreen,
    },
    Signin:{
        screen:SigninScreen,
    },
    Community:{
        screen:CommunityScreen,
    },
},{
    initialRouteName:'Task',
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    swipeEnabled:false,
    lazy:true,
    backBehavior:'none',
    tabBarOptions:{
        style:{
            backgroundColor:'#c4e1ee',
            height:px3dp(148),
        },
        labelStyle:{
            fontSize:px3dp(36),
            paddingBottom:px3dp(3),
        },
        inactiveTintColor:'#ffffff',
        activeTintColor:'#4e76aa',
    }
});

const Tab = StackNavigator({
    Tab:{screen:TabScrren}
});


module.exports={
    TabScreen:Tab
};