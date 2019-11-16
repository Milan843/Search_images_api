import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state={images:[]};
 onSearchSubmit=async term=>{
        console.log(term)
    const response=await unsplash.get('/search/photos',{
        params:{query:term }
    })
    console.log(response.data.results)
    console.log(this.state.images.length)
    this.setState({images:response.data.results})
    console.log(this.state.images.length)
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
               Found:{this.state.images.length} images
            </div>
        )
    }

}

export default App;