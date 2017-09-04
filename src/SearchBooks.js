import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class SearchBooks extends Component {
    state = {
        query: '',
        searchResult: []
    }

    updateQuery = (query) => {
        if (query) {
            BooksAPI.search(query).then((searchResult) => {
                searchResult.forEach(function(s) {
                    this.props.books.forEach(function(b) {
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
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelf
                        title='Result'
                        books={this.state.searchResult}
                        shelf='result'
                        onShelfChange={this.props.onShelfChange}
                        shelfTypes={this.props.shelfTypes}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBooks;