const db = wx.cloud.database()
const releases = db.collection("releases")
const users = db.collection("users")

Page({
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
    name: null,
    detail: null,
    height: null,
    image1: null,
    image2: null,
    image3: null,
    showView: [true, false, false],
    label: "校园卡",
    type: null,
    qq: null,
    phone: null,
    school: null,
    card: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getUserInfo({
      success: res => {
        users.where({
          nickName: res.userInfo.nickName
        }).get({
          success: res => {
            if (!Object.keys(res.data).length == 0) {
              this.setData({
                school: res.data[0].school,
                card: res.data[0].cardID,
                qq: res.data[0].QQ,
                phone: res.data[0].phone,
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
    this.setData({
      label: e.detail.value
    })
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
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        this.setData({
          image1: res.tempFilePaths
        })
        if (this.data.image1 != '') {
          this.setData({
            showView: [false, true, false]
          })
        }
      }
    })
  },

  add2: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        this.setData({
          image2: res.tempFilePaths
        })
        if (this.data.image2 != '') {
          this.setData({
            showView: [false, false, true]
          })
        }
      }
    })
  },

  add3: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        this.setData({
          image3: res.tempFilePaths
        })
        if (this.data.image3 != '') {
          this.setData({
            showView: [false, false, false]
          })
        }
      }
    })
  },

  release: function() {
    if (this.data.plain) {
      this.setData({
        type: "寻物启事"
      })
    } else {
      this.setData({
        type: "寻主启事"
      })
    }
    if (this.data.type != null && this.data.name != null && this.data.detail != null) {
      releases.add({
        data: {
          type: this.data.type,
          label: this.data.label,
          name: this.data.name,
          detail: this.data.detail,
          images: {
            image1: this.data.image1,
            image2: this.data.image2,
            image3: this.data.image3,
          },
          contact: {
            QQ: this.data.qq,
            phone: this.data.phone,
          },
          school: this.data.school,
          cardID: this.data.card,
        }
      }).then(res => {
        wx.showToast({
          title: '发布成功',
          duration: 1000,
          success: function(res) {
            setTimeout(function() {
              wx.navigateTo({
                url: '../user/myrelease/myrelease',
              })
            }, 1000)
          }
        })
      })
    }
  }
})