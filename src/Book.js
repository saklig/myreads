import React, { Component } from 'react';
import BookActions from './BookActions'

class Book extends Component {
    state = {  }
    render() {
        return (
            <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 174,
                        backgroundImage: 'url(' + this.props.thumbnail + ')'
                    }}></div>
                <BookActions/>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">
                {this.props.authors.map((author) => (
                    <div key={author} className="book-author">{author}</div>
                ))}
            </div>
          </div>
        );
    }
}

export default Book;