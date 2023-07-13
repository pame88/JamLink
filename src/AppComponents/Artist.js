
import '../css/style.css';
import '../css/JamFeed.css';

import {Link}
from "react-router-dom";

export default function Artist(props) { /* The artist component */

let link;
    
link=`/ArtistProfile?name=${props.name}`


    return (

        <Link to={link}>

            <div className={`artist ${props.state}`} >

                <div className="gradient"></div>
                    <img className="artist-img" src={"../JamLink/content/" + props.profileURL} />
                <div className="artist-name">{props.name}</div>
                
            </div>
            
        </Link>

    );

};
