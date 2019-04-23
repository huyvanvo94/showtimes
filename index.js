
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Config from 'react-native-config'

console.log(Config);
console.log(Config.MOVIE_API);
console.disableYellowBox = true;





AppRegistry.registerComponent(appName, () => App);
