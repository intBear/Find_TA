//loading.js 
Page({
  data: {
    
  },

  onLoad: function(options) {
    
  },

  onReady: function() {
    //自动跳转
    setTimeout(function() {
      wx.switchTab({
        url: '../tags/info/info',
      })
    }, 2000)
  }
})