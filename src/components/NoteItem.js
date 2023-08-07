import { useContext} from 'react'
import { noteContext } from '../context/noteContext'

export const NoteItem = props => {
    const ctx = useContext(noteContext)
    const {deleteNote, notes, editNote } = ctx
    const {id, title, body } = props.note
    
    return(
        <div className="my-2">
            <h3>Title: {title}</h3>
            {/* <h3>Body: {body}</h3> */}
            <button onClick={() => deleteNote(id)}>Delete</button>
            <button onClick={() => editNote(id)}>Edit</button>
        </div>
    )
}