import React,{Component}from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import CommonDialog from 'react-native-dialogs-master';
import {size,pixel,px3dp} from '../../../util/ScreenUtil';

export default class CollectionScreen extends Component {

    _dialog(){
        var options={
            thide:true,
            messText:'是否取消收藏',
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

    render() {



        return (
            <View style={{flex:1}}>
                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')} >
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
                        <Text style={styles.titletext}>我的收藏</Text>
                    </View>
                    <View>
                    </View>
                </View>

                    <View style={styles.view}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={styles.image}
                                   source={require('../../../../res/images/reg_head_img_nor.png')}/>
                            <View style={styles.viewtwo}>
                                <View>
                                    <Text>僵尸小鱼</Text>
                                </View>
                                <View>
                                    <Text>2017.9.13</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{justifyContent:'center'}}>
                            <TouchableOpacity style={styles.viewthree}
                                            onPress={this._dialog.bind(this)}>
                                <Text >取消收藏</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.contentview}>
                        <Text>
                            两个黄鹂鸣翠柳，可惜没有男朋友。
                        </Text>
                    </View>
                    <View style={styles.viewfour}>
                        <TouchableOpacity style={styles.collection}
                                          onPress={this._cancle.bind(this)}>
                            <View>
                                <Text>收藏</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.collection}
                                          onPress={this._cancle.bind(this)}>
                            <View>
                                <Text>添加</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.collection}
                                          onPress={this._cancle.bind(this)}>
                            <View>
                                <Text>评论</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.collection}
                                          onPress={this._cancle.bind(this)}
                        >
                            <View>
                                <Text>点赞</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Image>
                <CommonDialog types={'confirm'} ref='dConfirm'/>
            </View>
        );
    }
    _cancle(){
        alert('是否取消')
    }
}

const styles = StyleSheet.create({
    view:{
        flexDirection:'row',
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
        width:70,
        marginRight:20,
        alignSelf:'center',
        paddingLeft:5,
        paddingRight:5,

    },
    contentview:{
        marginTop:15,
        height:150,
        width:300,
        borderWidth:1,
        borderRadius:4,
        alignSelf:'center',

    },
    viewfour:{
        marginTop:10,
        flexDirection:'row'
    },
    collection:{
        borderWidth:1,
        borderRadius:5,
        marginLeft:50,
        height:30,
        justifyContent:'center',


    },
    bg:{
        // alignItems:'center',
        width:null,
        height:null,
        flex:1
    },
});
