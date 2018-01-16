import React,{Component}from 'react'
import {View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,

} from 'react-native'
import {px3dp} from "../../../util/ScreenUtil";
import Picker from './DatePicker.ios'
import AsyncStorage from '../../../util/AsyncStorageUtil.ios'

var {width,height} = Dimensions.get('window');
var HEIGHT_PART_IMAGE = px3dp(-75+45+130);
let month = '一月';

export default class MonthlyPlanScreen extends Component {
    static navigationOptions =({navigation}) =>{
        const headerTitle= '月计划'
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


    _monthIntent(txt){
        AsyncStorage.save('month',txt);
        this.props.navigation.navigate('MonthDetails',{month:txt})
    }

    render(){
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.picker}>
                    <Picker/>
                </View>
                <View>
                    <View style={styles.part_1}>
                        <TouchableOpacity onPress={() => this._monthIntent('一月')}>
                        <View style={{alignItems:'center'}} >
                            <Image source={require('../../../../res/images/month_Jan_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._monthIntent('二月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_Feb_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._monthIntent('三月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_Mar_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                    </TouchableOpacity>
                    </View>

                    <View style={[styles.part_1,{marginTop:HEIGHT_PART_IMAGE}]}>
                        <TouchableOpacity onPress={() => this._monthIntent('四月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_Apr_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._monthIntent('五月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_May_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._monthIntent('六月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_Jun_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.part_1,{marginTop:HEIGHT_PART_IMAGE}]}>
                        <TouchableOpacity onPress={() => this._monthIntent('七月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_July_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._monthIntent('八月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_Aug_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._monthIntent('九月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_Sep_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.part_1,{marginTop:HEIGHT_PART_IMAGE}]}>
                        <TouchableOpacity onPress={() => this._monthIntent('十月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_Oct_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._monthIntent('十一月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_Nov_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._monthIntent('十二月')}>
                        <View style={{alignItems:'center'}}>
                            <Image source={require('../../../../res/images/month_Dec_nor.png')} style={styles.part_Image}/>
                            <View style={styles.part_Line}/>
                        </View>
                        </TouchableOpacity>
                    </View>




                </View>
                <View>

                </View>



            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    part_1:{
        flexDirection:'row',
        marginTop:px3dp(236-73),
        justifyContent:'space-around'
    },
    part_Image:{
        height:px3dp(231),
        width:px3dp(231),

    },
    part_Line:{
        marginTop:px3dp(45),
        width:px3dp(200),
        height:px3dp(10),
        backgroundColor:'#c4ccee',
        borderRadius:px3dp(5)
    }




})