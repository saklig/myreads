import React, { Component } from 'react';
import SelectListOption from './SelectListOption'

class BookActions extends Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select
                    onChange={(event) => {
                        this.props.onShelfChange(this.props.book, event.target.value)
                    }}
                    value={this.props.book.shelf}
                >
                    <SelectListOption
                        value="none"
                        text="Move to..."
                        disabled={true}
                    />

                    <SelectListOption
                        value="currentlyReading"
                        text="Currently Reading"
                        disabled={false}
                    />
                    <SelectListOption
                        value="wantToRead"
                        text="Want to Read"
                        disabled={false}
                    />

                    <SelectListOption
                        value="read"
                        text="Read"
                        disabled={false}
                    />

                    <SelectListOption
                        value="none"
                        text="None"
                        disabled={false}
                    />
                </select>
            </div>
        );
    }
}

export default BookActions;