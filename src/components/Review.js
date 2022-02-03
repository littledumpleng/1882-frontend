import React from 'react';

export const Review = (props) => {
    const RES_LIST = [
        {
            id: 1,
            type: 'Review',
            name: 'Review: Drive My Car',
            link: <a href='https://medium.com/oca-national/review-drive-my-car-879dab7816b8'>Click here to read</a>,
            description: 'Adapted from the short story of the same name from Haruki Murakami, Ryūsuke Hamaguchi’s DRIVE MY CAR is a subtle, yet rich tale of grief, acceptance, forgiveness, and moving on.',
            author: 'Kent Tong'
        },
        {
            id: 2,
            type: 'Review',
            name: 'Review: The Matrix Resurrections', 
            link: <a href='https://medium.com/oca-national/review-the-matrix-resurrections-50cf59ff72e3'>Click here to read</a>,
            description: 'The fourth ‘Matrix’ film tries to save blockbuster cinema from itself—and it succeeds.',
            author: 'Kent Tong'
        },
        {
            id: 3,
            type: 'Review',
            name: 'Review: Plan B', 
            link: <a href='https://medium.com/oca-national/review-plan-b-d99f3a5dd044'>Click here to read</a>,
            description: 'The Hulu film is the type of mainstream teen comedy we need more of, one that allows girls to be funny, raunchy, and sex-positive.',
            author: 'Kent Tong'
        },
        {
            id: 4,
            type: 'Review',
            name: 'Review: Wheel of Fortune and Fantasy', 
            link: <a href='https://medium.com/oca-national/review-wheel-of-fortune-and-fantasy-ca05325d3370'>Click here to read</a>,
            description: 'Ryusuke Hamaguchi’s latest is a three-part anthology that relies on coincidences and lies to explore unspoken truths. And it’s one of the best films of the year.',
            author: 'Kent Tong'
        },
        {
            id: 5,
            type: 'Review',
            name: 'Review: Eternals', 
            link: <a href='https://medium.com/oca-national/review-eternals-94750fc0d263'>Click here to read</a>,
            description: 'Chloé Zhao’s ‘Eternals’ is the worst MCU film, yet it’s also one of my favorite installments.',
            author: 'Kent Tong'
        },
        {
            id: 6,
            type: 'Review',
            name: 'Review: Dune', 
            link: <a href='https://medium.com/oca-national/review-dune-8ff3fc80b2cc'>Click here to read</a>,
            description: 'Denis Villeneuve’s ‘Dune’ is a masterpiece in the making.',
            author: 'Kent Tong'
        },
        {
            id: 7,
            type: 'Review',
            name: 'Review: No Time to Die', 
            link: <a href='https://medium.com/oca-national/review-no-time-to-die-24b5494904e0'>Click here to read</a>,
            description: 'Writer/director Cary Joji Fukunaga delivers an emotionally-satisfying conclusion to Daniel Craig’s final turn as James Bond.',
            author: 'Kent Tong'
        },
        {
            id: 8,
            type: 'Review',
            name: 'Review: Blue Bayou', 
            link: <a href='https://medium.com/oca-national/review-blue-bayou-1691fde76354'>Click here to read</a>,
            description: 'Writer/director Justin Chon’s latest feature is an intimate family drama that tells a national tragedy.',
            author: 'Kent Tong'
        },
        {
            id: 9,
            type: 'Review',
            name: 'Review: Malignant', 
            link: <a href='https://medium.com/oca-national/review-malignant-74207917b6ba'>Click here to read</a>,
            description: 'James Wan’s latest horror flick is a bold, campy, thrill ride best experienced cold.',
            author: 'Kent Tong'
        },
        {
            id: 10,
            type: 'Review',
            name: 'Review: Shang-Chi and the Legend of the Ten Rings', 
            link: <a href='https://medium.com/oca-national/shang-chi-and-the-legend-of-the-ten-rings-review-3d2b90ad68b8'>Click here to read</a>,
            description: 'Marvel’s first Asian superhero offers one of the most uniquely entertaining installments, but still suffers from the same issues that plague other MCU films.',
            author: 'Kent Tong'
        },
        {
            id: 11,
            type: 'Review',
            name: 'Review: Raya and the Last Dragon', 
            link: <a href='https://medium.com/oca-national/raya-and-the-last-dragon-review-a5fe7c447b6f'>Click here to read</a>,
            description: '‘Raya and the Last Dragon’ is a rousing and entertaining adventure worth spending time with.',
            author: 'Kent Tong'
        },
        {
            id: 12,
            type: 'Review',
            name: 'Review: House of Ho', 
            link: <a href='https://medium.com/oca-national/house-of-ho-review-2476c8d46585'>Click here to read</a>,
            description: '‘House of Ho’ is Vietnamese comfort food.',
            author: 'Kent Tong'
        },
        {
            id: 13,
            type: 'Review',
            name: 'Review: Mulan', 
            link: <a href='https://medium.com/oca-national/mulan-review-what-do-we-want-a-film-worth-paying-for-bc91d74dd8ac'>Click here to read</a>,
            description: 'What do we want? A film worth paying for.',
            author: 'Kent Tong'
        },
    ]
    return ( 
        <div className='all-reviews'>
            {RES_LIST.map(singleReview => (
                <li key={singleReview.id} className ="content_element">
                    <h3>{singleReview.name}</h3>
                    <br/>
                    <div>Author: {singleReview.author}</div>
                    <br/>
                    <div>{singleReview.description}</div>
                    <br/>
                    <div>{singleReview.link}</div>

                </li>
            ))}
        </div> 
    )
}