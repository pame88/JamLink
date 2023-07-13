import '../css/JamFeed.css';
import '../css/style.css';

import React from 'react';

import Feed from "./Feed.js";
import Footer from "../AppComponents/Footer.js";
import Header from "../AppComponents/Header.js";

import ListeningActivity from './ListeningActivity.js';




export default function FeedPage() { /* function for compiling the whole profile page*/
    return (
      <div>
        <Header />

        <div className="page-content">
 
          <ListeningActivity />

          <div className="feed">
            <Feed />
          </div>

        </div>
        
        <Footer />
      </div>
    );
   
}
