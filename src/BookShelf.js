import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {
    constructor(props) {
        super(props);
        this.state = { books: this.props.books };
    }

    render() {
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.id}>
                    <Book
                        shelf={this.props.shelf}
                        title={book.title}
                        authors={book.authors}                        
                        thumbnail={book.imageLinks.thumbnail}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        );
    }
}

export default BookShelf;