import { useContext, useState } from "react";
import { Context } from "../store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {Form, Input, message, Button} from 'antd';
import { Link } from 'react-router-dom';

function Registration(){
    const history = useHistory();
    const onFinish = (values) => {
        const registration = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            passwordConfirmation: values.confirm
        };
        fetch("http://localhost:8081/api/auth/" + registration.email)
            .then(response => {
                if(response.ok){
                    throw new Error("Account with the same email address already exists!")
                } else {
                    signUp(registration)
                }
            }).catch(error => {
                displayError(error);
            });
        
    };

    const signUp = (registration) => {
        fetch("http://localhost:8081/api/auth/signup/", {
            method: "POST",
            body: JSON.stringify(registration),
            headers: {"Content-Type":"application/json"}
        }).then(response => {
            if(response.ok){
                let successEvent = "Account successfully created!"
                displaySuccess(successEvent);
                return history.replace("/account")
            } else {
                throw new Error("Error signing up!");
            }
        }).catch(error => {
            displayError(error)
        });
    }

    const displayError = (error) => {
        message.error(error.toString());
    }

    const displaySuccess = (success) => {
        message.success(success);
    }

    const formItemLayout = {
        labelCol: {
            xs: {
            span: 7,
            },
        },
        wrapperCol: {
            xs: {
            span: 10,
            },
        },
        };
        const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            },
        },
    };

    const [form] = Form.useForm();

    return (
        <div style={{ alignItems: "center", textAlign: "center", marginLeft: "14px", marginRight: "14px"}}>
            <h1>Create your account</h1>
            <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
            >
            <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                {
                    required: true,
                    message: 'Please input your first name!',
                    whitespace: true,
                },
                {
                    min: 3,
                    message: 'Minimum length is 3 characters!',
                    whitespace: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                {
                    required: true,
                    message: 'Please input your last name!',
                    whitespace: true,
                },
                {
                    min: 3,
                    message: 'Minimum length is 3 characters!',
                    whitespace: true,
                },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                {
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message: "Password must contain atleast: 1 lowercase letter, 1 uppercase letter, 1 number"
                },
                {
                    min: 6,
                    message: 'Minimum length is 6 characters!',
                }
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                {
                    min: 6,
                    message: 'Minimum length is 6 characters!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }

                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                Register
                </Button>
            </Form.Item>
            </Form>
            <Link to="/account">Already have an account?</Link>
        </div>
    )
}

export default Registration