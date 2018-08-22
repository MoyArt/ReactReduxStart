import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ""};
    }
    render(){
        return (
            <div>
                <input type="text" id="SearchBar" placeholder="Search..." onChange={this.onInputChange}/>
            </div>
            <p>The value of term is: <strong>{this.state.term}</strong></p>
        );
    }
    onInputChange(e){
        this.setState({term: e.target.value})
    }
}

export default SearchBar;