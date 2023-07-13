import '../css/JamFeed.css';
import '../css/style.css';

export default function LocationToggle({ currentLocation, setLocationTogglesShown}) { /* function for toggles in discography */
 
  return (
      <div>
            <button
              className="selected-toggle location-toggle"
              onClick={() => setLocationTogglesShown(prevMode => !prevMode)} /* set current category to the name of toggle clicked */
              key={currentLocation}
            >
              {currentLocation}
            </button>
      </div>
  );
}
 

