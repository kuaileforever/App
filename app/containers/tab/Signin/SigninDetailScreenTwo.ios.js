import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Dimensions,
    ScrollView,
    StatusBarIOS,
    TouchableOpacity,
    PixelRatio,
    TouchableHighlight,
    Image,
    AppRegistry,
} from 'react-native';
import {px3dp,size} from '../../../util/ScreenUtil';
import chineseLunar from '../../../components/chinese-lunar';
let {height, width} = Dimensions.get('window');

export default class SigninDetailScreenTwo extends Component{

 /*   static navigationOptions = ({navigation}) => ( {
        headerTitle: '看书',
        headerStyle: {
            backgroundColor: '#a4bdca',
            elevation: 0
        },
        headerTitleStyle: {
            color: '#3a3330',
            alignSelf: 'center',
        },
        headerLeft: (
            <TouchableOpacity style={{paddingLeft: px3dp(54), paddingRight: px3dp(54)}}
                              onPress={() => navigation.navigate('DrawerOpen')}>
                <Image source={require('../../../../res/images/nav_infor_nor.png')}
                       style={{width: px3dp(96), height: px3dp(96)}}/>
            </TouchableOpacity>
        ),

    });*/
    constructor(props) {
        super(props);
        this.state = {
            year:new Date().getFullYear(),
            month: new Date().getMonth(),
            date: new Date().getDate(),
            staticYear: new Date().getFullYear(),
            staticMonth: new Date().getMonth(),
            staticDate: new Date().getDate(),
            nextMonthYear: new Date().getFullYear(),
            nextMonth: new Date().getMonth(),
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            busyDay: []
        }
    };

    componentDidMount() {
        this.fetchData()
    };

