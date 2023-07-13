import React, { useState } from "react";

import '../css/JamFeed.css';
import '../css/style.css';
import '../css/ProfilePage.css';

import {SongData} from "../ProfilePage/ProfilePageData"


import Song from "./Song";


export default function Songs () { /* the function for the discography section */

  const songs=Object.values(SongData)

  return (
  
      <div className="songs" >
        
          {songs.map(p => {            
            return <Song {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */            
          })
          }
          
      </div>
  );
}
