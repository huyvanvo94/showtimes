'use strict';

import React, {Component} from 'react';
import Movie from './Movie';
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    SafeAreaView} from 'react-native';

const test = [1,2,3,4,5,6,67,7,7,7,7,7,77 ];

const window = Dimensions.get('window');

class MovieGridView extends Component {

    constructor(props) {
        super(props);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords);
            });
    }

    render() {
        return <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
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
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    list: {

    }
});

export default MovieGridView;