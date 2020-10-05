import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem'

class List extends Component {
    render() { 
        console.log(this.props.books.items)
        return(
            Object.values(this.props.books.items).map((book, index) => {
                
                return (
                        <div>
                            <ListItem book={book} key={index}/>
                        </div>
                );
            })   
        )
    }
}
 
export default List;