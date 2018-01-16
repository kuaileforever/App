import {StackNavigator} from 'react-navigation'
import HomeScreen from '../containers/home/HomeScreen.ios'
import LoginScreen from '../containers/login/LoginScreen.ios'
import RegisterScreen from '../containers/register/RegisterScreen.ios'
import ForgetPasswordScreen from '../containers/password/forgetpassword/ForgetPassword.ios'
import {TabScreen} from './tabRouter.android'
import {DrawerScreen} from './drawerRouter.android'
import {Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {px3dp} from '../util/ScreenUtil'
import ResetPasswordScreen from "../containers/password/resetpassword/ResetPassword.ios";
// import DayPlanScreen from '../containers/tab/DayPlan.ios';
import DayPlanScreen from '../containers/tab/dailyPlan/DailyPlan.ios'
import FeelingScreen from '../containers/drawer/left/FeelingScreen.ios';
import AlarmClockScreen from '../containers/drawer/left/AlarmClockScreen.ios';
import ThemeScreen from '../containers/drawer/left/ThemeScreen.ios';
import MonthlyPlanScreen from '../containers/tab/mothlyPlan/MonthlyPlanScreen.ios'
import MonthDetailsScreen from "../containers/tab/mothlyPlan/MonthDetailsScreen.ios";
import YearPlanScreen from '../containers/tab/yearPlan/YearPlanScreen.ios';
import WeekPlanScreen from '../containers/tab/WeekPlan/WeekPlanScreen.ios';
import SigninDetailsScreen from '../containers/tab/Signin/SigninDetailScreenTwo.ios';


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
        navigationOptions: {
             // header:null
        }
    },
    ForgetPassword: {
        screen:ForgetPasswordScreen,
        navigationOptions: {
            // header:null
        }
    },
    ResetPassword:{
        screen:ResetPasswordScreen,
        navigationOptions: {
             // header:null
        }
    },
    Drawer:{
        screen:DrawerScreen,
        navigationOptions:{
            header:null
        }
    },
    DayPlan:{
        screen:DayPlanScreen,
        navigationOptions:{
            // header:null
        }
    },
    Feeling:{
        screen:FeelingScreen,
    },
    AlarmClock:{
        screen:AlarmClockScreen,
    },
    ThemeScreen:{
        screen:ThemeScreen,
    },
    MonthlyPlan:{
        screen:MonthlyPlanScreen,

    },
    MonthDetails:{
        screen:MonthDetailsScreen,

    },
    YearPlan:{
        screen:YearPlanScreen
    },
    WeekPlan:{
        screen:WeekPlanScreen
    },


    SigninDetails:{
        screen:SigninDetailsScreen,
        navigationOptions:{
             header:null
        }
    }


}, {
    initialRouteName: 'Drawer',
    moadl:'modal'
});

