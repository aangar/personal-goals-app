import React from 'react';

class Welcome extends React.Component {
    render() {
        return (
            <div className='header'>
                <h1>Welcome, {this.props.user}!</h1>
            </div>
        )
    }
}

export default Welcome;