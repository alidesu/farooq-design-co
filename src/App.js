import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import BannerStrip from "./components/BannerStrip";



function App() {

  const newsItems = [
    "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
    "Art is the most intense mode of individualism that the world has known. - Oscar Wilde",
    "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep. - Scott Adams",
    "Design is the intermediary between information and understanding. - Hans Hofmann",
    "Art is the lie that enables us to realize the truth. - Pablo Picasso",
    "The artist is not a special kind of person; rather, each person is a special kind of artist. - Ananda Coomaraswamy",
    "Design is thinking made visual. - Saul Bass",
    "Art enables us to find ourselves and lose ourselves at the same time. - Thomas Merton",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "Art washes away from the soul the dust of everyday life. - Pablo Picasso",
    "Good design is obvious. Great design is transparent. - Joe Sparano",
    "Art is the only way to run away without leaving home. - Twyla Tharp",
    "The best design is the simplest one that works. - Albert Einstein",
    "Every artist was first an amateur. - Ralph Waldo Emerson",
    "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated. - Paul Rand",
    "Art is the stored honey of the human soul. - Theodore Dreiser",
    "Design is not just what you see and feel. It's how it works. - Susan Kare",
    "Art is the most beautiful of all lies. - Claude Debussy",
    "Design is where science and art break even. - Robin Mathew",
    "Art is the journey of a free soul. - Alev Oguz"
  ];
  

  return (
    <div className="App">
      <Navbar />
      <BannerStrip newsItems={newsItems}/>
      <Herosection />
    </div>
  );
}

export default App;
