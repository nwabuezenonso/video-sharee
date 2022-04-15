//importing axios for https request
import axios from 'axios'

//exporting axios.create.  axios.create makes it easier to create get request, we are creating a request and passing in method
//we specify our base url and params
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

