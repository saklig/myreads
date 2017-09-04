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
        const { book, shelfTypes, onShelfChange } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 174,
                            backgroundImage: 'url(' + (book.imageLinks ? book.imageLinks.thumbnail : '') + ')'//TODO: provide a fallback image
                        }}
                    />
                    <BookActions
                        book={book}
                        onShelfChange={onShelfChange}
                        shelfTypes={shelfTypes}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {book.authors && (
                        book.authors.map((author) => (
                            <div key={author} className="book-author">{author}</div>
                        ))
                    )}
                </div>
          </div>
        );
    }
}

export default Book;