
import '../css/style.css';
import '../css/ProfilePage.css';
;

export default function Person (props) { /* */

    return (

        <div className={`person ${props.state}`} >
            <img className="person-img" src={"../JamLink/content/" + props.profileURL} />
            <div className="person-name"><span>{props.name}</span></div>
            <div className="mutuals">{props.mutuals}</div>
        </div>

    );

};
