import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar";

const API_KEY = AIzaSyCS1A4Owb1LBGQsS6IahvWtyP4L4KmkSNY
const axios = require('axios');

const App = () => {

  const videoSearch = (term) => {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    };
  }

  return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
