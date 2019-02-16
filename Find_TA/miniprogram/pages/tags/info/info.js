// pages/tags/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choice: "找失主",
    plain: false,
    searchValue: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  choice: function() {
    if (this.data.choice == "找失主") {
      this.setData({
        choice: "找失物",
        plain: true
      })
    } else {
      this.setData({
        choice: "找失主",
        plain: false
      })
    }
  },

  search: function(e) {

  },

  btn1: function(e) {

  },

  btn2: function(e) {

  },

  btn3: function(e) {

  },

  btn4: function(e) {

  },

  btn5: function(e) {

  },

  input: function(v) {
    this.setData({
      searchValue: v.detail.value
    })
  }

})