
import SearchPage from '../Search/SearchPage';
import '../css/style.css';
import '../css/NewPost.css';

import {Link}
from "react-router-dom";

export default function LinkButton (props) { /* Component for linking something on a post */

    return (
       
        <Link to="/Link">
            
            <div className="item-tag" style={{ backgroundImage: `url(${"/JamLink/content/" + props.profileURL})` }}>
                <div>{props.title}</div>
                <img className="item-tag-chevron" src="/JamLink/content/Images-UI/taggpplbtnwhite.png"></img>
            </div>

        </Link>

    );

};