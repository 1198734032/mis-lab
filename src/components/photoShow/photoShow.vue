<template>
  <div class="wrapper">
    <intro-title title="成果展示" intro=""></intro-title>
    <div class="photo-wrapper">
      <div v-for="(item, index) of photoMessage" :key="index" class="item-wrapper fadeInUp wow" data-wow-delay="0.2s">
        <div class="photo-wrapper">
          <img class="photo" :src="item.photoPath" alt="">
          <div class="icon"><el-button type="primary" icon="el-icon-view icon-view" circle @click="openPhoto(item.photoPath, item.photoTitle)"></el-button></div>
        </div>
        <h2>{{ item.photoTitle }}</h2>
        <h3>{{ item.photoInfro }}</h3>
      </div>
    </div>
    <el-dialog width="35vw" :modal-append-to-body=false :title="dialogPhotoTitle" :visible.sync="photoVisible">
      <img :src="dialogPhotoPath" class="dialogPhoto" alt="">
    </el-dialog>

  </div>
</template>

<script>
import IntroTitle from '../common/introTitle'
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogPhotoPath: '',
      dialogPhotoTitle: '',
      photoVisible: false,
      photoMessage: [{
        photoPath: '../../../static/img/bowen.jpg',
        photoTitle: '李博文1',
        photoInfro: '这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息'
      }, {
        photoPath: '../../../static/img/bowen.jpg',
        photoTitle: '李博文2',
        photoInfro: '这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息'
      }, {
        photoPath: '../../../static/img/bowen.jpg',
        photoTitle: '李博文3',
        photoInfro: '这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息'
      }, {
        photoPath: '../../../static/img/bowen.jpg',
        photoTitle: '标题',
        photoInfro: '这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息'
      }, {
        photoPath: '../../../static/img/bowen.jpg',
        photoTitle: '标题',
        photoInfro: '这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息这里是介绍信息'
      }]
    }
  },
  components: {
    IntroTitle
  },
  methods: {
    openPhoto (path, title) {
      this.dialogPhotoTitle = title
      this.dialogPhotoPath = path
      this.photoVisible = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position: relative;
  z-index 10
  width: 75%;
  padding-right: 8vw;
  padding-left: 8vw;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  .photo-wrapper
    display flex
    width 100%
    flex-wrap wrap
    justify-content center
    .item-wrapper
      margin 20px
      height 330px
      width 300px
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08)
      transition 1s
      background white
      .photo-wrapper
        position relative
        width 100%
        height 230px
        background grey
        .photo
          width 100%
          height 100%
          position relative
          z-index 20
        .icon
          position absolute
          width 100%
          height 100%
          z-index 10
          background black
          display flex
          justify-content center
          align-items center
          transition .5s
          .icon-view
            z-index 9999
      .photo-wrapper:hover
        cursor pointer
        > .icon
          z-index 30
          background rgba(0, 0, 0, .4)
      h2
        font-family "Montserrat", sans-serif
        margin 12px
        font-size 18px
        font-weight 700
      h3
        padding 0 20px
        color #b8b8b8
        font-weight 500
    .item-wrapper:hover
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.3)

.dialogPhoto {
  width 100%
  border-radius 20px
}
</style>
