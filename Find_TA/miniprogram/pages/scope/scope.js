// pages/getUserInfo/getUserInfo.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo'] && res.authSetting['scope.camera'] && res.authSetting['scope.writePhotosAlbum']) {
          wx.redirectTo({
            url: '../loading/loading',
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.camera']) {
            wx.authorize({
              scope: 'scope.camera',
              success: res => {
                wx.authorize({
                  scope: 'scope.writePhotosAlbum',
                  success: res => {
                    wx.redirectTo({
                      url: '../loading/loading',
                    })
                  },
                  fail: res => {
                    console.log('获得授权相册失败')
                  }
                })
              },
              fail: res => {
                console.log("获得授权摄像头失败")
              }
            })
          }
        }
      })
    }
  },
})