import React, { useState } from "react";

import '../css/JamFeed.css';
import '../css/style.css';
import '../css/ProfilePage.css';

import {PeopleData} from "../ProfilePage/ProfilePageData"


import Person from "./Person";


export default function People () { /* the function for the discography section */

  const people=Object.values(PeopleData)

  const peoplePreview = people.slice(0, 5);

  return (
   
      <div className="profile-row" >
          {peoplePreview.map(p => {          
           return <Person {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */           
          })
          }       
      </div>

  );
}


