import React from 'react';


import Picker from './DatePickerW.ios';
import {NavigationActions} from 'react-navigation';
import {size, pixel, px3dp} from '../../../util/ScreenUtil';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions
} from 'react-native';
var ITEM_HEIGHT = px3dp(64);
var TIME_HEIGHT = px3dp(134);
var {width,height} = Dimensions.get('window');


class Week_list extends React.Component {

  _renderItem = (item) => {
    let txt = '吃饭';
    return <Text style={styles.txt} numberOfLines={1}>{txt}</Text>
  };

  _header = (i, week) => {
    switch (i%7){
      case 0: week = '日';
        break;
      case 1: week = '一';
        break;
      case 2: week = '二';
        break;
      case 3: week = '三';
        break;
      case 4: week = '四';
        break;
      case 5: week = '五';
        break;
      case 6: week = '六';
        break;
    }
    return <Text
      style={{width:(Dimensions.get('window').width)/7, textAlign :'center', backgroundColor:'#c4ccee', color:'#3a3330', fontSize:px3dp(48)}}
    >{i + 1}/{week}</Text>;
  };
  _navigate = ()=>{
    this.props.navigation('WeekPlanDetails')
  };
  render(){
    var data = [];
    for (var i = 0; i < 3; i++) {
      data.push({key: i, title: i + ''});
    }
    let arr = [];
    for(let i = 0; i < 31; i++){
      arr.push(
        <TouchableOpacity  key={i} onPress={()=>this._navigate()}>
          <FlatList
            style={{width:(Dimensions.get('window').width)/7, height:Dimensions.get('window').height - px3dp(360)}}
            ListHeaderComponent={this._header.bind(this, i, i)}
            renderItem={this._renderItem}
            data={data}>
          </FlatList>
        </TouchableOpacity>

      )
    }
    return <View style={{flexDirection:'row'}}>{arr}</View>
  }
}



export default class DailyPlan extends React.Component {

    static navigationOptions =({navigation}) =>{
        const headerTitle= '周计划'
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
        let txt1 = '第' + item.index + '个' + ' title=' + item.item.title;
        let bgColor = '#e6ecf4';
        return <Text style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor, width:width,marginLeft:px3dp(20)},styles.txt1]}>{txt1}</Text>
    };


    _separator = () => {
        return <View style={{height:px3dp(18),backgroundColor:'white'}}/>;
    };

  render() {
      var data = [];
      for (var i = 0; i < 5; i++) {
          data.push({key: i, title: i + ''});
      }
    var navigation = this.props.navigation;
    let navigationF  = ()=>{
      navigation.navigate('WeekPlanDetails')
    };
    return (
      <View style={styles.contentContainer}>
        <View style={styles.picker}>
          <Picker/>
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
        <View>
          <ScrollView horizontal={true} pagingEnabled={true}>
            {/*{this._ShowWeekList(navigation)}*/}
            <Week_list navigation={navigationF}/>
          </ScrollView>
        </View>
      </View>

    );
  }

}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  picker:{
   borderBottomWidth: 1,
   height: px3dp(91),
   justifyContent: "center",
   alignItems: "center",
  },
  week: {
    borderBottomWidth: 1,
    height: px3dp(72),
    backgroundColor: '#c4ccee',
  },
  week2: {
    borderBottomWidth: 1,
    height: 90,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  dayBox: {
    borderBottomWidth: 1,
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  weekList: {
    width: 69,
    textAlign: 'center',
    fontSize: 20
  },
  week2title: {
    width: px3dp(175),
    justifyContent: "center",
    alignItems: "center"
  },
  week2Box: {
    flex: 1,
  },
  week2TitleText: {
    marginTop: -9,
    width: 30,
    lineHeight: 35,
    fontSize: 20
  },
  week2Text: {
    height: 30,
    marginBottom: 10,
    backgroundColor: 'rgb(230,236,244)',
    justifyContent: "center",
  },
  dayList: {
    flex: 1,
    flexDirection: "row",
    height: 55,
  },
  dayTitle: {
    width: 70,
    justifyContent: "center",
    alignItems: "center"
  },
  dayListText: {
    flex: 1,
    borderBottomWidth: 1
  },
  dayTitleText: {
    fontSize: 20,
    justifyContent: "center",

  },
  todo: {
    flexDirection: 'row',
    height: 27,
  },
  txt: {
    flex:1,
    height:px3dp(94),
    backgroundColor:'#21b2f3',
    padding:px3dp(5),
    marginTop:px3dp(22),
    marginLeft:px3dp(10),
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: px3dp(48),
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
    txt1:{
        color:'#3a3330',
        fontSize:px3dp(36),
        alignItems:'center'
    },
});