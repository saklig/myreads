import React, { Component } from 'react';
import BookActions from './BookActions';

class Book extends Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 174,
                            backgroundImage: 'url(' + (this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '') + ')'
                        }}
                    />
                    <BookActions
                        book={this.props.book}
                        onShelfChange={this.props.onShelfChange}
                    />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">
                    {this.props.book.authors && (
                        this.props.book.authors.map((author) => (
                            <div key={author} className="book-author">{author}</div>
                        ))
                    )}
                </div>
          </div>
        );
    }
}

export default Book;