import Head from 'next/head';
import {Navbar, Nav, Carousel, Container, Row, Col, Accordion, Card} from 'react-bootstrap';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import Image from 'next/image';
import star from './images/star3.svg';
import styles from '../styles/Home.module.css';

import slide1 from './images/EOV/S01.jpg';
import slide2 from './images/EOV/S02.jpg';
import slide3 from './images/EOV/S03.jpg';
import slide4 from './images/EOV/S04.jpg';
import slide5 from './images/EOV/S05.jpg';

import archerAvatar from './images/EOV/avatars/archer.png';
import thiefAvatar from './images/EOV/avatars/thief.png';
import knightAvatar from './images/EOV/avatars/knight.png';
import pattern from './images/EOV/ui/ps_neutral.png';
import AvatarFrame from './components/AvatarFrame';
import EOVButton from './components/EOVButton';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div style={{backgroundImage: `url(${pattern})`}}>
      <Head>
        <title>Far Star Studio</title>
        <link rel="icon" href="/farstar3.ico" />
      </Head>

      <main>
        <section className="w-100 h-100 position-absolute">
          <div id={styles["video-banner-div"]}>
            <video id={styles["video-background"]} autoPlay loop muted>
              <source src="/EOV_demo3.mp4" />
            </video>
          </div>
          <div id={styles["video-foreground"]} className="d-flex justify-content-center align-items-center">
          </div>
        </section>
        
        <section className="d-flex flex-column vh-100">
          <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Navbar.Brand href="/">
            <img
              className="d-inline-block align-top mx-2"
              src={star}
              alt="Far Star Studio Logo"
              width={30}
              height={30}
            />
              <FormattedMessage id="Far Star Studio" defaultMessage="Far Star Studio" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              {/* <Nav className="me-auto">
                <Nav.Link href="#features">
                  <FormattedMessage id="Emblem of Valor" defaultMessage="Emblem of Valor" />
                </Nav.Link>
              </Nav> */}
              <Nav className="mx-2">
                <Nav.Link href={`#${styles["about-us"]}`}>
                  <FormattedMessage id="About Us" defaultMessage="About Us" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div id={styles["game-intro"]} className="d-flex flex-column flex-grow-1 justify-content-center align-items-center" data-aos="fade-down">
            <span className="text-center"><strong>英勇紋章</strong>是一款由臺灣獨立開發團隊製作的牌組構築遊戲，並結合角色扮演與RougeLike要素</span>
            <div className="my-2"/>
            <span className="text-center">目前提供早期開發版本進行試玩，歡迎下載並提供意見給我們！</span>
            <div className="my-2"></div>
            <EOVButton href="#download-section">
              下載試玩
            </EOVButton>
          </div>
        </section>

        <Row className="m-0">
          <Col id="download-section" md={12} lg={6} className="my-4">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <AvatarFrame src={archerAvatar} />
              <h2 className="text-center my-2"><strong>
                <FormattedMessage id="News" defaultMessage="News" />
              </strong></h2>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center p-2">
              <div className="d-flex flex-column justify-content-center align-items-center" >
                <h3>英勇紋章 Alpha1.0.2 試玩版開放下載！</h3>
                <div className="d-flex justify-content-center align-items-center">
                  <EOVButton target="_blank" href="https://drive.google.com/file/d/1Y97xGQBzfS8sewmJxPzKqgazlnTBMulZ/view?fbclid=IwAR1euGdE2SH2z7kJaHYiTU_KnICJN9bP0Oz1a7aCrWMFDKW9-2CGKWVtUiA&fbclid=IwAR3-Zvn0yGUFbpeHy-_rE1CggUR-lfUTUtAIKgWfpArnyhfdHH1zEf73rhI">
                    <FormattedMessage id="Download" defaultMessage="Download" />
                  </EOVButton>
                </div>
                <div className="my-2"/>
                <div className="d-flex justify-content-center align-items-center">
                  <EOVButton target="_blank" href="https://forms.gle/GHEvTJbEYMCRhKP47">
                    <FormattedMessage id="TakeSurvey" defaultMessage="TakeSurvey" />
                  </EOVButton>
                </div>
                <span><strong>玩過的話幫我們填個問卷吧~</strong></span>
              </div>
            </div>
          </Col>
          <Col id="devlog-section" md={12} lg={6} className="my-4">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <AvatarFrame src={knightAvatar} /> 
              <h2 className="text-center my-2"><strong>
                <FormattedMessage id="DevLogs" defaultMessage="DevLogs" />
              </strong></h2>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center p-2">
              <Accordion defaultActiveKey="1" style={{minWidth:"50%"}}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0" style={{cursor: "pointer"}}>
                    <h4>版本 v1.0.1</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <ul>
                        <li>測試版首次發行</li>
                        <li>目前版本包含2個我方角色(辛恩、梅麗莎)</li>
                        <li>目前版本包含4個可學習技能(近戰專精、防禦專精、祕法專精、法術知識)</li>
                        <li>目前版本包含大約40張卡牌</li>
                        <li>目前版本包含5張地圖</li>
                        <li>目前版本包含大約30種敵人</li>
                        <li>目前僅支援一個存檔</li>
                        <li>目前版本提供5種難度，但僅影響敵人生命值</li>
                        <li>目前僅支援繁體中文版，可以選擇英文介面但翻譯不完整</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1" style={{cursor: "pointer"}}>
                    <h4>版本 v1.0.2</h4>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <ul>
                        <li>修正戰鬥結束後無法獲得金幣的bug</li>
                        <li>修正某些戰鬥獲得經驗值異常的bug</li>
                        <li>修正某些敵人會持續發呆的bug</li>
                        <li>戰鬥獲得的金幣增加</li>
                        <li>調整商品售價</li>
                        <li>調整卡牌平衡</li>
                        <li>調整卡牌目標說明</li>
                        <li>增加多選N生成卡牌效果</li>
                        <li>增加召喚類型卡牌效果(平衡有待調整)</li>
                        <li>立繪更新(角色:辛恩)</li>
                        <li>狀態圖示與行動圖示更新</li>
                        <li>怪物攻擊力隨著難度變化</li>
                        <li>新增問題回報功能</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Col>
          <Col lg={12} className="my-4">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <AvatarFrame src={thiefAvatar} /> 
              <h2 className="text-center my-2"><strong>
                <FormattedMessage id="Screenshots" defaultMessage="Screenshots" />
              </strong></h2>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Carousel indicators={false} className={styles.slides}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                  />
                  {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                  />

                  {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                  />

                  {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>

        <Row id={styles["about-us"]} className="m-0">
          <Col lg={12} className="justify-content-center align-items-center py-3">
            <h2 className="text-center"><strong><FormattedMessage id="About Us" defaultMessage="About Us" /></strong></h2>
          </Col>
          <Col md={12} lg={5} className="my-3 d-flex flex-row align-items-center" style={{backgroundColor: "black", color: "white"}}>
            <img src="/FarStar.png" width="400" />
            <div className="d-flex flex-column">
              <span>遠星工作室成立於2021年，目前成員人數為2人</span>
              <span>會取這個名字，是因為夢想就像一顆遙遠的明星</span>
            </div>
          </Col>
          <Col md={12} lg={7} className="my-3 d-flex flex-row align-items-center justify-content-center" >
            <Card style={{ width: '18rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Tim</Card.Title>
                {/* <Card.Text>
                </Card.Text> */}
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title>Luke</Card.Title>
                {/* <Card.Text>
                </Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </main>

      <footer className={styles.footer}>
        <div className="d-flex flex-row">
          <a style={{width: "2rem", height: "2rem"}} target="_blank" href="https://www.facebook.com/%E8%8B%B1%E5%8B%87%E7%B4%8B%E7%AB%A0Emblem-of-Valor-104955331787516">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <div className="mx-3"/>
          <a style={{width: "2rem", height: "2rem"}} href="mailto:dev@farstar-studio.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className="mt-2"></div>
        <span>FarStar Studio 2021</span>
      </footer>
    </div>
  )
}
