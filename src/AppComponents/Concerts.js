
import '../css/JamFeed.css';
import '../css/style.css';
import '../css/ProfilePage.css';

import {ConcertData} from "../ProfilePage/ProfilePageData"


import Concert from "./Concert";


export default function Concerts () { /* the function for the discography section */

  const concerts = Object.values(ConcertData)

  return (
    <div className="profile-section">

      <div className="profile-row" >
        {concerts.map(p => {
          return <Concert {...p} /> /* create project entries based on the projects in currentProjects, and put them in flex box */
        })
        }
      </div>

    </div>
  );
}


