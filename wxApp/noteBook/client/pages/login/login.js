// pages/login/login.js
import request from '../../utils/request'
import { $toast } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    userpwd: ''
  },
  
  // 登录
  login() {
    // 发请求
    if (this.data.username.trim() == '' || this.data.userpwd.trim() == '') {
      $toast('账号或密码有误', 'error')
      return    
    }
    request('post', '/users/userLogin', {
      username: this.data.username,
      userpwd: this.data.userpwd
    }).then(res => {
      console.log(res);
      $toast(res.data.mess, 'success')
      wx.setStorageSync('userInfo', res.data.data);
      setTimeout(() => {
        wx.navigateTo({url: '/pages/noteClass/noteClass'});
      }, 1000)
    })
  },
  usernameVal(e) { // 获取用户账号
    console.log(e.detail.value);
    this.setData({
      username: e.detail.value
    })
  },
  userpwdVal(e) { // 获取用户密码
    this.setData({
      userpwd: e.detail.value
    })
  },
  // 去注册
  toRegister() {
    wx.navigateTo({url: '/pages/register/register'});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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