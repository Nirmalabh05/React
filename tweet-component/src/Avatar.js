import React from 'react';
export function Avatar({ hash }) {
    return (<img alt='avatar' className='avatar' src={`https://www.gravatar.com/avatar/${hash}`} />);
}