    componentWillMount() {
        this.monthDay = [31, 28 + this.isLeap(this.state.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // StatusBarIOS.setStyle(1, false);
    };

    nextMonth() {
        //let monthDay = [31, 28 + this.isLeap(this.state.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (this.state.month == 11) {
            if (this.state.date > this.monthDay[0]) {
                this.setState({
                    date: this.monthDay[0]
                })
            }
            this.setState({
                year: this.state.year + 1,
                month: 0,
            })
        } else {
            if (this.state.date > this.monthDay[this.state.month + 1]) {
                this.setState({
                    date: this.monthDay[this.state.month + 1]
                })
            }
            this.setState({
                month: this.state.month + 1,
            })
        }
    };

    prev() {
        let monthDay = [31, 28 + this.isLeap(this.state.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (this.state.month == 0) {
            if (this.state.date > this.monthDay[11]) {
                this.setState({
                    date: this.monthDay[11]
                })
            }
            this.setState({
                year: this.state.year - 1,
                month: 11,
            })
        } else {
            if (this.state.date > this.monthDay[this.state.month - 1]) {
                this.setState({
                    date: this.monthDay[this.state.month - 1]
                })
            }
            this.setState({
                month: this.state.month - 1,
            })
        }
    }

    isLeap(year) {
        let res;
        return ((year % 100 == 0) ? res = (year % 400 == 0 ? 1 : 0) : res = (year % 4 == 0) ? 1 : 0);
    };

    fetchData() {
        let select = 'select * from data where year = ' + this.state.year + ' and month = '
            + this.state.month + ' and date = ' + this.state.date;
        let dateCheck = 'select date from data where year = ' + this.state.year + ' and month = '
            + this.state.month;
    };

    selectDay(d) {
        this.setState({
            date: d
        })
        this.fetchData()
    };

    myScroll(event) {
        let scrollX = event.nativeEvent.contentOffset.x;
        if (scrollX > width) {
            this.nextMonth()
        } else if (scrollX < width) {
            this.prev()
        } else {

        }
        this.refs.trueScroll.scrollTo({x:width,y:0,animated:false})
        this.fetchData()
    };

    backTodayTouch() {
        this.setState({
            year: this.state.staticYear,
            month: this.state.staticMonth,
            date: this.state.staticDate
        })
    };

    render(){

        return(
            <View style={styles.container}>
                <Image style={styles.bg} source={require('../../../../res/images/login_bg.png')} >
                <View style={{backgroundColor:'#a4bdca',flexDirection:'row', width:size.width,
                    height:px3dp(150),justifyContent:'space-between',marginTop:10}}>
                    <TouchableOpacity style={{alignSelf:'center'}} onPress={()=>this.props.navigation.goBack()}>
                        <Image source={require('../../../../res/images/nav_back_nor.png')}
                               style={{width:px3dp(90),height:px3dp(90)}}/>
                    </TouchableOpacity>
                    <Text style={{color:'#3a3330', alignSelf:'center'}}>{this.state.name}</Text>
                    <TouchableOpacity style={{paddingRight:px3dp(54),paddingLeft:px3dp(54), alignSelf:'center'}}>
                        <Text style={{borderColor:'#000',borderWidth:px3dp(5),borderRadius:px3dp(10)}}>
                            删除
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.head}>
                    <View style={styles.dayTitle}>
                        <TouchableOpacity onPress={(event)=>{console.log(event.nativeEvent.pageY)}}
                                          style={styles.dayTimeTouch}>
                            <Text style={styles.t1}>
                                {this.state.year + '年' + (this.state.month + 1) + '月' + (this.state.date) + '日'}
                            </Text>
                        </TouchableOpacity>


                    </View>
                    <TouchableOpacity onPress={()=>this.backTodayTouch()} style={styles.backTodayTouch}>
                        <Text style={styles.backToday}>今天</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewday}>
                    <Text style={{fontSize:18}}>3天</Text>
                </View>

                <View style={styles.dateTitle}>
                    <Text style={styles.dateTitleText}>日</Text>
                    <Text style={styles.dateTitleText}>一</Text>
                    <Text style={styles.dateTitleText}>二</Text>
                    <Text style={styles.dateTitleText}>三</Text>
                    <Text style={styles.dateTitleText}>四</Text>
                    <Text style={styles.dateTitleText}>五</Text>
                    <Text style={styles.dateTitleText}>六</Text>
                </View>

                <ScrollView horizontal={true} contentOffset={{x: width, y: 0}}
                            bounces={false} onMomentumScrollEnd={event=>this.myScroll(event)} ref="trueScroll"
                            showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                    <View>
                        <ScrollView>
                            <DateBoard year={this.state.year} month={this.state.month-1} date={this.state.date}
                                       selectDay={this.selectDay.bind(this)} isLeap={this.isLeap}
                                       fetchData={this.fetchData.bind(this)} busyDay={this.state.busyDay}/>

                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView>
                            <DateBoard year={this.state.year} month={this.state.month} date={this.state.date}
                                       selectDay={this.selectDay.bind(this)} isLeap={this.isLeap}
                                       fetchData={this.fetchData.bind(this)} busyDay={this.state.busyDay}/>

                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView>
                            <DateBoard year={this.state.year} month={this.state.month+1} date={this.state.date}
                                       selectDay={this.selectDay.bind(this)} isLeap={this.isLeap}
                                       fetchData={this.fetchData.bind(this)} busyDay={this.state.busyDay}/>

                        </ScrollView>
                    </View>
                </ScrollView>
                </Image>
            </View>
        );
    }
}

class DateBoard extends React.Component{
    static defaultProps = {
        year: 2017,
        month: 0
    };
    static propTypes = {
        year: React.PropTypes.number,
        month: React.PropTypes.number,
        selectDay: React.PropTypes.func,
        isLeap: React.PropTypes.func,
        date: React.PropTypes.number,
        busyDay: React.PropTypes.array
    };

    constructor(props) {
        super(props);
    };

    isLeap(year) {
        let res;
        return ((year % 100 == 0) ? res = (year % 400 == 0 ? 1 : 0) : res = (year % 4 == 0) ? 1 : 0);
    };

