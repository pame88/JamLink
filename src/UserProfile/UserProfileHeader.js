
import '../css/style.css';
import '../css/JamFeed.css';


export default function UserProfileHeader ({name, mutuals, profileURL}) { /* */

    return (
        <div className="user-profile-header">

            <img className="user-profile-pic" src={profileURL} />
            
            <div>

                <div className="user-profile-info">
                    
                    <div className="user-profile-name">{name}</div>
                    <div className="mutuals">{mutuals} Mutuals</div>

                    <div className="user-profile-buttons">
                        <div className="user-profile-button">Following </div>
                        <div className="user-profile-button">Message</div>
                    </div>

                </div>

            </div>

        </div>

    );

};
