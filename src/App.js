
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchPage from "./Search/SearchPage.js";
import SearchingPage from "./Search/SearchingPage.js";

import ReplyPage from "./Feed/ReplyPage";

import FeedPage from "./Feed/FeedPage.js";
import ChatPage from "./Chats/ChatPage.js";
import ProfilePage from "./ProfilePage/ProfilePage.js";
import UserProfilePage from "./UserProfile/UserProfilePage.js";
import ArtistProfilePage from "./ArtistProfile/ArtistProfilePage.js";
import ConcertPage from "./Concerts/ConcertPage.js";
import NewPostPage from "./NewPost/NewPostPage.js";

import LinkSearch from "./NewPost/LinkSearch.js"
import PersonSearch from "./NewPost/PersonSearch.js"

export default function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}> {/* telling broswerrouter where to start  */}
      <Routes>
          <Route path = "/" index element={<FeedPage />} />
            <Route path="ReplyPage" element={<ReplyPage />} />
          <Route path="Search" element={<SearchPage />} /> 
            <Route path="Searching" element={<SearchingPage />} /> 
          <Route path="Chats" element={<ChatPage />} /> 
          <Route path="Profile" element={<ProfilePage />} /> 
          <Route path="Add" element={<NewPostPage />} /> 
            <Route path="Link" element={<LinkSearch />} /> 
            <Route path="People" element={<PersonSearch />} />
          <Route path="UserProfile" element={<UserProfilePage />} /> 
          <Route path="ArtistProfile" element={<ArtistProfilePage />} /> 
          <Route path="Concert" element={<ConcertPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}



