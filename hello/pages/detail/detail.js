'use strict';

import util from '../../utils/index';
import config from '../../utils/config';
let app = getApp();
Page({
  onLoad(option) {
    /*
    * 函数 `onLoad` 会在页面初始化时候加载运行，其内部的 `option` 是路由跳转过来后的参数对象。
    * 我们从 `option` 中解析出文章参数 `contendId`，然后通过调用 `util` 中封装好的 `request` 函数来获取 `mock` 数据。 
    */
    console.log(option)
    let id = option.contentId || 0;
    this.init(id);
  },
  init(contentId) {
    if (contentId) {
      this.requestDetail(contentId)
        .then(data => {
          util.log(data)
          this.configPageData(data)
        })
    }
  },
  // requestDetail(contentId) {
  //   return util.request({
  //     url: 'detail',
  //     mock: true,
  //     data: {
  //       source: 1
  //     }
  //   })
  //     .then(res => {
  //       return res
  //     })
  // },
  requestDetail(contentId) {
    return util.request({
      url: 'detail',
      mock: true,
      data: {
        source: 1
      }
    })
      .then(res => {
        let formateUpdateTime = this.formateTime(res.data.lastUpdateTime)
        // 格式化后的时间
        res.data.formateUpdateTime = formateUpdateTime
        return res.data
      })
  },
  formateTime(timeStr = '') {
    let year = timeStr.slice(0, 4),
      month = timeStr.slice(5, 7),
      day = timeStr.slice(8, 10);
    return `${year}/${month}/${day}`;
  },
  configPageData(data) {
    if (data) {
      // 同步数据到 Model 层，Model 层数据发生变化的话，视图层会自动渲染
      this.setData({
        detailData: data
      });
      //设置标题
      let title = this.data.detailData.title || config.defaultBarTitle
      wx.setNavigationBarTitle({
        title: title
      })
    }
  }
})