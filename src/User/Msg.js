import React, { Component } from 'react'
import {View, Text, Button,StyleSheet,ScrollView ,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
export default class Msg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totaldata: [] ,
            page:0
            };
    }
    componentDidMount() {
        fetch("https://cnodejs.org/api/v1/topics?page=1&limit=15")
        .then(res => res.json())
            .then(res => {
                this.setState({ totaldata: res.data })
                this.setState({ page: this.state.page+1 })
                console.log(this.state.page)
            })
    }
    back() {
        if(this.state.page == 1){
            ToastAndroid.show('这是第一页',ToastAndroid.SHORT);
        }else{
            fetch("https://cnodejs.org/api/v1/topics?page="+this.state.page+"&limit=15")
            .then(res => res.json())
                .then(res => {
                    this.setState({ totaldata: res.data })
                    this.setState({ page: this.state.page-1 })
                    console.log(this.state.page)
                    
                })
        }
            
    }
    forward() {
        console.log("https://cnodejs.org/api/v1/topics?page="+this.state.page+"&limit=15")
        fetch("https://cnodejs.org/api/v1/topics?page="+this.state.page+"&limit=15")
        .then(res => res.json())
            .then(res => {
                this.setState({ totaldata: res.data })
                this.setState({ page: this.state.page+1 })
                console.log(this.state.page)
            })
    }
    render() {
        return (
            <View>
                <View style={styles.slide}>
                    <Button title='返回' color='red' onPress={()=>Actions.pop()}/>
                    <Text style={{marginLeft:160,color:'white',marginTop:6}}>我的发布</Text>
                    <Text style={{marginLeft:180,color:'white',marginTop:4}}>. . .</Text>
                </View>
                <ScrollView>
                <View>
                    {
                        this.state.totaldata.map((item)=>(
                            <View style={styles.show}>
                                <Text style={{width:300}}>
                                    {item.title ? (item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}
                                </Text>
                                <Text>
                                    {item.create_at ? (item.create_at.length > 15 ? item.create_at.substr(0, 10) + "" : item.create_at) : ""}
                                </Text>
                                <Text style={{marginLeft:30}}>
                                    已恢复
                                </Text>
                            </View>
                        ))
                    }
                </View>
                <View style={styles.show1}>
                    <View style={styles.but}>
                        <Button title='上一页' color='red' onPress={()=>{this.back()}}/>
                    </View>
                    <View style={{width:220}}>
                        <Text style={{marginLeft:110,color:'black',marginTop:6}}>第{this.state.page}页</Text>
                    </View>
                    <View style={styles.but}>
                        <Button title='下一页' color='red' onPress={()=>this.forward()}/>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    slide:{
        flexDirection:'row',
        backgroundColor:"red"
    },
    but:{
        width:80,
        height:50,
        backgroundColor:'red',
        marginLeft:30,
        borderRadius:10
        
    },
    title:{
        width: 100, 
        overflow: 'hidden', 
       
    },
    show:{
        flexDirection:'row',
        height:40,
        marginTop:7
    },
    show1:{
        flexDirection:'row'
    }
})