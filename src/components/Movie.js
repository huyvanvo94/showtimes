import React, {Component} from 'react';
import {Image,
        View,
        Text,
        TouchableOpacity,
        StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Movie extends Component{

    touchHandler = () => {
        console.log('Movie touchHandler');

        this.props.push( );

    };

    render() {

        const film_name = this.props.film.film_name;
        const film_image = this.props.film.images.poster["1"]["medium"]["film_image"];
        let pic = {
            uri: film_image
        };

        return(
            <TouchableOpacity onPress={this.touchHandler}>
                <View
                    style={[ styles.container, {
                         height: this.props.height,
                         width: this.props.width}]}>



                    <LinearGradient locations={[0.1, 0.5, 1.0]}
                                    colors={['white', 'black']} style={styles.linearGradient}>


                        <Image source={pic} style={{width: "100%", height: "100%"}}/>

                        <Text style={styles.title}> {film_name} </Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'

    },
    titleContainer: {
        width: '100%',

        height: 40,
        backgroundColor: '#000'
    },

    title: {
        bottom: 0,
        position: 'absolute',

        fontSize: 20,
        height: 30,
        width: '100%',
        color: '#fff'
    },
    square: {
        backgroundColor: '#ff7d7b'
    },

    linearGradient: {
        flex: 1,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

export default Movie;

