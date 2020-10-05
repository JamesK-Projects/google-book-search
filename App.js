import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import List from './List/List';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			books: {
				items: {
				}
			}
		}
	}

	handleEvent = (e) => {
		e.preventDefault();
		const url = "https://www.googleapis.com/books/v1/volumes?"
		const apiKey = "AIzaSyCJFMKvbHzOxwSRAP5RmXaVC3GXkY6gocg"
		const params = {
			"key": apiKey,
			"q": e.target.searchbox.value,
			"filter": e.target['book-type'].value,
			"printType": e.target['print-type'].value
		}

		function formatQueryParams(params){
			const queryItems = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
			return queryItems.join('&');
		}

		const queryString = formatQueryParams(params);
		const searchUrl = url + queryString;

		fetch(searchUrl)
			.then(res => {
				if(!res.ok){
					throw new Error ('Something went wrong')
				}
				return (res.json())	
			})
			.then(data => {
				this.setState({
					books: data,
					error: null
				})
			})
			.catch(err => {
				this.setState({
					error: err.message
				});
			});
	}
	
	render() { 
		return(
			<div>
				<header className="app-header">
					<h1>Google Book Search</h1>
				</header>
				<Form 
					handleEvent = {this.handleEvent.bind(this)}
				/>
				<List 
					books={this.state.books}
				/>
			</div>
		)
  	}
}

export default App;
