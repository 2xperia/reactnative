import React, { Component } from 'react'
import {View, Text, ActivityIndicator,AsyncStorage} from 'react-native'
import {Actions} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen'
export default class Mylist extends Component {
    componentDidMount() {
         // do anything while splash screen keeps, use await to wait for an async task.
        setTimeout(()=>{
            SplashScreen.hide();
            console.log("hide")
        },3000)//关闭启动屏幕
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text onPress={()=>Actions.three()}>进入</Text>
            </View>
        )
        
    }
}
