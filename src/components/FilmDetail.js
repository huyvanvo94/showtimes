import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Platform,
    Image,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    FlatList,
}
from 'react-native';
import VideoPlayer from 'react-native-video-player';
import { connect } from 'react-redux';
import { addMovie } from "../actions/movies";
import { addFilm } from "../actions/films";
import { setGeolocation } from '../actions/app.state';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import {defaultMovieGlueHeader, MOVIE_GLU_API} from "../constants/constants";

import Icon from "react-native-vector-icons/AntDesign";

import {
    createMaterialTopTabNavigator,
    createAppContainer
} from "react-navigation";


function mapStateToProps(state) {

    return {
        myMovies: state.moviesReducer.movies.slice(),
        filmsCollection: state.filmsReducer.films.slice(),
        appState:  Object.assign({}, state.appStateReducer)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMovie: (payload) => dispatch(addMovie(payload)),
        addFilm: (payload) => dispatch(addFilm(payload)),
        setGeolocation: (payload) => dispatch(setGeolocation(payload))

    }
}

class ShowTimes extends Component {

    constructor(props){
        super(props);
        this.state = {
            cinemas: []
        }
    }

    componentDidMount() {

        this.fetchShowtimes();



    }

    fetchShowtimes = () => {

        const {film_id} = this.props.navigation.state.params.film;


        const dateObj = new Date();
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();

        const todayDate = year + "-" + month + "-" + day;

        const headers = defaultMovieGlueHeader;

        const {lat, lng} = this.props.screenProps.location;

        headers.Geolocation = `${lat}; ${lng}`;


        axios.get(MOVIE_GLU_API + `/filmShowTimes/?film_id=${film_id}&date=${todayDate}`, {headers: headers})
            .then((res) => {
                console.log(res.data);

                this.setState({cinemas: res.data.cinemas})
            }).catch((err) => {

                console.log(err);
        })
    };


    // Convert 24 time to 12 hour
    convert24to12 = (str) => {
        const split = str.split(":");

        if(parseInt(split[0]) < 12) {
            return str + " AM";
        }
        return (parseInt(split[0]) % 12) + ":" + split[1] + " PM";
    };

    render() {
         return (
            <View style={styles.tabComponent}>
                <Text style={{color: '#fff', fontSize: 15}}> Show times for today </Text>


                <FlatList
                    data={ this.state.cinemas}
                    renderItem={({ item }) => (
                        <View>

                            <Text style={{color: '#fff', fontSize: 15,  letterSpacing: 0.5}}>{item.cinema_name} </Text>

                            {
                                item.showings.Standard.times.map((time) => {
                                    return <Text style={{color: '#fff',  letterSpacing: 0.5}}>{this.convert24to12(time.start_time)} to {this.convert24to12(time.end_time)} </Text>
                                })
                            }


                        </View>
                    )}
                />
            </View>
        );
    }
}

class MovieDetails extends Component {


    /*
    Only renders if film model is defined
     */
    render() {
        return (
            <View style={styles.tabComponent}>


                <ScrollView style={{height: Dimensions.get('window').height / 200}}>
                    <Text style={{color: 'white'}}>Plot</Text>

                    {
                        this.props.screenProps.film ?
                            (
                                <Text style={{color: '#fff',  letterSpacing: 0.5}}>
                                    {
                                        this.props.screenProps.film.synopsis_long
                                    }
                                </Text>
                            ) : (
                                <Text style={{color: '#fff',  letterSpacing: 0.5}}>
                                </Text>
                            )
                    }

                </ScrollView>

                <ScrollView style={{marginTop: 10}}>
                    <Text style={{color: 'white'}}>Casts</Text>

                    {
                        this.props.screenProps.film ? (
                            this.props.screenProps.film.cast.map((who) => {
                                return <Text style={{color: '#fff'}}>{who.cast_name}</Text>
                            })
                        ): null
                    }
                </ScrollView>

            </View>
        );
    }
}

class Trailer extends Component {



    /*
    Only renders if film model is defined
     */

