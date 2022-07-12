// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLeft: true,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    circular: true,
    imgUrls:[
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110814%2F6351-110Q40R44376.jpg&refer=http%3A%2F%2Fimg.taopic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660093745&t=3258a6af0a3cffb060470141bc528fe0',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F102920105033%2F201029105033-1-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660093745&t=c212efde89ca6d99a3e8b9f897b4b9ce',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F911%2F0RQ5122445%2F150RQ22445-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660093745&t=51df7de24cf3935f88a291498071a96c'
    ],
    movieList: [
      {
        isShow: 1,
        name: "人生大事",
        imgUrl: "https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E?imageView2/1/w/128/h/180",
        actor: "朱一龙,杨恩又,王戈",
        time: "2022-06-24",
        wantSee: '',
        currentPlay: '今天183家影院放映2184场'
      },
      {
        isShow: 1,
        name: "神探大战",
        imgUrl: "https://p0.pipi.cn/mmdb/25bfd6d771f0fa57e267cb131f671a5889b2d.jpg?imageMogr2/thumbnail/2500x2500%3E?imageView2/1/w/128/h/180",
        actor: "刘青云,蔡卓妍,林峯",
        time: "2022-07-08",
        wantSee: '',
        currentPlay: '今天185家影院放映1867场'
      },
      {
        isShow: 0,
        name: "外太空的莫扎特",
        imgUrl: "https://p0.pipi.cn/mmdb/25bfd671be15bf51baf0ee3a5d06b91bf94c3.jpg?imageMogr2/thumbnail/2500x2500%3E?imageView2/1/w/128/h/180",
        actor: "黄渤,荣梓杉,莫扎特",
        time: "2022-07-15 本周五上映",
        wantSee: '166208',
        currentPlay: ''
      }
    ]
  },

  tabChangeHot() {
    this.setData({
      isLeft: true
    })
  },
  tabChangeWaiting() {
    // console.log('点击了即将上映')
    // this.data.isLeft = false  x
    this.setData({
      isLeft: false
    })
  }, // function tabChangeWaiting() {}

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