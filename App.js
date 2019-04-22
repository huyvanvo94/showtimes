import React, {Component} from 'react';

import { Provider } from 'react-redux';
import store from './src/store';

import {createAppContainer, createStackNavigator} from "react-navigation";
import MovieGridView from "./src/components/MovieGridView";
import DetailMove from "./src/components/DetailMovie";
import MyMovies from "./src/components/MyMovies";

type Props = {};

const AppNavigator = createStackNavigator(
    {
        MovieGrid: MovieGridView,
        DetailMovie: DetailMove,
        MyMovies: MyMovies
    },
    {
        initialRouteName: "MovieGrid"
    }
);

const Navigation = createAppContainer(AppNavigator);

class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
  }
}

export default App;

