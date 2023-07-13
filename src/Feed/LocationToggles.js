import '../css/JamFeed.css';
import '../css/style.css';


export default function LocationToggles({ currentLocation, setCurrentLocation, allLocations, locationTogglesShown}) { /* function for toggles in discography */
 
  return (
      <div className={locationTogglesShown ? "toggles hide-toggles" : "toggles show-toggles"} >
        
        {allLocations.map((locname) => { /* map from all categories to fill each button */  
          return (
            <button
              className={locname === currentLocation ? "selected-toggle" : "default-toggle"}
              onClick={() => setCurrentLocation(locname)} /* set current category to the name of toggle clicked */
              key={locname}
            >
              {locname}
            </button>
          );
        })}
      
      </div>
  );
}
 

