import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import './EnergyHeader.css';
import logo from '../../logo.png';
import telegram from '../../telegram.png';
import { Layout, Button } from 'antd';
const { Header } = Layout;

class EnergyHeader extends Component {
    constructor(props){
        super(props);
        this.state = {isTop:true};
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }  
    handleScroll(event) {
        const top = window.pageYOffset || document.documentElement.scrollTop
        const isTop = (top <= 50);
        this.setState({isTop: isTop});
    }
  render() {
    return (
      <Header className={'header ' + (this.state.isTop ? '' : 'active')}>
        <div className="header-logocontainer" onClick={() => this.props.history.push('/')}>
          <img src={logo} className="header-logo" alt="logo" />
        </div>
        {/* <div className="header-userlogin">
          <Button  onClick={() => this.props.history.push('/signin')}>Sign in</Button>
          &nbsp;&nbsp;
          <Button type="primary" onClick={() => this.props.history.push('/register')}>Register</Button>
        </div> */}
        <div className="header-links">
            <ul className="header-list">
                <li id="telegram">
                    <a href="https://telegram.org/"><img src={telegram} className="social-icon-img" style={{marginRight:5}}/>Telegram </a>
                </li>
                <li>
                    <a href="https://telegram.org/">Blog </a>
                </li>
                <li>
                    <a href="https://telegram.org/">Token model </a>
                </li>
                <li>
                    <a href="https://telegram.org/">Platform </a>
                </li>
                <li>
                    <a href="https://telegram.org/">FAQ </a>
                </li>
            </ul>
        </div>
      </Header>
    );
  };
}

export default withRouter(EnergyHeader);