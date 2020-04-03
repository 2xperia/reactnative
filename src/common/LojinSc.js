import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    TextInput,
    View,
    Text,
    Alert,
    Button,ToastAndroid,AsyncStorage,BackHandler
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class LoginScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"1" ,
            password:"1"
            };
    }
    onBackButtonPressAndroid = () =>{
        if (this.props.navigation.isFocused()) {
            if(this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()){
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次推出应用',ToastAndroid.SHORT);
            return true;
        }
    }
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress',
            this.onBackButtonPressAndroid);

    }
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress',
            this.onBackButtonPressAndroid);
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
    denglu = ()=>{
        ToastAndroid.show('正在登录',ToastAndroid.SHORT);
        fetch("https://www.fastmock.site/mock/2ea67e56790dafafeba04c7a0763e47b/shop01/user",{
            method:'POST',
            body:JSON.stringify({
                user:this.state.username,
                pwd:this.state.password
            }),
            headers:{"Content-Type":"application/json"}
        })
        .then(res => res.json())
            .then(res => {
                AsyncStorage.setItem('us',JSON.stringify(this.state.username),
                    ()=>{console.log('store success'+this.state.username)} )
                Actions.five();
            })
        
    }

    render() {
        return (
            <TouchableOpacity  //用可点击的组件作为背景
                activeOpacity={1.0}  //设置背景被点击时的透明度改变值
                style={styles.container}>
                <View style={styles.inputBox}>
                    <TextInput
                        onChangeText={this.onUsernameChanged}  //添加值改变事件
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
                        style={styles.input}
                        onChangeText={this.onPasswordChanged}
                        autoCapitalize='none'  //设置首字母不自动大写
                        underlineColorAndroid={'transparent'}  //将下划线颜色改为透明
                        secureTextEntry={true}  //设置为密码输入框
                        placeholderTextColor={'#ccc'}  //设置占位符颜色
                        placeholder={'密码'}  //设置占位符
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}>
                    <Text style={styles.btText}  onPress={this.denglu}>登录</Text>  
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}>
                    <Text
                        style={styles.btText} onPress={()=>Actions.four()}>注册</Text>  
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
        backgroundColor: '#58812F',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#58812F',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});
