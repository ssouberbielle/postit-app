import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        users: [],
        username: '',
    }

    async componentDidMount(){
        this.getUsers()
        console.log(this.state.users)
        
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    async getUsers() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data});
    }

    deleteUser = async (id) => {
        await axios.delete('http://localhost:4000/api/users/'+ id);
        this.getUsers();
        console.log(id);
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/api/users', {username: this.state.username});
        this.setState({username: ''});
        this.getUsers();
        console.log(res);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                    <h3>Create New User</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                            type="text"
                            value={this.state.username}
                            placeholder="Insert username" 
                            className="form-control"
                            onChange={this.onChangeUsername}  />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => 
                            (<li 
                                className="list-group-item list-group-item-action" 
                                key={user._id}>
                                {user.username}
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="button" className="btn-close float-right" onClick={() => this.deleteUser(user._id)} aria-label="Close"></button>
                                </div>    
                            </li>) )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
