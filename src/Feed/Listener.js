
import '../css/style.css';
import '../css/JamFeed.css';

import {Link} from "react-router-dom";


export default function Listener(props) { /* */

    let link;
    
    link=`/UserProfile?name=${props.name}`

    return (
        <Link to={link}>

            <div className={`listener ${props.state}`}>

                <div className="listener-profile">
                    <img className="chat-pic" src = {"/JamLink/content/" + props.profileURL} />
                    <div className="listener-name">{props.name}</div>
                </div>

                <div className="listener-song">

                    <div>
                        <div>{props.song}</div>
                        <div>{props.artist}</div>
                    </div>

                    <img className="listening-icon" src="/JamLink/content/Images-UI/sound-waves.png"></img>
                </div>
            </div>

        </Link>

    );

};
