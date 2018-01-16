import React ,{Component}from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    DatePickerIOS,
    TouchableOpacity,
    Dimensions,
    SegmentedControlIOS,
    FlatList,
    Image,
    Modal,
    TextInput



} from 'react-native';
var {width,height} = Dimensions.get('window');

import Picker from './yearPlan/DatePickerY.ios'
// style={{ width:px3dp(896), height:px3dp(64), fontSize:px3dp(36), backgroundColor:'#e6ecf4', color:'#3a3330'}
import {size,pixel,px3dp} from '../../util/ScreenUtil';
var ITEM_HEIGHT = px3dp(64);
var TIME_HEIGHT = px3dp(134)

export default class DayPlan extends Component{
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '日计划',
        headerStyle: {
            backgroundColor: '#c4e1ee',
            elevation: 0
        },
        headerTitleStyle: {
            color: '#3a3330',
            alignSelf: 'center',
        },
        headerLeft: (
            <TouchableOpacity style={{paddingLeft: px3dp(54), paddingRight: px3dp(54)}}
                              onPress={() => navigation.goBack()}>
                <Image source={require('../../../res/images/nav_back_nor.png')}
                       style={{width: px3dp(96), height: px3dp(96)}}/>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity style={{paddingRight: px3dp(54), paddingLeft: px3dp(54)}}
                              onPress={() => navigation.navigate('AddSigninTask')}>
                <Image source={require('../../../res/images/nav_agenda_nor.png')}
                       style={{width: px3dp(96), height: px3dp(96)}}/>
            </TouchableOpacity>
        )
    });

    _flatList;

    _renderItem = (item) => {
        var txt = '第' + item.index + '个' + ' title=' + item.item.title;
        // var txt = item.index +'时'+'——————————————'
        var bgColor = '#e6ecf4';
        return <Text style={[{flex:1,height:ITEM_HEIGHT,backgroundColor:bgColor, width:px3dp(896),marginLeft:px3dp(10)},styles.txt]}>{txt}</Text>
    };


    _separator = () => {
        return <View style={{height:px3dp(18),backgroundColor:'white'}}/>;
    };


    _flattimeList;

    _rendertimeItem = (item) => {
        var txt = item.index +'时';

        return (
                <TouchableOpacity onPress={this._setModalVisible.bind(this, true)} activeOpacity={1}>
                    <Text style={[{flex:1,height:TIME_HEIGHT,backgroundColor:'#ffffff', width:px3dp(1080)},styles.timetxt]}>{txt}</Text>
                </TouchableOpacity>
            )
    };

    _timeseparator = () => {
        return <View style={{height:px3dp(4),backgroundColor:'#898787',marginLeft:px3dp(153)}}/>;
    };

    _setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    };



    render(){
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({key: i, title: i + ''});
        }
        var timedata = [];
        for (var i = 0; i < 25; i++) {
            timedata.push({key: i, title: i + ''});
        }

        return(
            <View style={styles.container}>
                    <Picker/>
                <View style={styles.lineView}/>
                <View style={{height:px3dp(144),width:375,backgroundColor:'#c4ccee'}}>
                    <SegmentedControlIOS
                        values={['日','一','二','三','四','五','六']}
                        selectedIndex={1}
                         tintColor='white'
                         style={{height:px3dp(72)}}

                    />
                    <SegmentedControlIOS
                        values={['8','9','10','11','12','13','14']}
                        selectedIndex={1}
                        tintColor='white'
                        style={{height:px3dp(72)}}
                        // enabled={false}
                    />
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
                <FlatList
                     style={{width:width}}
                    data={timedata}
                    ref={(flatList)=>this._flattimeList = flatList}
                    renderItem={this._rendertimeItem}
                    ItemSeparatorComponent={this._timeseparator}
                />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,

        // marginTop:65,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#ffffff'

    },
    datePickerContainer: {
        flex: 1,
        borderRadius: 5,
        // height:200,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    DateTextStyle:{
        alignItems:'center',
        height:px3dp(91),
        fontSize:px3dp(48),

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
    timetxt:{
        color:'#3a3330',
        fontSize:px3dp(48),
        marginLeft:px3dp(54)
    },
});

