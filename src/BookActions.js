import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectListOption from './SelectListOption';

class BookActions extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        shelfTypes: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }
    render() {
        const { book, shelfTypes, onShelfChange } = this.props;

        return (
            <div className="book-shelf-changer">
                <select
                    onChange={(event) => {
                        onShelfChange(book, event.target.value);
                    }}
                    value={(shelfTypes.filter((s) => s.value === book.shelf).length > 0 ? book.shelf : 'none')}
                >
                    {shelfTypes.map((shelfType, i) => (
                        <SelectListOption
                            key={i}
                            value={shelfType.value}
                            text={shelfType.text}
                            disabled={shelfType.enabled}
                        />
                    ))}
                </select>
            </div>
        );
    }
}

export default BookActions;