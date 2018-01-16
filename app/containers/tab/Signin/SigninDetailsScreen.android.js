import {View, Text, StyleSheet, Image, TouchableOpacity,FlatList, Picker} from 'react-native'
import React,{Component} from 'react'
import {px3dp,size} from '../../../util/ScreenUtil';

export default class SigninDetailsScreen extends Component {
    static navigationOptions = ({navigation})=>( {
        headerTitle:'看书',
        headerStyle:{
            backgroundColor:'#a4bdca',
            elevation:0
        },
        headerTitleStyle:{
            color:'#3a3330',
            alignSelf:'center',
        },
        headerLeft:(
            <TouchableOpacity style={{paddingLeft:px3dp(54),paddingRight:px3dp(54)}} onPress={()=>navigation.goBack()}>
                <Image source={require('../../../../res/images/nav_back_nor.png')}
                       style={{width:px3dp(90),height:px3dp(90)}}/>
            </TouchableOpacity>
        ),
        headerRight:(
            <TouchableOpacity style={{paddingRight:px3dp(54),paddingLeft:px3dp(54)}}>
                <Text style={{borderColor:'#000',borderWidth:px3dp(5),borderRadius:px3dp(10)}}>
                    删除
                </Text>
            </TouchableOpacity>
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render(){
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return(
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:px3dp(90),justifyContent:'center'}}>3天</Text>
                <View style={{height:px3dp(5), width:size.width,backgroundColor:'#000'}}></View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <View style={{flex:1}}><Text style={{alignSelf:'center',fontSize:px3dp(50)}}>日</Text></View>
                    <View style={{flex:1}}><Text style={{alignSelf:'center',fontSize:px3dp(50)}}>一</Text></View>
                    <View style={{flex:1}}><Text style={{alignSelf:'center',fontSize:px3dp(50)}}>二</Text></View>
                    <View style={{flex:1}}><Text style={{alignSelf:'center',fontSize:px3dp(50)}}>三</Text></View>
                    <View style={{flex:1}}><Text style={{alignSelf:'center',fontSize:px3dp(50)}}>四</Text></View>
                    <View style={{flex:1}}><Text style={{alignSelf:'center',fontSize:px3dp(50)}}>五</Text></View>
                    <View style={{flex:1}}><Text style={{alignSelf:'center',fontSize:px3dp(50)}}>六</Text></View>
                </View>
                <View style={{height:px3dp(5), width:size.width,backgroundColor:'#000'}}></View>
            </View>
        )
    }

}