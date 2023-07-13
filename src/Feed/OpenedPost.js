
import '../css/style.css';
import '../css/JamFeed.css';


import LikeButton from './LikeButton';

import ReplyMessage from './ReplyMessage';

import Footer from '../AppComponents/Footer';

import {Link} from "react-router-dom";

export default function OpenedPost(props) { /* */

    return (

        <div className="post opened">

            <div className={props.type}>
                <div>{props.title}</div>
                <div className="post-location">{props.location}</div>
            </div>

            <div className="post-content-opened">

                <div className="profile">
                    <img className="profile-pic" src={"../JamLink/content/" + props.profileURL} />
                    <div className="name">{props.name}</div>
                </div>

                <img className={props.image} src={"../JamLink/content/" + props.imageURL} />

                <div className="post-caption-opened">{props.caption}</div>

                <div className="post-replies">Replies (7)</div>
                <div className="post-replies-opened">

                    <div className="post-reply-messages">
                        {props.replies.map(p => {
                            return <ReplyMessage {...p} /> /* create project entries based on the projects in currentProjects, and put them in flex box */
                        })
                        }
                    </div>

                </div>

                <div className="reply-message-box">Reply...</div>

                <div className="post-UI-opened">
                    <Link to="/">
                        <button className="close-post">Close</button>
                    </Link >

                    <LikeButton />
                </div>

            </div>

            <Footer />

        </div>
    );

};
