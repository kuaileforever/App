import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Picker} from 'react-native'
import React, {Component} from 'react'
import {px3dp} from '../../../util/ScreenUtil';
import _TextInput from '../../../components/_TextInput'

let arr_day = [];
for(let i = 0; i < 24; i++){
    arr_day.push(<Picker.Item key={i} label={i+"时"} value={i}/>)
}
let arr_week = [<Picker.Item key="1" label="星期一" value={1}/>,
                <Picker.Item key="2" label="星期二" value={2}/>,
                <Picker.Item key="3" label="星期三" value={3}/>,
                <Picker.Item key="4" label="星期四" value={4}/>,
                <Picker.Item key="5" label="星期五" value={5}/>,
                <Picker.Item key="6" label="星期六" value={6}/>,
                <Picker.Item key="7" label="星期日" value={7}/>];

let arr_month = [];
for(let i = 1;i <= 31;i ++) {
    arr_month.push(<Picker.Item key={i} label={i+"日"} value={i}/>)
}
let arr_year = [];
for(let  i = 1;i <= 12;i ++) {
    arr_year.push(<Picker.Item key={i} label={i+"月"} value={i}/>)
}

class lcd extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return props.text
    }
}
export default class AddSigninTaskScreen extends Component {
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '添加打卡任务',
        headerStyle: {
            backgroundColor: '#a4bdca',
            elevation: 0
        },
        headerTitleStyle: {
            color: '#3a3330',
            alignSelf: 'center',
        },
        headerLeft: (
            <TouchableOpacity style={{paddingLeft: px3dp(54), paddingRight: px3dp(54)}}
                              onPress={() => navigation.goBack()}>
                <Text style={{borderColor: '#000', borderWidth: px3dp(5), borderRadius: px3dp(10)}}>
                    取消
                </Text>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={{paddingRight: px3dp(54), paddingLeft: px3dp(54)}}>
                <Text style={{borderColor: '#000', borderWidth: px3dp(5), borderRadius: px3dp(10)}}>
                    确定
                </Text>
            </TouchableOpacity>
        )
    });

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            select: ' ',
            dropdown: ' ',
            result: '0',
        };
    }

    render() {
        return (
            <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: px3dp(30),
                    height: px3dp(150),
                    marginLeft: px3dp(30)
                }}>
                    <Image source={require('../../../../res/images/leftbar_collection_nor.png')}
                           style={{backgroundColor: '#000'}}/>
                    <Text style={{alignSelf: 'center'}}>任务名称</Text>
                    <_TextInput
                        addstyle={{
                            width: px3dp(530),
                            borderColor: '#000',
                            borderRadius: px3dp(10),
                            borderWidth: px3dp(5)
                        }}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: px3dp(150),
                    marginLeft: px3dp(30),
                    marginTop: px3dp(30)
                }}>
                    <Image source={require('../../../../res/images/leftbar_collection_nor.png')}
                           style={{backgroundColor: '#000'}}/>
                    <Text style={{alignSelf: 'center'}}>周        期</Text>
                    <View style={{
                        height: px3dp(150),
                        marginLeft: px3dp(20),
                        borderColor: '#000',
                        borderRadius: px3dp(10),
                        borderWidth: px3dp(5)
                    }}>
                        <Picker
                            mode={'dropdown'}
                            style={{width: px3dp(400)}}
                            selectedValue={this.state.dropdown}
                            onValueChange={(value) => this.onValueChange(1, value)}>
                            <Picker.Item label="每日" value="0"></Picker.Item>
                            <Picker.Item label="每周" value="1"></Picker.Item>
                            <Picker.Item label="每月" value="2"></Picker.Item>
                            <Picker.Item label="每年" value="3"></Picker.Item>
                        </Picker>
                    </View>
                    <View style={{
                        height: px3dp(150),
                        marginLeft: px3dp(20),
                        borderColor: '#000',
                        borderRadius: px3dp(10),
                        borderWidth: px3dp(5)
                    }}>
                        <Picker
                            mode={'dropdown'}
                            style={{width: px3dp(400)}}
                            selectedValue={this.state.select}
                            onValueChange={(value) => this.onValueChange(2, value)}>
                            { this.state.result === '0' ? arr_day
                                : this.state.result === '1' ? arr_week
                                    : this.state.result === '2' ? arr_month
                                        : this.state.result === '3' ? arr_year : null
                            }
                        </Picker>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: px3dp(150),
                    marginLeft: px3dp(30),
                    marginTop: px3dp(30)
                }}>
                    <Image source={require('../../../../res/images/leftbar_collection_nor.png')}
                           style={{backgroundColor: '#000'}}/>
                    <Text style={{alignSelf: 'center'}}>计划天数</Text>
                    <_TextInput
                        addstyle={{
                            width: px3dp(250),
                            height: px3dp(150),
                            borderColor: '#000',
                            borderRadius: px3dp(10),
                            borderWidth: px3dp(5)
                        }}
                    />
                    <Text style={{alignSelf: 'center'}}>天</Text>
                </View>
                <TouchableOpacity style={{
                    width: px3dp(150),
                    marginTop: px3dp(180),
                    marginLeft: px3dp(60),
                    borderWidth: px3dp(5),
                    borderColor: '#000',
                    borderRadius: px3dp(10)
                }}>
                    <Text style={{alignSelf: 'center'}}>分 享</Text>
                </TouchableOpacity>
            </View>
        )
    }

    onValueChange = (flag, value) => {
        if (flag == 1) {
            this.setState({dropdown: value});
            switch (value){
                case '0':
                    this.setState({result:'0'});
                    break;
                case '1':
                    this.setState({result:'1'});
                    break;
                case '2':
                    this.setState({result:'2'});
                    break;
                case '3':
                    this.setState({result:'3'});
                    break;
            }
        } else {
            this.setState({select: value});
        }
    };

}