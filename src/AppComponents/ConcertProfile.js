
import '../css/style.css';
import '../css/JamFeed.css';

import {Link}
from "react-router-dom";

export default function ConcertProfile(props) { /* */

    let link;
    
    link=`/UserProfile?name=${props.name}`

    return (
        <Link to={link}>

            <div className="listener">

                <div className="listener-profile">
                    <img className="chat-pic" src = {"/JamLink/content/" + props.profileURL} />
                    <div className="listener-name">{props.name}</div>
                </div>
                
            </div>

        </Link>

    );

};
