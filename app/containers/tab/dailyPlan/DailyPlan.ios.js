import React from 'react';
import {AppRegistry, Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList,SegmentedControlIOS,Dimensions} from 'react-native';
import {px3dp,size} from "../../../util/ScreenUtil";
import {SwipeRow} from "react-native-swipe-list-view";
import {stylesR} from '../../../../res/styles/OverlayRight'
import {_renderList} from './renderList'
import Picker from '../yearPlan/DatePickerY.ios'
var {width,height} = Dimensions.get('window');
var ITEM_HEIGHT = px3dp(64);
var TIME_HEIGHT = px3dp(134)
class List_ extends React.Component{

    render(){
        let arr = []
        for(let i =0;i<24;i++){
            let listView = _renderList(i)
            arr.push(
                <View key={i} style={{flexDirection:'row'}}>
                    <View style={{width:size.width*0.15,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:20}}>{i}时</Text>
                    </View>
                    {listView}
                </View>
            )
        }
        return (
            <View>
                {arr}
            </View>
        )
    }
}
class DayList extends React.Component{
    render (){
        let _date = new Date()
        let _dateSt = _date.getDate()-_date.getDay()
        let arr = []
        let dayArr=['日','一','二','三','四','五','六']
        for (let i=0;i<14;i++,_dateSt++){
            if(i===_date.getDay()){
                arr.push(
                    <View key={i}>
                        <Image source={require('../../../../res/images/day_dateselect_nor.png')} style={{flex:1,width:null,height:null}}>
                            <Text style={styles.weekList}>{dayArr[i]}</Text>
                            <Text style={styles.weekList}>{_dateSt}</Text>
                        </Image>
                    </View>
                )
            }else {
                arr.push(
                    <View key={i}>
                        <Text style={styles.weekList}>{dayArr[i]}</Text>
                        <Text style={styles.weekList}>{_dateSt}</Text>
                    </View>
                )
            }
        }
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {arr}
            </ScrollView>
        )
    }
}

export default class DailyPlan extends React.Component {

    static navigationOptions =({navigation}) =>{
        const headerTitle= '日计划'
        const headerLeft =(
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../../../../res/images/nav_back_nor.png')}
                       style={{width:px3dp(84),height:px3dp(84),marginLeft:px3dp(54)}}/>
            </TouchableOpacity>
        )
        const headerRight = (
            <TouchableOpacity>
                <Image source={require('../../../../res/images/nav_agenda_nor.png')} style={{width:px3dp(84),height:px3dp(84),marginRight:px3dp(54)}}/>
            </TouchableOpacity>
        )
        const headerTintColor = 'rgb(58,51,48)'
        const headerStyle = {backgroundColor:'rgb(196,225,238)',height:px3dp(160)}
        const headerTitleStyle = {alignSelf:'center',fontSize:20}
        return {headerTitle,headerLeft,headerRight,headerTintColor,headerStyle,headerTitleStyle}
    };


    _flatList;

    _renderItem = (item) => {
        let txt = '第' + item.index + '个' + ' title=' + item.item.title;
        let bgColor = '#e6ecf4';
        return <Text style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor, width:width,marginLeft:px3dp(20)},styles.txt]}>{txt}</Text>
    };


    _separator = () => {
        return <View style={{height:px3dp(18),backgroundColor:'white'}}/>;
    };

    render() {
        var data = [];
        for (var i = 0; i < 5; i++) {
            data.push({key: i, title: i + ''});
        }
        return (
            <View style={styles.contentContainer}>
                <View style={styles.picker}>
                    <Picker/>
                </View>
                <View style={styles.lineView}/>
                <View style={{height:px3dp(144),width:width,backgroundColor:'#c4ccee'}}>
                    <DayList/>
                </View>
                <View style={styles.lineView}/>
                <View style={styles.planView}>
                    <View style={styles.planTextView}>
                        <Text style={styles.planText}>周     计     划</Text>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <FlatList
                            // style={{marginTop:(-60)}}
                            data={data}
                            ref={(flatList)=>this._flatList = flatList}
                            renderItem={this._renderItem}
                            ItemSeparatorComponent={this._separator}
                        />
                    </View>

                </View>
                <View style={styles.lineView}/>
                <ScrollView>
                    <List_/>
                </ScrollView>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    contentContainer: {
        flex:1,
        backgroundColor:'white',
    },
    picker: {
        borderBottomWidth:1,
        height:px3dp(91),
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    lineView:{
        height:px3dp(4),
        backgroundColor:'#898787',
        width:width
    },
    planView:{
        height:px3dp(205),
        width:width,
        flexDirection:'row'
    },
    planTextView:{

        width:px3dp(174),
        height:px3dp(205),
        backgroundColor:'pink'
    },
    planText:{
        fontSize:px3dp(48),
        marginLeft:px3dp(54),
    },
    txt:{
        color:'#3a3330',
        fontSize:px3dp(36),
        alignItems:'center'
    },
    weekList:{
        width:width/7,
        textAlign:'center',
        fontSize:20
    } ,
});
