
import '../css/style.css';
import '../css/chats.css';


export default function ReplyMessage (props) { /* */

    return (
        <div className="message reply">

            <div className="reply-message-profile">
                <img className="concert-chat-pic" src={"/JamLink/content/" + props.profileURL} />
                <div className="concert-chat-name">{props.name}</div>
            </div>

            <div className="concert-chat-preview">{props.message}</div>
        
        </div>

    );

};