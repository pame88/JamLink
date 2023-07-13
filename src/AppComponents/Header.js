
import '../css/style.css';

import {Link}
from "react-router-dom";

export default function Header() { /* A function for the about section of the profile page */

    return (
        <div className="header">

            <Link to="/Chats">
                <img className="chat-logo" src="/JamLink/content/Images-UI/chat.png"></img>
            </Link>

            <img className="logo" src="/JamLink/content/Images-UI/logo.png"></img>
            <img className="chat-logo" src="/JamLink/content/Images-UI/menu.png"></img>
        
        </div>
    );

};