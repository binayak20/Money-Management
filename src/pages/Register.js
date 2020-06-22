import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';

export default class Register extends Component {
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
                                <h2>New Registration</h2>
                            </div>
                            <Form>
                                <Form.Item >
                                    <label>Full Name</label>
                                    <Input
                                        type="text"
                                        ref="fullName"
                                        placeholder="Ex: Mr. XYZ"
                                        // value={this.state.username}
                                        // onChange={e => {
                                        //     this.handleChange(e, 'username');
                                        // }}
                                        required
                                    />
                                </Form.Item>
                                <Form.Item >
                                    <label>Username</label>
                                    <Input
                                        type="text"
                                        ref="username"
                                        placeholder="Ex: xyz"
                                        // value={this.state.username}
                                        // onChange={e => {
                                        //     this.handleChange(e, 'username');
                                        // }}
                                        required
                                    />
                                </Form.Item>

                                <Form.Item >
                                    <label>Phone</label>
                                    <Input
                                        type="text"
                                        ref="phone"
                                        placeholder="Ex: 01558903481"
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
                                    <label>Confirm Password</label>
                                    <Input
                                        type="password"
                                        ref="password"
                                        placeholder="Confirm Your Password"
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
                                    // onClick={this.handleLogin}
                                    >
                                        Save
                                 </Button>
                                </Form.Item>
                            </Form>
                            <div className="auth_form_info">
                                <p>
                                    Already have an account ?
                                 <a href="/login"> Login</a>
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
