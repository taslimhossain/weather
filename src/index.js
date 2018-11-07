
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Icon, Button, Table, Divider, Tag } from 'antd';

const { Header, Content, Footer } = Layout;

const dataSource = [{
  key: '1',
  days: ['TODAY', 'NOV 7'],
  description: 'Clouday',
  highlow: '48/43'
}, {
  key: '1',
  days: ['TUE', 'NOV 8'],
  description: 'Clouday',
  highlow: '48/43'
}, {
  key: '3',
  days: ['WED', 'NOV 9'],
  description: 'Clouday',
  highlow: '48/40'
}];

const columns = [{
  title: 'Day',
  dataIndex: 'days',
  key: 'days',
  render: days => (
      <div className="date-info">
        {days.map(day => <span key={day}>{day}</span>)}
        <Icon className="cloud-icon" type="cloud" />
      </div>
    ),

}, {
  title: 'DESCRIPTION',
  dataIndex: 'description',
  key: 'description',
}, {
  title: 'HIGH/LOW',
  dataIndex: 'highlow',
  key: 'highlow',
}];




ReactDOM.render(
  <Layout className="layout">
    
    <Header>
      <div className="logo"> <Icon type="compass" theme="outlined" /> Weather </div>
    </Header>

    <Content>
      <div className="wraper">
        <div className="table-headline">
          <h2>Stockholm, Sweden 5 Day Weather</h2>
          <p>2:17 pm CET</p>
          <Button type="primary" icon="printer">Print</Button>
        </div>
        <Table dataSource={dataSource} columns={columns} />

      </div>
    </Content>

    <Footer>
      Ant Design ©2018 Created by Taslim
    </Footer>

  </Layout>,
  document.getElementById('container'));
          