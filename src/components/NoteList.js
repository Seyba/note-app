import { NoteItem } from "./NoteItem"
import { useContext } from 'react'
import { noteContext } from "../context/noteContext"


export const NoteList = props => {
    const ctx = useContext(noteContext)
    const { notes, deleteNote, editNote } = ctx
    //const {notes, deleteNote} = props
    return(
        <div>
            <h3>Note List</h3>
            {
                notes.length ? notes.map(item => 
                <NoteItem
                    key={item.id}
                    note={item}
                    deleteNote={deleteNote}
                    
                />): <div>No note found.</div>
            }
        </div>
    )
}