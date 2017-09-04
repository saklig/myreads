import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        shelfTypes: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }
    render() {
        const { title, shelf, books, shelfTypes, onShelfChange } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books && books.length > 0 ? (
                            books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    shelf={shelf}
                                    book={book}
                                    onShelfChange={onShelfChange}
                                    shelfTypes={shelfTypes}
                                />
                            </li>
                        ))) : (
                            <span>No books to show</span>
                        )}
                    </ol>
                </div>
          </div>
        );
    }
}

export default BookShelf;