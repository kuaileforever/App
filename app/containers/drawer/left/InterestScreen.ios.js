import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    SegmentedControlIOS
} from 'react-native';
import CommonDialog from 'react-native-dialogs-master';
import {size,pixel,px3dp} from '../../../util/ScreenUtil';

export default class InterestScreen extends Component{

    onChange(event){

    }

    _dialog(){
        var options={
            thide:true,
            messText:'是否取消关注',
            innersWidth:200,
            innersHeight:150,
            buttons:[
                {
                    txt:'否',
                    btnStyle:{backgroundColor:'#fff'},
                    txtStyle:{color:'#cc2d29'}
                },
                {
                    txt:'是',
                    btnStyle:{backgroundColor:'#fff'},
                    txtStyle:{color:'#cc2d29'}
                }
            ]
        }
        this.refs.dConfirm.show(options)
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')}>
                <View style={{flexDirection:'row',backgroundColor:'#a4bdca',
                    justifyContent:'space-between',alignItems:'center',marginTop:15}}>
                    <View>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Image
                                source={require('../../../../res/images/nav_back_nor.png')}
                                style={styles.back}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.titletext}>我的关注</Text>
                    </View>
                    <View>

                    </View>
                </View>
                <View>
                    <SegmentedControlIOS
                        values={['关注','粉丝']}
                        tintColor='pink'
                        selectedIndex={0}
                        style={{margin:10,height:30,width:200,
                            alignSelf:'center',marginTop:50}}
                    />

                    <View style={styles.view}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={styles.image}
                                   source={require('../../../../res/images/reg_head_img_nor.png')}/>
                            <View style={styles.viewtwo}>
                                <Text>僵尸小鱼</Text>
                            </View>
                        </View>

                        <View style={{justifyContent:'center'}}>
                            <TouchableOpacity style={styles.viewthree}
                                              onPress={this._dialog.bind(this)}>
                                <Text >已关注</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                </Image>
                <CommonDialog types={'confirm'} ref='dConfirm'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    view:{
        flexDirection:'row',
        backgroundColor:'#c5d2ff',
        justifyContent:'space-between'
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
    image:{
        // marginTop:5,
        justifyContent:'center',
        width:50,
        height:50,
        marginLeft:20
    },
    viewtwo:{

        justifyContent:'center',
        marginLeft:10,

    },
    viewthree:{
        justifyContent:'center',
        borderWidth:1,
        borderRadius:5,
        height:25,
        width:60,
        marginRight:20,
        alignSelf:'center',
        paddingLeft:5,
        paddingRight:5
    },
    bg:{
        // alignItems:'center',
        width:null,
        height:null,
        flex:1

    },
});
