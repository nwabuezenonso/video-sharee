import React from "react";
import { Paper, TextField} from '@material-ui/core'

class SearchBar extends React.Component{
    
    state = {
        searchTerm: ' '
    }
    
    handleChange = (event) =>{this.setState({searchTerm: event.target.value})}

    //calling the props after the handle submit method
    handleSubmit = (event) => { 
       event.preventDefault()
      const  { searchTerm }  =  this.state
      const {onFormSubmit} = this.props

      onFormSubmit(searchTerm)

    }

    //render some content with material UI
    render(){
        return(
            <Paper elevation={6} style={{padding: '25px'}} >
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..."  onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar

