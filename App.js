import React, {Component} from 'react';

import { Provider } from 'react-redux';
import store from './src/store';
import {View, Text} from 'react-native';

/*
import { createBottomTabNavigator,
    BottomTabBar,
    createMaterialTopTabNavigator } from 'react-navigation-tabs';*/

import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from "react-navigation";

import MovieGridView from "./src/components/FilmsShowTimes";
import FilmDetail from "./src/components/FilmDetail";
import MyMovies from "./src/components/MyMovies";

type Props = {};

const AppNavigator = createStackNavigator(
    {
        MovieGrid: MovieGridView,
        DetailMovie: FilmDetail,
    },
    {
        initialRouteName: "MovieGrid"
    }
);

const MyMovieNavigator = createStackNavigator({
    DetailMovie: FilmDetail,
    MyMovies: MyMovies

}, {
    initialRouteName: "MyMovies"

});

const TabNavigator = createBottomTabNavigator({
    "Movies Near Me": AppNavigator,
    "To Watch": MyMovieNavigator,
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

