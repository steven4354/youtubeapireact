import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyDplSSfR4Eb-0Z6FZ4Y6tRi5dwAG4KdvkY';

// Create a new component that makes html
//now change it to have a state to reflect the search

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
     };

    this.onSearch('surfboards');
  }

  onSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  //inside the onVideoSelect is a ***function***
  //then pass this function into video_list with any unique attribute name onVideoSelect
  //then pass this function into video_list_item with the same attribute name onVideoSelect
  //add to the video_list_item a onClick feature that is a callback function that calls onVideoSelect

  render() {
    return (
      <div>
        <SearchBar onVideoSearch={(term) => {this.onSearch(term)}}/>
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}
// Take this component's generated html and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));
