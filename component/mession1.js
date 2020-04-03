import React, { Component } from 'react'
import {Icon} from '@ant-design/react-native';
import {View, Text, TextInput,StyleSheet,Dimensions,Image,FlatList,ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
const {width} = Dimensions.get('window')

export default class MsgDetail extends Component {
    
    render() {
        return (
            <View style={styles.text}>
                <View>
                    <View  style={styles.num}>
                        <TextInput placeholder="请输入商品名称"/>
                        <Icon style={{marginTop:10,marginLeft:0.53*width,backgroundColor:'#D3D3D3'}} color="red"  name="search"/>
                    </View>
                </View> 
                <View style={{flexDirection:'row'}}>
                    <View  style={styles.word}>
                        <Text style={{color:'red'}}>综合</Text>
                    </View>
                    <View  style={styles.word}>
                        <Text>销量</Text>
                    </View>
                    <View  style={styles.word}>
                        <Text>新品</Text>
                    </View>
                    <View  style={styles.word}>
                        <Text>价格</Text>
                    </View>
                    <View  style={styles.word}>
                        <Text>信用</Text>
                    </View> 
                </View>
                <ScrollView>
                <View style={{flexDirection:'row',width:width*0.82}}>
                    <View style={styles.slide2}>
                        <Image style={{height:235,width:200}} source={require('../img/liebiao.png')}/>
                        <Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:'red'}}>36.00</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Image style={{height:235,width:200}} source={require('../img/lie.png')}/>
                        <Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:'red'}}>36.00</Text>
                    </View>     
                </View>
                <View style={{flexDirection:'row',width:width*0.82}}>
                    <View style={styles.slide2}>
                        <Image style={{height:235,width:200}} source={require('../img/liebiao.png')}/>
                        <Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:'red'}}>36.00</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Image style={{height:235,width:200}} source={require('../img/lie.png')}/>
                        <Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:'red'}}>36.00</Text>
                    </View>     
                </View>
                <View style={{flexDirection:'row',width:width*0.82}}>
                    <View style={styles.slide2}>
                        <Image style={{height:235,width:200}} source={require('../img/liebiao.png')}/>
                        <Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:'red'}}>36.00</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Image style={{height:235,width:200}} source={require('../img/lie.png')}/>
                        <Text>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={{color:'red'}}>36.00</Text>
                    </View>     
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    slide:{
        width: width*0.7,
        height: 20,
        marginLeft: width*0.067,
        
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{//height: 30,
        marginTop:10,
    },
    img1:{
        width:30,
        height:30,
        marginTop:10
    },
    slide1:{
        width: width*0.41,
        height: 290,
        marginLeft: width*0.06,
        
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2:{
        width: width*0.41,
        height: 290,
        marginLeft: width*0.06,
        
        
        justifyContent: 'center',
        
    },
    word:{
        marginLeft:20,
        width:70,
        height:45,
        justifyContent: 'center',
        alignItems: 'center'

    },
    num:{
        flexDirection:'row',
        width:width*0.85,
        backgroundColor: '#D3D3D3',
        marginLeft:width*0.07,
        borderRadius:7
    }
})