//import data from react and materialUI
import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const videoItem = ({ video, onVideoSelect }) =>{
    //perform an action for when each individual data is click
    return (
        <Grid item xs={12}>
            <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
                <img style={{marginRight:'5px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}


export default videoItem