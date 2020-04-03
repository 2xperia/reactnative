import React, { Component } from 'react'
import {View, Text} from 'react-native';
let num:number = '1000'
export default class Doc extends Component {
    render() {
        return (
            <View>
                <Text>textInComponent{num}</Text>
            </View>
        )
    }
}