import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor(props){
		super(props);
		this.state={
			query: "",
			filter: "",
			printType: ""
		}
    }
    
    queryChanged(query){
        this.setState({
            query
        });
    }

    filterChanged(filter){
        this.setState({
            filter
        });
    }

    printTypeChanged(printType){
        this.setState({
            printType
        })
    }

    render() { 
        return (
            <div>
                <form className="search-parameters" onSubmit={this.props.handleEvent}>
                    <div className="searchbar">
                        <label htmlFor="searchbox">Search </label>
                        <input 
                            type="text" 
                            id="searchbox" 
                            name="searchbox"
                            value={this.state.query}
                            onChange={e => this.queryChanged(e.target.value)}>
                        </input>
                        <input type="submit" value="Search"></input>
                    </div><hr />
                    <div className="filterbar">
                        <label htmlFor="print-type">Print Type: </label>
                        <select name="print-type" id="print-type" value={this.state.printType} onChange={e => this.printTypeChanged(e.target.value)}>
                            <option value="all">All</option>
                            <option value="books">Books</option>
                            <option value="magazines">Magazines</option>
                        </select>
                        <label htmlFor="book-type">Book Type: </label>
                        <select name="book-type" id="book-type" value={this.state.filter} onChange={e => this.filterChanged(e.target.value)}>
                            <option value="partial">Partial (parts of the text are viewable)</option>
                            <option value="full">Full (all of the text is viewable)</option>
                            <option value="free-ebooks">Free Ebooks</option>
                            <option value="paid-ebooks">Paid Ebooks</option>
                            <option value="ebooks">All Ebooks</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Form;