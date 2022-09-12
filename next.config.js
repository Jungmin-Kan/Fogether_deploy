/** @type {import('next').NextConfig} */
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

const nextConfig = {
  
  reactStrictMode: true,
   /**node server 실행*/
  // useFileSystemPublicRoutes: false,
   /**next 실행 */
  useFileSystemPublicRoutes: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack:{
    rules: [{
      test: /\.(gif|png|jpe?g|svg)$/i,
      // jpe?g는 jpg와 jpeg를 의미한다
      use: [
      'file-loader?name=assets/images/[name].[ext]',
      // file-loader는 이미지 파일의 이름을 만들고 폴더를 이동시키는 기능을 한다
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            webp: {
              quality: 75
            }
          }
        }
        // image-webpack-loader는 이미지 사이즈를 줄여주는 역할을 한다
      ]
    }],
    plugins: [ 
      new CleanWebpackPlugin(),
      new ImageminWebpWebpackPlugin()
    ]
  }
}

module.exports = nextConfig
