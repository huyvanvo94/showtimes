/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MovieGridView from './src/components/MovieGridView';
import DetailMove from './src/components/DetailMovie';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {name as appName} from './app.json';
import App from './App';

console.disableYellowBox = true;

// const MainNavigator = createStackNavigator({
//     Home: {screen: MovieGridView},
// });
//
// const Application = createAppContainer(MainNavigator);
//
//


const AppNavigator = createStackNavigator(
    {
        Home: App,
        MovieGrid: MovieGridView,
        DetailMovie: DetailMove
    },
    {
        initialRouteName: "MovieGrid"
    }
);





AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigator));
