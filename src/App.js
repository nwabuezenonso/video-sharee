//importing react from react
import React from "react";

//importing grid from material ui
import { Grid } from '@material-ui/core'


//expoting several data from the component folder that is loaded in the "Index.js file component"
import  { SearchBar, VideoDetail, VideoList}  from './components'

// import youtube from the youtube api component
import  youtube from './api/youtube'




//create react class for dynamic data and class component
class App extends React.Component {

    //state for the videos and selected video
    state = {
        videos: [],
        selectedVideo: null
    }

    //life cycle method that load in data after the component is mounted 
    componentDidMount(){
        //loads the handleSubmit method with kimestu no yaba data
        this.handleSubmit('kimestu no yaba')
    }
    //videoselect function
    onVideoSelect = (video) =>{
        //set the data of the selectedvideo to be equal video
        this.setState({selectedVideo: video});
    }

    //handle submit method for data
    handleSubmit = async (searchTerm) => {
            //create a async method for getting data
            const response = await youtube.get('search',{
            //passing params data from the api after a /search
            params: {
                part: 'snippet',
                maxResults: 5,
                key: process.env.REACT_APP_KEY,
                q: searchTerm
            }
        })

        //setting the state with data from the API
       this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }


    //jsx method from material UI and calling component and passing props
    render(){
        const { selectedVideo,videos } = this.state
        return (
            <div className="App">
                    <Grid justifyContent="center" container spacing={10}>
                        <Grid item xs={12}>
                            <Grid container item xs={12}>
                                <Grid item xs={12}>
                                    <SearchBar onFormSubmit={this.handleSubmit}/>
                                </Grid>
                                <Grid item xs={8}>
                                    <VideoDetail  video={selectedVideo}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <VideoList  videos={videos} onVideoSelect={this.onVideoSelect}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
            </div>
        );
    }
}

export default App;
