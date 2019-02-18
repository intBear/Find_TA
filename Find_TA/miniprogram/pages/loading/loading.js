//startpage.js 

const app = getApp()
//声明数据库
const db = wx.cloud.database()

Page({

  data: {
    userInfo: null,
  },

  onLoad: function(options) {
    
  },

  onReady: function() {
    //自动跳转
    setTimeout(function() {
      // wx.reLaunch({
      //   url: '../tags/info/info'
      // })
    }, 2000)
  }
})