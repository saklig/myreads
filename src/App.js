import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: []
        };
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books });
        });
    }

    onShelfChange(book, shelf) {
        if (shelf === 'none') {
            this.setState(() => ({
                books: this.state.books.filter((b) => b.id !== book.id)
            }));            
        }
        else {
            this.setState(() => ({
                books: this.state.books.map((b, i) => {
                    if (b.id === book.id) {
                        b.shelf = shelf
                    }
                    return b;
                })
            }));
        }
        

        
        BooksAPI.update(book, shelf).then((book) => {
            //success, but what about error, should catch that undo action against local array and make user aware update failed
        });
    }

    render() {
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <SearchBooks

                    />
                )}
                />
                <Route exact path='/' render={() => (
                    <BookList 
                        books={this.state.books}
                        onShelfChange={(book, shelf) => {
                            this.onShelfChange(book, shelf);
                        }}
                    />
                )}
                />
            </div>
        )
    }
}

export default BooksApp
