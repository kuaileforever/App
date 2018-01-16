import React,{Component} from 'react'
import {Overlay,Wheel} from 'teaset'
import {Text, TouchableOpacity, View} from "react-native";
import {px3dp} from "../util/ScreenUtil";

let overlayTimer = ()=>{
    class _ClockSet extends Component{
        constructor(props){
            super(props)
            this.state={
                data:['5分钟','15分钟','30分钟','1小时','2小时','3小时','5小时','10小时','1天','到点']
            }
        }
        render(){
            return(
                <View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                        <TouchableOpacity onPress={()=>this.setState({data:['5分钟','15分钟','30分钟','1小时','2小时','3小时','5小时','10小时','1天','到点']})}>
                            <Text>日计划</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({data:['1天','2天','3天','5天','7天','14天','1个月','到点']})}>
                            <Text>周计划</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({data:['15天','1个月','1个半月','2个月','3个月','该月月初']})}>
                            <Text>月计划</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.setState({data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']})}>
                            <Text>年计划</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,paddingRight:15}}>提前</Text>
                        <Wheel style={{width:80,height:100}}
                               items={this.state.data}
                               itemStyle={{textAlign: 'center'}}
                        />
                        <Text style={{fontSize:18,paddingLeft:15}}>提醒</Text>
                    </View>
                </View>
            )
        }
    }
    return(
        <Overlay.PullView side='bottom'>
            <View style={{height:px3dp(500),paddingTop:20,paddingLeft:15,paddingRight:15}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity>
                        <Text style={{color:'#111'}}>取消</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color:'#111'}}>确认</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#111',height:1,marginTop:5}}/>
                <_ClockSet/>
            </View>
        </Overlay.PullView>
    )
}

module.exports = {
    overlayTimer:overlayTimer
}