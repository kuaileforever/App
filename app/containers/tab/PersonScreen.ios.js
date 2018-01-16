import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import {size,pixel,px3dp} from '../../util/ScreenUtil';
import ImagePicker from 'react-native-image-picker';
import LoginScreen from '../../containers/login/LoginScreen.ios'

export default class Menu extends Component{

    constructor(){
        super();
        this.state={
            user_defined: false,
            imageUri: '',
        }
    }



    cameraAction() {
        ImagePicker.showImagePicker({
            title: '请选择',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择相册',
            maxWidth: 500,
            maxHeight: 500,
            quality: 0.75,
            allowsEditing: true,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        }, (response) => {
            if (response.didCancel) {
                return
            }
            else {
                let source = {uri: response.uri};
                this.setState({
                    user_defined: true,
                    imageUri: source
                });
            }
        })
    }


    render(){
        return(
            <View style={{flex:1,alignItems:'center',backgroundColor:'rgba(32,88,122,0.8)'}}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={this.cameraAction.bind(this)}>
                    <Image style={styles.image}
                        source={require('../../../res/images/reg_head_img_nor.png')}                                        resizeMode="cover">
                       <Image source={require('../../../res/images/reg_carm_img_nor.png')}
                           style={styles.takephoto}/>
                    </Image>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:px3dp(30),flexDirection:'row'}}>
                    <View style={{marginTop:px3dp(30),flexDirection:'column'}}>
                        <TouchableOpacity onPress={this._testAlert.bind(this)}>
                        <Text style={styles.TextStyle}>你的小明</Text>
                        </TouchableOpacity>
                        <View style={{width:px3dp(250),backgroundColor:'#ffffff',height:2,marginTop:2}}/>
                    </View>
                          <Image source={require('../../../res/images/leftbar_editname_nor.png')}
                                 style={{marginTop:7}}
                          />
                </View>
                <View style={{width:px3dp(460),height:px3dp(4),backgroundColor:'#195a78',marginTop:px3dp(107)}}/>
                <TouchableOpacity onPress={this._testAlert.bind(this)}>
                <View style={styles.partView}>
                    <Image style={styles.img}
                           source={require('../../../res/images/leftbar_historysearch_nor.png')}/>
                    <Text style={styles.TextStyle}>搜索历史任务</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._testAlert.bind(this)}>
                <View style={styles.partView}>
                    <Image style={styles.img}
                           source={require('../../../res/images/leftbar_attention_nor.png')}/>
                    <Text style={styles.TextStyle}>我的关注</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._testAlert.bind(this)}>
                <View style={styles.partView}>
                    <Image style={styles.img}
                           source={require('../../../res/images/leftbar_collection_nor.png')}/>
                    <Text style={styles.TextStyle}>我的收藏</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._testAlert.bind(this)}>
                <View style={styles.partView}>
                    <Image style={styles.img}
                           source={require('../../../res/images/leftbar_shared_nor.png')}/>
                    <Text style={styles.TextStyle}>我的分享</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._testAlert.bind(this)}>
                <View style={styles.partView}>
                    <Image style={styles.img}
                           source={require('../../../res/images/leftbar_timestamp_nor.png')}/>
                    <Text style={styles.TextStyle}>时间戳</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._testAlert.bind(this)}>
                <View style={styles.partView}>
                    <Image style={styles.img}
                           source={require('../../../res/images/leftbar_settings_nor.png')}/>
                    <Text style={styles.TextStyle}>设置</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._logOut.bind(this.props.navigator)}>
                <View style={styles.outView}>
                    <Text style={{color:'#ffffff',fontSize:px3dp(48)}}>退出登录</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
    _testAlert(){
        Alert.alert('你点个锤子')
    }
    _logOut(){
        this.props.navigator.push({
            component:LoginScreen,
            navigationBarHidden:true,
            interactivePopGestureEnabled:true
        })
    }


}
const styles = StyleSheet.create({
    headerView:{
      marginTop:px3dp(200)
    },
  image:{
      width:px3dp(200),
      height:px3dp(200),

  },
    takephoto:{
        width:px3dp(64),
        height:px3dp(64),
        marginTop:px3dp(142),
        marginLeft:px3dp(126)
    },
    TextStyle:{
        color:'#ffffff',
        fontSize:px3dp(48),
        alignSelf:'center',
        marginLeft:px3dp(14)
    },
    ViewStyle:{
        width:px3dp(520),
        height:px3dp(130),
        marginTop:px3dp(60),
        flexDirection:'row',
    },
    img:{
      width:px3dp(64),
      height:px3dp(64),
      alignSelf:'center',
        marginLeft:px3dp(40)
    },
    partView:{
        marginTop:px3dp(30),
        flexDirection:'row',
        height:px3dp(130),
        width:px3dp(520),

    },
    outView:{
        padding:px3dp(20),
        paddingLeft:px3dp(40),
        paddingRight:px3dp(40),
        alignItems:'center',
         marginTop:px3dp(120),

    }
})
