
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
import { createMaterialTopTabNavigator, TabBarTop } from "react-navigation";
import Icon from "react-native-vector-icons/AntDesign";
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
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 10,
        top: Dimensions.get('window').height - 220
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
}

class FilmDetail extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
        ],
    };
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
            <View>

                <FilmCarousel still={data}/>

                <TouchableOpacity
                    onPress={() => {
                        this.props.addMovie(film)
                    }}
                    style={{
                    flexDirection: 'column',
                    flex: 1
                }}>
                    <AddIcon/>
                </TouchableOpacity>
            </View>
        )
    }
}

 class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'First' },
            { key: 'second', title: 'Second' },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

class FilmCarousel extends Component {

    _renderItem( {item}) {
        console.log(item.medium.film_image)

        return (
            <View >

                <Image source={{uri: item.medium.film_image}}
                       style={{width: "100%", height: item.medium.height}}/>

            </View>
        );
    }

    render() {
        return (
            <Carousel
                sliderWidth={400}
                itemWidth={400}
                data={this.props.still}
                renderItem={this._renderItem}

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