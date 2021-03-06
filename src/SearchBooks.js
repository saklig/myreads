import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfTypes: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }
    state = {
        query: '',
        searchResult: []
    }
    updateQuery = (query) => {
        const { books } = this.props;

        if (query) {
            BooksAPI.search(query).then((searchResult) => {
                searchResult.forEach(function(s) {
                    books.forEach(function(b) {
                        if (s.id === b.id) {
                            s.shelf = b.shelf;
                        }
                    }, this);
                }, this);

                this.setState({searchResult: searchResult});
            });
        }
        else {
            this.setState({searchResult: []});
        }

        this.setState((state) => {
            state.query = query.trim();
        });
    }
    render() {
        const { shelfTypes, onShelfChange } = this.props;
        const { query, searchResult } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelf
                        title='Result'
                        books={searchResult}
                        shelf='result'
                        onShelfChange={onShelfChange}
                        shelfTypes={shelfTypes}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBooks;