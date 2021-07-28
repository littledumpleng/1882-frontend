import React from 'react';

export const Admin = (props) => {
    return (
        <div>
            <h1>Login to your administrative account</h1>

            <div className="contents">
                <div className="content_element">
                    <form id="search-form" action="/api" method="get">
                        <label for="search">Password</label>
                        <input type="text" id="search" name="Search" />
                    </form>
                </div>
            </div>

        </div>



    )
}