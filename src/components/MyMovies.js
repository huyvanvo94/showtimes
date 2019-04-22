import React, {Component} from 'react';

import {
    Text,
    View,
    FlatList,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Swipeout from 'react-native-swipeout';
import { connect } from "react-redux";


const window = Dimensions.get('window');


const test = [1,2,3,4];

function mapStateToProps(state) {
    return {
        movies: state.moviesReducer.movies.slice()
    }
}


class MyMovies extends Component {

    constructor(props){
        super(props);

    }


    render() {
        return (
            <View style={[{height: window.height, width: window.width}]}>

                <FlatList
                    data={this.props.movies}
                    renderItem={({ item }) => (
                        <Swipeout backgroundColor="#fff"
                                  right={[
                                      {
                                          text: 'Delete',
                                          backgroundColor: 'red',
                                          onPress: ()=> console.log("delete")
                                      }
                                  ]}>

                            <TouchableOpacity onPress={()=> console.log('touch')}>
                                <Text style={[{height: window.height/10}]}>{item.id}</Text>
                            </TouchableOpacity>
                        </Swipeout>
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

    }
});


export default connect(mapStateToProps)(MyMovies);