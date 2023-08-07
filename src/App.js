import {useState, useEffect} from "react";
import { NoteList } from "./components/NoteList";
import './App.css';
import { NoteForm } from "./components/NoteForm";
import { noteContext } from "./context/noteContext";

const noteData = [
  {id: 'ab1', title: 'trip', body: 'Trip to Paris on winter.'},
  {id: 'ab2', title: 'Health', body: 'Signup for new gym club.'},
  {id: 'ab3', title: 'Music', body: 'Attend to the summer concert.'},
  {id: 'ab4', title: 'Dev', body: 'Learn Java.'},
]
export default function App() {

  const [notes, setNotes] = useState(noteData)
  
  const createNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const editNote = (id, e) => {
    const notesCopy = [...notes]
    const noteMatch = notesCopy.findIndex(note => note.id === id)
    console.log(noteMatch)
    // notesCopy[noteMatch].body = e.target.value
    // notesCopy[noteMatch].title = e.target.value
    //setNotes([...notesCopy])
    console.log(notesCopy[noteMatch].body)
  }
  
  const deleteNote = id => {
    const notesCopy = [...notes]
    
    const newCopy = notesCopy.filter(note => note.id !== id )
    setNotes([...newCopy ])
    
  }
  return (
    <noteContext.Provider value={{notes, createNote, deleteNote, editNote }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-4">
          <div></div>
          <div className="bg-cyan-900 col-span-2">
            <NoteList/>
            <NoteForm/>
          </div>
          <div></div>
        </div>
      </div> 
    </noteContext.Provider>
  );
}