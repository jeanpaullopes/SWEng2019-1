import React from 'react';

export const ExternalLink = ({ ariaLabel = '', children, href = '#', target = '', text = '' }) => {
    const acessibility = ariaLabel || text;
    const content = children || text;
    const noOpener = target === '_blank' ? 'noopener' : '';

    return (
        <a aria-label={acessibility} href={href} rel={noOpener} target={target}>
            {content}
        </a>
    );
};
