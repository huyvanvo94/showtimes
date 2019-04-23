import React, {Component} from 'react';

import {
    Alert,
    Text,
    View,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView, Image
} from 'react-native';

import { connect } from "react-redux";
import {addMovie, removeMovie} from "../actions/movies";
import Icon from 'react-native-vector-icons/MaterialIcons'

const MenuIcon = ({ navigate }) => <Icon
    name='three-bars'
    size={30}
    color='#000'
    onPress={() => navigate('DrawerOpen')}
/>;

const window = Dimensions.get('window');

function mapStateToProps(state) {
    return {
        movies: state.moviesReducer.movies.slice()
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteMovie: (payload) => dispatch(removeMovie(payload))
    }
}


let test = [
    {
        "film_id": 249077,
        "film_name": "Dumbo",
        "release_date": "2019-03-29",
        "age_rating": "PG ",
        "age_rating_image": "https://assets.movieglu.com/age_rating_logos/us/pg.png",
        "film_trailer": "https://trailer.movieglu.com/249077_uk_high.mp4",
        "synopsis_long": "Circus owner Max Medici (Danny DeVito) enlists former star Holt Farrier (Colin Farrell) and his children Milly (Nico Parker) and Joe (Finley Hobbins) to care for a newborn elephant whose oversized ears make him a laughingstock in an already struggling circus. But when they discover that Dumbo can fly, the circus makes an incredible comeback, attracting persuasive entrepreneur V.A. Vandevere (Michael Keaton), who recruits the peculiar pachyderm for his newest, larger-than-life entertainment venture, Dreamland. Dumbo soars to new heights alongside a charming and spectacular aerial artist, Colette Marchant (Eva Green), until Holt learns that beneath its shiny veneer, Dreamland is full of dark secrets.",
        "images": {
            "poster": {
                "1": {
                    "image_orientation": "portrait",
                    "region": "US",
                    "medium": {
                        "film_image": "https://image.movieglu.com/249077/249077h1.jpg",
                        "width": 200,
                        "height": 300
                    }
                }
            },
            "still": {
                "2": {
                    "image_orientation": "landscape",
                    "medium": {
                        "film_image": "https://image.movieglu.com/249077/249077h2.jpg",
                        "width": 300,
                        "height": 200
                    }
                }
            }
        }
    }
];



class MyMovies extends Component {
    static navigationOptions = {
        headerTitle: 'To Watch'
    };
    constructor(props){
        super(props);

    }

    displayDelete = (item) => {
        Alert.alert(
            'Delete',
            'Delete from collections',
            [
                {text: 'OK', onPress: () => { this.props.deleteMovie(item)}},
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },

            ],
            {cancelable: true},
        );
    };


    render() {
        return (
            <SafeAreaView style={[{height: window.height, width: window.width}]}>

                <FlatList
                    data={this.props.movies}
                    renderItem={({ item }) => (


                            <TouchableOpacity onPress={   () => {
                                this.props.navigation.navigate('DetailMovie',
                                    {film: item});
                            }}>

                                <View style={{flex: 1,
                                                flexDirection: 'row',
                                                borderColor: "#fff",
                                                borderWidth: 1,
                                                backgroundColor: "#e9e9e9"}}>
                                    <Image style={{marginLeft: 10, marginTop: 10, marginBottom: 10, paddingBottom: 5, width: 100, height: 100}} source={{uri: item.images.poster["1"].medium.film_image}} />

                                    <View style={{flex: 1, flexDirection: 'column', marginTop: 10}}>
                                        <Text style={{marginTop: 10, marginLeft: 10}}>{item.film_name}</Text>
                                        <Text style={{marginTop: 10, marginLeft: 10}}>{item.age_rating}</Text>

                                    </View>
                                </View>

                                <TouchableOpacity onPress={() => this.displayDelete(item)}>
                                    <Icon
                                        style={styles.dots}
                                        name='more-vert'
                                        size={20}
                                        color={'grey'}
                                        ref={this.onRef} />
                                </TouchableOpacity>


                            </TouchableOpacity>

                    )}
                    //Setting the number of column
                    numColumns={1}
                    keyExtractor={(item, index) => index}
                />

            </SafeAreaView>
        );
    }
}

class MyMovie extends Component {

    render() {
        return (
            <View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {

    },
    dots: {
        position: 'absolute',

        bottom: 35, right: 0
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(MyMovies);