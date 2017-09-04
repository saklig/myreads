import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import SearchBooks from './SearchBooks';

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
        //TODO: this seems very messy, clean it up
        if (shelf === 'none') {
            this.setState(() => ({
                books: this.state.books.filter((b) => b.id !== book.id)
            }));            
        }
        else {
            if (this.state.books.filter((b) => b.id === book.id).length > 0) {
                this.setState(() => ({
                    books: this.state.books.map((b) => {
                        if (b.id === book.id) {
                            b.shelf = shelf;
                        }
                        return b;
                    })
                }));
            }
            else {
                this.setState(() => {
                    book.shelf = shelf;
                    this.state.books.push(book);
                });
            }
        }
        

        
        BooksAPI.update(book, shelf).then((book) => {
            //TODO: success, but what about error, should catch that undo action against local array and make user aware update failed
        });
    }

    render() {
        const shelfTypes = [
            { text: 'Move to...', value: 'none', enabled: false, isShelf: false },
            { text: 'Currently Reading', value: 'currentlyReading', enabled: true, isShelf: true },
            { text: 'Want to Read', value: 'wantToRead', enabled: true, isShelf: true },
            { text: 'Read', value: 'read', enabled: true, isShelf: true },
            { text: 'None', value: 'none', enabled: true, isShelf: false }
        ];
        return (
            <div className="app">
                <Route path='/search' render={() => (
                    <SearchBooks
                        books={this.state.books}
                        onShelfChange={(book, shelf) => {
                            this.onShelfChange(book, shelf);
                        }}
                        shelfTypes={shelfTypes}
                    />
                )}
                />
                <Route exact path='/' render={() => (
                    <BookList
                        books={this.state.books}
                        onShelfChange={(book, shelf) => {
                            this.onShelfChange(book, shelf);
                        }}
                        shelfTypes={shelfTypes}
                    />
                )}
                />
            </div>
        );
    }
}

export default BooksApp;
