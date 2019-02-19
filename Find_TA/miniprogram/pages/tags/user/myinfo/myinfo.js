const db = wx.cloud.database()
const users = db.collection("users")

Page({
  data: {
    name: null,
    school: null,
    card: null,
    qq: null,
    phone: null,
    userInfo: null,
    user: null,
    _id: null,
  },

  onLoad: function(options) {
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: res.userInfo
        })
        users.where({
          nickName: res.userInfo.nickName
        }).get({
          success: res => {
            if (!Object.keys(res.data).length == 0) {
              this.setData({
                user: res.data[0],
                name: res.data[0].name,
                school: res.data[0].school,
                card: res.data[0].cardID,
                qq: res.data[0].QQ,
                phone: res.data[0].phone,
                _id: res.data[0]._id,
              })
            }
          }
        })
      }
    })
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

  name: function(e) {
    this.setData({
      name: e.detail.value
    })
  },

  school: function(e) {
    this.setData({
      school: e.detail.value
    })
  },

  card: function(e) {
    this.setData({
      card: e.detail.value
    })
  },

  qq: function(e) {
    this.setData({
      qq: e.detail.value
    })
  },

  phone: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  save: function() {
    if (this.data.user == null) {
      if (this.data.qq != null || this.data.phone != null && this.data.name != null && this.data.school != null && this.data.card != null) {
        users.add({
          data: {
            name: this.data.name,
            school: this.data.school,
            cardID: this.data.card,
            QQ: this.data.qq,
            phone: this.data.phone,
            nickName: this.data.userInfo.nickName
          }
        }).then(res => {
          wx.showToast({
            title: '保存成功',
          })
          setTimeout(function(){
            wx.switchTab({
              url: '../../info/info',
            })
          },2000)
        })
      }
    } else {
      users.doc(this.data._id).set({
        data: {
          name: this.data.name,
          school: this.data.school,
          cardID: this.data.card,
          QQ: this.data.qq,
          phone: this.data.phone,
          nickName: this.data.userInfo.nickName
        }
      }).then(res => {
        wx.showToast({
          title: '保存成功',
        })
      })
    }
  }
})