import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ToastAndroid} from 'react-native'
import React, {Component} from 'react'
import {px3dp} from '../../../util/ScreenUtil';
import Progress from './CusProgressBar';
import {_TabnavigationOptionsSet} from "../../../components/_TabNavigationOptions";

var dataSignin = {"data": [{"name": "早睡100天"}, {"name": "跑步30天"}, {"name": "电影10天"}, {"name": "旅游20天"}]}

export default class SigninScreen extends Component {
    // static navigationOptions = ({navigation}) => ( {
    //     headerTitle: '打卡',
    //     headerStyle: {
    //         backgroundColor: '#a4bdca',
    //         elevation: 0
    //     },
    //     headerTitleStyle: {
    //         color: '#3a3330',
    //         alignSelf: 'center',
    //     },
    //     headerLeft: (
    //         <TouchableOpacity style={{paddingLeft: px3dp(54), paddingRight: px3dp(54)}}
    //                           onPress={() => navigation.navigate('DrawerOpen')}>
    //             <Image source={require('../../../../res/images/nav_infor_nor.png')}
    //                    style={{width: px3dp(96), height: px3dp(96)}}/>
    //         </TouchableOpacity>
    //     ),
    //     headerRight: (
    //         <TouchableOpacity style={{paddingRight: px3dp(54), paddingLeft: px3dp(54)}}
    //                           onPress={() => navigation.navigate('AddSigninTask')}>
    //             <Image source={require('../../../../res/images/agenda_addagenda_nor.png')}
    //                    style={{width: px3dp(96), height: px3dp(96)}}/>
    //         </TouchableOpacity>
    //     )
    // });

    static navigationOptions=({navigation})=> _TabnavigationOptionsSet('打卡',require('../../../../res/images/tab_card_nor.png'),require('../../../../res/images/tab_card_press.png'),navigation,{
        flag:true,
        iconAddress:require('../../../../res/images/agenda_addagenda_nor.png')
    })
    // 构造

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            progress: 0.5,
            in_progress: true,
        };
        this.currProgress = 0.5;
        this.currBuffer = 0.5;
    }

    render() {
        const { navigate } = this.props.navigation;
        if (this.state.in_progress) {
            return (
                <View style={{alignItems: 'center'}}>
                    <View style={{
                        width: px3dp(300),
                        height: px3dp(60),
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: px3dp(30),
                        borderColor: '#000',
                        borderWidth: px3dp(5)
                    }}>
                        <TouchableOpacity onPress={() => this.setState({in_progress: true})}>
                            <Text>正在进行</Text>
                        </TouchableOpacity>
                        <View style={{width: px3dp(5), height: px3dp(60), backgroundColor: '#000'}}/>
                        <TouchableOpacity onPress={() => this.setState({in_progress: false})}>
                            <Text>已完成</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={[{key: '看书'}, {key: '运动'}]}
                        renderItem={({item}) =>
                            <View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignSelf: 'flex-start',
                                    justifyContent: 'center',
                                    marginTop: px3dp(20),
                                    marginLeft: px3dp(20)
                                }}>
                                    <Image source={require('../../../../res/images/leftbar_collection_nor.png')}
                                           style={{width: px3dp(90), height: px3dp(90), backgroundColor: '#000'}}/>
                                    <Text style={{fontSize: px3dp(50), alignSelf: 'center'}}>{item.key}</Text>
                                    <Text style={{
                                        fontSize: px3dp(40),
                                        alignSelf: 'center',
                                        marginRight: px3dp(20),
                                        transform: [{translateX: px3dp(580)}]
                                    }}>已完成30%</Text>
                                </View>
                                <TouchableOpacity onPress={() => navigate('SigninDetails')}>
                                    <View>
                                        <Progress
                                            ref="progressBar"
                                            progress={0.3}
                                            style={{
                                                marginTop: px3dp(30),
                                                height: px3dp(120),
                                                width: px3dp(1000)
                                            }}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />

                </View>
            )
        } else {
            return (
                <View style={{alignItems: 'center'}}>
                    <View style={{
                        width: px3dp(300),
                        height: px3dp(60),
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: px3dp(30),
                        borderColor: '#000',
                        borderWidth: px3dp(5)
                    }}>
                        <TouchableOpacity onPress={() => this.setState({in_progress: true})}>
                            <Text>正在进行</Text>
                        </TouchableOpacity>
                        <View style={{width: px3dp(5), height: px3dp(60), backgroundColor: '#000'}}/>
                        <TouchableOpacity onPress={() => this.setState({in_progress: false})}>
                            <Text>已完成</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        {this.renderAllBadge()}
                    </View>
                </View>
            )
        }
    }

    // 返回所有的包
    renderAllBadge() {
        // 定义数组装所有的子组件
        var allBadge = [];
        // 遍历json数据
        for (var i = 0; i < dataSignin.data.length; i++) {
            // 取出每一个数据对象
            var badge = dataSignin.data[i];
            // 装入数据
            allBadge.push(
                <View key={i} style={{
                    alignItems:'center',
                    width:px3dp(300),
                    height:px3dp(300),
                    marginLeft:px3dp(30),
                    marginTop:px3dp(75)}}>
                    <Image source={require('../../../../res/images/leftbar_collection_nor.png')}
                           style={{width:px3dp(300),height:px3dp(300),backgroundColor:'#000'}}
                    />
                    <Text>
                        {badge.name}
                    </Text>
                </View>
            );
        }
        // 返回数组
        return allBadge;
    }


}
