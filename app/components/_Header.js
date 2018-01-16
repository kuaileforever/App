import React,{Component} from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Image} from 'react-native';
import {size,px3dp} from '../../app/util/ScreenUtil';

const Header =()=>{
    const {title} = this.props;
    return(
        <View style = {styles.header}>
            <TouchableOpacity style={{paddingLeft:px3dp(54), paddingRight:px3dp(54)}} >
                <Image source={this.props.source}
                       style={{width:px3dp(96),height:px3dp(96)}}
                />
            </TouchableOpacity>
            <Text>{title}</Text>
            <TouchableOpacity style={{paddingLeft:px3dp(54), paddingRight:px3dp(54)}} >
                <Image source={this.props.source}
                       style={{width:px3dp(96),height:px3dp(96)}}
                />
            </TouchableOpacity>
        </View>
    )
};

styles = StyleSheet.create({
    header:{
        width:size.width,
        height:px3dp(160),
        backgroundColor:'#c4e1ee',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});

module.exports = {
    Header:Header
};