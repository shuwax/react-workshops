import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
    return (
        <header className="App-header">
            <h1>{props.content}</h1>
        </header>
    );
};

Title.propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

Title.defaultProps = {
  type: 'TYPE'
};

export default Title;
