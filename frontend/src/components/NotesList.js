import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

export default class NotesList extends Component {
    
    state = {
        notes: []
    }

    async componentDidMount() {
       this.getNotes();
    }

    async getNotes() {
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({notes: res.data});
    }

    deleteNote = async (id) => {
        await axios.delete('http://localhost:4000/api/notes/'+ id);
        this.getNotes();
        console.log(id);
    }

    render() {
        if(this.state.notes.length){
            return (
                <div className="row">
                    {
                        this.state.notes.map(note => (
     
                         <div className="col-md-4 col-sm-6 content-card" key={note._id}>
                         <div className="card-big-shadow">
                             <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                                 <div className="card-header d-flex justify-content-between">
                                     <button className="btn btn-outline-danger btn-sm" onClick={() => this.deleteNote(note._id)}>Delete</button>
                                     <Link className="btn btn-outline-info btn-sm" to={"/edit/" + note._id}>Edit</Link>
     
                                 </div>
                                 <div className="content">
                                     <h6 className="author">{note.author}</h6>
                                     <h4 className="title">{note.title}</h4>
                                     <p className="description">{note.content}</p>
                                     <p className="description">{format(note.date)}</p>
                                 </div>
                             </div>  {/*  <!-- end card --> */}
                         </div>
                         </div>
                        ))
                    }
                </div>
             )
        } else {
            return (
                <div className="row">
                    <h3>Hi! You dont't have any notes created.
                        <br></br>
                        <br></br>
                    Click on "Create Note" and start having fun!</h3>
                </div>

            )
        }
      
    }
}
