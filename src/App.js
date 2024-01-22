import "./css/common.css";
import "./css/main.css";
import BtnAreaCss from "./css/btnArea.module.css";
//라우터돔
import { BrowserRouter, Link} from 'react-router-dom';
// swiper 구성요소 가져오기
import { Swiper, SwiperSlide } from 'swiper/react';
// swiper 스타일 가져오기
import 'swiper/css';
import 'swiper/css/navigation';
// 필수 모듈 가져오기
import { Navigation } from 'swiper/modules';
import Images from "./component/images"


function App() {

  function openDownloadPop(){
    let ImgWrap= document.querySelector(".img_wrap");
    ImgWrap.classList.add("on");
  }

  function closeDownloadPop(){
    let ImgWrap= document.querySelector(".img_wrap");
    ImgWrap.classList.remove("on");
  }
  return (
      <div className="App">
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
                    <span className="img_wrap">
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
                <SwiperSlide><div className="img_box"><img src={Images.slideImage01} alt="첫번째 슬라이드 이미지"></img></div></SwiperSlide>
                <SwiperSlide><div className="img_box"><img src={Images.slideImage02} alt="두번째 슬라이드 이미지"></img></div></SwiperSlide>
                <SwiperSlide><div className="img_box"><img src={Images.slideImage03} alt="세번째 슬라이드 이미지"></img></div></SwiperSlide>
                <SwiperSlide><div className="img_box"><img src={Images.slideImage04} alt="네번째 슬라이드 이미지"></img></div></SwiperSlide>
                <SwiperSlide><div className="img_box"><img src={Images.slideImage05} alt="다섯번째 슬라이드 이미지"></img></div></SwiperSlide>
              </Swiper>
            </div>
          </section>
          <section className="slide_wrap mo">
            <h2>중개업소 업무 환경에 최적화된<br/> <span>공실투데이</span>의 다양한 기능을 소개합니다.</h2>
            <div className="slide_box">
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper mainSlide">
              <SwiperSlide>
                  <div className="slide_con">
                    <div className="slide_box">
                      <span className="blue_txt">PC 모바일 연동</span>
                      <h3>계정하나로 편하게<br/>언제 어디서나</h3>
                      <p>언제 어디서나 PC와 모바일App 으로 업무를<br/> 간편하게 처리하세요.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide_con">
                    <div className="slide_box">
                      <div className="img_box"><img src={Images.skillImg01} alt="첫번째 슬라이드 이미지"></img></div>
                      <h3>공동중개</h3>
                      <p>전국 부동산 중개인과의 공동중개,<br/>이제는 지역 제한 없이 자유롭게 하세요.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide_con">
                    <div className="slide_box">
                      <div className="img_box"><img src={Images.skillImg02} alt="두번째 슬라이드 이미지"></img></div>
                      <h3>매물찾습니다</h3>
                      <p>급하게 매물이 필요하면 원하는 조건에 맞게<br/>바로 원하는 매물을 제안받아보세요.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide_con">
                    <div className="slide_box">
                      <div className="img_box"><img src={Images.skillImg03} alt="세번째 슬라이드 이미지"></img></div>
                      <h3>일반채팅</h3>
                      <p>우리 사무소 중개원들과 단체톡, 1:1 톡 가능,<br/>원하는 사람과 편하게 정보를 주고 받아보세요.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide_con">
                    <div className="slide_box">
                      <div className="img_box"><img src={Images.skillImg04} alt="네번째 슬라이드 이미지"></img></div>
                      <h3>오픈채팅</h3>
                      <p>연락처가 없어도 관심사가 맞는 중개사들끼리<br/>전용 커뮤니티를 직접 만들고, 참여도 해보세요.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide_con">
                    <div className="slide_box">
                      <div className="img_box"><img src={Images.skillImg05} alt="다섯번째 슬라이드 이미지"></img></div>
                      <h3>중개업소</h3>
                      <p>지역에 구애받지 않고 전국의<br/>원하는 부동산 중개인과 빠르게 연락해보세요.</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide_con">
                    <div className="slide_box">
                      <div className="img_box"><img src={Images.skillImg06} alt="여섯번째 슬라이드 이미지"></img></div>
                      <h3>관리자메뉴</h3>
                      <p>내가 소속된 중개사무소의 구성원 추가,<br/>관리자 권한부여 등 회사 운영의 편의성을 갖춘<br/> 관리 기능까지 제공합니다.</p>
                    </div>
                  </div>
                </SwiperSlide>
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
              <li>
                <div className="img_box"><img src={Images.skillImg01} alt="공동중개 이미지"></img></div>
                <h3>공동중개</h3>
                <span>전국 부동산 중개인과의 공동중개, <br/>이제는 지역 제한 없이 자유롭게 하세요.</span>
              </li>
              <li>
                <div className="img_box"><img src={Images.skillImg02} alt="매물찾습니다 이미지"></img></div>
                <h3>매물찾습니다</h3>
                <span>급하게 매물이 필요하면 원하는 조건에 맞게<br/>바로 원하는 매물을 제안받아보세요.</span>
              </li>
              <li>
                <div className="img_box"><img src={Images.skillImg03} alt="일반채팅 이미지"></img></div>
                <h3>일반채팅</h3>
                <span>우리 사무소 중개원들과 단체톡, 1:1 톡 가능,<br/>원하는 사람과 편하게 정보를 주고 받아보세요.</span>
              </li>
              <li>
                <div className="img_box"><img src={Images.skillImg04} alt="오픈채팅 이미지"></img></div>
                <h3>오픈채팅</h3>
                <span>연락처가 없어도 관심사가 맞는 중개사들끼리<br/>전용 커뮤니티를 직접 만들고, 참여도 해보세요.</span>
              </li>
              <li>
                <div className="img_box"><img src={Images.skillImg05} alt="중개업소 이미지"></img></div>
                <h3>중개업소</h3>
                <span>지역에 구애받지 않고 전국의<br/>원하는 부동산 중개인과 빠르게 연락해보세요.</span>
              </li>
              <li>
                <div className="img_box"><img src={Images.skillImg06} alt="관리자메뉴 이미지"></img></div>
                <h3>관리자메뉴</h3>
                <span>내가 소속된 중개사무소의 구성원 추가, 관리자 권한부여 등<br/>회사 운영의 편의성을 갖춘 관리 기능까지 제공합니다.</span>
              </li>
            </ul>
          </section>
          <section className="skill_wrap mo">
            <div className="img_box"><img src={Images.MoImg01} alt="PC연동 모바일 이미지"></img></div>
            <div className="img_box"><img src={Images.MoImg02} alt="공동중개 모바일 이미지"></img></div>
            <div className="img_box"><img src={Images.MoImg03} alt="매물찾습니다 모바일 이미지"></img></div>
            <div className="img_box"><img src={Images.MoImg04} alt="채팅 모바일 이미지"></img></div>
            <div className="img_box"><img src={Images.MoImg05} alt="관리자메뉴 모바일 이미지"></img></div>
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
  );
}

export default App;
