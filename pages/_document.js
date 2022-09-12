import Document, { Head, Main, NextScript, Html, TITLE } from 'next/document';

// 서버에서만 렌더링 된다.
export default class RootDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <meta name="description" content="푸게더 배포 페이지 취향 취향 검색 mbti 취향음식 취향저격" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff" />
                    
                    {/* KAKAO OPEN GRAPH */}
                    <meta property="og:url" content="http://foogether.site:3000" /> 
                    <meta property="og:type" content="website" /> 
                    <meta property="og:image" content="/og.jpeg" /> 
                    <meta property="og:title" content="푸게더" /> 
                    <meta property="og:description" content="메뉴선택? no! 취향맞춤? YES! " />
                    
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/manifest.json" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
                    <style>
                        @import url(`https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap`);
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
