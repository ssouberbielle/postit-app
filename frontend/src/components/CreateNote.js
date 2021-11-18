import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date(),
        editing: false,
        _id: ''
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data.map(user => user.username)});
        console.log(this.state.users);

        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);
            console.log(res.data);
            this.setState({
                title: res.data.title,
                userSelected: res.data.author,
                content: res.data.content,
                date: new Date(res.data.date),
                editing: true,
                _id: this.props.match.params.id
            });
        }
   }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.userSelected,
            date: this.state.date
        };
        if (this.state.editing) {
            const res = await axios.put('http://localhost:4000/api/notes/' + this.state._id , newNote);

        } else {
            const res = await axios.post('http://localhost:4000/api/notes', newNote);
        }
        window.location.href = '/';
    }

    onInputChange = async (e) => {
        console.log(e.target.name, e.target.value); //e.target nos da info del input que queremos
        this.setState({[e.target.name]: e.target.value});
    }

    onChangeDate = (date) => {
        this.setState({date: date});
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h3>Create Note</h3>

                    {/** SELECT USER */}
                    <div className="form-group">
                        <select
                            className="form-control"
                            name="userSelected"
                            value={this.state.userSelected}
                            onChange={this.onInputChange}
                        >
                            <option>Select author</option>
                            {
                                this.state.users.map(user => 
                                <option key={user} value={user}>
                                    {user}
                                </option>)
                            }
                        </select>
                    </div>
                    
                    <div className="form-group mt-2">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.onInputChange}
                        required
                        />
                    </div>

                    <div className="form-group">
                        <textarea 
                        className="form-control mt-2"
                        placeholder="Content"
                        name="content"
                        value={this.state.content}
                        onChange={this.onInputChange}
                        required>
                        </textarea>
                    </div>

                    <div className="form-group mt-2">
                        <DatePicker 
                        className='form-control'
                        dateFormat="dd/MM/yyyy"
                        selected={this.state.date}
                        onChange={this.onChangeDate}

                        
                        />
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary mt-2">
                            Save
                        </button>
                    </form>

                </div>
            </div>
        )
    }
}
