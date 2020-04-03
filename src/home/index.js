import React, { Component } from 'react'
import {Icon} from '@ant-design/react-native';
import {View, Text,Button, TextInput,StyleSheet,Dimensions,Image,FlatList,ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';

const {width,scale} = Dimensions.get('window');
const s = width / 640;
export default class MsgDetail extends Component {
    
    render() {
        return (
            <View  style={{flex: 1,backgroundColor: '#D3D3D3'}}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput 
                            placeholder="请输入名称"
                            style={{
                                width: 450*s,height: 50*s,
                                padding: 0,marginTop:1,marginLeft:20
                                
                            }}
                        />
                        <Icon name='search' color="red"/><Icon style={{marginLeft:0.05*width}} color="white"  name="shopping-cart"/>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Image style={{height:235,width:width}} source={require('./服务.png')}/>
                </View>
                <View>
                    <View style={styles.word}>
                        <Image style={{height:85,width:85,marginLeft:20}} source={require('../img/服务2.png')}/>
                        <Text style={{fontSize:16,marginTop:30,marginLeft:20}}>我的个人中心</Text>
                    </View>
                    <View style={styles.word}>
                        <Image style={{height:85,width:85,marginLeft:20}} source={require('../img/服务2.png')}/>
                        <Text style={{fontSize:16,marginTop:30,marginLeft:20}}>我的个人中心</Text>
                    </View>
                    <View style={styles.word}>
                        <Image style={{height:85,width:85,marginLeft:20}} source={require('../img/服务2.png')}/>
                        <Text style={{fontSize:16,marginTop:30,marginLeft:20}}>我的个人中心</Text>
                    </View>
                    <View style={styles.word}>
                        <Image style={{height:85,width:85,marginLeft:20}} source={require('../img/服务2.png')}/>
                        <Text style={{fontSize:16,marginTop:30,marginLeft:20}}>我的个人中心</Text>
                    </View>
                    
                </View>
                <View style={{marginTop:25,width:0.8*width,marginLeft:50,justifyContent: 'center',backgroundColor:'red',alignItems: 'center'}}>
                    <Button title='发布请求' color='red'/>
                </View>
                <View style={{width:width,height:100}}>
                    <Text style={{marginLeft:170,marginTop:20,color:"grey"}}>E族之家，版权所有</Text>
                </View>
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
    header:{
        height: 70*s,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
        
        
        backgroundColor:'red'
        
    },
    search:{
        width: 520*s,
        height: 50*s,
        backgroundColor: '#EEEEEE',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:30,
        marginTop:8,
        borderRadius:18
    },
    slide2:{
        width: width*0.41,
        height: 290,
        marginLeft: width*0.06,
        
        
        justifyContent: 'center',
        
    },
    word:{
        marginTop:10,
        flexDirection:'row',
        backgroundColor:'white'
    },
    num:{
        flexDirection:'row',
        width:width*0.75,
        backgroundColor: '#D3D3D3',
        marginLeft:width*0.07,
        borderRadius:7
    }
})