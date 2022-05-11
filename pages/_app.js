import '../styles/globals.css'

// 공통 컴포넌트 csr 적용
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
