import {View, Text, StyleSheet, Image, TouchableOpacity,TextInput,SegmentedControlIOS,Alert} from 'react-native'
import React,{Component} from 'react'
import {size,px3dp} from '../../../util/ScreenUtil'
import {_TabnavigationOptionsSet} from "../../../components/_TabNavigationOptions";

export default class CommunityScreen extends Component {
    static navigationOptions = ({navigation})=>_TabnavigationOptionsSet('社区',require('../../../../res/images/tab_community_nor.png'),require('../../../../res/images/tab_community_press.png'),navigation
    )
    constructor(props){
        super(props);
        this.state=({
            selectedIndex: 0,
            value: 'aaa'
        })
    }

    _onChange = (event)=>{
        this.setState({
            selectedIndex: event.nativeEvent.selectedSegmentIndex,
        });

    };

    onValueChange = (value)=>{
        this.setState({
            value: value,
        });
    };

    render(){
          return(
             <View >
                 <View style={styles.container}>
                     <View style={styles.inputContainer}>
                         <TextInput style={styles.input} {...this.props}
                                    placeholder='搜索有趣的内容'/>
                         <TouchableOpacity style={styles.btn} {...this.props}>
                             <Image style={styles.search}
                             source={require('../../../../res/images/voice.png')}/>
                         </TouchableOpacity>
                     </View>
                 </View>
                 <View >
                     <SegmentedControlIOS
                         values={['最新', '关注']}
                         tintColor='pink'
                         selectedIndex={0}
                         style={{margin:px3dp(30),height:px3dp(90),width:px3dp(600),alignSelf:'center'}}
                         onChange={this._onChange}
                         onValueChange={this.onValueChange}
                     />
                     <Text style={styles.text}>
                         选择的value: {this.state.value} 当前选择的位置：{this.state.selectedIndex}
                     </Text>
                     <View isVisible={this.state.selectedIndex}></View>
                 </View>


             </View>

          )


    }

}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        height:px3dp(120),
        marginTop:px3dp(30)
    },
    inputContainer:{
        flex:1,
        height:px3dp(120),
        borderWidth:px3dp(3),
        borderRadius:px3dp(60),
        marginLeft:px3dp(30),
        marginRight:px3dp(30),
        flexDirection:'row',
        borderColor:'#CCC',
    },
    input:{
        flex:1,
        height:px3dp(120),
        paddingLeft:px3dp(60)
    },
    btn:{
        marginRight:px3dp(15),
        justifyContent:'center',
        alignItems:'center'
    },
    search:{
        flex:1,
        width:px3dp(120),
        height:px3dp(120)
    },
})


