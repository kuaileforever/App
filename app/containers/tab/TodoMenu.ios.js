import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    ListView,
    TouchableHighlight,
    FlatList,
    TextInput,
    PanResponder,
} from 'react-native';
import {size,pixel,px3dp} from '../../util/ScreenUtil';
import {SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import Modal from 'react-native-modal'
import DatePicker from 'react-native-datepicker'

export default class TDmenu extends Component{

    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false,
            isModalEditVisible: false,

            date: '2016-05-05',
            time: '20:00',
            datetime: '2016-05-05 20:00',
            datetime1: '2016-05-05 20:00',
            datetime2: '2016-05-05 周一 20：00'
        }
    }

    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })
    _showEditModal = () =>this.setState({isModalEditVisible:true})
    _hideEditModal = () => this.setState({ isModalEditVisible: false })

    render(){
        return(

            <View style={{flex:1,alignItems:'center',backgroundColor:'#dbdde0'}}>
                <View style={styles.headerView}>
                    <View style={{flex:1, alignItems:'center'}}/>
                    <Text style={styles.TDtext}>待办事项</Text>
                    <View style={{alignItems:'center', flex:1}}>
                        <TouchableOpacity onPress={this._showModal.bind(this)}>
                            <View style={{alignItems:'center', flex:1}}>
                                <Image source={require('../../../res/images/agenda_addagenda_nor.png')}
                                       style={styles.add}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal isVisible={this.state.isModalVisible}
                       animationType='fade'>
                    <View style={{ flex: 1 ,alignItems:'center',justifyContent:'center'}}>
                        <View style={styles.mdtitlestyle}>
                            <TouchableOpacity onPress={this._hideModal.bind(this)}>
                                <Image style={styles.cancel}
                                       source={require('../../../res/images/agenda_cancebtn_nor.png')}/>
                            </TouchableOpacity>
                            <Image style={styles.surestyle}
                                   source={require('../../../res/images/agenda_okbtn_nor.png')}/>
                        </View>
                        <View style={styles.alertstyle}>
                            <View style={styles.alertimage}>
                                <Image style={styles.iconstyle}
                                       source={require('../../../res/images/agenda_classify_icon.png')}/>
                                <Text style={styles.textStyle}>分类</Text>
                                <View style={styles.linestyle}/>
                                <View style={styles.tsbtnstyle}>
                                    <Text style={styles.textbuttonstyle}>个人</Text></View>
                                <View style={styles.tsbtn1style}>
                                    <Text style={styles.textbuttonstyle}>工作</Text></View>
                                <View style={styles.tsbtn2style}>
                                    <Text style={styles.textbuttonstyle}>家庭</Text></View>
                            </View>
                            <View style={styles.alertimage}>
                                <Image style={styles.icon1style}
                                       source={require('../../../res/images/agenda_priority_icon.png')}/>
                                <Text style={styles.text1Style}>优先级</Text>
                                <View style={styles.line1style}/>
                                <View style={styles.prioritylevel1}>
                                    <Text/>
                                </View>
                                <View style={styles.prioritylevel2}>
                                    <Text/>
                                </View>
                                <View style={styles.prioritylevel3}>
                                    <Text/>
                                </View>
                            </View>
                            <TextInput style={styles.tistyle}
                                       placeholder="编辑待办事项"
                                       placeholderTextColor='#989593'
                                       multiline= {true}>
                            </TextInput>
                        </View>
                    </View>
                </Modal>


                <Modal isVisible={this.state.isModalEditVisible}>
                    <View style={{alignSelf:'center'}}>
                        <View style={styles.mdtitlestyle}>
                            <TouchableOpacity onPress={this._hideEditModal.bind(this)}>
                                <Image style={styles.cancel}
                                       source={require('../../../res/images/agenda_cancebtn_nor.png')}/>
                            </TouchableOpacity>
                            <Image style={styles.surestyle}
                                   source={require('../../../res/images/agenda_okbtn_nor.png')}/>
                        </View>
                        <View style={styles.alert1style}>
                            <View style={styles.alert1image}>
                                <Image style={styles.edittime}
                                       source={require('../../../res/images/re-editagenda_timebtn_nor.png')}/>

                                <View style={styles.timestyle}>
                                    <Text style={styles.datestyle}>{this.state.date}</Text>
                                    <View style={styles.time1style}>
                                        <Text style={styles.weekstyle}>周日</Text>
                                        <Text style={styles.time2style}>{this.state.time}</Text>
                                    </View>
                                </View>
                                <Image style={styles.edit1time}
                                       source={require('../../../res/images/re-editagenda_clockbtn_nor.png')}>
                                    <DatePicker
                                        style={{width: 200}}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="placeholder"
                                        format="YYYY-MM-DD"
                                        minDate="1949-01-01"
                                        maxDate="2099-12-12"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        iconSource={require('../../../res/images/re-editagenda_clockbtn_nor.png')}
                                        onDateChange={(date) => {this.setState({date: date});}}/>
                                </Image>
                            </View>
                            <View style={styles.alertimage}>
                                <Image style={styles.iconstyle}
                                       source={require('../../../res/images/agenda_classify_icon.png')}/>
                                <Text style={styles.textStyle}>分类</Text>
                                <View style={styles.linestyle}/>
                                <View style={styles.tsbtnstyle}>
                                    <Text style={styles.textbuttonstyle}>个人</Text></View>
                                <View style={styles.tsbtn1style}>
                                    <Text style={styles.textbuttonstyle}>工作</Text></View>
                                <View style={styles.tsbtn2style}>
                                    <Text style={styles.textbuttonstyle}>家庭</Text></View>
                            </View>
                            <TextInput style={styles.tistyle}
                                       placeholder="编辑待办事项"
                                       placeholderTextColor='#989593'
                                       multiline= {true}>
                            </TextInput>
                            <View style={styles.tsbtn3style}>
                                <Text style={styles.textbuttonstyle}>分享</Text></View>
                        </View>
                    </View>
                </Modal>

                <FlatList
                    style={{marginTop:px3dp(-60)}}
                    data={[{key: '买车票'}, {key: '组织开会'},{key:'开家长会'}]}
                    renderItem={({item}) =>
                        <View style={{flexDirection:'row', width:px3dp(600), backgroundColor:'#dbdde0'}}>
                            <View style={{marginLeft:px3dp(20),width:px3dp(580),justifyContent:'flex-end'}}>
                                <SwipeRow
                                    disableRightSwipe={true}
                                    rightOpenValue={px3dp(-130)}
                                    closeOnRowPress={true}
                                >
                                    <View style={styles.standaloneRowBack}>
                                        <TouchableOpacity>
                                            <View style={styles.edit2style}><Image style={styles.backImg2White}
                                                                                   source={require('../../../res/images/agenda_deletebtn_nor.png')}/></View></TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={this._showEditModal.bind(this)}
                                                      activeOpacity={1}>
                                    <View style={styles.standaloneRowFront}>
                                        <Text style={{marginLeft:px3dp(18), marginTop:px3dp(42), fontSize:px3dp(48), color:"#3a3330",}}>{item.key}</Text>
                                    </View></TouchableOpacity>
                                </SwipeRow>
                            </View>
                            <View style={{backgroundColor:'#7add83', height:px3dp(130), width:px3dp(20), transform:[{translateX:px3dp(-600)}]}}/>

                        </View>
                    }
                />

            </View>
        )
    }
    _testAlert(){
        Alert.alert('你点个锤子点！')
    }


}
const styles = StyleSheet.create({
    headerView:{
        width:px3dp(600),
        height:px3dp(190),
        backgroundColor:'#9fb5d5',
        flexDirection:'row',
        justifyContent:'center',
    },
    TDtext:{
        marginTop:px3dp(84),
        color:'#3a3330',
        fontSize:px3dp(60),
        alignItems:'center',
        flex:1.5,
    },
    add:{
        width:px3dp(64),
        height:px3dp(64),
        marginTop:px3dp(82),
        marginLeft:px3dp(43),
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor:'#dbdde0',
        flexDirection: 'row',
        justifyContent:'flex-end',
    },
    backImgWhite: {
        width:px3dp(64),
        height:px3dp(64),
        marginTop:px3dp(33)
    },
    backImg2White: {
        width:px3dp(64),
        height:px3dp(64),
        marginTop:px3dp(33)
    },
    standaloneRowFront: {
        backgroundColor: '#CCC',
        width:px3dp(580),
        height:px3dp(130),
        alignSelf:'center'
    },
    editstyle:{
        width:px3dp(130),
        height:px3dp(130),
        paddingLeft:px3dp(33),
        backgroundColor:'#bbced7',
    },
    edit2style:{
        width:px3dp(130),
        height:px3dp(130),
        paddingLeft:px3dp(33),
        backgroundColor:'#d7bbc0'
    },

    mdtitlestyle:{
        width:px3dp(888),
        justifyContent:'space-between',
        flexDirection:'row'
    },
    surestyle:{
        width:px3dp(90),
        height:px3dp(90),
    },
    cancel:{
      width:px3dp(90),
      height:px3dp(90),
    },
    alertstyle:{
        width:px3dp(888),
        height:px3dp(680),
        backgroundColor:'#d4deec',
        borderRadius:px3dp(20)
    },
    alert1style:{
        width:px3dp(888),
        height:px3dp(780),
        backgroundColor:'#d4deec',
        borderRadius:px3dp(20)
    },
    iconstyle:{
        width:px3dp(64),
        height:px3dp(64),
        marginTop:px3dp(57),
        marginLeft:px3dp(94)
    },
    icon1style:{
        width:px3dp(64),
        height:px3dp(64),
        marginTop:px3dp(38),
        marginLeft:px3dp(94)
    },
    alertimage:{
        flexDirection:'row',
    },
    alert1image:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    linestyle:{
        width:px3dp(12),
        height:px3dp(74),
        backgroundColor:'#c0c0c0',
        marginLeft:px3dp(67),
        borderRadius:px3dp(6),
        marginTop:px3dp(52)
    },
    line1style:{
        width:px3dp(12),
        height:px3dp(74),
        backgroundColor:'#c0c0c0',
        marginLeft:px3dp(19),
        borderRadius:px3dp(6),
        marginTop:px3dp(38),
    },
    textStyle:{
        fontSize:px3dp(48),
        color:'#3a3330',
        marginLeft:px3dp(16),
        marginTop:px3dp(68)
    },
    text1Style:{
        fontSize:px3dp(48),
        color:'#3a3330',
        marginLeft:px3dp(16),
        marginTop:px3dp(56)
    },
    tsbtnstyle:{
        width:px3dp(100),
        height:px3dp(72),
        marginLeft:px3dp(17),
        marginTop:px3dp(53),
        borderRadius:px3dp(20),
        backgroundColor:'#c5e4e7',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    tsbtn1style:{
        width:px3dp(100),
        height:px3dp(72),
        marginLeft:px3dp(60),
        marginTop:px3dp(53),
        borderRadius:px3dp(20),
        backgroundColor:'#e9c9d2',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    tsbtn2style:{
        width:px3dp(100),
        height:px3dp(72),
        marginLeft:px3dp(60),
        marginTop:px3dp(53),
        borderRadius:px3dp(20),
        backgroundColor:'#cae0bb',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    tsbtn3style:{
        width:px3dp(100),
        height:px3dp(72),
        marginLeft:px3dp(94),
        marginTop:px3dp(30),
        borderRadius:px3dp(20),
        backgroundColor:'#456675',
        alignItems:'center',
        justifyContent:'center',
    },
    textbuttonstyle:{
        fontSize:px3dp(36),
        color:'#3a3330'
    },
    prioritylevel1:{
        width:px3dp(130),
        height:px3dp(16),
        marginLeft:px3dp(17),
        borderRadius:px3dp(6),
        marginTop:px3dp(45),
        backgroundColor:'#c6c2c2',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    prioritylevel2:{
        width:px3dp(130),
        height:px3dp(16),
        marginLeft:px3dp(14),
        borderRadius:px3dp(6),
        marginTop:px3dp(45),
        backgroundColor:'#c6c2c2',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    prioritylevel3:{
        width:px3dp(130),
        height:px3dp(16),
        marginLeft:px3dp(17),
        borderRadius:px3dp(6),
        marginTop:px3dp(45),
        backgroundColor:'#c6c2c2',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    tistyle:{
        width:px3dp(690),
        height:px3dp(360),
        marginTop:px3dp(38),
        fontSize:px3dp(48),
        color:'#3a3330',
        alignSelf:'center',
        backgroundColor:'#ffffff',
    },
    edittime:{
        width:px3dp(64),
        height:px3dp(64),
        marginTop:px3dp(57),
        marginLeft:px3dp(80)
    },
    edit1time:{
        width:px3dp(64),
        height:px3dp(64),
        marginTop:px3dp(57),
        marginRight:px3dp(80)
    },
    datestyle:{
        width:px3dp(200),
        marginTop:px3dp(57),
        fontSize:px3dp(30),
        marginLeft:px3dp(10)

    },
    weekstyle:{
        width:px3dp(100),
        fontSize:px3dp(30),
        marginLeft:px3dp(10)
    },
    timestyle:{
        flexDirection:'column'
    },
    time1style:{
        flexDirection:'row'
    },
    time2style:{
        width:px3dp(100),
        fontSize:px3dp(30),
    },

})