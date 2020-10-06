<template>
  <div class="wrapper">
    <!-- <welcome/> -->
    <index-header></index-header>
    <div class="intro-wrapper">
      <carousel></carousel>
    </div>
    <div class="tech-wrapper">
      <technology-intro></technology-intro>
    </div>
    <!-- <div class="photos-wrapper">
        <photo-show></photo-show>
    </div> -->
    <div class="result-wrapper">
        <result-show></result-show>
    </div>
    <div class="graduator-wrapper">
        <graduator></graduator>
    </div>
    <index-footer/>
  </div>
</template>

<script>
import IndexHeader from '@/components/indexHeader'
// import welcome from '@/pages/welcome.vue'

import Carousel from '@/components/carousel'
import TechnologyIntro from '@/components/technologyIntro/technologyIntro'
// import PhotoShow from '@/components/photoShow/photoShow'
import ResultShow from '@/components/resultShow/resultShow'
import Graduator from '@/components/graduator/graduator'
import IndexFooter from '@/components/footer.vue'
export default {
  name: 'Index',
  components: {
    IndexHeader,
    Carousel,
    TechnologyIntro,
    // PhotoShow,
    ResultShow,
    Graduator,
    IndexFooter
  },
  mounted () {
  }
}
</script>
<style lang="stylus" scoped>
@import '../common/styles/varibles.styl'
.wrapper
  .intro-wrapper
    width: 100vw;
    height: 100vh;
    background: #000;
    @media screen and (max-width: $view-small)
      height: 60vh;
  .tech-wrapper
    background: url("../../static/img/bg.jpg") center top no-repeat fixed;
    width: 100%;
    background-size: cover;
    padding: 1rem 0 0.6rem 0;
    position: relative;
  .tech-wrapper::before
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(35,35,35, 0.92);
    z-index: 9;
  .result-wrapper
    background: url("../../static/img/facts-bg.jpg") center top no-repeat fixed;
    width: 100%;
    background-size: cover;
    padding: 1rem 0 0.6rem 0;
    position: relative;
  .result-wrapper::before
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(35,35,35, 0.92);
    z-index: 9;
  .graduator-wrapper
    width 100%
    background: rgba(35,35,35, 0.92)
    padding: 1rem 0 0.6rem 0;
    position: relative

@media screen and (max-width: 300px)
  .intro-wrapper
    height 70px
</style>
