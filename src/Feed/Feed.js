
import '../css/JamFeed.css';
import '../css/style.css';

import {PostsData} from "./FeedData"
import Posting from "./Posting";




export default function Feed () { /* the function for the discography section */

  const posts = Object.values(PostsData)

  return (
    <div>
      {posts.map(p => {
        return <Posting {...p} /> /* create posts based on the data, and put them in a scroll feed*/
      })
      }
    </div>
  );
}


