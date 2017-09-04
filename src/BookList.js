import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfTypes: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }
    render() {
        const { books, shelfTypes, onShelfChange } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelfTypes.filter((shelfType) => shelfType.isShelf).map((shelfType,i) => (
                            <BookShelf
                                key={i}
                                title={shelfType.text}
                                books={books.filter((book) => book.shelf === shelfType.value)}
                                shelf={shelfType.value}
                                onShelfChange={onShelfChange}
                                shelfTypes={shelfTypes}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookList;