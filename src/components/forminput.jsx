import React from 'react';

export const Input = (props) => {
    let { className, ...others } = props;

    return (
        <div>
            <label for={ner}>{label}</label>
            <input name={ner} className={`input ${className}`} {...others} />
        </div>
    );
};