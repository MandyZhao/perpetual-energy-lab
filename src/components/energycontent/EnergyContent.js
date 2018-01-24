import React, { Component } from 'react';
import './EnergyContent.css'
import Slider from 'react-slick'
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Button, Card } from 'antd';
const { Meta } = Card;
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import icons from '../../icons.png';
import github from '../../img/github.png';
import facebook from '../../img/facebook.png';
import twitter from '../../img/twitter.png';
import linkedin from '../../img/linkedin.png';
import youtube from '../../img/youtube.png';
import wechat from '../../img/wechat.png';
import weibo from '../../img/weibo.png';
import bigbuckbunnyPoster from '../../img/bigbuckbunny.png';
import play from '../../img/play.png';

class EnergyContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            socialIcons: [
              {'name': 'facebook', 'url': 'http://www.facebook.com'},
              {'name': 'wechat', 'url': 'http://www.qq.com'},
              {'name': 'weibo', 'url': 'http://www.sina.com'},
              {'name': 'twitter', 'url': 'http://www.twitter.com'},
              {'name': 'github', 'url': 'http://www.instagram.com'}
            ]
        };
    }
    render() {
        const settings1 = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            className: 'center',
            centerMode: true,
            centerPadding: '60px',
          };
        // const settings2 = {
        //     className: 'center',
        //     infinite: true,
        //     centerPadding: '60px',
        //     slidesToShow: 5,
        //     swipeToSlide: true,
        //     afterChange: function (index) {
        //         console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        //     }
        // };
      return (
        <div>
            <section className="section_style">
                <div className="sub_content"> 
                    <div className="container section_title">
                        <h1 className="text_title">Perpetual Energy Lab</h1>
                    </div>
                    <div className="video_intro">
                        <a herf="">
                            <img src={play} className="play-icon-img"/>
                            <h4 className="sub_title">What is Perpetual Energy Lab?</h4>
                        </a>
                    </div>
                </div>
            </section>
            <section className="section_joinus">
                <div className="sub_content"> 
                    <div className="container joinus_title">
                        <h1 className="text_title">Join us</h1>
                    </div>
                    <div className="social_media_div">
                        <ul style={{listStyle:'none',margin: '0' ,padding: '0', display:'-webkit-inline-box', position:'relative'}}>
                            <li>
                                <a className="social-icon" href="https://github.com/"><img src={github} className="social-icon-img"/></a>
                            </li>
                            <li>
                                <a className="social-icon" href="https://www.facebook.com/"><img src={facebook} className="social-icon-img"/></a>
                            </li>
                            <li>
                                <a className="social-icon" href="https://twitter.com/?lang=en"><img src={twitter} className="social-icon-img"/></a>
                            </li>
                            <li>
                                <a className="social-icon" href="https://www.linkedin.com/"><img src={linkedin} className="social-icon-img"/></a>
                            </li>
                            <li>
                                <a className="social-icon" href="https://www.youtube.com/"><img src={youtube} className="social-icon-img"/></a>
                            </li>
                            <li>
                                <a className="social-icon" href="https://web.wechat.com/"><img src={wechat} className="social-icon-img"/></a>
                            </li>
                            <li>
                                <a className="social-icon" href="http://us.weibo.com/gb"><img src={weibo} className="social-icon-img"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='container partner_div'>
                <div className="partner_title">
                    <h1 className="text_title" style={{color:'#80ae61'}}>Our Partners</h1>
                </div>
                <Slider {...settings1}>
                <div><img src={'https://wepower.network/wp-content/themes/wepower/images/23435352_10214145925539623_1474058341_n.png'} /></div>
                <div><img src={'https://wepower.network/wp-content/themes/wepower/images/23435352_10214145925539623_1474058341_n.png'} /></div>
                <div><img src={'https://wepower.network/wp-content/themes/wepower/images/23435352_10214145925539623_1474058341_n.png'} /></div>
                <div><img src={'https://wepower.network/wp-content/themes/wepower/images/23435352_10214145925539623_1474058341_n.png'} /></div>
                <div><img src={'https://wepower.network/wp-content/themes/wepower/images/23435352_10214145925539623_1474058341_n.png'} /></div>
                </Slider>
            </div>
            <section className="token_model">
                <div className="sub_content"> 
                    <div className="container token_model_title">
                        <h1 className="text_title">Revolutionary token model</h1>
                    </div>
                    <Video
                            ref="video2"
                            onPlay={() => {
                                this.refs.video1.videoEl.pause();
                            }}
                            src={"http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"}
                            poster={bigbuckbunnyPoster}>
                    </Video>
                </div>
            </section>
            <section className="section_joincommu">
                <div className="sub_content"> 
                    <div className="container joincommu_title">
                        <h1 className="text_title">Join our community at Telegram</h1>
                    </div>
                    <div className="social_media_div">
                    <Button type="primary" htmlType="button" className="join_tele">
                        Join telegram
                    </Button>
                    </div>
                </div>
            </section>
            <section className="section_ourteam">
                <div className="sub_content"> 
                    <div className="container ourteam_title">
                        <h1 className="text_title">Our Team</h1>
                    </div>
                    <Card hoverable className="team_card" cover={<img style={{ float: "left"}} alt="example" src="http://www.voicelync.com/images/icons/features_box_01.png" />}>
                        {/* <Meta title="Europe Street beat" description="www.instagram.com"/> */}
                    </Card>
                    <Card hoverable className="team_card" cover={<img style={{ float: "left"}} alt="example" src="http://www.voicelync.com/images/icons/features_box_01.png" />}>
                        {/* <Meta title="Europe Street beat" description="www.instagram.com"/> */}
                    </Card>
                    <Card hoverable className="team_card" cover={<img style={{ float: "left"}} alt="example" src="http://www.voicelync.com/images/icons/features_box_01.png" />}>
                        {/* <Meta title="Europe Street beat" description="www.instagram.com"/> */}
                    </Card>
                    <Card hoverable style={{ width: 240 }} className="team_card" cover={<img style={{ float: "left"}} alt="example" src="http://www.voicelync.com/images/icons/features_box_01.png" />}>
                        {/* <Meta title="Europe Street beat" description="www.instagram.com"/> */}
                    </Card>
                    <Card hoverable style={{ width: 240 }} className="team_card" cover={<img style={{ float: "left"}} alt="example" src="http://www.voicelync.com/images/icons/features_box_01.png" />}>
                        {/* <Meta title="Europe Street beat" description="www.instagram.com"/> */}
                    </Card>
                    <Card hoverable style={{ width: 240 }} className="team_card" cover={<img style={{ float: "left"}} alt="example" src="http://www.voicelync.com/images/icons/features_box_01.png" />}>
                        {/* <Meta title="Europe Street beat" description="www.instagram.com"/> */}
                    </Card>
                </div>
            </section>
        </div>
    );
}
}

export default EnergyContent