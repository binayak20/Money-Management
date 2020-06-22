import React, { Component } from 'react'
import { Modal } from 'antd'

export default class TransectionModal extends Component {
    render() {
        return (
            <div>
                <Modal
                    title="Create New Transaction"
                    visible={this.props.openModal}
                    //  onOk={this.handleOk}
                    onCancel={this.props.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}
