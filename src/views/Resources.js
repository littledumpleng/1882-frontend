import React from 'react';

export const Resources = (props) => {
    const RES_LIST = [
        {
            id: 1,
            type: 'Festivals',
            name: 'EventBrite Festivals',
            link: 'https://www.eventbrite.com/d/online/free--events--this-month/asian-festival',
            description: 'search for Asian media festivals and related events near you' // more descriptive
        },
        {
            id: 2,
            type: 'Organization',
            name: 'The Nerds of Color', 
            link: 'https://thenerdsofcolor.org',
            description: 'looks at nerd/geek fandom with a culturally critical eye'
        },
        {
            id: 3,
            type: 'Blog',
            name: 'Angry Asian Man', 
            link: 'http://blog.angryasianman.com',
            description: 'blog, podcasts, etc.'
        },
        {
            id: 4,
            name: 'Mochi Magazine', 
            type: 'Publication',
            link: 'https://www.mochimag.com/#',
            description: 'the longest-running digital publication for Asian American women'
        },
        {
            id: 5,
            name: 'The Conversation',
            type: 'Publication',
            link: 'https://theconversation.com/us/topics/asian-americans-16018',
            description: ''
        },
        {
            id: 6,
            name: '',
            type: '',
            link: '',
            description: ''
        }
    ]

    return (
        <div className='all-resources'>
            <h1>Other Resources</h1>

            {RES_LIST.map(singleResource => (
                <li key={singleResource.id} className ="content_element resource">
                    <h3>{singleResource.name}</h3> 
                    <div>{singleResource.type}</div>
                    <div>{singleResource.description}</div>
                    
                    {/* 1. unclickable link */}
                    {/* <div>{singleResource.link}</div> */}

                    {/* template */}
                    {/* {links.map(link => (<Link className={link.className} activeClassName={link.activeClassName} to={link.to}>{link.name}</Link> ))} */}

                    {/* following template */}
                    {/* <Link className= {singleResource.className} to={singleResource.to}>{singleResource.name}</Link> */}
                    
                    {/* 2. mapped, clickable link doesn't work */}
                    {/* <a href className= {singleResource.className} to={singleResource.to}>{singleResource.name}</a> */}

                    {/* 3. another clickable link, doesn't work */}
                    <div>
                        <a href = {singleResource.link}>Click here to learn more!</a>
                    </div>
                </li>
            ))}
        </div>
    )
}