import React from 'react';

//importing paper and typography
import { Paper, Typography} from '@material-ui/core'

//adding component
const VideoDetail = ({ video }) =>{
    if(!video) return <div>Loading...</div>

    //pass in the data of the selected video and store in a variable
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    //React Fragments allow you to wrap or group multiple elements without adding an extra node to the DOM.
    //load in the src and the title
    return(
        <React.Fragment>
            <Paper elevation={6} style = {{height: '70%'}}>
                <iframe frameBorder= "0" height="100%" width="100%"  title="video Player" src={videoSrc}  />
            </Paper>
            <Paper elevation={6} style = {{padding: '15%'}}>
                <Typography variant="h4"> {video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
     
        </React.Fragment>
        
    )
}

export default VideoDetail