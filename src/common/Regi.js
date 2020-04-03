import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert,ToastAndroid
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class RegisterScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"1" ,
            password:"1",
            confirmPassword:"1"
            };
    }
    
    onUsernameChanged = (newUsername) => {
        //运行后可以在输入框随意输入内容并且查看log验证！
        this.setState({username:newUsername});
        console.log(this.state.username);
    };

    onPasswordChanged = (newPassword) => {
        this.setState({password:newPassword});
        console.log(this.state.password);
    };
    onConfirmPasswordChanged = (newConfirmPassword) => {
        this.setState({confirmPassword:newConfirmPassword});
        console.log(this.state.confirmPassword);
    }
    zhuce = ()=>{
        if (this.state.confirmPassword != this.state.password) {
            ToastAndroid.show('密码不一致',ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('正在注册',ToastAndroid.SHORT);
        fetch("https://www.fastmock.site/mock/2ea67e56790dafafeba04c7a0763e47b/shop01/reg",{
            method:'POST',
            body:JSON.stringify({
                user:this.state.username,
                pwd:this.state.password
            }),
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
            .then(res => {
                Actions.three();
            })
        }
        
        
    }

    

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1.0}  //设置背景被点击时，透明度不变
                style={styles.container}>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        onChangeText={this.onUsernameChanged}
                        style={styles.input}
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'用户名'}  //设置占位符
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        onChangeText={this.onPasswordChanged}
                        style={styles.input}
                        secureTextEntry={true}  //设置为密码输入框
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'密码'}  //设置占位符
                    />
                </View>
                <View
                    style={styles.inputBox}>
                    <TextInput
                        onChangeText={this.onConfirmPasswordChanged}
                        style={styles.input}
                        secureTextEntry={true}  //设置为密码输入框
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'确认密码'}  //设置占位符
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}>
                    <Text
                        style={styles.btText}  onPress={()=>zhuce()}>注册</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                    <Text
                        style={styles.btText}  onPress={()=>Actions.three()}>跳到登陆</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: 200,
        height: 40,
        fontSize: 20,
        color: '#fff',//输入框输入的文本为白色
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});
