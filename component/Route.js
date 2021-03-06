import React, { Component } from 'react'
import {View, Text, Button} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import PageOne from './Router.js'
import PageTwo from './Msg.js'
import Login from '../src/common/LojinSc.js'
import Res from '../src/common/Regi.js'
import App from '../App.js'
import L from './MyList.js'

const Root = () => {
  return (
    <Router>
      {/* 这种写法是将全部的跳转页面都放在Root下面 */}
      <Scene key="root" hideNavBar>
        {/* key 就是给页面的标签,供Actions使用 */}
        {/* component 设置关联的页面 */}
        {/* title 就是给页面标题 */}
        {/* initial 就是设置默认页面*/}
        <Scene
          key="one"
          component={PageOne}
          title="PageOne"
        />
        <Scene key="two" component={PageTwo} title="PageTwo" />
        <Scene
          key="three"
          component={Login}
          title="PageThree" 
           
        />
        <Scene key="four" component={Res} title="PageFour" />
        <Scene key="five" component={App} title="PageFive" />
        <Scene key="six" component={L} title="PageFive" initial={true}/>
      </Scene>
    </Router>
  );
};

export default Root;