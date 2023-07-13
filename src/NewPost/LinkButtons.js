import React, { useState } from "react";

import '../css/JamFeed.css';
import '../css/style.css';
import '../css/ProfilePage.css';

import {ItemData} from "./NewPostData"


import ItemTag from "./LinkButton";


export default function LinkButtons () { /* compiling the link buttons together */

  const items = Object.values(ItemData)

  return (
    <div>

      <div className="section-title">Link To:</div>

      <div className="items">
        {items.map(p => {
          return <ItemTag {...p} /> 
        })
        }
      </div>

    </div>
  );
}


