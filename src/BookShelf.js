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
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books && this.props.books.length > 0 ? (
                            this.props.books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    shelf={this.props.shelf}
                                    book={book}
                                    onShelfChange={this.props.onShelfChange}
                                    shelfTypes={this.props.shelfTypes}
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