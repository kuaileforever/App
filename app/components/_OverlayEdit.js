import React,{Component} from 'react'
import {Overlay} from 'teaset'
import {FlatList, Image, Text, TouchableOpacity, View, AsyncStorage, TextInput,Keyboard,DeviceEventEmitter,ToastAndroid} from "react-native";
import {px3dp} from "../util/ScreenUtil";
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import {styles} from '../../res/styles/OverlayRight'


let OverlayEdit = ()=>{
    class Classfiction extends Component {
        constructor(props){
            super()
            this.state={
                currentClass:''
            }
        }
        render(){
            return(
                <View style={{flexDirection:'row'}}>
                    {
                        this.state.currentClass==='personal'?
                        <View style={[styles.tsbtnstyle, {backgroundColor:'#49ddea'}]} >
                            <Text style={styles.textbuttonstyle} onPress={()=>{this.setState({currentClass:''})}}>
                                个人
                            </Text>
                        </View>:
                        <View style={[styles.tsbtnstyle, {backgroundColor:'#c5e4e7'}]} >
                            <Text style={styles.textbuttonstyle} onPress={()=>{this.setState({currentClass:'personal'})}}>
                                个人
                            </Text>
                        </View>
                    }
                    {
                        this.state.currentClass==='work'?
                        <View style={[styles.tsbtn1style,{backgroundColor:'#ea4976'}]}>
                            <Text style={styles.textbuttonstyle} onPress={()=>{this.setState({currentClass:''})}}>
                                工作
                            </Text>
                        </View>:
                        <View style={[styles.tsbtn1style,{backgroundColor:'#e9c9d2'}]}>
                            <Text style={styles.textbuttonstyle} onPress={()=>{this.setState({currentClass:'work'})}}>
                                工作
                            </Text>
                        </View>
                    }
                    {
                        this.state.currentClass === 'family'?
                        <View style={[styles.tsbtn2style,{backgroundColor:'#8cea49'}]}>
                            <Text style={styles.textbuttonstyle} onPress={()=>{this.setState({currentClass:''})}}>
                                家庭
                            </Text>
                        </View>:
                        <View style={[styles.tsbtn2style,{backgroundColor:'#cae0bb'}]}>
                            <Text style={styles.textbuttonstyle} onPress={()=>{this.setState({currentClass:'family'})}}>
                                家庭
                            </Text>
                        </View>
                    }
                </View>
            )
        }
    }
    class Rank extends Component {
        constructor(props){
            super(props)
            this.state={
                rank:1
            }
        }
        render(){
            return(
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.prioritylevel1,{backgroundColor:'#f7baba'}]} />
                    {
                        this.state.rank >1?
                            <Text style={[styles.prioritylevel2,{backgroundColor:'#f49999'}]} onPress={()=>this.setState({
                                rank:1
                            })}/>:
                            <Text style={[styles.prioritylevel2,{backgroundColor:'#c6c2c2'}]} onPress={()=>this.setState({
                                rank:2
                            })}/>
                    }
                    {
                        this.state.rank >2?
                            <Text style={[styles.prioritylevel3,{backgroundColor:'#f34141',}]} onPress={()=>this.setState({
                                rank:2
                            })}/>:
                            <Text style={[styles.prioritylevel3,{backgroundColor:'#c6c2c2',}]} onPress={()=>this.setState({
                                rank:3
                            })}/>
                    }


                </View>
            )
        }
    }
    class TaskItem extends Component{
        constructor(props){
            super(props)
            this.state={
                text:''
            }
        }
        render(){
            return(
                <TextInput style={styles.tistyle}
                           placeholder="编辑待办事项"
                           placeholderTextColor='#989593'
                           multiline= {true}
                           onChangeText={(text)=>this.setState({text:text})}
                >
                </TextInput>
            )
        }
    }
    return(
        <Overlay.PopView
            style = {{ flex:1,alignItems: 'center', justifyContent: 'center'}}
            ref = { (x)=>this.edit = x}
        >
            <View style={styles.mdtitlestyle}>
                <TouchableOpacity onPress={()=>this.edit.close()}>
                    <Image style={styles.cancel}
                           source={require('../../res/images/agenda_cancebtn_nor.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    let addListItem={}
                    if(this.text_.state.text===''){
                        ToastAndroid.show('请先输入代办事项',0.1)
                    }else {
                        addListItem.class  = this.class_.state.currentClass
                        addListItem.rank = this.rank_.state.rank
                        addListItem.key = this.text_.state.text
                        this.edit.close()
                        DeviceEventEmitter.emit('addListItem',JSON.stringify(addListItem))
                    }
                }}>
                    <Image style={styles.surestyle}
                           source={require('../../res/images/agenda_okbtn_nor.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.alertstyle}>
                <View style={styles.alertimage}>
                    <Image style={styles.iconstyle}
                           source={require('../../res/images/agenda_classify_icon.png')}/>
                    <Text style={styles.textStyle}>分类</Text>
                    <View style={styles.linestyle}/>
                    <Classfiction ref={(r)=>this.class_=r}/>
                </View>
                <View style={styles.alertimage}>
                    <Image style={styles.icon1style}
                           source={require('../../res/images/agenda_priority_icon.png')}/>
                    <Text style={styles.text1Style}>优先级</Text>
                    <View style={styles.line1style}/>
                    <Rank ref={(r)=>this.rank_=r}/>
                </View>
                <TaskItem ref={(r)=>this.text_=r}/>
            </View>
        </Overlay.PopView>
    )
}

module.exports = {
    OverlayEdit:OverlayEdit
}