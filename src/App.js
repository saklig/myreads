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
            if (this.state.books.filter((b) => b.id === book.id).length > 0) {
                this.setState(() => ({
                    books: this.state.books.map((b, i) => {
                        if (b.id === book.id) {
                            b.shelf = shelf
                        }
                        return b;
                    })
                }));
            }
            else {
                this.setState(() => {
                    book.shelf = shelf;
                    this.state.books.push(book);
                })
            }
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
                        onShelfChange={(book, shelf) => {
                            this.onShelfChange(book, shelf);
                        }}
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
