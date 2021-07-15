import React from 'react';
import {Review} from '../components/Review'

export const Featured = (props) => {
    return (
        <div>
            <h1>Featured Reviews</h1>
            <div>
                <Review/>
            </div>
            <div>
                <Review/>
            </div>
            <div>
                <Review/>
            </div>
        </div>
    )
}
