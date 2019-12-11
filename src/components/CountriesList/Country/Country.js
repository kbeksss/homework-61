import React from 'react';

const Country = (props) => {
    return (
        <li onClick={props.click}>{props.name}</li>
    );
};

export default Country;