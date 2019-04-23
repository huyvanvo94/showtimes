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
import {addFilm} from "../actions/films";
import {connect} from 'react-redux';
import axios from 'axios';
import {defaultMovieGlueHeader, MOVIE_GLU_API} from "../constants";
import {setGeolocation} from "../actions/app.state";

const test = [1,2,3,4,5,6,67,7,7,7,7,7,77 ];

const window = Dimensions.get('window');


function mapStateToProps(state) {
    console.log(state.appStateReducer.state);

    return {
        myMovies: state.moviesReducer.movies.slice(),
        filmsCollection: state.filmsReducer.films.slice(),
        appState:  state.appStateReducer.state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMovie: (payload) => dispatch(addMovie(payload)),
        addFilm: (payload) => dispatch(addFilm(payload)),
        setGeolocation: (payload) => dispatch(setGeolocation(payload))

    }
}


// 
class FilmsShowTimes extends Component {


    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};

        return {
            title: params.title,
            headerRight: params.headerRight
        }
    };

    constructor(props) {
        super(props);

        console.log(this.props.appState);


        this.state = {
            lat: null, lng: null
        }
    }

    fetchGeolocation = (callback=null) => {
        navigator.geolocation.getCurrentPosition((pos) => {

            this.setState({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            }, () => {
                if(callback !== null) {
                    callback( );
                }
            })
        });
    };

    fetchMovies = () => {

        let url = MOVIE_GLU_API + "/filmsNowShowing";
        let headers = defaultMovieGlueHeader;
        /*
         latlng: Geolocation of end user. Format example: 51; -0.1
        */
        if(this.state.lat && this.state.lng) {
            headers.geolocation = `${this.state.lat}; ${this.state.lng}`;
        }

        console.log(this.state);

        axios.get(url, { headers : headers})
            .then((res) =>  {

                let films = res.data.films ;


                console.log(films);

                films.forEach((film) => {
                    this.props.addFilm(film);
                })
            })
            .catch((err) => console.log( err ));
    };

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
        // Set up UI
        this._setNavigationParams();

        this.fetchGeolocation(this.fetchMovies);

    }


    render() {

        let films = this.props.filmsCollection;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={styles.container}>
                    <FlatList
                        data={films}
                        renderItem={({ item }) => (
                            <Movie film={item} width={window.width/2 }
                                   height={300}
                                   push={
                                       () => {
                                           this.props.navigation.navigate('DetailMovie',
                                            {film: item});
                                       }
                                   }/>
                        )}
                        //Setting the number of column
                        numColumns={2}
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

export default connect(mapStateToProps, mapDispatchToProps)(FilmsShowTimes);