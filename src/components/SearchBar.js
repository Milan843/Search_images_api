import React from "react"

class SearchBar extends React.Component{
    state={term:"nsjjjs"}
    // onIputChange(event){
    //     console.log("dcjjs");
    //      console.log(event.target.value);
    // }
onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state.term)
}

    render(){
        return ( 
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image search</label>
                    {/* <input type="text" onChange={(e)=>console.log(e.target.value)}/> */}
                <input 
                type="text" 
                value={this.state.term}
                onChange={e=>this.setState({term:e.target.value.toUpperCase()})}/>
                </div>
            </form>
        </div>
        )}
}
export default SearchBar;