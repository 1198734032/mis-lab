<template>
  <div class="wrapper">
    <intro-title title="技术，让一切皆有可能" intro="Technology makes everything possible"></intro-title>
    <div class="tech-clo-wrapper">
      <div class="tech-clo fadeInUp wow">
        <!-- <div class="img"> -->
          <div class="icon iconfont">&#xea47;</div>
        <!-- </div> -->
        <div class="title">前端</div>
        <p>
          前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。
          前端开发工程师不仅要掌握基本的Web前端开发技术，网站性能优化、SEO和服务器端的基础知识，而且要学会运用各种工具进行辅助开发以及理论层面的知识，包括代码的可维护性、组件的易用性、分层语义模板和浏览器分级支持等。
        </p>
      </div>

      <div class="tech-clo fadeInUp wow" data-wow-delay="0.2s">
        <div class="img">
          <!-- <img
            src="../../../static/img/about/about2.png"
            alt=""
            class="img-fluid"
          > -->
          <div class="icon iconfont">&#xf1d7;</div>
        </div>
        <div class="title">后台</div>
        <p>
          java是一个可以在不同操作系统（例如windows,unix等）上运行的编程语言，java平台是指运行在各种终端（如pc、服务器、移动设备、嵌入式设备）的系统软件。PC机上的java程序是用javaSE开发出来的，服务器端的java程序是用javaEE开发出来的，移动设备的java程序是用javaME开发出来的。
        </p>
      </div>

      <div class="tech-clo fadeInUp wow" data-wow-delay="0.4s">
        <!-- <div class="img"> -->
          <!-- <img
            src="../../../static/img/about/about3.png"
            alt=""
            class="img-fluid"
          > -->
          <div class="icon iconfont">&#xe603;</div>
        <!-- </div> -->
        <div class="title">安卓</div>
        <p>
          安卓（Android）是一种基于Linux的自由及开放源代码的操作系统。主要使用于移动设备，如智能手机和平板电脑，由Google公司和开放手机联盟领导及开发。Android操作系统最初由Andy Rubin开发，主要支持手机。2005年8月由Google收购注资。2007年11月，Google与84家硬件制造商、软件开发商及电信营运商组建开放手机联盟共同研发改良Android系统。随后Google以Apache开源许可证的授权方式，发布了Android的源代码。第一部Android智能手机发布于2008年10月。Android逐渐扩展到平板电脑及其他领域上，如电视、数码相机、游戏机、智能手表等。2011年第一季度，Android在全球的市场份额首次超过塞班系统，跃居全球第一。 2013年的第四季度，Android平台手机的全球市场份额已经达到78.1%。2013年09月24日谷歌开发的操作系统Android在迎来了5岁生日，全世界采用这款系统的设备数量已经达到10亿台。
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
import IntroTitle from '../common/introTitle'

export default {
  name: 'TechnologyIntro',
  components: {
    IntroTitle
  },
  mounted () {
    var wow = new WOW({
      boxClass: 'wow',
      offset: 0.2,
      mobile: true
    })
    wow.init()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/styles/common.styl'
.wrapper
  position: relative;
  z-index 10
  width: 80%;
  // padding-right: 8vw;
  // padding-left: 8vw;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  .tech-clo-wrapper
    display flex
    position relative
    margin-top 50px
    @media screen and (max-width: 800px)
      flex-direction: column
      width: 80%;
      margin: 0 auto;
    .tech-clo
      position relative
      text-align center
      width 30%
      background rgb(34,41,47)
      color rgb(209, 203, 203)
      border 2px solid rgba(4, 69, 131,0.5)
      line-height 20px
      height 320px
      margin 30px auto
      border-radius: 4px
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
      margin-bottom: 20px
      @media screen and (max-width: $view-small-x)
        width 100%
      .title
        width 100%
        margin: 42px auto;
        font-weight: 700;
        margin-bottom: 15px;
        font-size: 20px;
        color: white;
        z-index 999
        font-family $main-title
      p
        height 200px
        padding 10px
        font-family $main-text
        font-size 14px
        line-height 25px
        overflow scroll
        scrollbar-width: none; 
      .icon
         font-size 60px
         color white
         width 80px
         height 80px
         line-height 80px
         transition all .5s
         border-radius 50%
         margin 0 auto
         left: calc( 50% - 40px)
         top -40px
         position: absolute;
      .icon:hover
         color white
         background $themecolor

            // .img
      //   position relative
      //   vertical-align: middle;
      //   border-style: none;
      //   width 100%
      //   .img-fluid
      //     width 100%
      //     height 200px
      //   .icon
      //     width: 60px;
      //     height: 60px;
      //     text-align: center;
      //     left: calc( 50% - 40px);
      //     top calc( 100% - 40px);
      //     position: absolute;
      //     border-radius:50%;
      //     background: white
      //     border 4px white solid
      //     float: left
      //     font-size 40px
      //     line-height 60px
      //     color grey
      //     transition .5s
    .tech-clo:hover
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.3)
      .icon
        color white
        background $themecolor


// ::-webkit-scrollbar-thumb {
//   background: black;
//   border-radius: 6px;
// }
::-webkit-scrollbar {
  display: none;
}

</style>
