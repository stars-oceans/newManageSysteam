const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
 
  devServer:{
    // ๅๅไปฃ็
    proxy : {
      "/adminapi" :{
        target : "http://localhost:3000",
        changeOrigin : true,
      }
    },

    host: '0.0.0.0',
    port:5050,
    client: {
      webSocketURL: 'ws://0.0.0.0:5050/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})

