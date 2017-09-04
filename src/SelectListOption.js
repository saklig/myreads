import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectListOption extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool.isRequired
    }
    render() {
        return (
            <option
                value={this.props.value}
                disabled={!this.props.disabled}
            >{this.props.text}</option>
        );
    }
}

export default SelectListOption;