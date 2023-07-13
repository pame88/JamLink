import '../css/style.css';
import '../css/JamFeed.css';

import {ListeningData} from './FeedData'
import Listener from "./Listener";


export default function ListeningActivity() { /* */

    const Listeners = Object.values(ListeningData)

    return (
        <div className="page-section">
            {Listeners.map(p => {
                return <Listener {...p} /> /* create project entries based on the projects in currentProjects, and put them in flex box */
            })
            }
        </div>
    );

};