    render() {

        const width = Dimensions.get('window').width ;

        if(this.props.screenProps.film) {

            const med = this.props.screenProps.film.trailers.trailers.med;
            const uri = med[0].film_trailer;

            return (
                <View style={styles.tabComponent}>

                    <Text style={{color: 'white'}}> </Text>
                    <VideoPlayer

                        video={{uri: uri}}
                        videoWidth={width}
                        videoHeight={200}
                    />

                </View>
            );
        } else {
            return (
                <View style={styles.tabComponent}>

                    <Text style={{color: 'white'}}> Trailer Name </Text>
                    <VideoPlayer

                        video={{ uri:  ""}}
                        videoWidth={width}
                        videoHeight={200}

                    />

                </View>
            );
        }
    }
}


const Tabs = createMaterialTopTabNavigator({
    "SHOWTIMES": ShowTimes,
    "MOVIE DETAILS": MovieDetails,
    "TRAILER": Trailer
},   {
    navigationOptions: ({ navigation, screenProps }) => ({
        header: null,
        headerMode: 'none',
        tabBarVisible: true,
        tabBarLabel: () => {
            const { routeName } = navigation.state;
            switch (routeName) {
                //
            }
            return <Text>{routeName}</Text>;
        },
    }),
    animationEnabled: false,
    swipeEnabled: true,
    tabBarOptions: {
        headerMode: 'none',
        activeTintColor: 'rgb(12,157,197)',
        inactiveTintColor: 'black',
        indicatorStyle: {
            backgroundColor: 'rgb(102,134,205)',
        },
        labelStyle: {
            fontSize: 14,
            color: 'white',
        },
        tabStyle: {
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
        },
        style: {
            backgroundColor: 'black',
        },
        statusBarStyle: 'light-content',
    },
},);

const MainScreenNavigation = createAppContainer(Tabs);

/*
Displays a detail view of film
 */
class FilmDetail extends Component {

    static router = Tabs.router;

    static navigationOptions = {
        headerTitle: 'See a Movie'
    };


    constructor(props) {
        super(props);

        // May not exists yet
        this.state = {
            details: undefined
        };
    }

    componentDidMount() {

        const {film_id} = this.props.navigation.state.params.film;

        let url = MOVIE_GLU_API + "/filmDetails";

        axios.get(url,
            { params: {film_id: film_id}, headers: defaultMovieGlueHeader})
            .then((res) => {

                this.setState({details: res.data})

            }).catch((err) => console.log(err.message));

    }

    getAndFormatStills = () => {

        let still = undefined; // this.state.details.images.still;

        if(this.state.details !== undefined
            && this.state.details.images.still !== undefined) {
            still = this.state.details.images.still;
        }

        let data = [];

        if(still) {

            Object.values(still).map((type) => {
                data.push({'medium': type.medium});
            });
        }

        return data;
    };


    render() {

        const film = this.props.navigation.state.params.film;
        const {location} =  this.props.appState ;

        return (

            <SafeAreaView style={styles.container}>
                <Text style={styles.title}> {film.film_name}</Text>

                <FilmCarousel still={this.getAndFormatStills()} />

                <MainScreenNavigation screenProps={{location: location, film: this.state.details}}
                                      navigation={this.props.navigation}/>


                <TouchableOpacity
                    style={styles.floatContainer}
                    onPress={() => {
                        this.props.addMovie(film)
                    }}>

                    <Icon name="plus"
                          size={25}
                          color="#01a699" />
                </TouchableOpacity>

            </SafeAreaView>

        );
    }
}


class FilmCarousel extends Component {

    _renderItem( {item}) {

        return (
            <Image source={{uri: item.medium.film_image}}
                   style={styles.filmImage}
            />
        );
    }

    render() {
        return (
            <View style={{height: "30%"}}>
                <Carousel

                    sliderWidth={400}
                    itemWidth={400}
                    data={this.props.still}
                    renderItem={this._renderItem}
                    containerCustomStyle={{flex: 1}}
                    slideStyle={{flex: 1}}
                />
            </View>
        );
    }
}






const entryBorderRadius = 8;

const IS_IOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 0
    },
    filmImage: {flex: 1,
        width: "100%",
        height: 0,
        marginBottom: 0
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    title: {
        zIndex: 1,
        fontSize: 20,
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        color:'#fff',
        fontWeight: 'bold',
        letterSpacing: 0.5
    },scene: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    addIcon: {
        justifyContent: 'flex-end'
    },
    tabComponent : {
        height: '100%' ,
        backgroundColor: 'black'
    }, floatContainer : {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width: 50,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height:50,
        backgroundColor:'#fff',
        borderRadius:50,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);