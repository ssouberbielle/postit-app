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
        date: new Date()
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data.map(user => user.username)});
        console.log(this.state.users);
   }

    onSubmit = (e) => {
        console.log(this.state.title, this.state.content);
        e.preventDefault();
    }

    onInputChange = (e) => {
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
                            onChange={this.onInputChange}
                        >
                            {
                                this.state.users.map(user => 
                                <option key={user} value={user}>
                                    {user}
                                </option>)
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        onChange={this.onInputChange}
                        required
                        />
                    </div>

                    <div className="form-group">
                        <textarea 
                        className="form-control"
                        placeholder="Content"
                        name="content"
                        onChange={this.onInputChange}
                        required>
                        </textarea>
                    </div>

                    <div className="form-group">
                        <DatePicker 
                        className='form-control'
                        dateFormat="dd/MM/yyyy"
                        selected={this.state.date}
                        onChange={this.onChangeDate}

                        
                        />
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>

                </div>
            </div>
        )
    }
}
