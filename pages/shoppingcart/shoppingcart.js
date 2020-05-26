// pages/shoppingcart/shoppingcart.js
import{asyncShowModal}from"../../asyncUtil/asyncUtil.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[],
    allCheck:true,
    totalPrice:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let carts = wx.getStorageSync('carts');
   this.setData({
     carts
   })

  },
  handleCheck:function(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts[index].checked = !carts[index].checked
    this.saveCart(carts)
  },
  numAdd:function(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    console.log(carts);
    ++carts[index].num;
    console.log(carts[index].num);
    
    this.saveCart(carts)
  },
  numSub:async function(e){
    console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    console.log(carts);
    if(carts[index].num-1 == 0){
      let res = await asyncShowModal("您确定要删除该商品吗？");
      if(res.confirm){
        carts.splice(index,1);
      }
      }else{
        carts[index].num--;
      }
      this.saveCart(carts);
  },
  removNum:function(e){
    let index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index,1);
    this.saveCart(carts)
  },
  handleAllCheck:function(e){
    let carts = this.data.carts;
    carts.map(function(v,i){
      if(!v.checked)
        v.checked = !v.checked
    })
    this.saveCart(carts);
  },
  saveCart(carts){
    let totalPrice = 0;
    carts.forEach(function(v,i){
      if(v.checked){
        totalPrice += v.num * v.data.price;
        
      }
    })
    this.setData({
      carts,totalPrice : totalPrice.toFixed(2)
    })
    wx.setStorageSync("carts", carts);
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
    let carts = wx.getStorageSync("carts")||[];
    let totalPrice = 0;
    carts.forEach(function(v,i){
      if(v.checked){
        totalPrice += (v.num * v.data.price);
      }
    })
    this.setData({
      totalPrice :totalPrice.toFixed(2),
      carts,
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