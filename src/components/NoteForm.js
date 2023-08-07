import { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { noteContext } from '../context/noteContext'

export const NoteForm = (props) => {
    const ctx = useContext(noteContext)
    const { createNote } = ctx

    //const { create} = props

    const [formData, setFormData] = useState({
        id: uuidv4(),
        title: '',
        body: ''
    })
    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        setFormData(formData)
        setFormData({id: uuidv4(), title: '', body: ''})
        console.log(formData)
        createNote(formData)
    }
    return(
        <div className="my-4">
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" value={formData.title} name="title" onChange={handleChange}/>
                <label>body: </label>
                <input type="text" value={formData.body} name="body" onChange={handleChange}/>
                <button>Create</button>
            </form>
        </div>
    )
}