// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    left: 245,
    list: {}
  },

  tabChange(e) {
    // console.log(e);
    let index = e.currentTarget.dataset.index
    if (index == '1') {
      this.setData({
        left: 49
      })
    } else if (index == '2') {
      this.setData({
        left: 115
      })
    } else if (index == '3') {
      this.setData({
        left: 181
      })
    } else {
      this.setData({
        left: 245
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike',
      method: 'GET',
      success: (res) => {
        // console.log(res.data);
        this.setData({
          list: res.data
        })
        console.log(this.data.list);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide');
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
    console.log('拉不动了');
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