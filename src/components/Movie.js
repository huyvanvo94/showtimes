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

        this.props.push();
    };

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return(
            <TouchableOpacity onPress={this.touchHandler}>
                <View
                    style={[ styles.container, {
                         height: this.props.height,
                         width: this.props.width}]}>



                    <LinearGradient locations={[0.8, 0.9, 1.0]}
                                    colors={['white', 'black']} style={styles.linearGradient}>

                        <Image source={pic} style={{width: 193, height: 110}}/>


                        <Text style={styles.title}> Movie Title </Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10,
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

        height: 20,
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

