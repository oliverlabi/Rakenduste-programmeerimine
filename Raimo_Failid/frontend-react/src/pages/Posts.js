import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../store";
import { addPost, clearPosts, removePost, updatePosts } from "../store/actions";
import { Table, Space, Button, Form, Input, message } from 'antd';

function Posts() {
  const [post, setPost] = useState("");
  const [firstName, setFirstName] = useState("");
  const [requestData, setRequestData] = useState("");
  const [lastName, setLastName] = useState("");
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  console.log(state)

  useEffect(() => {
    fetch("http://localhost:8081/api/post/")
    .then(response => {
      if(response.ok){
        return response.json();
      } else {
        throw new Error("Error fetching posts!");
      }
    })
    .then(data => {
      console.log(data);
      dispatch(updatePosts(data));
      fetchNames();
    })
    .catch(error => {
      displayError(error)
    });
  }, [requestData])

  const handleSubmit = () => {
    addNewPost()
  };

  function fetchNames(){
    if(state.auth.email != undefined){
      return fetch("http://localhost:8081/api/auth/" + state.auth.email)
      .then(response => {
        return response.json();
      }).then(data => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
      }).catch(error => {
        displayError(error);
      })
    } else {
      return
    }
  }

  function postFetch(){
    const newPost = {
      _id: Date.now(),
      firstName: firstName,
      lastName: lastName,
      userEmail: state.auth.email,
      post: post,
    };
    return fetch("http://localhost:8081/api/post/create",{
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {"Content-Type":"application/json"}
    }).then(() => {
      displaySuccess("Post successfully created!")
      dispatch(addPost(newPost))
    }).catch(error => {
      displayError(error);
    });
  }

  const addNewPost = () => {
    if(state.auth.email != null){
      postFetch();
    } else {
      displayCustomError("You must be logged in!")
    }
  }

  function checkPostRemovalEmail(recordID){
    if(state.auth.email != null && state.auth.email != undefined){
      fetch("http://localhost:8081/api/post/" + recordID,{
        method: "GET",
      }).then(response => {
        if(response.ok){
          return response.json();
        } else {
          throw new Error("Post does not exist!")
        }
      }).then(data => {
        if(data.userEmail === state.auth.email){
          return removePostFromDatabase(recordID)
        } else {
          throw new Error("This post isn't yours!")
        }
      }).catch(error => {
        displayError(error)
      })
    } else {
      displayCustomError("Error: You must be logged in to the respective account to edit/remove posts!")
    }
  }

  function removePostFromDatabase(recordID){
    return fetch("http://localhost:8081/api/post/delete/" + recordID,{
        method: "DELETE",
      }).then(response => {
        if(response.ok){
          displaySuccess("Post successfully deleted!")
          return dispatch(removePost(recordID))
        } else {
          throw new Error("Something happened!")
        }
      }).then(setRequestData(Date.now()
      )).catch(error => {
        displayError(error)
      })
  }

  function checkPostEditEmail(recordID){
    if(state.auth.email != null && state.auth.email != undefined){
      fetch("http://localhost:8081/api/post/" + recordID,{
        method: "GET",
      }).then(response => {
        if(response.ok){
          return response.json();
        } else {
          throw new Error("Post does not exist!");
        }
      }).then(data => {
        if(data.userEmail === state.auth.email){
          return linkToEditPage(recordID)
        } else {
          throw new Error("This post isn't yours!");
        }
      }).catch(error => {
        displayError(error);
      })
    } else {
      displayCustomError("Error: You must be logged in to the respective account to edit/remove posts!")
    }
  }

  function linkToEditPage(recordID){
    history.push("/posts/edit/" + recordID);
  }

  const checkLogin = () => {
    if(state.auth.email == null){
      return <p>You must be logged in to post.</p>
    } else {
      return <Form
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
              message: 'Please input your post!',
          },
          {
              max: 200,
              message: 'Maximum post length is 200 characters!',
          }
          ]}
        >
          <Input.TextArea/>
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>
    }
  }

  const displaySuccess = (success) => {
    message.success(success);
  }

  const displayError = (error) => {
    message.error(error.toString());
  }

  const displayCustomError = (customError) => {
    message.error(customError);
  }

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastname',
    },
    {
      title: 'Post',
      dataIndex: 'post',
      key: 'post',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="small">
            <a
              onClick={() => checkPostEditEmail(record.key)}
            >
              Edit
            </a>
            <a
              onClick={() => checkPostRemovalEmail(record.key)}
            >
              Remove
            </a>
        </Space>
      ),
    },
  ];

  let rows;
  if(state.posts.data !== undefined){
    const iteratedData = state.posts.data.map(row => ({
      key: row._id,
      firstName: row.firstName,
      lastName: row.lastName,
      post: row.post
    }))
  
    rows = [
      ...iteratedData
    ];
  } else {
    rows = []
  }

  return (
  <div style={{ marginLeft: "14px", marginRight: "14px" }}>
    <div >
      <h1 style={{ textAlign: "center" }}>Table of posts</h1>
      <Table dataSource={rows} columns={columns}/>
    </div>

    <div style={{ textAlign: "center" }}>
      <h1>Submit a post</h1>
      {checkLogin()}
    </div>
  </div>
  );
}

export default Posts;