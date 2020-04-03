import React, { Component } from 'react'
import {View,
    Text,
    AsyncStorage,
    Button
} from 'react-native';

export default class LocalPage extends Component {
    constructor(props){
        super(props);
        this.state = {data:[]};
    }
    storeData=()=>{
        AsyncStorage.setItem('userName','hello');
    }
    getData=()=>{
        fetch("https://cnodejs.org/api/v1/topics")
        .then(res=>{
            var d = JSON.parse(res);
            this.setState({data:d})
            console.log(this.state.data)
        })
        //AsyncStorage.getItem('userName').then((res)=>console.log(res));
    }
    render() {
        return (
            <View>
                <Button title="存储" onPress={this.storeData}/>
                <Button title="获取" onPress={this.getData}
                />
                {this.state.data.map((item)=>(
                    <Text>{item}</Text>
                    ))}
            </View>
        )
    }
}
