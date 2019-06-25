import React from 'react';

const Button = (props) => (
    <a href={props.hash} className={ props.className } >
        { props.content }
    </a >
)

export default Button;