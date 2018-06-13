import React from 'react';
import ReactDOM from 'react-dom';

//If its a js file that we personally wrote, then we have to put the file path
//in the import statement, like below.
import SearchBar from './components/search_bar';

//variable to store YouTUBE API key
//we installed an npm package called youtube-api-search which makes it easier
//for us to  query videos.
const API_KEY = '';

//Fat Arrow Notation.

//Note that below the search component is inside of another component called App. 
const App =()=> {

return (
            <div>
            <SearchBar />    
            </div>
            );
        };      

//render this component on the page.

ReactDOM.render(<App />,document.querySelector(".container"));