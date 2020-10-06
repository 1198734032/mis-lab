<template>
  <div class="wrapper">
    <header class="section-header">
      <h3 class="title">{{ title }}</h3>
    </header>
    <p class="intro-text">{{ intro }}</p>
  </div>
</template>

<script>
export default {
  name: 'introTitle',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    intro: {
      type: String,
      default: '这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，这是一段介绍，！'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/styles/common.styl'
.section-header
    position relative
    padding-bottom 15px
    margin-bottom 30px
    .title
      font-size 32px
      color #fff
      font-family "Open Sans", $main-title
      line-height 2
      text-shadow 2px 2px 0px rgba(0,0,0,0.2)
      text-align center
      font-weight 700
      @media screen and (max-width: 800px) {
        font-size 5.5vw
      }
    .title::before
          content: '';
          position: absolute;
          display: block;
          width: 100%;
          height: 2px;
          background: #ddd;
          bottom: 1px;
          border-radius: 1px
          background-image: linear-gradient(to right,rgb(35,35,35),#409eff,rgb(35,35,35) );
    .title::after
          content: '';
          position: absolute;
          display: block;
          width: 17px;
          height: 17px;
          background: #fff;
          filter: blur(4px);
          border-radius: 50%;
          bottom: 0;
          left: calc(50% - 8px);
          bottom: -5px;
.intro-text
  color:#888888
  font-family $side-text
  font-size 18px
  @media screen and (max-width: 800px) {
    font-size 3.5vw
  }
</style>
