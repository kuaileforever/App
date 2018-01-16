/*
* TabBarIOS
* */

import React,{Component} from 'react';
import {

    TabBarIOS,
    NavigatorIOS,

} from 'react-native';

import SideMenu from 'react-native-side-menu';

import {size,pixel,px3dp} from '../../util/ScreenUtil';
import Menu from './PersonScreen.ios';
import TaskScreen from '../tab/Task/TaskScreen.ios';
import SigninScreen from "../tab/Signin/SigninScreen.ios";
import CommunityScreen from "../../containers/tab/Community/CommunityScreen.android";
import AddSigninScreen from './AddSigninScreen.ios';
import TDmenu from './TodoMenu.ios';




export default class TabScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTabBarItem:'TaskScreen',
            selectedItem:'About',
            isOpen: false,
            isRightOpen:false


        }
     }

    toggle(){
        this.setState({
            isOpen:!this.state.isOpen
        });
    }
    toggleRight(){
        this.setState({
            isRightOpen:!this.state.isRightOpen
        });
    }
    updateMenuState(isOpen){
        this.setState({
            isOpen: isOpen,
        });
    }
    updateMenuStateRight(isRightOpen){
        this.setState({
            isRightOpen:isRightOpen
        });
    }
    onMenuItemSelected=(item)=>{
        this.setState({
            isOpen :false,
            selectedItem:item
        });
    }
    _goToAddSigninScreen(){
        this.props.navigator.push({
            component: AddSigninScreen,
            title:'添加打卡任务',
            leftButtonTitle:'取消',
            rightButtonTitle:'确定',
            onLeftButtonPress:()=>this._goToBack()
        })
    }
    _goToBack(){
        this.props.navigator.pop({

        })
    }

    render(){
        const menu =<Menu onItemSelected = {this.onMenuItemSelected}/>
                tdmenu=<TDmenu onItemSelected = {this.onMenuItemSelected}/>
        return(
            <SideMenu
                 menu={menu}
                 isOpen={this.state.isOpen}
                 onChange={(isOpen)=>this.updateMenuState(isOpen)}
                 openMenuOffset={px3dp(520)}
                 hiddenMenuOffset={0}
             >
                <SideMenu
                    menu={tdmenu}
                    isOpen={this.state.isRightOpen}
                    menuPosition='right'
                    onChange={isRightOpen => this.updateMenuStateRight(isRightOpen)}
                    // 设置间距
                    openMenuOffset={px3dp(600)}
                    disableGestures={true}
                >

            <TabBarIOS
                barTintColor='#c4e1ee'
            >

                <TabBarIOS.Item
                    renderAsOriginal
                     icon={require('../../../res/images/tab_task_nor.png')}
                    // icon={{uri: test, scale: 3}}
                    selectedIcon={require('../../../res/images/tab_task_press.png')}
                    title='任务'
                    selected={this.state.selectedTabBarItem == 'TaskScreen'}
                    onPress={()=>this.setState({selectedTabBarItem:'TaskScreen'})}
                    // unselectedTintColor="yellow"
                    // tintColor="white"
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        barTintColor='#c4e1ee'
                        titleTextColor='#3a3330'
                        initialRoute={{
                            component:TaskScreen,
                            title:'任务',
                            // navigationBarHidden:true
                            tintColor:'white',
                            leftButtonIcon:require('../../../res/images/nav_infor_nor.png'),
                            rightButtonIcon:require('../../../res/images/nav_agenda_nor.png'),
                            onLeftButtonPress:()=>this.toggle(),
                            onRightButtonPress:()=>this.toggleRight(),
                        }}
                        shadowHidden={true}
                    />

                </TabBarIOS.Item>

                <TabBarIOS.Item
                    renderAsOriginal
                    icon={require('../../../res/images/tab_card_nor.png')}
                    selectedIcon={require('../../../res/images/tab_card_press.png')}
                    title='打卡'
                    selected={this.state.selectedTabBarItem == 'SigninScreen'}
                    onPress={()=>this.setState({selectedTabBarItem:'SigninScreen'})}
                    // unselectedTintColor="yellow"
                    // tintColor="white"
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        barTintColor='#c4e1ee'
                        titleTextColor='#3a3330'
                        initialRoute={{
                            component: SigninScreen,
                            title: '打卡',
                            rightButtonIcon:require('../../../res/images/nav_agenda_nor.png'),
                            onRightButtonPress:()=>this._goToAddSigninScreen()
                        }}
                    />
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    renderAsOriginal
                    icon={require('../../../res/images/tab_community_nor.png')}
                    selectedIcon={require('../../../res/images/tab_community_press.png')}
                    title='社区'
                    selected={this.state.selectedTabBarItem == 'CommunityScreen'}
                    onPress={()=>this.setState({selectedTabBarItem:'CommunityScreen'})}
                    // unselectedTintColor="yellow"
                    // tintColor="white"
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        barTintColor='#c4e1ee'
                        titleTextColor='#3a3330'
                        initialRoute={{
                            component:CommunityScreen,
                            title: '社区',

                        }}

                    />
                </TabBarIOS.Item>



            </TabBarIOS>
            </SideMenu>
            </SideMenu>
        )
    }
}
