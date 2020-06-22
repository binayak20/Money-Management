import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';

export default class Login extends Component {
    handleLogin = () => {

    }
    render() {
        return (
            <div>
                <section className="auth_form">
                    <div className="auth_form_left">
                        <div className="auth_form_container">
                            <div className="auth_form_logo">
                                {/* <a href="#">
                                    <img src="/images/logo.png" alt="" />
                                </a> */}
                                <h2>Login</h2>
                            </div>
                            <Form>
                                <Form.Item >
                                    <label>Username</label>
                                    <Input
                                        // icon="tablet"
                                        // iconPosition="left"
                                        type="text"
                                        ref="username"
                                        placeholder="Ex: 01910000000"
                                        // value={this.state.username}
                                        // onChange={e => {
                                        //     this.handleChange(e, 'username');
                                        // }}
                                        required
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <label>Password</label>
                                    <Input
                                        // icon="lock"
                                        // iconPosition="left"
                                        type="password"
                                        ref="password"
                                        placeholder="Enter Password"
                                        //   value={this.state.password}
                                        // onChange={e => {
                                        //     this.handleChange(e, 'password');
                                        // }}
                                        required
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        block
                                        // loading={this.state.isLoginBtnLoading}
                                        onClick={this.handleLogin}
                                    >
                                        Login
                                 </Button>
                                </Form.Item>
                            </Form>

                            <div className="auth_forget_pass">
                                <a href="#">Forgot Password</a>
                            </div>
                            <div className="auth_form_info">
                                <p>
                                    Don't have an account ?
                                 <a href="/register"> Register</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="auth_form_right" />
                </section>
            </div>
        )
    }
}

