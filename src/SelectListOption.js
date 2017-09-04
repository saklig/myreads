import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectListOption extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool.isRequired
    }
    render() {
        const { text, value, disabled } = this.props;

        return (
            <option
                value={value}
                disabled={!disabled}
            >{text}</option>
        );
    }
}

export default SelectListOption;