
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import VideoPlayer from 'react-native-video-player';



export default class TrailerVideo extends Component{
    constructor(props) {
        super(props);


    }

    render(){
        return (
           <View>

               <VideoPlayer

                   video={{ uri:  "https://trailer.movieglu.com/271425_high_V2.mp4" }}
                   videoWidth={300}
                   videoHeight={200}

               />
           </View>
        );
    }
}