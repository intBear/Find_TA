Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    school:'',
    card:'',
    qq:'',
    phone:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  name: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  school: function (e) {
    this.setData({
      school: e.detail.value
    })
  },

  card: function (e) {
    this.setData({
      card: e.detail.value
    })
  },

  qq: function (e) {
    this.setData({
      qq: e.detail.value
    })
  },

  phone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
})