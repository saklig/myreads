import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookActions from './BookActions';

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        shelfTypes: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 174,
                            backgroundImage: 'url(' + (this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '') + ')'//TODO: provide a fallback image
                        }}
                    />
                    <BookActions
                        book={this.props.book}
                        onShelfChange={this.props.onShelfChange}
                        shelfTypes={this.props.shelfTypes}
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