
import '../css/style.css';
import '../css/chats.css';


export default function Chat(props) { /* */

    return (
            <div className="chat">
                <img className="chat-pic" src = {"/JamLink/content/" + props.profileURL} />
                <div className="chat-profile">
                    <div className="chat-name">{props.name}</div>
                    <div className="chat-preview">{props.preview}</div>
                </div>
            </div>

    );

};
