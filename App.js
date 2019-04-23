import React, {Component} from 'react';

import { Provider } from 'react-redux';
import store from './src/store';
import {View, Text} from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import {createAppContainer, createStackNavigator} from "react-navigation";
import MovieGridView from "./src/components/FilmsShowTimes";
import DetailMove from "./src/components/FilmDetail";
import MyMovies from "./src/components/MyMovies";

type Props = {};

const AppNavigator = createStackNavigator(
    {
        MovieGrid: MovieGridView,
        DetailMovie: DetailMove,
    },
    {
        initialRouteName: "MovieGrid"
    }
);

const TabNavigator = createBottomTabNavigator({
    "Movies Near Me": AppNavigator,
    "To Watch": MyMovies,
});

const TabNav = createAppContainer(TabNavigator);


class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>

            <TabNav/>
        </Provider>
    );
  }
}

export default App;

