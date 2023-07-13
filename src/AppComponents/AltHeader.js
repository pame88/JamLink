
import '../css/style.css';


export default function AltHeader({title}) { /* A different header to indicate a certain part of app */

    return (
        <div className="alt-header">
            <div>{title}</div>
        </div>
    );

};