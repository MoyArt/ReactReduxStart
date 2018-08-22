import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ""};
    }
    render(){
        return <input type="text" id="SearchBar" placeholder="Search..." onChange={this.onInputChange}/>
    }
    onInputChange(e){
        this.setState({term: e.target.value})
    }
}

export default SearchBar;