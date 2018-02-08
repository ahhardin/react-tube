import React, {Component} from "react";
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";
import VideoList from "./components/video_list";
import 'bootstrap/dist/css/bootstrap.css';

const API_KEY = "AIzaSyCS1A4Owb1LBGQsS6IahvWtyP4L4KmkSNY"
const axios = require('axios');

class App extends Component {
  constructor() {
    super()

    this.state = {
      videos: [],
      selected_video: null
    }
    this.videoSearch = this.videoSearch.bind(this);
    this.changeCurrentVideo = this.changeCurrentVideo.bind(this)
  }

  videoSearch(term) {
    const url = 'https://www.googleapis.com/youtube/v3/search';

    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      type: 'video'
    }

    axios.get(url, {params: params})
      .then(response => {
        this.setState({
          videos: response.data.items,
          selected_video: response.data.items[0]})
      })
      .catch(error => {
        console.error(error)
      })

  }

  changeCurrentVideo(video) {
    this.setState({selected_video:video})
  }

  render () {
    return (
      <div>
      <div className="row">
      <div className="mt-5 text-center col-md-4 offset-md-4">
        <SearchBar onSearchTermChange={this.videoSearch} /></div></div>
        <div className="row">
        <VideoDetail video={this.state.selected_video} />
        <VideoList changeCurrentVideo={this.changeCurrentVideo} videos={this.state.videos} />
      </div>
      </div>
    )
  }
}

ReactDOM.render( < App / > , document.getElementById('root'));
