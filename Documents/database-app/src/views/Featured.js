import React from 'react';
import {Header} from '../components/Header'

export const Featured = (props) => {
    return (
        <div>
            <Header/>
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