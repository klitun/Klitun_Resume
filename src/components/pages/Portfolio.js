import React from 'react';
import Project from '../Project'


const projects = [
  {
    id: 0,
    title: "W A V E B R E A K",
    languages: "JS, HTML, CSS",    
    image: "/img/wavebreak.png",
    description: "Search up beaches in California using the California Coastal Comission API",
    repo: "https://github.com/hannamarcus/wavebreak",
    live: "https://hannamarcus.github.io/wavebreak/",
  },
  {
    id: 1,
    title: "Restaurant Reviews",
    languages: "JS, Handlebars, RESTful API, MySQL",   
    image: "/img/restreviews.png",
    description: "Make a profile, log in, view and leave reviews.",
    repo: "https://github.com/Reyes-Jose/project-2",
    live: "https://restreviews-app.herokuapp.com/",
  },
  {
    id: 3,
    title: "Cat Adopt App",
    languages: "JS, REACT",   
    image: "/img/catapp.png",
    description: "Placeholder for final project",
    repo: "https://github.com/klitun",
    live: "https://github.com/klitun",

  },
  {
    id: 4,
    title: "Google Book Search",
    languages: "JS, GraphQL API, Apollo Server",   
    image: "/img/booksearch.png",
    description: "Secure signup and login with authentication, ability to save and delete books to profile.",
    repo: "https://github.com/klitun/Litun_Book_Search_MERN",
    live: "https://morning-springs-30650.herokuapp.com/",
  },
  {
    id: 5,
    title: "J.A.T.E",
    languages: "JS, IndexedDB",   
    image: "/img/jate.png",
    description: "Works offline with service workers, dowloadable webpack app.",
    repo: "https://github.com/klitun/Litun_PWA_Text_Editor",
    live: "https://text-jate-editor-litun.herokuapp.com/",
  },
  {
    id: 6,
    title: "Note Taker",
    languages: "JS, Express",   
    image: "/img/notetaker.png",
    description: "Save and delete unique notes to a server",
    repo: "https://github.com/klitun/Litun_Express_Note_Taker",
    live: "https://young-cove-73651.herokuapp.com/",
  }
 
];


export default function Portfolio() {
  return (
    <div >     

      <Project projects={projects} />
    </div>

  );
}