import React,{Component} from 'react'
import Modal from 'react-native-modal'
import {Text} from "react-native";

export default class ModalRight extends Component{
    constructor(props){
        super(props)
        this.state={
            Visible:false
        }
    }
    render(){
        return(
            <Modal isVisible={this.props.isVisible} >
                <Text style={{width:30,height:30,backgroundColor:"#132"}} onPress={()=>{this.setState({
                    Visible:!this.state.Visible
                })}}>111111111</Text>
                <Modal isVisible = {this.state.Visible} backdropOpacity={0}>
                    <Text style={{width:200,height:200,backgroundColor:'#5a47ff'}}>22222</Text>
                </Modal>
            </Modal>
        )
    }
}