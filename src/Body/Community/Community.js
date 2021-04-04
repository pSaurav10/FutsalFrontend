import { Component, state, insertPost, postHandler } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import ShowPost from './ShowPost';

class Community extends Component {
    state = {
        post: "",
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    insertPost = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    postHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/post/add", this.state,this.state.config)
        .then((response) => {
             console.log(response)
        })
        .catch((err) => {
             console.log(err)
        })
    }
    render() {
        return (
            <div class="container mt-4 mb-5 ">
                <div class="d-flex justify-content-center row posts">
                    <div class="col-md-8">
                        <div class="feed p-2">
                            <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
                               
                                <div class="input-group col-lg-8 mb-4">
                                   
                                    <input id="post" type="text" name="post" 
                                    value={this.state.post} onChange={this.insertPost} required
                                    placeholder="Whats on your mind?" class="form-control bg-white border-0" />
                                </div>
                                <div class="form-group col-lg4 mx-auto mb-0">
                                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.postHandler}>Post</button>
                                </div>
                            </div>
                            <ShowPost></ShowPost>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Community;