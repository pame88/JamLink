
import '../css/ProfilePage.css';
import '../css/JamFeed.css';

import { useNavigate } from "react-router-dom";

import {ConcertData} from "../Concerts/ConcertData"

import { useLocation }
  from "react-router-dom";

import Concerts from "../AppComponents/Concerts.js"

import AltHeader from "../AppComponents/AltHeader";

import ConcertHeader from "../Concerts/ConcertHeader";
import ConcertProfile from "../AppComponents/ConcertProfile"

import Message from "../Chats/Message"

export default function ConcertPage() { /* template for a project paage that will be filled with different content */

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const name = query.get("name"); /* retrieve project name from URL */

  const currentConcert = ConcertData[name]; /* set current project to that project */

  const navigate = useNavigate();

  return (

    <div>
      <button className="back-button" onClick={() => navigate(-1)}>
        <img className="back-btn-image" src="/JamLink/content/Images-UI/back.png"></img>
      </button>

      <AltHeader title="Drake @ TD Garden" />

      <ConcertHeader name={name} date={currentConcert.date} />

      <div className="page-content artist-content">

        <div>

          <div className="section-title">{currentConcert.attendingNumber} Friends Attending</div>
         
          <div className="page-section">

            {currentConcert.attending.map(p => {
              return <ConcertProfile {...p} /> /* create project entries based on the projects in currentProjects, and put them in flex box */
            })
            }

            <div className="see-all">See 16 more...</div>

          </div>

        </div>

        <div>

          <div className="section-title">{currentConcert.interestedNumber} Friends Interested</div>
         
          <div className="page-section">

            {currentConcert.interested.map(p => {
              return <ConcertProfile {...p} /> /* create project entries based on the projects in currentProjects, and put them in flex box */
            })
            }

            <div className="see-all">See 10 more...</div>
            
          </div>

        </div>

        <div>

          <div className="section-title">Tickets</div>

          <div className="tickets">

            <div className="ticket-vendor" >
              <div className="ticket-vendor-info">
                <div className="ticket-logo-container">
                  <img className="ticket-logo" src="/JamLink/content/Images-UI/ticketmaster.png"></img>
                </div>
                <div className="ticket-vendor-name">TicketMaster</div>
              </div>
              <img className="item-tag-chevron" src="/JamLink/content/Images-UI/tagpplbtn.png"></img>
            </div>
            
            <div className="ticket-vendor" >
              <div className="ticket-vendor-info">
                <div className="ticket-logo-container">
                  <img className="ticket-logo" src="/JamLink/content/Images-UI/seatgeek.png"></img>
                </div>
                <div className="ticket-vendor-name">SeatGeek</div>
              </div>
              <img className="item-tag-chevron" src="/JamLink/content/Images-UI/tagpplbtn.png"></img>
            </div>

          </div>
        </div>


        <div>
          <div className="page-section concert-chat">

            <div className="section-title chat-header">Chat</div>

            <div className="messages">
              {currentConcert.chats.map(p => {
                return <Message {...p} />  /* create message entries based on the chat data for the concert clicked on, and put them in row */
              })
              }
            </div>

            <div className="message-box">
              Type Something
            </div>

          </div>
        </div>

      </div>

    </div>

  );

};