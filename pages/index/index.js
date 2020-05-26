// pages/index5/index5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    swiperItem:[],
    shopList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwipers(),
    this. getShopList()
  },
  getSwipers:function(e){
    const swiperItem = {
      "massage":[{
        "swiperImg":"../../image/b1.jpg",
        "goodsId":1,
      },{
        "swiperImg":"../../image/b2.jpg",
        "goodsId":2,
      },{
        "swiperImg":"../../image/b3.jpg",
        "goodsId":3,
      }],
      "meta":{
        "msg":"成功",
        "status":200
      }
    }
        this.setData({
          swiperItem:swiperItem.massage
        })
  },
  getShopList:function(e){
    const shopList = {
        "message":[{
          id: 'guazi',
          imageUrl: '../../image/s4.png',
          title: "瓜子",
          price: "0.01",
          count: "100",
          unit: "g"
        },{
          id: 'qincai',
          imageUrl: '../../image/s5.png',
          title: "芹菜",
          price: "0.02",
          count: "0.5",
          unit: "斤"
        },{
          id: 'sumi',
          imageUrl: '../../image/s6.png',
          title: "素米",
          price: "0.03",
          count: "375",
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
  handleEvent:function(e){
    console.log("接受到了:",e.detail)
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