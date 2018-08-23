import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDGdCpzKCvEQqciOEkEjOhRj_hMxyhb9rw';
YTSearch({key:API_KEY, term: '3D printers'}, function(data){
    console.log(data)
})
/* Create a new component.*/

const App = function(){
    return (
        <div class="search-bar">
            <SearchBar/>
        </div>
    );
}


/* Add component to the DOM, Take this components generated HTML and put it on the Page*/
ReactDOM.render(<App />, document.querySelector(".container"));