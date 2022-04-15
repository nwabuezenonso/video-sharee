//importing everything that needs to be imported
import React from "react";
import { Grid } from "@material-ui/core";
//importing videoItem component
import VideoItem from './VideoItem'

//create a functional component for the videos to map videos to a new set of array
//and to create an onclick method
const VideoList = ({videos, onVideoSelect}) =>{
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/> )
    //load in the list of videos
    return (
        <Grid container spacing={3}>
            {listOfVideos}
        </Grid>
    )
}


export default VideoList;