import React, { Component } from 'react'
import {Icon} from '@ant-design/react-native';
import {View, Text,Button,StyleSheet,Image,ScrollView,Dimensions,AppRegistry,TouchableOpacity,AsyncStorage} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import Msg from './Msg.js';
const {width} = Dimensions.get('window')
var photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'img'
  }
}

export default class MsgDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgURL: ''
        }
    }
    componentDidMount(){
        console.log("1"+ this.state.imgURL)
        AsyncStorage.getItem('userName')
        .then((res)=>this.setState({
            imgURL:JSON.parse(res)
        }));
        console.log("2"+this.state.imgURL)

    }
    cameraAction = () => {
        console.log('gh')
        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log('response' + response);
            if (response.didCancel) {
                return
            }
            let source = {uri:response.uri}
            this.setState({
                imgURL: source
            });
            AsyncStorage.setItem('userName',JSON.stringify(source),
            ()=>{console.log('store success'+this.state.imgURL)} )
        })
        console.log(this.state.imgURL)
    }

    render() {
        return (
            <View style={styles.text}>
            <ScrollView>
                <View style = {{width:width,height:200,backgroundColor:'red'}}>
                    <TouchableOpacity style={styles.head}  onPress={this.cameraAction}>
                        <Image source={this.state.imgURL} style={{width:70,height:70}}></Image>
                    </TouchableOpacity>
                </View> 
                <View>
                    <View style={styles.word}>
                        <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                        <Text style={{fontSize:16,marginTop:10}}>我的个人中心</Text>
                    </View>
                    <View style={styles.word1}>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>账户管理</Text>
                        </View>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>收货地址</Text>
                        </View>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>我的信息</Text>
                        </View>
                    </View>
                    <View style={styles.word1}>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>我的订单</Text>
                        </View>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>我的二维码</Text>
                        </View>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>我的积分</Text>
                        </View>
                    </View>
                    <View style={styles.word1}>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>我的收藏</Text>
                        </View>
                        
                    </View>
                </View>
                <View>
                    <View style={styles.word}>
                        <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                        <Text style={{fontSize:16,marginTop:10}}>我的个人中心</Text>
                    </View>
                    <View style={styles.word1}>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>账户管理</Text>
                        </View>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>收货地址</Text>
                        </View>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>我的信息</Text>
                        </View>
                    </View>
                    <View style={styles.word1}>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>我的订单</Text>
                        </View>
                        <View style={styles.little}>
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}}>我的二维码</Text>
                        </View>
                        <View style={styles.little}>
                            
                            <Icon style={{marginTop:10,backgroundColor:'write'}} color="red"  name="bulb"/>
                            <Text style={{fontSize:16,marginTop:10}} onPress={()=>Actions.six()}>我的发布</Text>
                            
                        </View>
                    </View>
                    <View style={{width:width,height:100}}>
                        <Text style={{marginLeft:170,marginTop:40,color:"grey"}}>BINNU| NATION 退出</Text>
                    </View>
                </View>
                <Image source={this.state.imgURL}></Image>
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
        flexDirection:'row',
        marginLeft:20,
        height:45,
        borderColor:'red'

    },
    word1:{
        flexDirection:'row',
        
        width:width
    },
    little:{
        width:0.33*width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15
    },
    num:{
        flexDirection:'row',
        width:width*0.85,
        backgroundColor: '#D3D3D3',
        marginLeft:width*0.07,
        borderRadius:7
    },
    head:{
        width:70,height:70,borderRadius:35,backgroundColor:'white',
        marginLeft:0.41*width,
        marginTop:50
    }
})