import React from 'react';

export const Button1 = ({ children, onClick, ...otherProps }) => {
    return (
        <button type="button" className="btn btn-primary" onClick={onClick} {...otherProps}>
            {children}
        </button>
    );
};

export const Button2 = ({ children, ...otherProps }) => {
    return (
        <button type="button" className="btn btn-secondary" {...otherProps}>
            {children}
        </button>
    );
};
