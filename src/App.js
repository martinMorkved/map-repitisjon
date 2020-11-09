import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes.js";
import './App.css';

console.log(notes);





function App() {
  return (
    <div className="App">
     <Header />
    {notes.map((noteItem) =>  ( 
      <Note 
      key={noteItem.key}  
      title={noteItem.title}
      content={noteItem.content}
      /> 
    ))}
      
      <Footer />
    </div>
  );
}

export default App;
