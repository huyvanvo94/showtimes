
import React, {Component} from 'react';
import {
    View,
    Text, Button
} from 'react-native';
import { connect } from 'react-redux';
import {addMovie} from "../actions/movies";


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



class DetailMovie extends Component {

    static navigationOptions = {
        headerTitle: 'See a Movie',
        headerRight: <Button title="To see"/>
    };

    render() {
        return (
            <View>
                <Text>Detail Movie</Text>

                <Button title="Example" onPress={() => this.props.addMovie({id: 3})}/>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);