    renderDate() {
        let myMonth, myYear = 0;
        if (this.props.month == 12) {
            myMonth = 0;
            myYear = this.props.year + 1;
        } else if (this.props.month == -1) {
            myMonth = 11;
            myYear = this.props.year - 1;
        } else {
            myMonth = this.props.month;
            myYear = this.props.year
        }
        let fd = new Date(myYear, myMonth, 1);
        let firstDay = fd.getDay();
        let monthDay = [31, 28 + this.props.isLeap(this.props.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let arr = [];
        for (let i = 0; i < firstDay; i++) {
            arr.push(<View key={-i} style={styles.dateBox}></View>)
        }
        for (var i = 1; i < monthDay[myMonth] + 1; i++) {
            let lunar = chineseLunar.solarToLunar(new Date(myYear, myMonth, i))

            if (this.props.date == i) {
                if (this.props.busyDay.indexOf(i) > -1) {
                    arr.push(
                        <TouchableOpacity onPress={this.props.selectDay.bind(this, i)} key={i} style={styles.dateBox}>
                            <View style={[styles.selected, {backgroundColor: '#35c0c5'}]}>
                                <View style={styles.point}></View>
                                <Text style={[styles.dateText, {color: '#fff', fontWeight: 'bold'}]}>{i}</Text>
                                <Text style={[styles.dateText, styles.lunarFont, {color: '#fff', fontWeight: 'bold'}]}>
                                    {chineseLunar.dayName(lunar.day)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                } else {
                    arr.push(
                        <TouchableOpacity onPress={this.props.selectDay.bind(this, i)} key={i} style={styles.dateBox}>
                            <View style={[styles.selected, {backgroundColor: '#35c0c5'}]}>
                                <Text style={[styles.dateText, {color: '#fff', fontWeight: 'bold'}]}>{i}</Text>
                                <Text style={[styles.dateText, styles.lunarFont, {color: '#fff', fontWeight: 'bold'}]}>
                                    {chineseLunar.dayName(lunar.day)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }

            } else {
                if (this.props.busyDay.indexOf(i) > -1) {
                    arr.push(
                        <TouchableOpacity onPress={this.props.selectDay.bind(this, i)} key={i} style={styles.dateBox}>
                            <View style={styles.selected}>
                                <View style={styles.point}></View>
                                <Text style={styles.dateText}>{i}</Text>
                                <Text
                                    style={[styles.dateText, styles.lunarFont]}>{chineseLunar.dayName(lunar.day)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                } else {
                    arr.push(
                        <TouchableOpacity onPress={this.props.selectDay.bind(this, i)} key={i} style={styles.dateBox}>
                            <View style={styles.selected}>
                                <Text style={styles.dateText}>{i}</Text>
                                <Text
                                    style={[styles.dateText, styles.lunarFont]}>{chineseLunar.dayName(lunar.day)}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }
            }
        }
        return arr;
    };

    render() {
        return (
            <View>
                <View style={styles.dateBoard}>
                    {this.renderDate()}
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
    },
    head: {
        // paddingTop: 20,
        // height: 60,
        backgroundColor: '#c5d2ff',
        flexDirection: 'row'
    },
    dayTitle: {
        flex: 1,
        height: 40,
        alignItems: 'center'
    },
    t1: {
        fontSize: 14,
        textAlign: 'center',
        color: '#fff',
    },
    dateTitle: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderBottomWidth: .5,
        // borderColor: '#ddd',
        backgroundColor: 'rgb(250, 250, 250)',
    },
    dateTitleText: {
        width: width / 7 - 1,
        textAlign: 'center',
        fontSize: 15,
    },
    dateBoard: {
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'rgb(250, 250, 250)',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#ccc'
    },
    dateBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 7 - 1,
        height: width / 7 - 1,
    },
    selected: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 42,
        height: 42,
        borderRadius: 21,
    },
    point: {
        position: 'absolute',
        left: 19,
        top: 3,
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#f00'
    },
    dateText: {
        fontSize: 14,
    },
    lunarFont: {
        fontSize: 9,
    },
    backToday: {
        fontSize: 14,
        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop:10
    },
    dayTimeTouch: {
        height: 40,
        justifyContent: 'center'
    },
    bg:{
        // alignItems:'center',
        width:null,
        height:null,
        flex:1
    },
    viewday:{
        alignSelf:'center',
        backgroundColor: 'rgb(154, 179, 192)',

    }
});