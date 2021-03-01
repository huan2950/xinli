// pages/home/home.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: ["/images/swiper/swiper1.jpeg", 
    "/images/swiper/swiper2.jpg", 
    "/images/swiper/swiper3.jpeg",
    "/images/swiper/swiper4.jpeg"],
    
    xindex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
   
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

  //banner切换时候替换角标
  onChange: function (e) {
    this.setData({
      xindex: e.detail.current
    });
  },
})