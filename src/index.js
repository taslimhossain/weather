
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Icon } from 'antd';

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <Layout className="layout">
    
    <Header>
      <div className="logo"> <Icon type="compass" theme="outlined" /> Weather </div>
    </Header>

    <Content>
      <div className="wraper">




      </div>
    </Content>

    <Footer>
      Ant Design ©2018 Created by Taslim
    </Footer>

  </Layout>,
  document.getElementById('container'));
          