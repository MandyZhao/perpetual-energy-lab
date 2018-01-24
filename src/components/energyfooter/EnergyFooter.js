import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FontAwesome from 'react-fontawesome';
import './EnergyFooter.css';

class EnergyFooter extends Component {
  constructor() {
    super();
    this.state = {
      socialMediaInfo: [
        {'name': 'facebook', 'url': 'http://www.facebook.com'},
        {'name': 'wechat', 'url': 'http://www.qq.com'},
        {'name': 'weibo', 'url': 'http://www.sina.com'},
        {'name': 'twitter', 'url': 'http://www.twitter.com'},
        {'name': 'instagram', 'url': 'http://www.instagram.com'}
      ]
    };
  }
  render() {
    return (<div className="footer-body">
      <Row>
        <h1 className="perpeual-footer-logo">Perpetual Energy Lab</h1>
        <div className="hr" style={{marginBottom: "20px"}}></div>
      </Row>
      <Row>
        <Col className="element-col" xs={{span: 24, offset: 0}} md={{span: 6, offset: 3}}>
          <div className="footer-title-text">Connect Us</div>
          <div>
            {
              this.state.socialMediaInfo.map((obj, i) => (
                <a key={i} className="soci-icon-link" href={obj.url}><FontAwesome name={obj.name} size="2x" /></a>
              ))
            }
          </div>
        </Col>
        <Col className="element-col" xs={{span: 24, offset: 0}} md={{span: 6, offset: 0}}>
          <div className="footer-column-box">
            <span className="inline-icon"><FontAwesome name="phone" /></span><span className="footer-info-text">911</span><br />
            <span className="inline-icon"><FontAwesome name="envelope-o" /></span><span className="footer-info-text">someone@gmail.com</span><br />
            <span className="inline-icon"><FontAwesome name="map-marker" /></span><span className="footer-info-text">Some Ave 91111, US</span>
          </div>
        </Col>
        <Col className="element-col" xs={{span: 24, offset: 0}} md={{span: 6, offset: 0}}>
          <div className="footer-column-box">
            <span>About us</span><br />
            <span>Become our partner</span>
          </div>
        </Col>
      </Row>
      <div className="hr" style={{marginTop: "20px"}}></div>
      <Row className="copyright-text">Perpetual Energy Lab ©2018 Created by Perpetual Energy Lab</Row>
    </div>);
  }
}

export default EnergyFooter;
