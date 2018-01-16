import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from "react-native";
import {size,px3dp} from "../../../util/ScreenUtil";
export default class Sharing extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <View style={styles.sharingtitlestyle}>
                        <TouchableOpacity>
                        <View style={styles.sharingcancelstyle}>
                            <Text>取消</Text></View></TouchableOpacity>
                        <Text style={styles.sharingstyle}>分享</Text>
                        <TouchableOpacity>
                        <View style={styles.sharingsurestyle}>
                            <Text>确定</Text></View></TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <View style={styles.sharinginputstyle}>
                        <TextInput style={styles.sharinginputviewstyle}
                                   placeholder="说说分享心得吧"
                                   placeholderTextColor='#989593'
                                   multiline= {true}
                        />
                    </View>
                    <View style={styles.sharinglinestyle}/>
                    <View style={styles.labelviewstyle}>
                        <View style={styles.labelview1style}>
                            <View style={styles.labeltitlestyle}>
                                <Image style={styles.imagestyle}
                                       source={require('../../../../res/images/superuser-permissions.png')}/>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <View style={{flexDirection:'row',marginTop:px3dp(50),alignItems:'center'}}>
                                    <View style={{marginLeft:px3dp(20)}}>
                                        <Text>添加标签</Text>
                                    </View>
                                    <View style={{marginLeft:px3dp(10)}}>
                                        <TextInput style={styles.sharinginput1viewstyle}
                                                   placeholder="十个字以内"
                                                   placeholderTextColor='#989593'
                                                   multiline= {true}
                                                   maxLength={30}
                                        />
                                        <View style={styles.sharingline1style}/>
                                    </View>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <View style={{marginLeft:px3dp(20),flexDirection:'row',marginTop:px3dp(20)}}>
                                        <View style={{borderRadius:px3dp(10),backgroundColor:'#f4a9aa',}}>
                                        <Text>读书</Text></View>
                                        <View style={{borderRadius:px3dp(10),backgroundColor:'#89ffde',marginLeft:px3dp(30)}}>
                                            <Text>幸福的早餐</Text></View>
                                        <View style={{borderRadius:px3dp(10),backgroundColor:'#ffa46d',marginLeft:px3dp(30)}}>
                                            <Text>电影</Text></View>
                                        <View style={{borderRadius:px3dp(10),backgroundColor:'#4af4f1',marginLeft:px3dp(30)}}>
                                            <Text>旅游攻略</Text></View>
                                    </View>
                                    <View style={{marginLeft:px3dp(20),flexDirection:'row',marginTop:px3dp(20)}}>
                                        <View style={{borderRadius:px3dp(10),backgroundColor:'#f4a9aa',}}>
                                            <Text>读书</Text></View>
                                        <View style={{borderRadius:px3dp(10),backgroundColor:'#89ffde',marginLeft:px3dp(30)}}>
                                            <Text>幸福的早餐</Text></View>
                                        <View style={{borderRadius:px3dp(10),backgroundColor:'#4af4f1',marginLeft:px3dp(30)}}>
                                            <Text>电影</Text></View>
                                        <View style={{borderRadius:px3dp(10),backgroundColor:'#ffa46d',marginLeft:px3dp(30)}}>
                                            <Text>旅游攻略</Text></View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.sharinglinestyle}/>
                    <View style={styles.showsharingstyle}/>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1
    },
    headerView: {
        width:size.width,
        height: px3dp(190),
        backgroundColor: '#c4e1ee',

    },
    sharingtitlestyle:{
        marginTop:px3dp(120),
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    sharingcancelstyle:{
        width:px3dp(90),
        marginLeft:px3dp(60),
    },
    sharingstyle:{
        fontSize:px3dp(60),
        marginTop:px3dp(-20)
    },
    sharingsurestyle:{
        width:px3dp(90),
        marginRight:px3dp(60)
    },
    sharinginputstyle:{
        height:px3dp(400),
        backgroundColor:'white',
        width:size.width
    },
    sharinginputviewstyle:{
        height:px3dp(400),
        width:size.width,
        marginLeft:px3dp(60),
    },
    sharinginput1viewstyle:{
        width:px3dp(850),
    },
    sharinglinestyle:{
        height:px3dp(5),
        backgroundColor:'#7987a8'
    },
    sharingline1style:{
        height:px3dp(5),
        width:px3dp(600),
        backgroundColor:'#7987a8'
    },
    labelviewstyle:{
        height:px3dp(400),
        width:size.width,
        backgroundColor:'white',
        flexDirection:'row'
    },
    labelview1style:{
        flexDirection:'row',
        marginLeft:px3dp(30)
    },
    labeltitlestyle:{
        width:px3dp(60),
        height:px3dp(400),
        marginLeft:px3dp(60),
        marginTop:px3dp(50)
    },
    imagestyle:{
        width:px3dp(64),
        height:px3dp(64)
    },
    labeladdstyle:{
        flexDirection:'column'
    },
    showsharingstyle:{
        height:px3dp(400),
        width:size.width,
        backgroundColor:'#cfd8e9',
        marginTop:px3dp(30),
    }
})
