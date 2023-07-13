import '../css/style.css';
import '../css/JamFeed.css';

import {ChatData} from './ChatData'
import Chat from "./Chat.js";


export default function Chats() { /* */

const Chats = Object.values(ChatData)

    return (
        <div className="chats">
            {Chats.map(p => {
              return <Chat {...p}/> /* create chat entries based on the chat data, and put them in row */
            })
            }
        </div>
    );

};
