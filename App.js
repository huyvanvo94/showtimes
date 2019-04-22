import React, {Component} from 'react';
import {View} from 'react-native';

import {createAppContainer, createStackNavigator} from "react-navigation";
import MovieGridView from "./src/components/MovieGridView";
import DetailMove from "./src/components/DetailMovie";

type Props = {};

const AppNavigator = createStackNavigator(
    {
        MovieGrid: MovieGridView,
        DetailMovie: DetailMove
    },
    {
        initialRouteName: "MovieGrid"
    }
);

const Navigation = createAppContainer(AppNavigator);

class App extends Component<Props> {
  render() {
    return (
        <Navigation/>
    );
  }
}

export default App;

