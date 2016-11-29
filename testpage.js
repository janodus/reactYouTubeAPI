import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import HelloLine from './components/testcomp';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyC7J141NKM85mbG7W_1BQ0q-zLmTcUOgG4";

const TestComponent1 = () => {
	const testNumber = 3;
	return (
			<div>HELLO FROM THE TEST COMPONENT! { testNumber }</div>
		);
}


class TestComponentClass extends Component {
	constructor(props) {
		super(props);
		this.state = { className: "Test Component Class"};
	}

	render() {
		return (
			<h1>This is a simple { this.state.className }!</h1>
		);
	}
}


class App extends Component {
//================= PROPS CONSTRUCTOR START ============
	constructor(props) {
		super(props);
		this.state = { videos: [] };

		// Youtube API
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		// important: this was ({ vidoes: vidoes }) -> turn this into a single ({ videos }) if the key and value are the same!
		this.setState({ videos }); // this.setState({ videos : videos })

		});
	}
//================= PROPS CONSTRUCTOR END ==============


	render() {

		function justATest(name) {
			return "Hello " + name.name;
		}

		const userName =  {
			name: "Janodus"
		};

		return (
			<div>
				<SearchBar />
				<VideoList videos={ this.state.videos } />
				<HelloLine name="Jan"/>
				{ justATest(userName) }
				<TestComponent1 />
				<TestComponentClass />
			</div>
		);

	}
}


// // this is the original funcional component (not class component):
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// }


ReactDOM.render(<App />, document.querySelector('.container'));
