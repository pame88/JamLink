
import '../css/style.css';
import '../css/JamFeed.css';



export default function Song (props) { /* */

    return (
        <div>
            <span className="song">

                <div>
                    <span>{props.name} - </span> <span className="song-artist">{props.artist}</span>
                </div>

                <span className="plays">
                    {props.plays}
                </span>

            </span>

        </div>

    );

};
