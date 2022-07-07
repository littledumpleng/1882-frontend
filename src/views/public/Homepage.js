import React, { useState } from 'react';
import axios from 'axios';
import { FilteringMenu } from '../../components/Filter/FilteringMenu';

export const Homepage = () => {

  const [showDummy] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  //TODO: make all the filters select inputs
  const [backgroundFilter, setBackgroundFilter] = useState(null);
  const [mediaTypeFilter, setMediaTypeFilter] = useState(null);
  const [genreFilter, setGenreFilter] = useState(null);
  const [themeFilter, setThemeFilter] = useState(null);

  //TODO: implement search
  const onSearchClick = () => {
  }

  //TODO: add in useEffects to get the existing filter options for each category from the db

  return (
    <div>
      <div className="columns">
        <div className="column is-one-quarter">
          <FilteringMenu />
        </div>
        <div className="column">
          <div className="box">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <span>Search</span>
              <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Art category, title, author, etc." />
              <button onClick={onSearchClick} >Search</button>
            </div>
            {showDummy &&
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
            }
          </div>
        </div>
      </div>
    </div>
  )
}
