import '../styles/globals.css';
import Head from 'next/head';
import 'react-slideshow-image/dist/styles.css'
import styles from '../styles/Home.module.css'
import React, { useEffect, useRef, useState } from 'react';

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <title>Fogether</title>
      </Head>
      <Component {...pageProps} styles={styles}/>
    </>
  );
}

export default MyApp
