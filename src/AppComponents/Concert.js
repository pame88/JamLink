
import '../css/style.css';
import '../css/JamFeed.css';

import {Link}
from "react-router-dom";

export default function Concert (props) { /* */

let link;
    
link=`/Concert?name=${props.name}`


    return (

        <Link to={link}>

            <div className={`concert ${props.state}`} >

                <div className="concert-location">
                    <span><img className="pin" src="/JamLink/content/Images-UI/pin.png"></img></span>
                    <span className="concert-city">{props.city}</span>
                </div>

                <div className="gradient"></div>
                    <img className="concert-img" src={"../JamLink/content/Images-UI/concert.png"} />
                
                
                <div className="concert-info">
                    <div className="concert-artist-name">{props.name}</div>
                    <span className="concert-date">{props.date} ● </span>
                    <span className="concert-venue">{props.venue}</span>
                </div>
                
            </div>

        </Link>

    );

};
