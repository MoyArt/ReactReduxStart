import React from 'react';

class SearchBar extends React.Component{
    render(){
        return <input type="text" id="SearchBar" placeholder="Search..." onChange={this.onInputChange}/>
    }
    onInputChange(e){

    }
}

export default SearchBar;