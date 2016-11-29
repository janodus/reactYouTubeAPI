import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyC7J141NKM85mbG7W_1BQ0q-zLmTcUOgG4";


class App extends Component {

//================= PROPS CONSTRUCTOR START ============
	constructor(props) {
		super(props);
		this.state = { videos: [] };

		// Youtube API
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		this.setState({ videos }); // this.setState({ videos : videos })
		});
	}
//================= PROPS CONSTRUCTOR END ==============

	render() {

		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList vids={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
