import React, { useState } from 'react';
import { AddCreator } from './AddCreator';
import { ListCreators } from './ListCreators';

export const Creator = () => {
  const [changeOccured, setChangeOccured] = useState(false);
  return (
    <div>
      <h1>Creators (Admin)</h1>
      <div className="contents">
        <div className="content_element">
          <ListCreators
            changeOccured={changeOccured}
          />
        </div>
        <div className="content_element">
          <AddCreator
            setChangeOccured={setChangeOccured}
          />
        </div>
        <div className="content_element">
          <h3>About the Creators</h3>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        <div className="content_element">
          <h3>About the Media Curator</h3>
          <br />
          {/* <p>Dr. Terry Park is an Asian American Studies lecturer at the University of Maryland, College Park (UMD), where he teaches courses such as Asian Americans in Film, Asian American Media, and Asian American Performance. He has also lectured at Harvard University, Wellesley College, and other institutions, where he designed courses on subjects ranging from Asian American history to techno-orientalism. He currently participates in numerous community-based organizations, which ties with his community-based research at UMD, an oral history project called <em>Memories of Militarism and War: Asian American Oral Histories From the DMV</em> that shares war stories of Asian Americans living in the DC Metro Area.</p> */}
        </div>
      </div>
    </div>
  )
}