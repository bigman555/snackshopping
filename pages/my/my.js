// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    carts:[],
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let address = wx.getStorageSync("address")||{};
    let carts = wx.getStorageSync("carts")||[];
    this.setData({
      address,carts
    })
  },
  pay:function(e){
    wx.showModal({
      content:"支持接口暂时关闭",
      success:function(res){
        if(res.comfirm){
          wx.switchTab({
            url:"/pages/my/my"
          })
        }
      }

    })
  },
  getUserInfo:function(e){
    console.log(e);
    let userInfo = e.detail.userInfo;
    this.setData({
      userInfo
    })
    wx.setStorageSync("userInfo",userInfo)
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
    let userInfo = wx.getStorageSync("userInfo");
    this.setData({
      userInfo
    })  
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

  }
})