export const PostsData={ /* containing the info for all projects organized into objects */

  "Drummer Needed": {
    name: "Mike L.", 
    state: "active",
    title: "Drummer Needed", /* */
    category: "Drums",
    category: "All",
    location: "Boston",
    type: "jam-header",
    caption: "Looking for a drummer that can play stuff like the stuff on this playlist!",
    replies: "7 replies",
    profileURL: "./Images-People/Mike.png",
    image: "post-image",
    imageURL: "./Images-JamFeed/rockplaylist.png",

    reply: [
      {
          title: "Drummer Needed", /* */
          category: "Drums",
          category: "Top",
          location: "Boston",
          type: "jam-header",
          name: "Mike L.", 
          caption: "Looking for a drummer that can play stuff like what is on this playlist! We have a couple gigs a week at local bars.",
          replies: [
            {name: "Grace", profileURL: "./Images-People/grace.png", message: "Exactly my style! I'm interested"},
            {name: "Royal", profileURL: "./Images-People/Royal.png", message: "I think I know just the guy for this, DM me!"},
            {name: "Fayyad", profileURL: "./Images-People/fayyad.png", message: "Message me!"},
            {name: "Phil", profileURL: "./Images-People/phil.png", message: "What's the band name?"},
            {name: "George", profileURL: "./Images-People/george.png", message: "Great playlist ;)"},
            {name: "Abel", profileURL: "./Images-People/abel.png", message: "What is the pay like?"},
            {name: "Liam", profileURL: "./Images-People/liam.png", message: "Are there auditions?"}
          ],
          profileURL: "./Images-People/Mike.png",
          image: "post-image-opened",
          imageURL: "./Images-UI/playlistTag.png"
      }
    ]
  },

  "Looking for band": {
    title: "Looking for band", /* */
    state: "inactive",
    category: "Drums",
    location: "Boston",
    type: "jam-header",
    name: "Liam L.",
    caption: "Drummer here interested in playing metal in a band, check out my Spotify profile for my favorite songs and styles",
    replies: "1 reply",
    profileURL: "./Images-People/liam.png",
    image: "no-post-image",
    posts: []
  },

  "Keyboardist Available": {
    title: "Keyboardist Available", /* */
    state: "inactive",
    category: "Keyboard",
    location: "Boston",
    type: "jam-header",
    name: "Chika",
    caption: "Hello! I'm a guitarist who just moved to Boston and am looking for a band to join! I like to play mostly pop and rock, but I'm...",
    replies: "4 replies",
    profileURL: "./Images-People/Chika.png",
    image: "no-post-image",
    posts: []
  },

  "Want to join a band": {
    title: "Want to join a band", /* */
    state: "inactive",
    category: "Guitar",
    location: "Boston",
    type: "jam-header",
    name: "Dustin",
    caption: "Guitarist looking for a funky band! I'm free on weekends mostly.",
    replies: "2 replies",
    profileURL: "./Images-People/DJMike.png",
    image: "no-post-image",
    posts: []
  },

  "Phil M. is going to:": {
    title: "Phil M. is going to:", /* */
    state: "inactive",
    category: "Events",
    category: "All",
    location: "Worcester",
    type: "show-header",
    name: "Phil M.", 
    caption: "Does anyone want to come check out this show with me? I can...",
    replies: "1 reply",
    profileURL: "./Images-People/phil.png",
    image: "post-image",
    imageURL: "./Images-JamFeed/weezer.png",
    posts: []
  },

  "Need a jam space": {
    title: "Need a jam space", /* */
    state: "inactive",
    category: "All",
    location: "Boston",
    type: "jam-header",
    name: "Michele F.", 
    caption: "Does anyone know where me and some friends could jam aroud here? Thanks!",
    replies: "1 reply",
    profileURL: "./Images-People/michele.png",
    image: "no-post-image",
    posts: []
  },

  "Pracice Space": {
    title: "Need a practice space", /* */
    state: "inactive",
    category: "Spaces",
    location: "Boston",
    type: "jam-header",
    name: "Fred", 
    caption: "Does anyone have a practice space in the Boston area that my band could share?",
    replies: "1 reply",
    profileURL: "./Images-People/Frederick.png",
    image: "no-post-image",
    posts: []
  },

  "Sarah B is going to:": {
    title: "Sarah B is going to:", /* */
    state: "inactive",
    category: "Events",
    category: "All",
    location: "Boston",
    type: "show-header",
    name: "Sarah B.", 
    caption: "Who wants to go with me???",
    replies: "1 reply",
    profileURL: "./Images-People/Sarah.png",
    image: "post-image",
    imageURL: "./Images-JamFeed/alicia.png",
    posts: []
  },


  "Mike is going to:": {
    title: "Mike is going to:", /* */
    state: "inactive",
    category: "Events",
    location: "Boston",
    type: "show-header",
    name: "Mike L.", 
    caption: "Anyone up for a festival??",
    replies: "1 reply",
    profileURL: "./Images-People/Mike.png",
    image: "post-image",
    imageURL: "./Images-JamFeed/FF.png",
    posts: []
  },

  "Let's jam!": {
    title: "Let's jam!",
    state: "inactive",
    category: "Jams",
    location: "Boston",
    type: "jam-header",
    name: "Aparna", 
    caption: "Beginner on keyboard who wants to jam with people!",
    replies: "2 replies",
    profileURL: "./Images-People/Aparna.png",
    image: "no-post-image",
    posts: []
  },

"Looking to jam": {
  title: "Looking to jam",
  state: "inactive",
  category: "All",
  location: "Boston",
  type: "jam-header",
  name: "Vince", 
  caption: "Looking for a casual group who can meet up a couple times a month!",
  replies: "1 reply",
  profileURL: "./Images-People/Vince.png",
  image: "post-image",
  imageURL: "./Images-JamFeed/Currents.png",
  posts: []
}
};



