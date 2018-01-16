import{
    StyleSheet,
    Text,
    View,
    SegmentedControlIOS,
    TextInput
} from 'react-native';
import React, {Component} from 'react';
export default class AgendaScreen extends Component  {

    render() {
        return (
            <View style={styles.container}>
               <View style={styles.part}>
                   <Text>😇 任务名称</Text>
                   <TextInput placeholder='看书'></TextInput>
               </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    part:{
        marginTop:100,
        flexDirection:'row'
    }
});