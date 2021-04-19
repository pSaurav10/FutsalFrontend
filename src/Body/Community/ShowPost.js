import { Component, state, insertPost, postHandler } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class ShowPost extends Component {
    state = {
        posts: [],
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        },
    }
    componentDidMount() {
        axios.get("http://localhost:8080/post/fetch", this.state.config)
            .then((response) => {
                this.setState({
                    posts: response.data.data.reverse()
                })
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.posts.map((post, i) => {

                        return (
                            <div class="bg-white border mt-2 mb-2"  key={i}>
                                <div>
                                    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                        <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src={'http://localhost:8080/image/' + post.userimage} width="45" />
                                            <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">{post.username}</span><span class="text-black-50 time">{post.createdAt}</span></div>
                                        </div>
                                        <div class="feed-icon px-2">
                                            <a href={'/post/fetch/' + post._id}>
                                                Full Post</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                        <div class="p-2 px-3 ml-4"><span>{post.post}</span></div>
                                    
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default ShowPost;