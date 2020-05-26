// pages/mode/mode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShopList()
  },
  getShopList:function(e){  
    const shopList = {
      "message":[{
        id: 'guazi',
        containerImg: '../../image/s4.png',
        title: "瓜子",
        price: "0.01",
        count: "100",
        unit: "g"
      },{
        id: 'lihuaguo',
        containerImg: '../../image/s7.png',
        title: "梨花带雨果",
        price: "0.55",
        count: "3",
        unit: "个"
      },{
        id: 'hongzao',
        containerImg: '../../image/s8.png',
        title: "红枣",
        price: "0.08",
        count: "500",
        unit: "g"
      }]
    }
    this.setData({
      shopList:shopList.message
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

  }
})