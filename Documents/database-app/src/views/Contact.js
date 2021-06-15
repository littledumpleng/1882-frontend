import React from 'react';
import {Header} from '../components/Header'

export const Contact = (props) => {
    return (
        <div>
            <Header/>
        <h1>Contact Us</h1>

            <div className="content_element">
                <p>Email: info@1882Foundation.org</p>
                <p>Address: 1882 Foundation, 501 I Street NW (Lower Level), Washington, D.C. 20001</p>
                <p>Our Socials</p>
                <div className="button_element">
                    <a href="error.html">Slack</a>
                </div>
                <div className="button_element">
                    <a href="error.html">Facebook</a>
                </div>
                <div className="button_element">
                    <a href="error.html">Instagram</a>
                </div>
            </div>
        </div>

    )
}
