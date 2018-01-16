import React,{Component}from 'react'
import {View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView


} from 'react-native'
import {px3dp} from "../../../util/ScreenUtil";
import Picker from '../mothlyPlan/DatePicker.ios';
import AsyncStorage from '../../../util/AsyncStorageUtil.ios'

var {width,height} = Dimensions.get('window');


export default class MonthlyPlanScreen extends Component{
    static navigationOptions = ({navigation}) => ( {
        headerTitle: '年计划',
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
                <Image source={require('../../../../res/images/nav_back_nor.png')}
                       style={{width: px3dp(96), height: px3dp(96)}}/>
            </TouchableOpacity>
        ),
    });
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.picker}>
                    <Picker/>
                </View>
                <View style={styles.part_icon}>
                    <Image source={require('../../../../res/images/year_going_nor.png')}
                            style={styles.icon_style}
                    />
                    <Text style={styles.title_Style}>进行中</Text>
                </View>
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                    <CompleteList/>
                </ScrollView>

            </View>
        )
    }
}

class CompleteList extends React.Component{
    render(){

        let arr = [] ;
        for ( let i = 0 ; i < 20; i++ ){
            arr.push(
                <TouchableOpacity>
                    <View key={i} style={styles.text}>
                        <Text style={{alignSelf:'center',justifyContent:'center'}}>😯</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return <View>{arr}</View>
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    picker:{
        borderBottomWidth: 1,
        height: px3dp(91),
        justifyContent: "center",
        alignItems: "center",
    },
    part_icon:{
        marginTop:px3dp(118),
        width:width/2-px3dp(6),
        borderWidth:1,
        borderColor:'red',
        flexDirection:'row',
    },
    icon_style:{
        marginLeft:px3dp(118),
        width:px3dp(64),
        height:px3dp(64),
    },
    title_Style:{
        marginLeft:px3dp(62),
        fontSize:px3dp(48),
        color:'#3a3330',

    },
    text:{
        borderWidth:2,
        marginLeft:px3dp(54),
        height:px3dp(96),
        width:px3dp(429),
        marginTop:px3dp(33),
        borderColor:'green',
        borderRadius:5,

}
})