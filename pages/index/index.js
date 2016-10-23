//index.js
//获取应用实例
const util = require( '../../utils/util.js' );
var WxParse = require('../../wxParse/wxParse.js');
//var WxParse = require('../../wxParse/showdown.js');
var Util = require('../../utils/util.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    wxParseData:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var html = '<div class="content mousetrap"><h1 id="wxparse">wxParse-微信小程序富文本解析自定义组件，支持HTML及markdown解析</h1> <blockquote><p>微信小程序富文本解析自定义组件，支持HTML及markdown解析</p></blockquote> <h2 id="-">功能列表</h2> <ul> <li>动态加载代码</li> <li>html转json</li> <li>markdown转html转json</li> <li>富文本markdown解析</li> <li>自定义层级解析</li> <li>自定义样式表</li> </ul> <h2 id="-">文件作用</h2> <pre class="hljs scala"><code class="scala"><span class="hljs-comment">// wxParse.wxml</span> <span class="hljs-comment">//用于解析使用的模版</span> .css{ text-align:center; } &lt;div&gt;test div&lt;/div&gt;</code></pre> <h2 id="-">开发信息</h2> <p><a href="http://weappdev.com" target="_blank">微信小程序开发论坛</a></p> <div class="image-package"><img src="http://weappdev.com/uploads/default/original/1X/9156b32bd04323f35d0957796f126b8a54595c97.png" data-original-src="http://weappdev.com/uploads/default/original/1X/9156b32bd04323f35d0957796f126b8a54595c97.png"><br><div class="image-caption">微信小程序logo</div></div> </div>';

    var that = this
    //更新数据
    that.setData({
      wxParseData:WxParse('html',html)
    })
  }
})

