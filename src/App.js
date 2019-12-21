import React from 'react';
// import logo from './logo.svg';
import 'font-awesome/css/font-awesome.css';
import user from './Assets/images/user.png'
import Table from './components/Table';
import TransactionValue from './components/TransactionValue';
import Chart from './components/Chart'

import './App.css';

const transactionValue=['2,342', '₦4,000,000', '452,000', '₦4,000,000']

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="vela-app">
      <div className="header">
        <div className="header-left">
          <div className="logo">
            TransMonitor
          </div>
          <div className="search">
            <i className="fa fa-search" />&emsp;Search
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-contents">
            <div>
              Support
            </div>
            <div>
              FAQ
            </div>
            <div>
            <i className="fa fa-bell" />
            </div>
            <div className="profile-info">
              <div>
                <div className="hello">Hello</div>
                <div>Oluwaleke Ojo</div>
              </div>
              <div className="user-pic">
                <img src={user} alt="photo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="side-bar">
          <div className="generate-invoice sidebar-sections">GENERATE INVOICE</div>
          <div className="sidebar-sections">
            <span>Main</span>
            <div className="overview section-item">
              <i className="fa fa-dashboard" />&emsp;Overview
            </div>
          </div>
          <div className="sidebar-sections">
            <span>Payment</span>
            <div className="section-item">
              <i className="fa fa-money" />&emsp;All Payments
            </div>
            <div className="section-item">
              <i className="fa fa-money" />&emsp;Reconciled Payments
            </div>
            <div className="section-item">
              <i className="fa fa-money" />&emsp;Unreconciled-Payment
            </div>
            <div className="section-item">
              <i className="fa fa-money" />&emsp;Manual Settlement
            </div>
          </div>
          <div className="sidebar-sections">
            <span>Orders</span>
            <div className="section-item">
              <i className="fa fa-file" />&emsp;All Orders
            </div>
            <div className="section-item">
              <i className="fa fa-file" />&emsp;Pending Orders
            </div>
            <div className="section-item">
              <i className="fa fa-file" />&emsp;Reconciled Orders
            </div>
          </div>
          <div className="sidebar-sections">
            <div className="section-item">
              <i className="fa fa-user" />&emsp;Member Profile
            </div>
          </div>
          <div className="sidebar-sections"></div>
          <div className="sidebar-sections"></div>
          <div className="sidebar-sections"></div>
        </div>
        <div className="main-content">
          <div className="transaction-summary">
            {
              transactionValue.map((item, key)=>(
                <TransactionValue index={key} value={item} />
              ))
            }
          </div>
          <Chart />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
