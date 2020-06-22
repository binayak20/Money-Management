import React, { Component } from 'react'
import { List, Card, Button } from 'antd';
import TransectionModal from './TransectionModal';
const data = [
    {
        type: 'expense',
        amount: 100
    },
    {
        type: 'income',
        amount: 200
    },
    {
        type: 'expense',
        amount: 150
    },
    {
        type: 'income',
        amount: 50
    },
];

class Transection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal: false
        }

    }
    openTransectionModal = () => {
        this.setState({
            openModal: true
        })
    }
    handleCancel = () => {
        this.setState({
            openModal: false
        })
    }
    render() {
        return (
            <div>
                <TransectionModal
                    openModal={this.state.openModal}
                    handleCancel={this.handleCancel}
                />

                <h2>Welcome binayak</h2>
                <p>Your Email is: csebinayak.ku@gmail.com</p>
                <h2>Transections:</h2>
                <Button ref={this.wrapper} type="primary" onClick={this.openTransectionModal}>Create New Transection</Button>
                <Card style={{ marginTop: 10 }}>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<div>Type: {item.type}</div>}
                                    description={<div>Amount: {item.amount}</div>}
                                />
                            </List.Item>
                        )}
                    />
                </Card>

            </div>
        )
    }
}
export default Transection