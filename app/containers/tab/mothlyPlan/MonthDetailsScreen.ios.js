import React,{Component}from 'react'
import {View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,

} from 'react-native'
import AsyncStorage from '../../../util/AsyncStorageUtil.ios';
import {px3dp} from '../../../util/ScreenUtil';


export default class MonthDetailsScreen extends Component{
    static navigationOptions = ({navigation})=> ({

        headerTitle: navigation.state.params.month,
        headerStyle: {
            backgroundColor: '#c4e1ee',
            elevation: 0
        },
        headerTitleStyle: {
            color: '#3a3330',
            alignSelf: 'center',
        },
        headerLeft: (
            <TouchableOpacity style={{paddingLeft: px3dp(54), paddingRight: px3dp(54)}}
                              onPress={() => navigation.goBack()}>
                <Image source={require('../../../../res/images/nav_back_nor.png')}
                       style={{width: px3dp(96), height: px3dp(96)}}/>
            </TouchableOpacity>
        ),
    });
    constructor(props) {
        super(props);
        // 初始状态
        AsyncStorage.get('month').then((tags) => {
            this.setState({
                month: tags,
            })
        });
        this.state={

        }}
    render() {
        return(
            <View style={styles.container}>
                    <Text>这么神奇的吗？</Text>
            </View>
            )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',

    },
});