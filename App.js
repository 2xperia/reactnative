import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image  ,ToastAndroid} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';

import { Grid, Icon } from '@ant-design/react-native';
import Mybox from './component/Mybox';

import Login from './component/Login';
import Home from './component/Home'
import Demo01 from './demos/Demo01.tsx'
import Homes from './src/home/index.js'
import Goods from './src/goods/Goods.js'
import User from './component/Router.js'
const styles = StyleSheet.create({
  
});
const App = () => {
  // 实现 Tabs
  let now = 0;
  return (
    <Router
      backAndroidHandler={()=>{
        if(Actions.currentScene != 'home'){
          Actions.pop();
          return true;
        }else{
          if(new Date().getTime()-now<2000){
            BackHandler.exitApp();
          }else{
            ToastAndroid.show('确定要退出吗',100);
            now = new Date().getTime();
            return true;
          }
        }
        
      }}
    >
    
      <Modal key="modal" hideNavBar>
        
        <Lightbox key="lightbox">
        
            <Scene key="root">
              <Tabs 
                key='tabbar'
                hideNavBar
                activeTintColor="red"
                inactiveTintColor="blue"
                tabBarStyle={{backgroundColor:'#ccc'}}
              >
                
                <Scene key='home'
                  title='首页'
                  icon={
                    ({focused})=><Icon 
                      color={focused?'red':'blue'} 
                      name="home"
                    />
                  }>
                  <Scene key='home' hideNavBar={true} component={Homes}/>
                </Scene>
                
                <Scene key='msg'
                  title='商品分类'
                  icon={
                    ({focused})=><Icon 
                      color={focused?'red':'blue'} 
                      name="class"
                    />
                  }>
                  <Scene key="ms" hideNavBar={true} component={Goods}/>
                </Scene>
                  
                
                <Scene 
                  key='doc'
                  hideDrawerButton
                  icon={({focused})=>
                    <Icon 
                      color={focused?'red':'blue'} 
                      name='file'/>
                    }>
                    <Scene key = "ren" title="个人中心" hideNavBar={true} component={User}/>
                </Scene>
                
              </Tabs>
            </Scene>
          
        </Lightbox>
      </Modal>
      
    </Router>
  );
};



export default App;


