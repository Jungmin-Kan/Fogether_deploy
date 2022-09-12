
/**
 * 앱 이미지 데이터
 */
 const slideImages = [
    {
      url: './one.png',
      caption: '⚡빠르게 취향검사 받고'
    },
    {
  
      url: './two.png',
      caption: '😆취향맞춤 메뉴 받고'
    },
    {
  
      url: './three.png',
      caption: '🧐배달 플랫폼으로 주문'
    },
  ];
  
  /**
   * React-slide 속성
   */
  const properties = {
    duration: 2000, // 대기시간
    transitionDuration: 1000,
    autoplay: true, // 자동 슬라이드
    arrows: true, // 방향지시 화살표
    indicators: true, // 인디케이터
    infinite: true,
    canSwipe: true,
    Easing: 'cubic-in',
    // prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    // nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };

  export {properties, slideImages}