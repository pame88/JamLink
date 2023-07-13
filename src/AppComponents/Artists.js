import React, { useState } from "react";

import '../css/JamFeed.css';
import '../css/style.css';
import '../css/ProfilePage.css';

import {ArtistData} from "../ProfilePage/ProfilePageData"


import Artist from "./Artist";


export default function Artists () { /* component holding individual artists */

  const artists=Object.values(ArtistData)

  return (
  
      <div className="profile-row" >
          {artists.map(p => {           
            return <Artist {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */           
          })
          };
      </div>
  );
}