export const ListeningData = {
  "Mike L.": {
    name: "Mike L.", /* */
    state: "active",
    profileURL: "./Images-People/Mike.png",
    song: "Wheels -",
    artist: "Foo Fighters",
    mutuals: "5",
    friendNumber: "320",
    friends: [
      {name: "Ameer", profileURL:"./Images-People/ameer.png",  state: "inactive"},
      {name: "Grayson", profileURL:"./Images-People/grayson.png", state: "inactive"},
      {name: "Hannah", profileURL:"./Images-People/hannah.png", state: "inactive"},
      {name: "Piper", profileURL:"./Images-People/piper.png", state: "inactive"},
      {name: "Abel", profileURL:"./Images-People/abel.png", state: "inactive"},
    ], 
    artists: [
      {name: "Led Zeppelin", profileURL:"./Images-Artists/zepp.png", state: "inactive"},
      {name: "Foo Fighters", profileURL:"./Images-Artists/FooFighters.png", state: "inactive"},
      {name: "Black Sabbath", profileURL:"./Images-Artists/Sabbath.png", state: "inactive"},
      {name: "Joan Jett", profileURL:"./Images-Artists/JoanJett.png", state: "inactive"},
      {name: "MGMT", profileURL:"./Images-Artists/mgmt.png", state: "inactive"},
    ],
    songs: [
      {name: "1. Black Dog", artist:"Led Zeppelin", plays:"250"},
      {name: "2. Everlong", artist:"Foo Fighters", plays: "203"},
      {name: "3. Landslide", artist:"Fleetwood Mac", plays: "196"},
      {name: "4. Sweet Leaf", artist:"Black Sabbath", plays: "144"},
      {name: "5. Eventually", artist:"Tame Impala", plays: "139"}
    ],
    posts: [
      {
          title: "Drummer Needed", /* */
          category: "Drums",
          location: "Boston",
          type: "jam-header",
          name: "Mike L.", 
          caption: "Looking for a drummer that can play stuff like this...",
          replies: "1 reply",
          profileURL: "./Images-People/Mike.png",
          image: "post-image",
          imageURL: "./Images-JamFeed/rockplaylist.png"
      },

      {
        title: "Mike is going to:", /* */
        state: "inactive",
        category: "Events",
        type: "show-header",
        name: "Mike L.", 
        caption: "Anyone up for a festival??",
        replies: "1 reply",
        profileURL: "./Images-People/Mike.png",
        image: "post-image",
        imageURL: "./Images-JamFeed/FF.png"
      },

      
      {
        title: "Open Jam", /* */
        state: "inactive",
        category: "Events",
        type: "jam-header",
        name: "Mike L.", 
        caption: "Message me if you want to jam at the courts today at 4!",
        replies: "1 reply",
        profileURL: "./Images-People/Mike.png",
        image: "no-post-image"
      }
    ]
  },

  "Hannah": {
    name: "Hannah", /* */
    state: "inactive",
    profileURL: "./Images-People/hannah.png",
    song: "Blinding Lights -",
    artist: "The Weeknd"
  },


  "Ameer": {
    name: "Ameer", /* */
    state: "inactive",
    profileURL: "./Images-People/ameer.png",
    song: "R.E.S.P.E.C.T -",
    artist: "Aretha Franklin"
  },

  "Spencer": {
    name: "Spencer", /* */
    state: "inactive",
    profileURL: "./Images-People/spencer.png",
    song: "Perfect -",
    artist:  "Ed Sheeran"
  }
}