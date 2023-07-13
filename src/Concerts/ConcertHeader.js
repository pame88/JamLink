
import '../css/style.css';
import '../css/concerts.css';


export default function ConcertHeader ({name, date}) { /* */

    return (
            <div className="artist-profile-header">
                  
                <div className="gradient"></div>
                
                <img className="concert-background" src = "/JamLink/content/Images-UI/concert.png" />
                
                <div className="concert-header-info">
                    <div className="concert-profile-name">{name}</div>
                    <div className="concert-page-date">{date}</div>
                </div>

            </div>
                


    );

};
