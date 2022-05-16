import styles from '../styles/Home.module.css'
import React, { useEffect, useRef, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
/**
 * 스프라이트 이미지 (랜덤 취향 컨셉 보여주기 위해)
 * ㅇ 캐러셀 슬라이드(앱 내부)
 */
const MAX = 3;
const MIN = 0;
const FOOD_LIST = ['🍕', '🍔', '🌭', '🥗', '🍗', '🥩', '🥪', '🍜', '🍚', '🍛', '🍘', '🍙', '🍱'];
const FMAX = FOOD_LIST.length-1;
const FMIN = 0;

const slideImages = [
  {
    url: './one.png',
    caption: '빠르게 취향검사 받고'
  },
  {

    url: './two.png',
    caption: '취향맞춤 메뉴 받고'
  },
  {

    url: './three.png',
    caption: '배달 플랫폼은 주문 받고'
  },
];


const Home = () => {
  const target = useRef(null);
  const [postion, setPostion] = useState(0);
  const [fpostion, setFpostion] = useState(0);
  let timer = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      _foodTimer();
    },500);
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  useEffect(() => {
    target.current.animate({ scrollTop: 0 }, 10);
    window.addEventListener("wheel", (e) => { e.preventDefault(); }, { passive: false });
    return () => {
      window.removeEventListener("wheel", (e) => { });
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    console.log(postion);
    if (postion >= MIN && postion <= MAX) {
      var posTop = postion * target.current.scrollHeight / 4;
      window.scrollTo({
        top: posTop,
        behavior: 'smooth'
      })
    }
  }, [postion])

  const _foodTimer = () => {
    let _value = Math.ceil(Math.random() * (FMAX - FMIN) + FMIN);
    console.log(_value);
    setFpostion(_value);
  };


  const _debounce = (callback, delay) => {
    if (timer) { clearTimeout(timer); }
    timer = setTimeout(callback, delay);
  }

  const _wheel = (e) => {
    console.log(e.deltaY)
    _debounce(() => {
      if (e.deltaY > 0) {
        console.log("down");
        postion < MAX ? setPostion(pre => pre + 1) : ''
      }
      else if (e.deltaY < 0) {
        console.log("up");
        postion > MIN ? setPostion(pre => pre - 1) : ''
      }
    }, 200);
  }
  return (
    <>
      <main className={styles.main}
        ref={target}
        onWheel={_wheel}>
        <div className={styles.part}>
          <h2>😕1분..2분..3분...10분!!<br/>😡언제 밥먹을래!!</h2>
        </div>

        <div className={styles.part}>
          <h2>🥗메뉴고민? no! <br/>🌈취향맞춤? yes!</h2>
          
          <div style={{
            flexdirection: 'column',
            width: '100%',
            height:'30%',
            postion:'relative',
          }}>
            {/* <span className={styles.randomFoodbox}> */}
            <div className={styles.randomFoodbox}>
              <font className={styles.fontfood}>{FOOD_LIST[fpostion]}</font>
              
              <font className={styles.fontpfood}>{FOOD_LIST[fpostion]}</font>
              </div>
            {/* </span> */}
            <img className={styles.lovelyimg} src="/lovely.png" alt=""/>
            <img className={styles.lovelyimg} src="/phone.png" alt=""/>
            </div>
          
        </div>

        <div className={styles.part} >
        <h2>🥴이렇게 간단해</h2>
          <Slide style={{height:'50%'}}>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index} style={{
                 display:'flex',
                 alignItems:'center',
                 justifyContent: 'center',
                 flexDirection:'column',
                }}>
                  <div style={{ 
                    'backgroundImage': `url(${slideImage.url})`, 
                    backgroundSize:'cover',
                    borderRadius:5,
                    width:150, 
                    height:300}}>
                  </div>
                  
                  <h3 style={{fontWeight:'bold'}}>{slideImage.caption}</h3>
                </div>
              ))}
            </Slide>
        </div>


        <div className={styles.part} >
          <h2>🥘내 취향대로 밥 먹기!</h2>

          <div style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'row',
              width: '100%',
              height:'30%'
            }}>
              <h1 className={styles.count}>0</h1>
              <h1 className={styles.count}>0</h1>
              <h1 className={styles.count}>0</h1>
              <h1 className={styles.count}>0</h1>
              <h1 className={styles.count}>0</h1>
          </div>
          <a href="#" className={styles.btn} onPress={() => { setPostion(0); }} >사전예약</a>
          <a href="https://www.flaticon.com/free-icons/smartphone" title="smartphone icons">Smartphone icons created by Freepik - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/question" title="question icons">Question icons created by Freepik - Flaticon</a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        아래는 팀 정보를 기입할 것
      </footer> */}
    </>
  )
}

export default Home;