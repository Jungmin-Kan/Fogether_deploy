import React, { useEffect, useRef, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import Image from 'next/image';
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseConfig } from '../firebase';
import { slideImages, properties } from '../config';



const NumberComponent = ({ index, styles }) => {
  const [num, setNum] = useState(0);
  const interval = useRef(null);
  const transition = useRef();
  /* 애니메이션 타입 */
  // transition: all .5s ease;
  useEffect(() => {
    transition.current.style = "transition: all 1.4s ease; opacity: 1;";
    console.log("hello_Number");
    interval.current = setInterval(() => {
      if (index > num) {
        setNum(prevTime => prevTime + 1);
      }
    }, 100);
    return () => clearInterval(interval.current);
  }, [])

  useEffect(() => {
    if (index == num) { clearInterval(interval.current); }
  }, [num])

  return (<h1 ref={transition} className={styles.count} style={{
    animation: 'fadein 3s'
  }}>{num}</h1>)
}


const Home = ({ downloadCount, styles }) => {

  const [number, setNumber] = useState([]);
  const [countVisible, setCountVisible] = useState(false);
  const [modalVisibel, setModalVisibel] = useState(false);
  const [width, setWidth] = useState();

  let _analytics = useRef();
  let main = useRef();
  let target = useRef();
  let uck = useRef('');
  let slidePosition = useRef('');
  let _innerWidth = useRef();

  useEffect(() => {
    setWidth(window.innerWidth)
    setNumber(downloadCount.split(''));
    _initGAwithWindow().then(() => START_SESSION()).catch((e) => console.log(e));
    window.addEventListener("beforeunload", (event) => { OUT_POSITION() });

    window.addEventListener('resize', (event)=>{
      setWidth(window.innerWidth)
      console.log(width)
    });

    let isExisted = _getCookie("%C3%AD%C2%91%C2%B8%C3%AA%C2%B2%C2%8C%C3%AB%C2%8D%C2%94");
    isExisted < 0 ? _cookie('%C3%AD%C2%91%C2%B8%C3%AA%C2%B2%C2%8C%C3%AB%C2%8D%C2%94', "10") : console.log('')
  }, []);


  
  /**
   * 파이어베이스 초기화 함수
   */
  const _initGAwithWindow = async () => {
    console.log("초기화 작업");
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // console.log(analytics);
    _analytics.current = analytics;
    // console.log(_analytics.current);
  };

  /**
   * 쿠키 세팅함수
   * @param {String} cName 키이름 
   * @param {String} cValue 값
   * @param {String} cDay 저장날짜
   */
  const _cookie = (cName, cDay) => {
    let cValue = _makeid();
    var expire = new Date();
    expire.setDate(expire.getDate() + cDay);
    let cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if (typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies;
  }

  /**
   * 쿠키 존재여부를 확인하여 값 반환
   * @param {String} cName 
   * @returns 쿠키존재 여부 반환
   */
  const _getCookie = (cName) => {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);

    var cValue = '';
    if (start != -1) {
      start += cName.length;
      var end = cookieData.indexOf(';', start);
      if (end == -1) end = cookieData.length;
      cValue = cookieData.substring(start, end);
      uck.current = cValue;
    }
    return start;
  }

  /**
   * 전화번호 입력창 생성
   * @return null
   */
  const _reserved = () => {
    USER_RESERVED();
    target.current.style = "height:20%;   opacity: 1;transition: all .5s ease;transform: translate(0, 5px);";
  };


  /**
   * 유저 식별을 위한 시리얼넘버 부여
   * @returns 유저 식별값
   */
  const _makeid = () => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 100; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  const _setCount = number.map((index) => (
    <NumberComponent key={index} index={index} styles={styles} />
  ));

  /**
   * 유저 이동 포지션 확인 
   * @param {Event} 스크롤 이벤트
   */
  const _wheel = (e) => {
    if (window.scrollY < main.current.children[0].clientHeight) {
      slidePosition.current = "서비스인트로";
    } else if (
      main.current.children[0].clientHeight < window.scrollY
      && window.scrollY <
      main.current.children[0].clientHeight +
      main.current.children[1].clientHeight) {
      slidePosition.current = "푸게더이미지";
    } else if (
      main.current.children[0].clientHeight +
      main.current.children[1].clientHeight < window.scrollY &&
      window.scrollY <
      main.current.children[0].clientHeight +
      main.current.children[1].clientHeight +
      main.current.children[2].clientHeight) {
      slidePosition.current = "앱소개";
    } else if (
      main.current.children[0].clientHeight +
      main.current.children[1].clientHeight +
      main.current.children[2].clientHeight < window.scrollY
      && window.scrollY <
      main.current.children[0].clientHeight +
      main.current.children[1].clientHeight +
      main.current.children[2].clientHeight +
      main.current.children[3].clientHeight) {
      slidePosition.current = "상품권 소개";
    } else if (
      main.current.children[0].clientHeight +
      main.current.children[1].clientHeight +
      main.current.children[2].clientHeight +
      main.current.children[3].clientHeight < window.scrollY
      && window.scrollY <
      main.current.children[0].clientHeight +
      main.current.children[1].clientHeight +
      main.current.children[2].clientHeight +
      main.current.children[3].clientHeight +
      main.current.children[4].clientHeight) {
      slidePosition.current = "사전예약하기";
    }
    console.log(slidePosition.current);

    if (slidePosition.current == "사전예약하기") {
      setCountVisible(true);
    }
  }

  const _callFire = (type) => {
    console.log(type);
    // console.log(_analytics.current);
  }

  /**
   * 사전예약 버튼 이벤트 감지
   */
  const USER_RESERVED = () => {
    _callFire("예약");
    logEvent(_analytics.current, 'USER_RESERVED', { id: uck.current, time: Date() });
  }

  /**
   * 사용자 진입 감지
   */
  const START_SESSION = async () => {
    _callFire("시작");
    logEvent(_analytics.current, 'START_SESSION', { id: uck.current, time: Date() });
  }

  /**
   * 사용자 이탈 감지
   */
  const OUT_POSITION = () => {
    _callFire("이탈");
    logEvent(_analytics.current, 'OUT_POSITION', { id: uck.current, time: Date(), view: slidePosition.current });
  }

  const SCROLL_WIDTH = () => { }

  const _checkPhone = () => {
    let text = document.getElementById('first').value
    if(!text){
      alert("전화번호를 입력해주세요!");
      setModalVisibel(false);
      return ;
    }
    var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (regPhone.test(text) === true) {
      alert('입력된 값은 휴대전화번호입니다.')
      setNumber(((Number(number.join('')) + 1).toString()).split(''));
    }else{
      alert('올바르지 않은 전화번호 입니다.');
      document.getElementById('first').value = "";
    }
    setModalVisibel(false)
  }
  return (
    <>
      <main className={styles.main} ref={main} onWheel={_wheel}>

        {/* sector1 */}
        <div className={styles.part}>
         {width < 768 ? 
         <Image src={'/mobile1.png'} alt="intro" height={1300} width={600} priority />
          : <Image src={'/intro.png'} alt="intro" height={2000} width={2000} priority />}
        </div>

        {/* sector2 */}
        <div className={styles.part}>
        {width < 768 ? 
        <Image src={'/mobile2.webp'} alt="intro" height={1300} width={600} priority />
         :
         <Image src={'/foogether.webp'} alt="intro" height={1300} width={2000} priority />
        }
        </div>


        {/* sector3 */}
        <div className={styles.part_slide} >
          <div className={styles.part_slide_title}></div>
          <Slide className={styles.slide} {...properties}>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>

                <div style={{
                  'backgroundImage': `url(${slideImage.url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  borderRadius: 5,
                  width: '260px',
                  height: '500px'
                }}>
                </div>
                {/* <Image src={`/${slideImage.url}`} alt={`${slideImage.url}`} height={1000} width={200} priority /> */}

                <h3>{slideImage.caption}</h3>
              </div>
            ))}
          </Slide>
        </div>


        {/* sector4 */}
        <div className={styles.part}>
        {width < 768 ? 
          <Image src={'/mobile_event4.png'} alt="intro" height={1300} width={600} priority />
          :
          <Image src={'/eventpage.png'} alt="intro" height={1300} width={2000} priority />
        }
        </div>

        {/* sector5 */}
        <div className={styles.part} >
          <div className={styles.numwrap}>
            {_setCount}
            {/* {countVisible && _setCount} */}
          </div>
          <div className={styles.btnimg} onClick={() => _reserved()} ></div>
          {/* <button className={styles.btn} onClick={()=>_reserved()} >사전예약하기</button> */}
          <div ref={target} className={styles.form_parent}>
            <h5>전화번호를 남겨주시면 출시에 맞춰 어플 링크를 보내드립니다.</h5>
            <form method="post" className={styles.form}>
              <input type="text" id="first" name="first" placeholder='010********' />
              <input className={styles.btn_send_ph} type="button" value="앱 링크 받기" onClick={() => {
                setModalVisibel(true);
              }} />
            </form>
          </div>
        </div>

        <div className={styles.reservation_btn} onClick={() =>{
          let move = main.current.children[0].clientHeight +
          main.current.children[1].clientHeight +
          main.current.children[2].clientHeight +
          main.current.children[3].clientHeight;
          window.scrollTo({top:move,behavior:'smooth'})
        }}>
          <font className={styles.reservation_btn_text}>사전예약</font>
        </div>

        {modalVisibel && <div className={styles.modal}>
              <button className={styles.modal_close} onClick={() => {
                setModalVisibel(false);
              }}>X</button>
              <h4>개인정보의 수집·이용과 관련하여 『개인정보 보호법』</h4>
              <div style={{ }}>
                <h5>ㅇ 개인정보 수집・이용</h5>
                <p>목적 이외의 용도로 활용되지 않으며, 수집・이용 목적이 변경되는 경우에는 개인정보보호법에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.</p>
                <p>서비스 제공 시 아래와 같이 개인정보를 수집합니다.</p>
                <ul>
                  <li>​앱 링크 받기  : 전화번호를 통한 다운로드 링크 우선 제공</li>
                  <li>​서비스 부정사용 확인 및 방지 : 전화번호를 통한 사용자 식별</li>
                </ul>
                <p>서비스 이용과정 중 아래 자동 수집 정보가 생성되어 수집 저장, 분석될 수 있습니다.</p>
                <ul>
                  <li>​IP주소</li>
                  <li>쿠키</li>
                  <li>방문기록</li>
                  <li>​서비스 이용기록</li>
                  <li>​기기정보</li>
                </ul>
                <h5>ㅇ 개인정보의 제3자 제공</h5>
                <p>이용자의 개인정보를 개인정보 수집 ・이용 목적에 명시한 범위 내에서 사용하며, 이용자의 사전 동의 없이 개인정보 수집・이용 목적범위를 초과하여 이용하거나 원칙적으로 이용자의 개인정보를 제공하지 않습니다.</p>
                <p>양질의 서비스 제공을 위해 이용자의 개인정보를 협력업체와 공유할 필요에 의해 제공 받는 자, 제공목적, 제공 항목, 보유 및 이용기간 등을 회원에게 고지하여 동의를 구합니다.</p>
                <table>
                  <thead>
                    <tr>
                      <td>개인정보를 제공받는자</td>
                      <td>제공목적</td>
                      <td>제공항목</td>
                      <td>보유・이용 기간</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Google</td>
                      <td>접속 후 이탈율 파악<br />사용자 수요 파악<br />시스템 개발 및 유지보수<br />서비스 통계 및 분석</td>
                      <td>기기 정보<br />접속 국가<br />단말기 식별 번호<br />세션 시간<br />행태정보</td>
                      <td>서비스 제공 후 파기</td>
                    </tr>
                  </tbody>
                </table>
                <div> </div>
              </div>

              <div className={styles.modal_btn_wrap}>
                <button className={styles.modal_opinion_cancel} onClick={() => setModalVisibel(false)}>취소</button>
                <button className={styles.modal_opinion_agree} onClick={_checkPhone}>확인</button>
              </div>
            </div>}

      </main>


      <footer className={styles.footer}>
        <p>푸게더 <br />사업자 등록번호 : 120-88-01280 <br />고객센터 : 어딘가시 어딘가구 어딘가로 133, 8층 (어딘가동)<br />문의전화 : 010-0000-0000<br />문의메일 : uhdinga@naver.com</p>
      </footer>
    </>
  )
}
/**
 * getInitialProps와 동일한 포지션
 * @param {Context} context 
 * @returns 컴포넌트 프롭스 사용
 */
export async function getServerSideProps(context) {
  const response = await fetch(process.env.CALL_COUNT);
  const data = response.json();
  console.log(response)
  return {
    props: {
      downloadCount: '12345',
    }
  }
}
// export async function getStaticProps(context) {}
// export async function getStaticPaths() {}

export default Home;