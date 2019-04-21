import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Movie extends Component{

    render() {
        return <View>
            <View style={styles.square}/>
        </View>
    }
}


const styles = StyleSheet.create({
    container: {

    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: '#ff7d7b'
    }
});

export default Movie;

