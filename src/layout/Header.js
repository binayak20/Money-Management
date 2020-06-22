import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const { Header } = Layout;
const HeaderComponent = withRouter(props => {
  const { location } = props;
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className='logo' />
      <Menu mode='horizontal' theme='dark' selectedKeys={[location.pathname]}>
        <Menu.Item key='/'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='/transactions'>
          <Link to='/transactions'>Transection</Link>
        </Menu.Item>
        <Menu.Item key='/product'>
          <Link to='/product'>Product</Link>
        </Menu.Item>
        <Menu.Item key='/logout'>Logout</Menu.Item>
      </Menu>
    </Header>
  );
});

export default HeaderComponent;
