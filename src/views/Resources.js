import React from 'react';

export const Resources = (props) => {
    const RES_LIST = [
        {
            id: 1,
            name: 'The Nerds of Color', 
            type: 'Organization'
        },
        {
            id: 2,
            name: 'Festivals',
            type: 'Event'
        }
    ]

    return (
        <div className='all-resources'>
            <h1>Other Resources</h1>

            {RES_LIST.map(singleResource => (
                <li key={singleResource.id}>
                    <div>{singleResource.id}</div>
                    <div>{singleResource.name}</div>
                    <div>{singleResource.type}</div>
                </li>
            ))}
        </div>
    )
}