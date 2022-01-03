import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FilteringMenu } from '../components/FilteringMenu'

const baseURL = "http://localhost:5000";

export const Homepage = (props) => {

  const [gigs, setGigs] = useState([]);
  const [showDummy, setShowDummy] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchClick = () => {
    setShowDummy(false);

    axios.get(baseURL+'/gigs', { params: { searchTerm } })
    .then((response) => {
      setGigs(response.data);
    });
  }

  // useEffect(() => { // right now, this is just getting every single gig, not searching, when the component mounts
  //   axios.get(baseURL+'/gigs')
  //   .then((response) => {
  //     setGigs(response.data);
  //   });
  // }, []);

  console.log("gigs", gigs);

  console.log("searchTerm", searchTerm);

  return (
    <div>
      <div className="columns">
        <div className="column is-one-quarter">
          <FilteringMenu />
        </div>
        <div className="column">
          <div className="box">
            <div className="search-bar">
             <i class="fas fa-search"></i>
                <label for="search">Search</label>
                <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}placeholder="..." />
                <button onClick={onSearchClick} >Search</button>


            </div>
            <div>
              {gigs.map(gig => <p style={{border: '1px solid grey', padding: "8px", margin: '8px'}}><span style={{color: 'red', fontSize: "50px"}}>{gig.contact_email}</span> - <span style={{color: 'green'}}>{gig.budget}</span></p>)}
            </div>
            { showDummy &&
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