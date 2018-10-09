import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
    console.log(props);
    return (
        <header className="App-header">
            {props.content}
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
