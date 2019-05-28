import React from 'react';

export const ExternalLink = ({ href, target, text, children }) => {
    const content = children || text;
    const noOpener = target === '_blank' ? 'noopener' : '';

    return (
        <a href={href} target={target} aria-label={text} rel={noOpener}>
            {content}
        </a>
    );
};
