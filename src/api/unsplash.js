import axios from 'axios'
//create a instance of axios client with couple of default props
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 463e18b2b597bc5f251446ea76f36714ead0861a06477c4dbe5766bffe8042da' 
  
    }
})
