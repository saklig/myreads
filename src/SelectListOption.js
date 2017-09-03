import React, { Component } from 'react';

class SelectListOption extends Component {
    render() {
        return (
            <option
                value={this.props.value}
                disabled={this.props.disabled}
            >{this.props.text}</option>
        );
    }
}

export default SelectListOption;