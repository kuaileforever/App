import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import SearchBar from "../../../components/SearchBar";
import {size,pixel,px3dp} from '../../../util/ScreenUtil';
export default class HistoryScreen extends Component{

    render(){
        return(
            <View style={{flex:1}}>
                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')} >
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
                        <Text style={styles.titletext}>历史搜索</Text>
                    </View>
                    <View>

                    </View>
                </View>

                <SearchBar/>
                </Image>
            </View>
        );
    }
}
 const styles=StyleSheet.create({
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
     bg:{
         // alignItems:'center',
         width:null,
         height:null,
         flex:1

     },
 });