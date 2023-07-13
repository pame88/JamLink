import React, { useState } from "react";

import '../css/JamFeed.css';
import '../css/style.css';

import AltHeader from "../AppComponents/AltHeader.js";
import Search from "../AppComponents/Search.js";

import People from "../AppComponents/People.js"

import { useNavigate } from "react-router-dom";

import {PeopleData} from "../ProfilePage/ProfilePageData"


import PersonResult from "../AppComponents/PersonResult";


export default function PersonSearchPage () { /* the function for the discography section */

  const navigate = useNavigate();
  const people=Object.values(PeopleData)


  return (
    <div>

      <button className="back-button" onClick={() => navigate(-1)}>
        <img className="back-btn-image" src="/JamLink/content/Images-UI/back.png"></img>
      </button>

      <AltHeader title="Tag Someone:" />

      <div className="page-content">

        <Search />

        <div className="section-title">Friends</div>

        <div className="people-results">
          {people.map(p => {
            return <PersonResult {...p} /> 
          })
          }
        </div>

      </div>
    </div>
  );
}

