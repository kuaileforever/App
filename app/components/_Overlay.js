import React,{Component} from 'react'
import {Overlay} from 'teaset'
import {FlatList, Image, Text, TouchableOpacity, View, AsyncStorage, TextInput,DeviceEventEmitter} from "react-native";
import {px3dp} from "../util/ScreenUtil";
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import {styles} from '../../res/styles/OverlayRight'
import {OverlayEdit} from './_OverlayEdit'
import {OverlayAdd} from './_OverlayAdd'
import {Sharing} from '../containers/tab/sharing/Sharing.ios'


let overlayView = (arr)=>{
    class FlatList_ extends Component{
        constructor(props){
            super(props)
            this.state={
                data:arr
            }
        }
        componentDidMount(){
            this._addListItem = DeviceEventEmitter.addListener('addListItem',(listItem)=>{
                let newList
                if(this.state.data==null){
                    newList = [JSON.parse(listItem)]
                }else {
                    newList = [...this.state.data,...[JSON.parse(listItem)]]
                }
                this.setState({
                    data:newList
                })
                AsyncStorage.setItem('tasklist',JSON.stringify(newList))
            })
        }
        componentWillUnmount(){
            this._addListItem.remove()
        }
        render(){
            return(
                <FlatList
                    ref={(r)=>this.FlatList=r}
                    data={this.state.data}
                    renderItem={({item,index}) =>{
                        let bgc
                        switch(item.class){
                            case ('personal'):
                                bgc = '#49ddea'
                                break
                            case('family'):
                                bgc = '#8cea49'
                                break
                            case('work'):
                                bgc = '#ea4976'
                                break
                            default:
                                bgc = '#49ddea'
                        }
                        return( <View style={{flexDirection:'row', width:px3dp(600), backgroundColor:'#dbdde0'}}>
                            <View style={{marginLeft:px3dp(20),width:px3dp(580),justifyContent:'flex-end'}}>
                                <SwipeRow
                                    disableRightSwipe={true}
                                    rightOpenValue={px3dp(-260)}
                                    closeOnRowPress={true}>
                                    <View style={styles.standaloneRowBack}>
                                        <TouchableOpacity>
                                        <View style={styles.editstyle}>
                                            <Image style={styles.backImgWhite}
                                                   source={require('../../res/images/agenda_edit_nor.png')}>
                                            </Image>
                                        </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{
                                            let newList=[...this.state.data];
                                            newList.splice(index,1);
                                            this.setState({data:newList})
                                            AsyncStorage.setItem('tasklist',JSON.stringify(newList))
                                        }}>
                                            <View style={styles.edit2style}>
                                                <Image style={styles.backImg2White}
                                                       source={require('../../res/images/agenda_deletebtn_nor.png')}>
                                                </Image>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity activeOpacity={1}>
                                        <View style={styles.standaloneRowFront}>
                                            <Text style={{marginLeft:px3dp(18), marginTop:px3dp(42), fontSize:px3dp(48), color:"#3a3330"}}
                                                  onPress={()=>Overlay.show(OverlayAdd())}>
                                                {item.key}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </SwipeRow>
                            </View>
                            <View style={{backgroundColor:bgc, height:px3dp(130), width:px3dp(20), transform:[{translateX:px3dp(-600)}]}}/>
                        </View>)
                    }}
                />
            )
        }
    }
    return(
          <Overlay.PullView side='right'
                            modal={false}
          >
              <View style={{flex:1,alignItems:'center',backgroundColor:'#dbdde0'}}>
                  <View style={styles.headerView}>
                      <View style={{flex:1, alignItems:'center'}}/>
                      <Text style={styles.TDtext}>待办事项</Text>
                      <View style={{alignItems:'center', flex:1}}>
                          <TouchableOpacity onPress={()=>{Overlay.show(OverlayEdit())}}>
                              <View style={{alignItems:'center', flex:1}}>
                                  <Image source={require('../../res/images/agenda_addagenda_nor.png')}
                                         style={styles.add}/>
                              </View>
                          </TouchableOpacity>
                      </View>
                  </View>
                  <FlatList_ />
              </View>
          </Overlay.PullView>
      )
}

module.exports = {
    overlayView:overlayView
}

