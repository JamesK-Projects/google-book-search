import React, { Component } from 'react';
import './ListItem.css'

class ListItem extends Component {
    render() { 
        
        console.log(this.props.book.volumeInfo?.title)
        return (
            <div>
                <div className="book-results group">
                    <img src={this.props.book.volumeInfo?.imageLinks?.smallThumbnail} alt="book cover" className="item-img"/>
                    <div className="item-info">
                        <h2>{this.props.book.volumeInfo?.title}</h2>
                        <h3>Author: {this.props.book.volumeInfo?.authors}</h3>
                        <h3>Price: {this.props.book.saleInfo?.listPrice?.amount}</h3>
                        <p>{this.props.book.volumeInfo?.description}</p>
                    </div>
                </div> 
                <hr />
            </div>
        );
    }
    
}
 
export default ListItem;