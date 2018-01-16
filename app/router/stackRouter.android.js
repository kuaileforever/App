import {StackNavigator} from 'react-navigation'
import HomeScreen from '../containers/home/HomeScreen'
import LoginScreen from '../containers/login/LoginScreen'
import RegisterScreen from '../containers/register/RegisterScreen'
import ForgetPasswordScreen from '../containers/password/forgetpassword/ForgetPasswordScreen'
import {TabScreen} from './tabRouter.android'
import {DrawerScreen} from './drawerRouter.android'
import {Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {px3dp} from '../util/ScreenUtil'
import ResetPasswordScreen from "../containers/password/resetpassword/ResetPasswordScreen.android";
import FeelingScreen from "../containers/drawer/left/FeelingScreen.android";
import AlarmClockScreen from "../containers/drawer/left/AlarmClockScreen.adnroid";
import ThemeScreen from "../containers/drawer/left/ThemeScreen.android";
import AddSigninTaskScreen from '../containers/tab/Signin/AddSigninTaskScreen.android'
import SigninDetailsScreen from '../containers/tab/Signin/SigninDetailsScreen.android'



export const ToDoApp = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header:null
        }
    },
    Login: {
        screen: LoginScreen,
    },
    Register: {
        screen: RegisterScreen,
    },
    ForgetPassword: {
        screen:ForgetPasswordScreen,
    },
    ResetPassword:{
        screen:ResetPasswordScreen,
    },
    Drawer:{
        screen:DrawerScreen,
        navigationOptions:{
            header:null
        }
    },
    Feeling:{
        screen:FeelingScreen,
    },
    AlarmClock:{
        screen:AlarmClockScreen,
    },
    Theme:{
        screen:ThemeScreen,
    },
    AddSigninTask:{
        screen:AddSigninTaskScreen,
    },
    SigninDetails:{
        screen:SigninDetailsScreen,
    }

}, {
    initialRouteName: 'Drawer',
});
