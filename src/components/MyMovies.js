import React, {Component} from 'react';

import {
    Alert,
    Text,
    View,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Swipeout from 'react-native-swipeout';
import { connect } from "react-redux";
import {addMovie, removeMovie} from "../actions/movies";
import Icon from 'react-native-vector-icons/MaterialIcons'
import PopupMenu from "./PopupMenu";

const MenuIcon = ({ navigate }) => <Icon
    name='three-bars'
    size={30}
    color='#000'
    onPress={() => navigate('DrawerOpen')}
/>;

const window = Dimensions.get('window');


const test = [1,2,3,4];

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

class MyMovies extends Component {

    constructor(props){
        super(props);

    }

    displayDelete = (item) => {
        Alert.alert(
            'Delete',
            'Delete from collections',
            [
                {text: 'OK', onPress: () => { this.props.deleteMovie()}},
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
            <View style={[{height: window.height, width: window.width}]}>

                <FlatList
                    data={this.props.movies}
                    renderItem={({ item }) => (


                            <TouchableOpacity onPress={()=> console.log('touch')}>
                                <Text style={[{height: window.height/10}]}>{item.id}</Text>


                                    <TouchableOpacity onPress={this.displayDelete(item)}>
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

            </View>
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