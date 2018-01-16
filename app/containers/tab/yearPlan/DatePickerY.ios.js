import React from 'react';
import {Text, View, TouchableHighlight,Modal} from 'react-native';
import Picker from 'react-native-picker';
class DatePiker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedDate:new Date().getFullYear()+'年'+(new Date().getMonth()+1)+'月'+new Date().getDate()+'日',
            choosed:'#111',
            modalVisible:false};

    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    _showTimePicker() {
        let year =[];
        let month =[];
        let day = [];
        for(let i=1970;i<2999;i++){
            year.push(i + '年');
        }
        for(let i=1;i<=12;i++){
            month.push(i + '月');
        }
        for(let i=1;i<=31;i++){
            day.push(i + '日');
        }
        let pickerData = [year,month,day];

        Picker.init({
            pickerData,
            pickerConfirmBtnText:'确认',
            pickerCancelBtnText:'取消',
            pickerTitleText: '选择日期',
            wheelFlex: [1,1,1],
            selectedValue:[new Date().getFullYear()+'年',(new Date().getMonth()+1)+'月',new Date().getDate()+'日'],
            pickerFontSize:25,
            pickerBg:[255,255,255,1],
            pickerToolBarBg:[255,255,255,1],
            onPickerConfirm: pickedValue => {
                this.setState({
                    pickedDate:pickedValue,
                    choosed:'#111',
                });
                this.setModalVisible(false);
            },
            onPickerCancel: pickedValue => {
                this.setModalVisible(false);
            },
            onPickerSelect: pickedValue => {
                let targetValue = [...pickedValue];
                if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                    // android will return String all the time，but we put Number into picker at first
                    // so we need to convert them to Number again
                    targetValue.map((v, k) => {
                        if(k !== 3){
                            targetValue[k] = parseInt(v);
                        }
                    });
                    Picker.select(targetValue);
                    pickedValue = targetValue;
                }
            }
        });
        Picker.show();
    }
    render() {
        return (
            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <Modal
                    animationType={"none"}
                    visible={this.state.modalVisible}
                    transparent={true}
                    onShow={()=>{this._showTimePicker()}}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{flex:1}}>
                        <Text style={{flex:1}}onPress={() => {
                            Picker.hide();
                            this.setModalVisible(false);
                        }}>
                        </Text>
                    </View>
                </Modal>
                <TouchableHighlight underlayColor='#fff' onPress={()=>{this.setModalVisible(true)}}>
                    <Text style={[{fontSize:20}]}>{this.state.pickedDate}</Text>
                </TouchableHighlight>
            </View>

        );

    }

}
module.exports = DatePiker;
