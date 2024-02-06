const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:3000';

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api' : { // 대체 주소 지정
        target, // 대체할 대상
        changeOrigin: true, // 오리진 여부
        ws: false, // 웹소켓
        pathRewrite: {'^/api': '/'} // 뷰쪽 주소 파라미터 수정
      }
    }
  }
})
