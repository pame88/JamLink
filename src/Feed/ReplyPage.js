import { PostsData } from "./FeedData";

import Header from "../AppComponents/Header";

import OpenedPost from "./OpenedPost";

import '../css/JamFeed.css';

import { useLocation }
  from "react-router-dom";


export default function ReplyPage() { /* template for a project paage that will be filled with different content */

  const { search }=useLocation();
  const query=new URLSearchParams(search);
  const title=query.get("title"); /* retrieve project name from URL */

  const currentPost=PostsData[title]; /* set current project to that project */

  return (

    <div>

      <Header />

      <div className="page-content">
        {currentPost.reply.map(p => {
          return <OpenedPost {...p} /> /* create project entries based on the projects in currentProjects, and put them in flex box */
        })
        }
      </div>

    </div>
  );
}