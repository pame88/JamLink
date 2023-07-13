
import '../css/style.css';
import '../css/JamFeed.css';

import LikeButton from './LikeButton';
import ReplyButton from './ReplyButton';

import {Link}
  from "react-router-dom";

export default function Posting (props) { /* */

    let link;

    link = `/ReplyPage?title=${props.title}`

    return (

        <div className={`post ${props.state}`} >

            <div className={props.type}>
                <div>{props.title}</div>
                <div className="post-location">{props.location}</div>
            </div>

            <div className="post-content">

                <img className={props.image} src={"../JamLink/content/" + props.imageURL} />

                <div className="post-info">
                    
                    <Link to={link}>
                        <div className="profile">
                            <img className="profile-pic" src={"../JamLink/content/" + props.profileURL} />
                            <div className="name">{props.name}</div>
                        </div>
                        <span>
                            <div className="post-caption">{props.caption}</div>
                        </span>

                        <div className="post-replies">{props.replies}</div>
                    </Link>

                    {/* <div className="post-UI">
                            <LikeButton />
                        </div> */}
                </div>

            </div>

        </div>
    );

};
