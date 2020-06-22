import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Transection from './transection/Transection';
import HeaderComponent from '../layout/Header';
import ProductList from './products/productList';
const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <HeaderComponent />
          <Content
            className='site-layout'
            style={{ padding: '25px 25px', marginTop: 64 }}
          >
            <div
              className='site-layout-background'
              style={{ padding: 24, minHeight: 400 }}
            >
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/transactions' component={Transection} />
                <Route path='/product' component={ProductList} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
