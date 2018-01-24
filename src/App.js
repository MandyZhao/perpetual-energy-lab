import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import EnergyHeader from './components/energyheader/EnergyHeader';
import EnergyContent from './components/energycontent/EnergyContent';
import EnergyFooter from './components/energyfooter/EnergyFooter';

import { Layout } from 'antd';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button, Spin } from 'antd';
// import UserRegisterForm from './Component/UserLoginAndRegister/UserRegisterForm';
// import UserLogin from './Component/UserLoginAndRegister/UserLogin';
const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
      {/* <div id="preloader">
            <div id="loader"></div>
      </div>     */}
      {/* <Spin /> */}
      <BrowserRouter>
          
          <Layout className="layout">
            <EnergyHeader />
            <div>
            <EnergyContent />
            </div>
            {/* <Footer> */}
                <EnergyFooter />
            {/* </Footer> */}
          </Layout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
