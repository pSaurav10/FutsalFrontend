import { Component, state, insertPost, postHandler } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class SinglePost extends Component {
    state = {
        post: "",
        username: "",
        userimage: "",
        createdAt: "",
        userid: "",
        comments: [],
        id: this.props.match.params.id
    }
    componentDidMount() {
        axios.get("http://localhost:8080/post/fetch/" + this.state.id)
            .then((response) => {
                this.setState({
                    post: response.data.data.post,
                    username: response.data.data.username,
                    userimage: response.data.data.userimage,
                    createdAt: response.data.data.createdAt,
                    userId: response.data.data.userId,
                    comments: response.data.data.comments

                })
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div>

                <div class="container mt-4 mb-5 ">
                    <div class="d-flex justify-content-center row posts">
                        <div class="col-md-8">
                            <div class="feed p-2">
                                <div class="bg-white border mt-2 mb-2">
                                    <div>
                                        <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                            <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src={'http://localhost:8080/image/' + this.state.userimage} width="45" />
                                                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">{this.state.username}</span><span class="text-black-50 time">{this.state.createdAt}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="p-2 px-3"><span>{this.state.post}</span></div>

                                    </div>
                                    <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">

                                        <div class="input-group col-lg-8 mb-4">

                                            <input id="comment" type="text" name="comment"
                                                onChange={this.insertPost} required
                                                placeholder="Write a comment" class="form-control bg-white border-0" />
                                        </div>
                                        <div class="form-group col-lg4 mx-auto mb-0">
                                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.postHandler}>Comment</button>
                                        </div>
                                        <div className="row">
                                            <div class="p-2 px-3"><span>comments</span></div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SinglePost;