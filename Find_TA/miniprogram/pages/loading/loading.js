//loading.js 
const db = wx.cloud.database()
const users = db.collection("users")

Page({
  data: {
    userInfo: null,
  },

  onLoad: function(options) {
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: res.userInfo
        })
        users.where({
          nickName: this.data.userInfo.nickName
        }).get({
          success: res => {
            if(Object.keys(res.data).length == 0){
              wx.showToast({
                title: '请先完善个人资料',
                icon: "none"
              })
              setTimeout(function(){
                wx.redirectTo({
                  url: '../tags/user/myinfo/myinfo',
                })
              },2000)
            }else{
              setTimeout(function () {
                wx.switchTab({
                  url: '../tags/info/info',
                })
              }, 2000)
            }
          }
        })
      }
    })
  },
})