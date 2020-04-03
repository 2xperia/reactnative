/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Rea from './component/Route'

import M from './component/Mybox'
import L from './component/LocalPage'
import MA from './src/common/LojinSc.js'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () =>Rea);
