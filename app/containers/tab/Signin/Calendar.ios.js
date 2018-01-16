import React,{Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    ListView
} from 'react-native';

class Calendar extends Component{

    render(){
        function is_leap(year) {
            let res;
            //判断闰年
            return (year%100==0?res=(year%400==0?1:0):res=(year%4==0?1:0));
        }
        let m_days;
        let ynow=this.props.date.split('-')[0];
        let mnow=this.props.date.split('-')[1];
        m_days=new Array(31,28+is_leap(ynow),31,30,31,31,30,31,30,31,30,31);
        //计算处理月第一天是星期几
        let firstday=new Date(ynow+'-'+(mnow>9?mnow:'0'+mnow)+"-01").getDay();
        //获取表格的行数
        let tr_str=Math.ceil((m_days[mnow-1]+firstday)/7);
        // 定义以及初始化
        var date=new Array();
        for(var i=0;i<tr_str;i++){
            date[i]=new Array();
            for(var j=0;j<7;j++){
                date[i][j]=1;
            }
        }
        for(let i=0;i<tr_str;i++){
            for(let k=0;k<7;k++){
                let idx=i*7+k;
                let date_str=idx-firstday+1;
                (date_str<=0 || date_str>m_days[mnow-1]) ? date_str="":date_str=idx-firstday+1;
                date[i][k]=date_str;
            }
        }
        let arr=[];
        for(let i=0;i<tr_str;i++){
            arr.push(
                <View key={i} style={{flexDirection:'row'}}>
                    <View><Text style={styles.weekList}>{date[i][0]}</Text></View>
                    <View><Text style={styles.weekList}>{date[i][1]}</Text></View>
                    <View><Text style={styles.weekList}>{date[i][2]}</Text></View>
                    <View><Text style={styles.weekList}>{date[i][3]}</Text></View>
                    <View><Text style={styles.weekList}>{date[i][4]}</Text></View>
                    <View><Text style={styles.weekList}>{date[i][5]}</Text></View>
                    <View><Text style={styles.weekList}>{date[i][6]}</Text></View>

                </View>
            )
        }
        return(
            <View>
                {arr}
            </View>
        );
    }
}
const styles=StyleSheet.create({
    weekList:{
        width:69,
        textAlign:'center',
        fontSize:20
    },
    a:{
        justifyContent:'center',
        alignItems:'center',
        height:100
    }
})
module.exports=Calendar;