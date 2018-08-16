import React from 'react';
import ReactDOM from 'react-dom';

/* Create a new component.*/

const App = function(){
    return <div>Hello!!</div>;
}

/* Add component to the DOM, Take this components generated HTML and put it on the Page*/
ReactDOM.render(<App />, document.querySelector(".container"));