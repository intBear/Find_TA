Page({

  /**
   * 页面的初始数据
   */
  data: {
    plain: true,
    items: [{
        name: '校园卡',
        value: '校园卡',
        checked: true
      },
      {
        name: '身份证',
        value: '身份证'
      },
      {
        name: '钱包',
        value: '钱包'
      },
      {
        name: '学具',
        value: '学具'
      },
      {
        name: '钥匙',
        value: '钥匙'
      },
      {
        name: '其他',
        value: '其他'
      },
    ],
    name: "",
    detail: "",
    height: '',
    images: [{
        image1: ''
      },
      {
        image2: ''
      },
      {
        image3: ''
      },
    ],
    showView: [true, false, false],
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
    var that = this;
    let id = "#textareawrap";
    let query = wx.createSelectorQuery(); //创建查询对象
    query.select(id).boundingClientRect(); //获取view的边界及位置信息
    query.exec(function(res) {
      that.setData({
        height: res[0].height + "px"
      });
    });
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

  person: function() {
    if (this.data.plain == false) {
      this.setData({
        plain: !this.data.plain
      })
    }
  },

  thing: function() {
    if (this.data.plain == true) {
      this.setData({
        plain: !this.data.plain
      })
    }
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  name: function(e) {
    this.setData({
      name: e.detail.value
    })
  },

  detail: function(e) {
    this.setData({
      detail: e.detail.value
    })
    console.log(this.data.detail)
  },

  add1: function() {
    if (this.data.images[0].image1 != '') {
      this.setData({
        showView: [false, true, false]
      })
    }
  },

  add2: function() {
    if (this.data.images[1].image2 != '') {
      this.setData({
        showView: [false, false, true]
      })
    }
  },

  add3: function() {
    if (this.data.images[2].image != '') {
      this.setData({
        showView: [false, false, false]
      })
    }
  },

  release: function(){
    
  }
})