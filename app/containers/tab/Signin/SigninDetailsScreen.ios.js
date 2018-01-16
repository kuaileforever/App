
import {View, Text, StyleSheet, Image, TouchableOpacity,FlatList, Picker, ListView} from 'react-native'
import React,{Component} from 'react'
import {px3dp,size} from '../../../util/ScreenUtil';
import Calendar from './Calendar.ios';
import AsyncStorage from '../../../util/AsyncStorageUtil.ios';

export default class SigninDetailsScreen extends Component {
    constructor(props) {
        super(props);
        AsyncStorage.get('name').then((tags) => {
            this.setState({
                name: tags,
            });
        });
        var ds = new ListView.DataSource({
            rowHasChanged:(oldRow,newRow) => oldRow!==newRow
        });
        this.state = {
            selectedStartDate: null,
            dataSource:ds.cloneWithRows(this._genRows()),
            name:'lcd'
        };
        this.onDateChange = this.onDateChange.bind(this);
    }
    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }
    _genRows(){
        let arr = [];
        let n =0;
        for(let i = 1970; i < 2099; i++){
            for ( let j=1;j<=12;j++){
                arr.push(
                    <View key={n}><Text>{i}年{j}月</Text>
                        <Calendar  date={i+"-"+(j)}/>
                    </View>
                );
                n++;
            }
        }
        return arr;
    }
    _renderRow(rowData){
        return(
            <View>
                {rowData}
            </View>
        )
    }
    render(){
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';

        return(
            <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#a4bdca',flexDirection:'row', width:size.width,
                    height:px3dp(150),justifyContent:'space-between'}}>
                    <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>this.props.navigation.goBack()}>
                        <Image source={require('../../../../res/images/nav_back_nor.png')}
                               style={{width:px3dp(90),height:px3dp(90)}}/>
                    </TouchableOpacity>
                    <Text style={{color:'#3a3330', alignSelf:'center'}}>{this.state.name}</Text>
                    <TouchableOpacity style={{paddingRight:px3dp(54),paddingLeft:px3dp(54), alignSelf:'center'}}>
                        <Text style={{borderColor:'#000',borderWidth:px3dp(5),borderRadius:px3dp(10)}}>
                            删除
                        </Text>
                    </TouchableOpacity>
                </View>
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
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />


            </View>
        )
    }

}