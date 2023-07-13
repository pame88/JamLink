// import '../css/JamFeed.css';
import '../css/style.css';

import React from 'react';

import Footer from "../AppComponents/Footer.js";
import Header from "../AppComponents/Header.js";
import Artists from "../AppComponents/Artists.js"
import Concerts from "../AppComponents/Concerts.js"
import People from "../AppComponents/People.js"
import Songs from '../AppComponents/Songs';


export default function ProfilePage() { /* function for compiling the whole profile page*/
  
  return (
    <div>
      <Header />
      <div className="page-content">


        <div>
          <div className="section-header">
            <div className="section-title">Friends</div>
            <div className="see-all">See all</div>
          </div>
          <People />
        </div>

        <div>
          <div className="section-header">
            <div className="section-title">Your Upcoming Concerts</div>
            <div className="see-all">See all</div>
          </div>
          <Concerts />
        </div>

        <div>
          <div className="section-header">
            <div className="section-title">Top 5 Artists</div>
            <div className="see-all">See all</div>
          </div>
          <Artists />
        </div>

        <div>
          <div className="section-header">
            <div className="section-title">Top 5 Songs</div>
            <div className="see-all">See all</div>
          </div>
          <Songs />
        </div>

      </div>
      <Footer />
    </div>
  );

}