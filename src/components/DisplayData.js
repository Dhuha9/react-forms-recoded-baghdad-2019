import React from 'react';

export default class DisplayData extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.formData.firstName}</h2>
                <h2>{this.props.formData.lastName}</h2>
            </div>
        )
    }
}