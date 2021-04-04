import { Component, state, insertPost, postHandler } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

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
                            <div class="bg-white border">
                                <div>
                                    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                        <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" width="45" />
                                            <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">Thomson ben</span><span class="text-black-50 time">40 minutes ago</span></div>
                                        </div>
                                        <div class="feed-icon px-2"><i class="fa fa-ellipsis-v text-black-50"></i></div>
                                    </div>
                                </div>
                                <div class="p-2 px-3"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                                <div class="d-flex justify-content-end socials p-2 py-3"><i class="fa fa-thumbs-up"></i><i class="fa fa-comments-o"></i><i class="fa fa-share"></i></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Community;