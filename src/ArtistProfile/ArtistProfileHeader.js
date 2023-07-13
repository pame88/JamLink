
import '../css/style.css';
import '../css/ProfilePage.css';


export default function ArtistProfileHeader ({profileURL, name}) { /* */

    return (
            <div className="artist-profile-header">
                  
                <div className="gradient"></div>
                <img className="artist-profile-pic" src = {profileURL} />
                <div className="artist-profile-name">{name}</div>

            </div>
                


    );

};
