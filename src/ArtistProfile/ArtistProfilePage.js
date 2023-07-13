import { useNavigate } from "react-router-dom";

import {ArtistData} from "../ProfilePage/ProfilePageData"

import { useLocation }
  from "react-router-dom";

import Concerts from "../AppComponents/Concerts.js"

import ArtistProfileHeader from "./ArtistProfileHeader";
import Listener from "../Feed/Listener"


export default function ArtistProfilePage() { /* template for a project paage that will be filled with different content */

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const name = query.get("name"); /* retrieve project name from URL */

  const currentArtist = ArtistData[name]; /* set current project to that project */

  const navigate = useNavigate();

  return (

    <div>
      <button className="back-button" onClick={() => navigate(-1)}>
        <img className="back-btn-image" src="/JamLink/content/Images-UI/back.png"></img>
      </button>

      <ArtistProfileHeader name={name} profileURL={"/JamLink/content/" + currentArtist.profileURL} />

      <div className="page-content artist-content">

        <div>

          <div className="section-title">{currentArtist.listenerNumber} Friends Listening</div>
         
          <div className="page-section">
            {currentArtist.listeners.map(p => {
              return <Listener {...p} /> /* create project entries based on the projects in currentProjects, and put them in flex box */
            })
            }
          </div>
          
        </div>

        <div>

          <div className="section-title">Total Listening</div>

          <div className="page-section">
            {currentArtist.totalListeners.map(p => {
              return <Listener {...p} /> /* create project entries based on the projects in currentProjects, and put them in flex box */
            })
            }
          </div>

        </div>

        <div>

          <div className="section-title">Upcoming Concerts</div>
          <Concerts />

        </div>

      </div>


    </div>

  );

}