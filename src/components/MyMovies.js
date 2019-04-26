import React, {Component} from 'react';

import {
    Alert,
    Text,
    View,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView, Image, Button
} from 'react-native';

import { connect } from "react-redux";
import {addMovie, removeMovie} from "../actions/movies";
import Icon from 'react-native-vector-icons/MaterialIcons'


import {
    Menu,
    MenuTrigger,
    MenuOptions,
    MenuOption, MenuProvider
} from 'react-native-popup-menu';


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

/*
Displays a list view of movies to watch
 */
class MyMovies extends Component {
    static navigationOptions = {
        headerTitle: 'To Watch'
    };


    constructor(props) {
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



                        <MenuProvider>

                            <View >

                                <TouchableOpacity onPress={ () => {
                                    this.props.navigation.navigate('DetailMovie',
                                        {film: item}) }}>


                                    <View style={styles.container1}>
                                        <Image style={styles.image1} source={{uri: item.images.poster["1"].medium.film_image}} />

                                        <View style={{flex: 1, flexDirection: 'column', marginTop: 10}}>
                                            <Text style={{marginTop: 10, marginLeft: 10}}>{item.film_name}</Text>
                                            <Text style={{marginTop: 10, marginLeft: 10}}>{item.age_rating}</Text>

                                        </View>
                                    </View>


                                </TouchableOpacity>

                                <View style={styles.dots}>
                                    <Menu>
                                        <MenuTrigger>
                                            <Icon
                                                name='more-vert'
                                                size={20}
                                                color={'grey'}/>

                                        </MenuTrigger>

                                        <MenuOptions >
                                            <MenuOption onSelect={() => this.props.deleteMovie(item)} >
                                                <Text style={{color: 'red'}}>Delete</Text>
                                            </MenuOption>
                                        </MenuOptions>

                                    </Menu>
                                </View>

                            </View>



                        </MenuProvider>

                    )}
                    // Setting the number of column
                    numColumns={1}
                    keyExtractor={(item, index) => index}
                />

            </SafeAreaView>
        );
    }
}



const styles = StyleSheet.create({
    container1: {flex: 1,
        flexDirection: 'row',
        borderColor: "#fff",
        borderWidth: 1,
        backgroundColor: "#e9e9e9"
    },
    dots: {
        position: 'absolute',
        bottom: 35,
        right: 0
    },
    image1: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 5,
        width: 100,
        height: 100
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(MyMovies);