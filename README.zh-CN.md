<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 35px;">轻量、可靠的移动端 Vue 组件库</h3>

<p align="center">
    <img src="https://img.shields.io/npm/v/vant.svg?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/youzan/vant/dev.svg?style=flat-square" alt="Coverage Status" />
    <img src="https://travis-ci.org/youzan/vant.svg?branch=master" alt="Build Status" />
    <img src="https://img.shields.io/npm/dt/vant.svg?style=flat-square" alt="downloads" />
    <img src="https://img.shields.io/npm/dm/vant.svg?style=flat-square" alt="downloads" />
    <img src="https://img.badgesize.io/https://unpkg.com/vant/lib/vant.min.js?compression=gzip&style=flat-square&label=JS%20gzip%20size" alt="JS Gzip Size" />
    <img src="https://img.badgesize.io/https://unpkg.com/vant/lib/index.css?compression=gzip&style=flat-square&label=CSS%20gzip%20size" alt="CSS Gzip Size" />
</p>

<<<<<<< HEAD
[![Build Status](https://travis-ci.org/youzan/vant.svg?branch=master)](https://travis-ci.org/youzan/vant) 
[![downloads](https://img.shields.io/npm/dt/vant.svg)](https://www.npmjs.com/package/vant) 
[![Coverage Status](https://img.shields.io/codecov/c/github/youzan/vant/dev.svg)](https://codecov.io/github/youzan/vant?branch=dev)
[![npm version](https://img.shields.io/npm/v/vant.svg?style=flat)](https://www.npmjs.com/package/vant) 
[![license](https://img.shields.io/npm/l/vant.svg)](https://www.npmjs.com/package/vant)
 
## 特性

- 组件都是来源于有赞的微商城业务，并且经过有赞业务的检验，更靠谱
- 丰富的文档和Demo
- 支持 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
- 单元测试覆盖率超过90%
- 不仅仅有丰富的基础组件，还有许多的业务组件

<p align="center">
  <img alt="feature demo" src="https://img.yzcdn.cn/public_files/2017/09/21/34974ceef63f380373bf3d68ec7907f8.gif">
</p >
 
## 安装
=======
<p align="center">
  🔥 <a href="https://youzan.github.io/vant">文档网站</a>
  &nbsp;
  🇬🇧 <a href="./README.md">英文版介绍</a>
  &nbsp;
  🚀 <a href="https://github.com/youzan/vant-weapp" target="_blank">小程序版</a>
</p>

---

## 特性

* 60+ 高质量组件
* 95% 单元测试覆盖率
* 完善的中英文文档和示例
* 支持按需引入
* 支持主题定制
* 支持国际化
* 支持 TS
* 支持 SSR
>>>>>>> 49471e845eac3ba1e19c182574b23239b83bdf1d

## 安装

```bash
# 通过 npm 安装
npm i vant -S

# 通过 yarn 安装
yarn add vant
```
<<<<<<< HEAD
 
## 快速上手

#### 方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)
```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// 在 .babelrc 或 babel-loader 中添加插件配置
{
  "plugins": [
    ["import", { "libraryName": "vant", "style": true }]
  ]
}
```

接着你可以在代码中直接引入 Vant 组件，插件会自动将代码转化为方式二中的按需引入形式。

```js
import { Button } from 'vant';
```

#### 方式二. 按需引入组件

```js
import { Button } from 'vant/lib/button';
import 'vant/lib/vant-css/base.css';
import 'vant/lib/vant-css/button.css';
```
 
#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);
```

### CDN

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vant/lib/vant-css/index.css">

<!-- 引入组件 --><script></script>
<script src="https://unpkg.com/vant/lib/vant.min.js"></script>
```

更多内容请参考 [快速上手](https://www.youzanyun.com/zanui/vant#/zh-CN/component/quickstart).

## 贡献代码

修改代码请阅读我们的 [开发指南](./.github/CONTRIBUTING.zh-CN.md)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/youzan/vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/youzan/vant/pulls)。

## 浏览器支持
现代浏览器以及 Android 4.0+, iOS 6+.

## 手机预览
=======

## 快速上手

```js
import Vue from 'vue';
import { Button } from 'vant';
import 'vant/lib/index.css';

Vue.use(Button);
```

vant 也支持按需引入、CDN 引入等方式，详细说明见 [快速上手](https://youzan.github.io/vant#/zh-CN/quickstart).

## 贡献代码

修改代码请阅读我们的 [开发指南](https://youzan.github.io/vant/#/zh-CN/contribution)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/youzan/vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/youzan/vant/pulls)。

## 浏览器支持

现代浏览器以及 Android 4.0+, iOS 7+.

## 加入我们

**有赞前端团队**是由一群年轻、皮实、对技术饱含热情的小伙伴组成的，目前共有 100 多名前端工程师，分布在业务中台、电商、零售、美业、资产、赋能等业务线。

我们热爱分享和开源，崇尚用工程师的方式解决问题，因此造了很多工具来解决我们遇到的问题，目前我们维护的开源产品有：

<img src="https://img.yzcdn.cn/public_files/2019/07/22/f4b70763c55c8710c52c667ecf192c05.jpeg" width="320" height="303">

我们正在寻找更多优秀的小伙伴，一起拓展前端技术的边界，期待你的加入！

- <a target="_blank" href="https://app.mokahr.com/apply/youzan/6252#/job/96f5d2c7-e657-4d31-9244-195edc443a7f?_k=jf2141">职位详情</a>（Base: 杭州/深圳）
- <a target="_blank" href="https://tech.youzan.com/tag/front-end/">团队博客</a>
- <a target="_blank" href="https://github.com/youzan">开源项目</a>

## 链接

* [详细文档](https://youzan.github.io/vant)
* [更新日志](https://youzan.github.io/vant#/zh-CN/changelog)
* [码云镜像](https://gitee.com/organizations/vant-contrib)
* [Vant 示例仓库](https://github.com/youzan/vant-demo)
* [VantWeapp 小程序组件](https://github.com/youzan/vant-weapp)

## 手机预览

可以手机扫码以下二维码访问手机端 demo：

<img src="https://img.yzcdn.cn/vant/preview_qrcode_20180528.png" width="220" height="220" >

## 微信讨论群

欢迎大家加入 Vant 交流群一起讨论，添加下方微信并注明『加入 Vant 交流群』即可
>>>>>>> 49471e845eac3ba1e19c182574b23239b83bdf1d

<img src="https://img.yzcdn.cn/vant/wechat_20180606.png" width="220" height="292" >

<<<<<<< HEAD
![qrcode](https://img.yzcdn.cn/v2/image/youzanyun/zanui/pc/zanui_vue_mobile_preview_03.png)

## 链接
- [详细文档](https://www.youzanyun.com/zanui/vant)
- [更新日志](https://www.youzanyun.com/zanui/vant#/en-US/component/changelog)
- [React 组件库 Zent](https://www.youzanyun.com/zanui/zent)
- [vue-cli-template-vant](https://github.com/youzan/vue-cli-template-vant) 
- [vant-demo](https://github.com/chenjiahan/vant-demo)
 
=======
>>>>>>> 49471e845eac3ba1e19c182574b23239b83bdf1d
## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
