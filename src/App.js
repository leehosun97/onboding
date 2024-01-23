import "./css/onboding.css";
import BtnAreaCss from "./css/btnArea.module.css";
import {Fragment,useState} from 'react';
//라우터돔
import { BrowserRouter, Link} from 'react-router-dom';
// swiper 구성요소 가져오기
import { Swiper, SwiperSlide} from 'swiper/react';
// swiper 스타일 가져오기
import 'swiper/css';
import 'swiper/css/navigation';
// 필수 모듈 가져오기
import { Navigation } from 'swiper/modules';
import Images from "./component/images"


function App() {

  //pc 슬라이드
  const slidesPcData = [
    Images.slideImage01,
    Images.slideImage02,
    Images.slideImage03,
    Images.slideImage04,
    Images.slideImage05,
  ]

  //모바일 슬라이드
  const slideMoData = [
    {
      blueTxt: 'PC 모바일 연동',
      title: '계정하나로 편하게\n언제 어디서나',
      description: '언제 어디서나 PC와 모바일App으로\n업무를 간편하게 처리하세요.',
    },
    {
      title: '공동중개',
      description: '전국 부동산 중개인과의 공동중개,\n이제는 지역 제한 없이 자유롭게 하세요.',
      image: Images.skillImg01,
    },
    {
      title: '매물찾습니다',
      description: '급하게 매물이 필요하면 원하는 조건에 맞게\n바로 원하는 매물을 제안받아보세요.',
      image: Images.skillImg02,
    },
    {
      title: '일반채팅',
      description: '우리 사무소 중개원들과 단체톡, 1:1 톡 가능,\n원하는 사람과 편하게 정보를 주고 받아보세요.',
      image: Images.skillImg03,
    },
    {
      title: '오픈채팅',
      description: '연락처가 없어도 관심사가 맞는 중개사들끼리\n전용 커뮤니티를 직접 만들고, 참여도 해보세요.',
      image: Images.skillImg04,
    },
    {
      title: '중개업소',
      description: '지역에 구애받지 않고 전국의\n원하는 부동산 중개인과 빠르게 연락해보세요.',
      image: Images.skillImg05,
    },
    {
      title: '관리자메뉴',
      description: '내가 소속된 중개사무소의 구성원 추가,\n관리자 권한부여 등 회사 운영의 편의성을 갖춘\n관리 기능까지 제공합니다.',
      image: Images.skillImg06,
    },
  ];

  /*다운로드 팝업 관련 */
  const [isImgWrapOpen, setIsImgWrapOpen] = useState(false);

  const openDownloadPop = () => {
    setIsImgWrapOpen(true);
  };

  const closeDownloadPop = () => {
    setIsImgWrapOpen(false);
  };

  //기능 관련 PC버전
  const skillPcData = [
    {
      img : Images.skillImg01,
      title : "공동중개",
      txt : '전국 부동산 중개인과의 공동중개, \n 이제는 지역 제한 없이 자유롭게 하세요.'
    },
    {
      img : Images.skillImg02,
      title : "매물찾습니다",
      txt : '급하게 매물이 필요하면 원하는 조건에 맞게 \n 바로 원하는 매물을 제안받아보세요.'
    },
    {
      img : Images.skillImg03,
      title : "일반채팅",
      txt : '우리 사무소 중개원들과 단체톡, 1:1 톡 가능, \n 원하는 사람과 편하게 정보를 주고 받아보세요.'
    },
    {
      img : Images.skillImg04,
      title : "오픈채팅",
      txt : '연락처가 없어도 관심사가 맞는 중개사들끼리 \n 전용 커뮤니티를 직접 만들고, 참여도 해보세요.'
    },
    {
      img : Images.skillImg05,
      title : "중개업소",
      txt : '지역에 구애받지 않고 전국의 \n 원하는 부동산 중개인과 빠르게 연락해보세요.'
    },
    {
      img : Images.skillImg06,
      title : "관리자메뉴",
      txt : '내가 소속된 중개사무소의 구성원 추가, 관리자 권한부여 등 \n 회사 운영의 편의성을 갖춘 관리 기능까지 제공합니다.'
    },
  ]
  // 기능 관련 모바일 버전
  const skillMoData = [
    Images.MoImg01,
    Images.MoImg02,
    Images.MoImg03,
    Images.MoImg04,
    Images.MoImg05,
    Images.MoImg06,

  ]
  return (
      <div className="App">
        <div className="onboding_wrap">
          <BrowserRouter>
            <header id="header">
              <span className="logo"></span>
            </header>
            <section className="banner_wrap">
              <div className="banner_content">
                  <h1>부동산 중개사 전문 업무를<br/>공실투데이에서 시작하세요.</h1>
                  <p>지금 바로 공실투데이를 평생무료로 이용해보세요!!</p>
                  <div class="btn_area pc">
                    <Link to="#" className={BtnAreaCss.blueBtn}>웹브라우저에서 열기</Link>
                    <span className="doownloadInfoBox">
                      <Link to="#" className={`${BtnAreaCss.blueBtn} ${BtnAreaCss.pcDownload}`} onClick={openDownloadPop}><span>PC 버전 다운로드</span></Link>
                      <span className={`img_wrap ${isImgWrapOpen ? 'on' : ''}`}>
                        <span className="img_box">
                          <img src={Images.doownloadInfoImg} alt="다운로드 설명 이미지"></img>
                          <span className="close_btn" onClick={closeDownloadPop}>닫기</span>
                        </span>
                      </span>
                    </span>
                    <Link to="#" className={`${BtnAreaCss.grayBtn} ${BtnAreaCss.playStore}`}><span>Google Play</span></Link>
                    <Link to="#" className={`${BtnAreaCss.grayBtn} ${BtnAreaCss.appStore}`}><span>App Store</span></Link>
                  </div>
                  <div class="btn_area mo">
                    <Link to="#" className={`${BtnAreaCss.blueBtn} ${BtnAreaCss.playStore}`}><span>Google Play</span></Link>
                    <Link to="#" className={`${BtnAreaCss.blueBtn} ${BtnAreaCss.appStore}`}><span>App Store</span></Link>
                  </div>
                </div>
            </section>
            <section className="slide_wrap pc">
              <h2>중개업소 업무 환경에 최적화된 <span>공실투데이</span>의 다양한 기능을 소개합니다.</h2>
              <div className="slide_box">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mainSlide">
                {slidesPcData.map((slidePc, index) => (
                  <SwiperSlide key={index}>
                    <div className="img_box">
                      <img src={slidePc} alt={`슬라이드 이미지 ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
                </Swiper>
              </div>
            </section>
            <section className="slide_wrap mo">
              <h2>중개업소 업무 환경에 최적화된<br/> <span>공실투데이</span>의 다양한 기능을 소개합니다.</h2>
              <div className="slide_box">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper mainSlide">
                  {slideMoData.map((slideMo, index) => (
                    <SwiperSlide key={index}>
                      <div className="slide_con">
                        <div className="slide_box">
                          <span className="blue_txt">{slideMo.blueTxt}</span>
                            {slideMo.image && <div className="img_box"><img src={slideMo.image} alt={`Slide ${index + 1} 이미지`} /></div>}
                            {slideMo.title && (
                              <h3>
                                {slideMo.title.split('\n').map((line1, lineIndex) => (
                                  <Fragment key={lineIndex}>
                                    {line1}
                                    <br />
                                  </Fragment>
                                ))}
                              </h3>
                            )}
                            {slideMo.description && (
                              <p>
                                {slideMo.description.split('\n').map((line2, lineIndex) => (
                                  <Fragment key={lineIndex}>
                                    {line2}
                                    <br />
                                  </Fragment>
                                ))}
                              </p>
                            )}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
            <section className="skill_wrap pc">
              <p className="blue_txt">PC 모바일 연동</p>
              <div className="grid_box mt4 title">
                <div>
                  <h3>계정하나로 편하게 <br/> 언제 어디서나</h3>
                </div>
                <div>
                  <p>언제 어디서나 PC와 모바일App 으로 업무를 간편하게 처리하세요.</p>
                </div>
              </div>
              <ul className="grid_box">
                {skillPcData.map((skill, index) => (
                  <li key={index}>
                    <div className="img_box"><img src={skill.img} alt={`스킬 이미지 ${index + 1}`}></img></div>
                    <h3>{skill.title}</h3>
                    <span>
                      {skill.txt.split('\n').map((line1, lineIndex) => (
                        <Fragment key={lineIndex}>
                          {line1}
                          <br/>
                        </Fragment>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="skill_wrap mo">
              {skillMoData.map((skillMo , index)=>(
                <div className="img_box"><img src={skillMo} alt={`모바일 스킬 이미지 ${index + 1}`}></img></div>
              ))}
            </section>
            <section className="bottom_banner_wrap">
              <div className="bottom_banner_content">
                <span><b>부동산 중개</b>에만 <b>집중</b></span>하세요.<br/><div className="displayfluid">트렌드에 최적화된 업무 방식은</div> <span><b>공실투데이</b></span>가 <b>해결</b>하겠습니다.
              </div>
            </section>
            <footer>
              <div className="footer_Wrap">
                <ul className="footer_menu">
                  <li><Link to="http://www.propline.co.kr/intro.html">회사소개</Link></li>
                  <li><Link to="#">이용약관</Link></li>
                  <li><Link to="#">개인정보처리방침</Link></li>
                </ul>
                <div className="footer_content">
                  <div className="company">
                    <h4>고객센터</h4>
                    <Link to="tel:1644-5510">1644 - 5510 (2번)</Link>
                    <p>업무시간 : 09:30 ~ 18:30<br/>점심시간 : 12:30 ~ 13:40<br/>토요일, 일요일, 공휴일 휴무</p>
                  </div>
                </div>
              </div>
            </footer>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
