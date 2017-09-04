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
        return (
            <div className="book-shelf-changer">
                <select
                    onChange={(event) => {
                        this.props.onShelfChange(this.props.book, event.target.value);
                    }}
                    value={(this.props.shelfTypes.filter((s) => s.value === this.props.book.shelf).length > 0 ? this.props.book.shelf : 'none')}
                >
                    {this.props.shelfTypes.map((shelfType, i) => (
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