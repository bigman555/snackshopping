// components/newcart.list/newcart.list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartData: {
      type: Object,
      vaule: {}
    },
    num:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cartData: {},
    currentData: 0,
    num: 0,
    numAddCart: 1,

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick: function (e) {
      // console.log(this.data.currentData);
      // console.log(e.target.dataset.current);
      if (this.data.currentData === e.target.dataset.current) {
        return false
      } else {
        this.setData({
          currentData: e.target.dataset.current
        })
      }
    },
    handleChange: function (e) {
      // console.log(e.detail.current)
      this.setData({
        currentData: e.detail.current
      })
    },
    addNum: function (e) {
      console.log("you")
      let numAddCart = this.data.numAddCart;
      ++numAddCart
      this.setData({
        numAddCart
      })
    },
    addCart: function (e) {
      let carts = wx.getStorageSync("carts") || [];
      let id = e.currentTarget.dataset.id
      console.log(id)
      let index = carts.findIndex(function (v, i) { return v.id === id });
      if (index === -1) {
        let cartsItem = {
          id: id,
          num: this.data.numAddCart,
          checked: true,
          data: this.data.cartData
        }
        carts.push(cartsItem);
        this.setData({
          num: cartsItem.num
        })
      } else {
        carts[index].num = carts[index].num + this.data.numAddCart
        this.setData({
          num: carts[index].num
        })
      }
      wx.setStorageSync("carts", carts)
    },
    onLoad: function (options) {
      let num =0;
      let carts = wx.getStorageSync("carts")||[];
      let index = carts.findIndex(function(v,i){return v.id===options.id});
      if(index != -1){
        num=carts[index].num
      }
      let cartData = require("../../data/details-data")[options.id];
      console.log(options.id)
      this.setData({
        num,
        cartData
    })
    }
  }
})
