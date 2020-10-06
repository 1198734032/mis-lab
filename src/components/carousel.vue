<template>
  <div class="wrapper" ref="container">
    <el-carousel
      :interval="3000"
      :height="cssAtr.carouselHeight  + 'px' "
      arrow="always"
    >
      <el-carousel-item
        v-for="(item, index) in imgList"
        :key="index"
      >
        <div class="carousel-label">{{ item.desc }}</div>
        <img
          class="carousel-img"
          :src="item.path"
        >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cssAtr: {
        carouselHeight: ''
      },
      imgList: [
        {
          path: '../../static/img/1.png',
          desc:""
        }, {
          path: '../../static/img/9.jpg',
          desc: '这里是工作室的介绍内容，这里是工作室的介绍内容，这里是工作室的介绍内容，这里是工作室的介绍内容，♥ it :)'
        }
        // , {
        //   path: '../../static/img/3.jpg',
        //   desc: '这里是工作室的介绍内容，这里是工作室的介绍内容，这里是工作室的介绍内容，这里是工作室的介绍内容，这里是工作室的介绍内容，这里是工作室的介绍内容，这里是工作室的介绍内容，'
        // }
      ]
    }
  },
  methods: {
  },
  mounted () {
    this.cssAtr.carouselHeight = this.$refs['container'].offsetHeight
    window.addEventListener('resize', () => {
      this.cssAtr.carouselHeight = this.$refs['container'].offsetHeight
    })
  }
}
</script>

<style lang="stylus" scoped>
 @import '../common/styles/varibles.styl'
.wrapper
  position: relative;
  width: 100%;
  height: 100%;
  .carousel-label
  /* 水平垂直居中 */
    position: absolute;
    width 80%
    left: 50%; /* 定位父级的50% */
    top: 75%;
    transform: translate(-50%, -50%); /*自己的50% */
    font-size: 2vw
    font-family $carousel-text-font
    color: white;
    transform .4s
    @media screen and (max-width: $view-small-x)
      font-size: 20px
      top: 50%
  .carousel-img
    width: 100%;
    height: 100%;
</style>
