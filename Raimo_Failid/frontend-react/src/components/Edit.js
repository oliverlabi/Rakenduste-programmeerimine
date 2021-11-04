import { Button, Form, Input, message } from "antd"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react"
import { Context } from "../store";
import { useParams } from "react-router-dom";
import React from "react"

function Edit(){
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [post, setPost] = useState("");
    const [prevPost, setPrevPost] = useState("");
    const [userCheck, setUser] = useState("");
    const [state, dispatch] = useContext(Context);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8081/api/post/" + id)
        .then(response => {
            return response.json();
        }).then(data => {
            setUser(data.userEmail);
            setPrevPost(data.post);
        })
    }, [setPost])

    const handleSubmit = () => {
        addEditedPost()
    };

    function addEditedPost(){
        const postJSON = {
            post: post
        }
        return fetch("http://localhost:8081/api/post/update/" + id,{
            method: "PUT",
            body: JSON.stringify(postJSON),
            headers: {"Content-Type":"application/json"}
            }).then(response => {
            if(response.ok){
                setPrevPost(post)
                displaySuccess("Editing the post was successful!")
                return history.replace("/posts");
            } else {
                throw new Error("Failed editing the post!")
            }
            }).catch(error => {
                displayError(error)
            })
    }

    const displayError = (error) => {
        message.error(error.toString());
    }

    const displaySuccess = (success) => {
        message.success(success);
    }

    const checkLogin = () => {
        if(state.auth.email == null || state.auth.email != userCheck){
            return <p>You must be logged in to the respective account to edit the post.</p>
        } else {
            return <div><h1>Current post: {prevPost}</h1>
            <Form
            name="basic"
            onFinish={handleSubmit}
            >
            <Form.Item
                name="post"
                value={post}
                
                onChange = {(e) => setPost(e.target.value)}
                rules={[
                {
                    required: true,
                    message: 'Please input your post edit!',
                },
                {
                    max: 200,
                    message: 'Maximum post length is 200 characters!',
                }
                ]}
            >
                <Input.TextArea placeholder="Edit post content..."/>
            </Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
            </Form>
            <br/>
            </div>
        }
    }

    return (
        <div style={{ alignItems: "center", textAlign: "center", marginLeft: "14px", marginRight: "14px"}}>
        {checkLogin()}
        <Link to="/posts">Cancel editing</Link>
        </div>
    )
}

export default Edit