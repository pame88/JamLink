import React, { useState } from "react";

import {Link}
from "react-router-dom";

import '../css/JamFeed.css';
import '../css/style.css';


import AltHeader from "../AppComponents/AltHeader.js";
import Footer from "../AppComponents/Footer.js";
import Items from "./LinkButtons.js";
import ItemTag from "./LinkButtons.js";
import Caption from "../NewPost/Caption.js";



export default function NewPostPage () { /* the function for the discography section */

  return (
    <div>
      <AltHeader title="New Post" />

      <div className="page-content">

        <Items />
        <Caption />

        <div>
          <div className="section-title">Add Images</div>
          <img className="add-image" src="../JamLink/content/Images-UI/AddImage.png"></img>
        </div>

        <Link to="/People">

          <div className="item-tag ppl-tag">

            <div className="tag-people-header">
              <img className="tag-ppl-img" src="/JamLink/content/Images-UI/tagppl.png"></img>
              <div>Tag People</div>
            </div>

            <img className="item-tag-chevron" src="/JamLink/content/Images-UI/tagpplbtn.png"></img>
          
          </div>

        </Link>

        <button className="upload-btn">Upload</button>

      </div>

      <Footer />

    </div>
  );
}

