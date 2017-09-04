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
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.shelfTypes.filter((shelfType) => shelfType.isShelf).map((shelfType,i) => (
                            <BookShelf
                                key={i}
                                title={shelfType.text}
                                books={this.props.books.filter((book) => book.shelf === shelfType.value)}
                                shelf={shelfType.value}
                                onShelfChange={this.props.onShelfChange}
                                shelfTypes={this.props.shelfTypes}
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