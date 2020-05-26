// pages/cat/cat.js
Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   cartData:{},
  //   currentData:0,
  //   numAddCart:1,
  //   num:0
  // },
  // handleClick :function(e){
  //   // console.log(this.data.currentData);
  //   // console.log(e.target.dataset.current);
  //   if(this.data.currentData === e.target.dataset.current){
  //     return false
  //   }else{
  //     this.setData({
  //       currentData: e.target.dataset.current
  //     })
  //   }
  // },
  // handleChange:function(e){
  //   // console.log(e.detail.current)
  //   this.setData({
  //     currentData:e.detail.current
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    let num =0;
    let carts = wx.getStorageSync("carts")||[];
    let index = carts.findIndex(function(v,i){return v.id===options.id});
    if(index != -1){
      num=carts[index].num
    }
    let cartData = require("../../data/details-data")[options.id];
    console.log(num)
    this.setData({
      num:num,
      cartData
  })
  console.log(this.data.num);
  },
  // addNum:function(e){
  //   // console.log("you")
  //   let numAddCart = this.data.numAddCart;
  //   ++numAddCart
  //   this.setData({
  //     numAddCart
  //   })
  // },
  // addCart:function(e){
  //   let carts = wx.getStorageSync("carts")||[];
  //   let id = e.currentTarget.dataset.id
  //   console.log(id)
  //   let index = carts.findIndex(v,i)(function(v,i) {return v.id === id});
  //   if(index === -1){
  //     let cartsItem = {
  //       id:id,
  //       num:this.data.numAddCart,
  //       checked:true,
  //       data:this.data.cartData
  //     }
  //     carts.push(cartsItem);
  //     this.setData({
  //       num:cartsItem.num
  //     })
  //   }else{
  //     carts[index].num=carts[index].num + this.data.numAddCart
  //     this.setData({
  //       num:carts[index].num
  //     })
  //   }
  //   wx.setStorageSync("carts",carts)
  // },
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