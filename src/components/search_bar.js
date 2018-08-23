import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ""};
    }
    render(){
        return (
            <div>
                <input 
                value={this.state.term}
                type="text" 
                id="SearchBar" 
                placeholder="Search..." 
                onChange={(e)=> this.setState({term: e.target.value})}/>
                <p>The value of term is: <strong>{this.state.term}</strong></p>
            </div>   
        );
    }
}

export default SearchBar;