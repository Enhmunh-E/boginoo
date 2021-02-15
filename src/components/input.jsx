import React from 'react';

export const Input = (props) => {
    let { className, ...others } = props;
    return (
        <div>
            <input className={`input ${className}`} {...others} />
        </div>
    );
};