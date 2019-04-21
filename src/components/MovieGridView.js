import React, {Component} from 'react';
import Movie from './Movie';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    SafeAreaView} from 'react-native';

const test = [1,2,3,4,5,6,67,7,7,7,7,7,77,];

class MovieGridView extends Component {

    render() {
        return <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <FlatList
                    data={test}
                    renderItem={({ item }) => (
                        <Movie/>
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