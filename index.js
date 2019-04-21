/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MovieGridView from './src/components/MovieGridView';

console.disableYellowBox = true;

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MovieGridView);
