'use strict';

import React, {Component} from 'react';
import Movie from './Movie';
import {
    Button,
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    SafeAreaView} from 'react-native';

import {addMovie} from "../actions/movies";

import {connect} from 'react-redux';

const test = [1,2,3,4,5,6,67,7,7,7,7,7,77 ];

const window = Dimensions.get('window');


function mapStateToProps(state) {
    return {
        myMovies: state.moviesReducer.movies.slice()
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMovie: (payload) => dispatch(addMovie(payload))
    }
}


class MovieGridView extends Component {


    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};

        return {
            title: params.title,
            headerRight: params.headerRight
        }
    };

    constructor(props) {
        super(props);

        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         console.log(position.coords);
        //     });
    }

    _setNavigationParams() {
        const title = 'Watch a movie';
        const headerRight  = <Button
                                    title="My Movies"
                                    onPress={()=>
                                        this.props.navigation.navigate('MyMovies')}
                             />;

        this.props.navigation.setParams({
            title,
            headerRight
        });

    }


    componentDidMount() {

        this._setNavigationParams();
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={styles.container}>
                    <FlatList
                        data={test}
                        renderItem={({ item }) => (
                            <Movie width={window.width }
                                   height={200}
                                   push={()=> this.props.navigation.navigate('DetailMovie')}/>
                        )}
                        //Setting the number of column
                        numColumns={1}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    list: {

    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieGridView);