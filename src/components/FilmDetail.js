
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
    TouchableOpacity
}
from 'react-native';

import { TabView, SceneMap } from 'react-native-tab-view';

import { connect } from 'react-redux';
import {addMovie} from "../actions/movies";
import {addFilm} from "../actions/films";
import { setGeolocation } from '../actions/app.state';
import Carousel from 'react-native-snap-carousel';

import Icon from "react-native-vector-icons/AntDesign";

/*
import { createBottomTabNavigator,
    BottomTabBar,
    createMaterialTopTabNavigator } from 'react-navigation-tabs'; */

import {
    createMaterialTopTabNavigator,
    createSwitchNavigator,
    createAppContainer,
    createStackNavigator
} from "react-navigation";

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);




function mapStateToProps(state) {
    return {
        myMovies: state.moviesReducer.movies.slice(),
        filmsCollection: state.filmsReducer.films.slice()
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMovie: (payload) => dispatch(addMovie(payload)),
        addFilm: (payload) => dispatch(addFilm(payload)),
        setGeolocation: (payload) => dispatch(setGeolocation(payload))

    }
}

const AddIcon = ( ) => <Icon
    name='pluscircle'
    size={40}
    color= '#ff4081'
    style={ {
        alignSelf: 'flex-end', marginRight: 10, marginBottom: 10
    }}
/>;


const test = {
    "film_id": 271425,
    "film_name": "Missing Link",
    "version_type": "Standard",
    "images": {
        "poster": {
            "1": {
                "image_orientation": "portrait",
                "region": "US",
                "medium": {
                    "film_image": "https://image.movieglu.com/271425/271425h1.jpg",
                    "width": 200,
                    "height": 300
                }
            }
        },
        "still": {
            "2": {
                "image_orientation": "landscape",
                "medium": {
                    "film_image": "https://image.movieglu.com/271425/271425h2.jpg",
                    "width": 300,
                    "height": 200
                }
            },
            "3": {
                "image_orientation": "landscape",
                "medium": {
                    "film_image": "https://image.movieglu.com/271425/271425h3.jpg",
                    "width": 300,
                    "height": 200
                }
            },
            "4": {
                "image_orientation": "landscape",
                "medium": {
                    "film_image": "https://image.movieglu.com/271425/271425h4.jpg",
                    "width": 300,
                    "height": 200
                }
            },
            "5": {
                "image_orientation": "landscape",
                "medium": {
                    "film_image": "https://image.movieglu.com/271425/271425h5.jpg",
                    "width": 300,
                    "height": 200
                }
            },
            "6": {
                "image_orientation": "landscape",
                "medium": {
                    "film_image": "https://image.movieglu.com/271425/271425h6.jpg",
                    "width": 300,
                    "height": 200
                }
            },
            "7": {
                "image_orientation": "landscape",
                "medium": {
                    "film_image": "https://image.movieglu.com/271425/271425h7.jpg",
                    "width": 300,
                    "height": 200
                }
            },
            "8": {
                "image_orientation": "landscape",
                "medium": {
                    "film_image": "https://image.movieglu.com/271425/271425h8.jpg",
                    "width": 300,
                    "height": 200
                }
            }
        }
    },
    "synopsis_long": "This April, meet Mr. Link: 8 feet tall, 630 lbs, and covered in fur, but don't let his appearance fool you... he is funny, sweet, and adorably literal, making him the world's most lovable legend at the heart of Missing Link, the globe-trotting family adventure from LAIKA. Tired of living a solitary life in the Pacific Northwest, Mr. Link recruits fearless explorer Sir Lionel Frost to guide him on a journey to find his long-lost relatives in the fabled valley of Shangri-La. Along with adventurer Adelina Fortnight, our fearless trio of explorers encounter more than their fair share of peril as they travel to the far reaches of the world to help their new friend. Through it all, the three learn that sometimes you can find a family in the places you least expect.",
    "distributor_id": 280,
    "distributor": "Lionsgate",
    "release_date": "2019-04-05",
    "age_rating": "PG ",
    "age_advisory": "mild violence, threat, language",
    "duration_mins": 95,
    "review_stars": 0,
    "review_txt": "",
    "trailers": {
        "film_id": 271425,
        "film_name": "Missing Link",
        "trailers": {
            "high": [
                {
                    "film_trailer": "https://trailer.movieglu.com/271425_uk_high.mp4",
                    "trailer_image": "https://image.movieglu.com/271425/271425h3.jpg",
                    "version": 1,
                    "quality": "high",
                    "region": "UK"
                },
                {
                    "film_trailer": "https://trailer.movieglu.com/271425_high_V2.mp4",
                    "trailer_image": "https://image.movieglu.com/271425/271425h4.jpg",
                    "version": 2,
                    "quality": "high",
                    "region": "US"
                }
            ],
            "med": [
                {
                    "film_trailer": "https://trailer.movieglu.com/271425_uk_med.mp4",
                    "trailer_image": "https://image.movieglu.com/271425/271425h3.jpg",
                    "version": 1,
                    "quality": "med",
                    "region": "UK"
                },
                {
                    "film_trailer": "https://trailer.movieglu.com/271425_med_V2.mp4",
                    "trailer_image": "https://image.movieglu.com/271425/271425h4.jpg",
                    "version": 2,
                    "quality": "med",
                    "region": "US"
                }
            ]
        }
    },
    "genres": [
        {
            "genre_id": 7,
            "genre_name": "Animation"
        },
        {
            "genre_id": 3,
            "genre_name": "Comedy"
        },
        {
            "genre_id": 5,
            "genre_name": "Action/Adventure"
        }
    ],
    "cast": [
        {
            "cast_id": 989,
            "cast_name": "Hugh Jackman"
        },
        {
            "cast_id": 1393,
            "cast_name": "Zoe Saldana"
        },
        {
            "cast_id": 1795,
            "cast_name": "Zach Galifianakis"
        },
        {
            "cast_id": 355,
            "cast_name": "Emma Thompson"
        },
        {
            "cast_id": 83,
            "cast_name": "Stephen Fry"
        },
        {
            "cast_id": 2258,
            "cast_name": "Timothy Olyphant"
        },
        {
            "cast_id": 8654,
            "cast_name": "Matt Lucas"
        },
        {
            "cast_id": 36277,
            "cast_name": "David Walliams"
        },
        {
            "cast_id": 36278,
            "cast_name": "Ching Valdez-Aran"
        },
        {
            "cast_id": 34745,
            "cast_name": "Amrita Acharia"
        }
    ],
    "directors": [
        {
            "director_id": 2153,
            "director_name": "Chris Butler"
        }
    ],
    "producers": [],
    "writers": [
        {
            "writer_id": 3068,
            "writer_name": "Chris Butler"
        }
    ],
    "show_dates": [
        {
            "date": "2019-04-23"
        },
        {
            "date": "2019-04-24"
        },
        {
            "date": "2019-04-25"
        },
        {
            "date": "2019-04-26"
        },
        {
            "date": "2019-04-27"
        },
        {
            "date": "2019-04-28"
        },
        {
            "date": "2019-04-29"
        },
        {
            "date": "2019-04-30"
        },
        {
            "date": "2019-05-01"
        },
        {
            "date": "2019-05-02"
        },
        {
            "date": "2019-05-04"
        },
        {
            "date": "2019-05-05"
        },
        {
            "date": "2019-05-06"
        },
        {
            "date": "2019-05-11"
        },
        {
            "date": "2019-05-15"
        },
        {
            "date": "2019-05-18"
        },
        {
            "date": "2019-05-24"
        },
        {
            "date": "2019-05-25"
        },
        {
            "date": "2019-05-26"
        },
        {
            "date": "2019-05-27"
        },
        {
            "date": "2019-05-29"
        },
        {
            "date": "2019-05-31"
        },
        {
            "date": "2019-06-01"
        },
        {
            "date": "2019-06-02"
        }
    ],
    "alternate_versions": [
        {
            "film_id": 290064,
            "film_name": "Missing Link 3D",
            "version_type": "3D"
        }
    ],
    "status": {
        "state": "OK",
        "code": 1,
        "method": "filmDetails",
        "message": null,
        "request_method": "GET",
        "version": "PFIEv102",
        "auth_type": "d"
    }
};




class Tester extends Component{
    render() {

        return (
            <View style={{backgroundColor: 'white'}}>
                <Text>Hello</Text>
            </View>
        )
    }
}

const Tabs = createMaterialTopTabNavigator({
    "SHOWTIMES": Tester,
    "MOVIE DETAILS": Tester,
    "TRAILER": Tester
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


class FilmDetail extends Component {

    static router = Tabs.router;

    static navigationOptions = {
        headerTitle: 'See a Movie'
    };


    constructor(props) {
        super(props);

        console.log(this.props.navigation.state.params.film);

    }
    render() {
        const film = this.props.navigation.state.params.film;

        let still = test.images.still;

        let data = [];

        Object.values(still).map((type) => {
            console.log('type: ' + type.medium);
            data.push({'medium': type.medium});
        });


        data.forEach((medium) => {
            console.log(medium);
        });

        return (

            <SafeAreaView style={{flex: 1, backgroundColor: 'white', margin: 0}}>
                <FilmCarousel still={data}/>

                <MainScreenNavigation navigation={this.props.navigation}/>

                <TouchableOpacity
                    onPress={() => {
                        this.props.addMovie(film)
                    }}

                    style={{
                     }}>
                    <AddIcon/>
                </TouchableOpacity>


            </SafeAreaView>

        );
    }
}




class FilmCarousel extends Component {

    _renderItem( {item}) {

        return (
                <Image source={{uri: item.medium.film_image}}
                       style={{flex: 1, width: "100%", height: 0,  marginBottom: 0}}/>
        );
    }

    render() {
        return (
            <Carousel
                sliderWidth={400}
                itemWidth={400}
                data={this.props.still}
                renderItem={this._renderItem}
                containerCustomStyle={{flex: 1}}
                slideStyle={{flex: 1}}
            />
        );
    }
}





const entryBorderRadius = 8;

const IS_IOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
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
        color: "#000000",
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },scene: {
        flex: 1, width: "100%", height: "100%"
    },
    addIcon: {
        justifyContent: 'flex-end'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);