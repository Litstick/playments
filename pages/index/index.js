//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    recType: ['active', ''],
    hotType: ['active', ''],
    newType: ['active', '']
  },
  //广告跳转
  goAd: function () {
    wx.redirectTo({
      url: '/pages/case/case',
    });
  },
  //搜索
  search:function(){
    console.log(222);
  },
  //推荐时间切换
  changeRecTime:function(event){
    var _this = this;
    var genre = event.currentTarget.dataset.genre;
    _this.data.recType[genre] = 'active';
    _this.data.recType[1-genre] = '';
    _this.setData({
      recType: _this.data.recType
    });
  },
  //热门时间切换
  changeHotTime:function(event){
    var _this = this;
    var genre = event.currentTarget.dataset.genre;
    _this.data.hotType[genre] = 'active';
    _this.data.hotType[1-genre] = '';
    _this.setData({
      hotType: _this.data.hotType
    });
  },
  //最新时间切换
  changeNewTime:function(event){
    var _this = this;
    var genre = event.currentTarget.dataset.genre;
    _this.data.newType[genre] = 'active';
    _this.data.newType[1 - genre] = '';
    _this.setData({
      newType: _this.data.newType
    });
  },
  //返回顶部
  toTop:function(){
    wx.pageScrollTo({scrollTop: 0})
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //底部路由跳转
  routeTo: function (event) {
    var id = event.currentTarget.id;
    wx.redirectTo({
      url: '../' + id + '/' + id,
    })
  }
})
