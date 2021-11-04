import { useContext, useState } from "react";
import { Context } from "../store";
import { Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { loginUser } from "../store/actions";

function Login(){
    const [state, dispatch] = useContext(Context);

    const onFinish = (values) => {
        const loginAttempt = {
            email: values.email,
            password: values.password,
        };
        fetch("http://localhost:8081/api/auth/login/",{
            method: "POST",
            body: JSON.stringify(loginAttempt),
            headers: {"Content-Type":"application/json"}
        }).then((response) => {
            if(response.ok){
                fetchUserData(loginAttempt)
            } else {
                throw new Error("Invalid credentials!");
            }
        }).catch(error => {
            displayError(error)
        });
    }

    function fetchUserData(loginAttempt){
        fetch("http://localhost:8081/api/auth/" + loginAttempt.email)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const loginState = {
                email: loginAttempt.email,
                token: data.password
            }
            dispatch(loginUser(loginState))
        })
    }

    const displayError = (error) => {
        message.error(error.toString());
    }
    

    return (
        <div style={{ alignItems: "center", textAlign: "center", marginLeft: "14px", marginRight: "14px"}}>
        <h1>Sign in</h1>
        <Form 
        name="basic"
        labelCol={{span: 7,}}
        wrapperCol={{span: 10,}}
        initialValues={{remember: true,}}
        onFinish={onFinish}
        autoComplete="off"
        >
        <Form.Item
            label="Email"
            name="email"
            rules={[
            {
                required: true,
                message: 'Please input your email!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            {
                min: 6,
                message: 'Minimum length is 6 characters!',
            }
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{}}>
            <Button type="primary" htmlType="login">
            Login
            </Button>
        </Form.Item>
        </Form>
        <Link to="account/registration">Create a new account</Link>
        </div>
    );
};

export default Login