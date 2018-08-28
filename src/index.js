import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyDGdCpzKCvEQqciOEkEjOhRj_hMxyhb9rw';

/* Create a new component.*/

class App extends Component{
    constructor(props){
        super(props);
        this.state = {videos: []};
        YTSearch({key:API_KEY, term: '3D printers'}, (data) => {
            console.log(data);
            this.setState({videos:data});
        });
    }
    render(){
        return (
            <div className="search-bar">
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}


/* Add component to the DOM, Take this components generated HTML and put it on the Page*/
ReactDOM.render(<App />, document.querySelector(".container"));