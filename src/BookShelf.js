import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books && this.props.books.length > 0 && (
                            this.props.books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    shelf={this.props.shelf}
                                    book={book}
                                    onShelfChange={this.props.onShelfChange}
                                />
                            </li>
                        )))}
                    </ol>
                </div>
          </div>
        );
    }
}

export default BookShelf;