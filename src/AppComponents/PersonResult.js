
import '../css/style.css';
import '../css/ProfilePage.css';


// import React,{useState} from 'react';

export default function PersonResult (props) { /* The component for  profile showing in a list of profiles */

    return (

        <div className="person-result">

            <div className="person-result info">
                <img className="person-img" src={"../JamLink/content/" + props.profileURL} />
                <div className="person-name"><span>{props.name}</span></div>
            </div>

            <img className="ellipsis" src={"../JamLink/content/Images-UI/ellipsis.png"} />

        </div>

    );

};