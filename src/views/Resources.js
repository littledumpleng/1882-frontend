import React from 'react';
import noc from '../images/noc.jpeg';
import event from '../images/event.png';
import mochi from '../images/mochi.png';
import kent from '../images/kent.jpeg';


export const Resources = (props) => {
    const RES_LIST = [
        {
            id: 1,
            type: 'Festivals',
            image: <img src={event} div className='resource-images' alt="Eventbrite logo"/>,
            name: 'EventBrite Festivals',
            link: <a href='https://www.eventbrite.com/d/online/free--events--this-month/asian-festival'>Click here for more information!</a>,
            description: 'Search for Asian media festivals and related events located near you!'
        },
        {
            id: 2,
            type: 'Blog',
            name: 'Kent Tong\'s Blog', 
            image: <img src={kent} div className='resource-images' alt="Kent Tong"/>,
            link: <a href='https://kdtong.medium.com'>Click here for more information!</a>,
            description: 'Timely commentary and meaningful reviews of books, movies, media presentations, and other performing arts related to the issues, lives, history, and heritage of the  AAPI community. All written by the Literature & Art Corner Library\'s media curator.'
        },
        {
            id: 2,
            type: 'Organization',
            image: <img src={noc} div className='resource-images' alt="Nerds of Color logo"/>,
            name: 'The Nerds of Color', 
            link: <a href='https://thenerdsofcolor.org'>Click here for more information!</a>,
            description: 'A place to discuss, comment on, and geek out about stuff in the world of fandom (i.e., comics, movies, gaming, animation, toys, etc.) through the culturally critical eye of a POC.'
        },
        {
            id: 4,
            type: 'Publication',
            image: <img src={mochi} div className='resource-images' alt="Mochi Magazine logo"/>,
            name: 'Mochi Magazine', 
            link: <a href='https://www.mochimag.com/#'>Click here for more information!</a>,
            description: 'The longest-running digital publication for Asian American women'
        },
    ]

    return (
        <div className='all-resources'>
            <h1>Other Resources</h1>
                {RES_LIST.map(singleResource => (
                    <li key={singleResource.id} className ="content_element">
                        <h3>{singleResource.name}</h3>
                        <br/>
                        <div>{singleResource.image}</div>
                        <div className="resources-text">
                            <div>{singleResource.description}</div>
                            <div>{singleResource.link}</div>
                        </div>
                    </li>
                ))}
        </div>
    )
}