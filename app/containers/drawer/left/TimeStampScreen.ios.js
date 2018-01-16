import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import {size,pixel,px3dp} from '../../../util/ScreenUtil';

export default class TimeStampScreen extends Component{



    render(){
        const {navigate} = this.props.navigation;
        return(

            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')}>
                <View style={{flexDirection:'row',backgroundColor:'#a4bdca',
                    justifyContent:'space-between',alignItems:'center',marginTop:15}}>

                    <View>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Image
                                source={require('../../../../res/images/nav_back_nor.png')}
                                style={styles.back}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.titletext}>时间戳</Text>
                    </View>
                    <View>
                    </View>
                </View>

                <ScrollView>
                    <TouchableOpacity onPress={()=>{navigate('Feeling')}}>
                        <View style={{borderWidth:1,marginLeft:10,marginRight:10,backgroundColor:'#c5d2ff'}}>
                            <View style={styles.viewone}>
                                <Text style={styles.textone}>任务</Text>
                                <Text style={{marginLeft:10}}>看书</Text>
                            </View>
                            <View style={styles.viewtwo}>
                                <Text style={styles.textone}>感受</Text>
                                <Text style={{marginLeft:10}}>今天看了的复古风格</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <Text>2017.9.15</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{navigate('Feeling')}}>
                        <View style={{borderWidth:1,marginLeft:10,marginRight:10,backgroundColor:'#c5d2ff'}}>
                            <View style={styles.viewone}>
                                <Text style={styles.textone}>任务</Text>
                                <Text style={{marginLeft:10}}>写作</Text>
                            </View>
                            <View style={styles.viewtwo}>
                                <Text style={styles.textone}>感受</Text>
                                <Text style={{marginLeft:10}}>突然间诗兴大发，瞬间来了首打油诗</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:10}}>
                        <Text>2017.9.15</Text>
                    </View>
                </ScrollView>
                </Image>
            </View>

        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    back:{
        width:px3dp(96),
        height:px3dp(96),
        marginLeft:px3dp(50),
        alignSelf:'flex-start'
    },
    titletext:{
        color:'#3a3330',
        alignSelf:'center',
        fontSize:px3dp(55)
    },
    viewone:{
        width:100,
        flexDirection:'row',
        marginTop:8,
        marginLeft:2,
        width:250

    },
    viewtwo:{
        flexDirection:'row',
        marginTop:8,
        marginBottom:2,
        marginLeft:2,
        width:250,
    },
    textone:{
        borderWidth:1,
        borderRadius:3,
        borderColor:'#060508',
        backgroundColor:'#ec4fff',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center'

    },
    bg:{
        // alignItems:'center',
        width:null,
        height:null,
        flex:1

    },
});