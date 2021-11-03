import React from 'react';
import { FilteringMenu } from '../components/FilteringMenu'
import { SearchBar } from '../components/SearchBar'
import { Tabs } from '../components/Tabs'

export const AdminDash = (props) => {
    return (
        <div>
            <div className="columns">
                <div className="column is-one-quarter">
                    <div className="box">
                        <h2>1882 Foundation</h2>
                        <h3>database administrative dashboard</h3>
                    </div>

                    <FilteringMenu />
                </div>
                <div className="column">
                    <div className="box">
                        <SearchBar />
                        {/* <Tabs>
                            <div label="Gator">
                                See ya later, <em>Alligator</em>!
                            </div>
                            <div label="Croc">
                                After 'while, <em>Crocodile</em>!
                            </div>
                            <div label="Sarcosuchus">
                                Nothing to see here, this tab is <em>extinct</em>!
                            </div>
                        </Tabs> */}
                        <div className="content">
                            <div className="box">
                                <div className="content_element">
                                    <div className="item-wrap">
                                        <h3>Featured Review of the Month</h3>
                                        <div className="item">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit
                                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia
                                            deserunt mollit anim id est laborum.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="item-wrap">
                                    <div className="item">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </div>
                                </div>

                                <div className="item-wrap">
                                    <div className="item">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </div>
                                </div>

                                <div className="item-wrap">
                                    <div className="item">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </div>
                                </div>

                                <div className="item-wrap">
                                    <div className="item">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}