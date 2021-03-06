import React, { Component } from 'react'
import {View, Text, FlatList, Dimensions ,ScrollView, StyleSheet,ActivityIndicator } from 'react-native';
import MyList from './MyList.js'
const {width} = Dimensions.get('window')


export default class Home extends Component {
    constructor(){
        super();
        let data = [];
        for(var i=0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data
        }
    }
    render() {
        console.log('home')
        return (
            <View>
                {/* horizontal:实现水平滚动 */}
                {/* numColumns:实现分栏布局 */}
                <ActivityIndicator color="red" size="large"/>
                <View></View>
                <FlatList 
                    numColumns={2}
                    data={this.state.data}
                    renderItem={
                        ({item})=><View style={styles.slide}>
                            <Text>{item.tit}</Text>
                        </View>
                    }
                />
                {/* <ScrollView 
                    pagingEnabled={true} 
                    horizontal={true}
                    style={{height:300}}
                >
                    <View style={styles.slide}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>3</Text>
                    </View>
                </ScrollView> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    slide1:{
        width: width*0.4,
        height: 300,
        marginLeft: width*0.07,
        marginTop:10,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})