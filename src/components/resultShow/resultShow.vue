<template>
  <div class="wrapper">
    <intro-title title="成果展示" intro></intro-title>

    <!-- <el-carousel :interval="4000" type="card" height="300px" >
      <el-carousel-item v-for="item in result" :key="item.proId">
        <div class="carousel-label">{{ item.introduce }}</div>
        <img
          class="carousel-img"
          :src="item.proImg"
        >
      </el-carousel-item>
    </el-carousel> -->

    <div v-for="item in result" :key="item" class="result_item">
      <div class="item_left">
        <img :src="item.proImg" class="result_img" />
      </div>
      <div class="item_text">{{ item.introduce }}</div>
    </div>
  </div>
</template>

<script>
import IntroTitle from "../common/introTitle";

//导入请求(工作室项目成果)
import { projects } from "@/network/request.js";

export default {
  components: {
    IntroTitle,
  },
  data() {
    return {
      result: [
        {
          proImg: "../../../static/img/1.png",
          introduce: "这是一段介绍111这是一段介绍这是一段介绍这是一段介绍",
        },
        {
          proImg: "../../../static/img/1.png",
          introduce: "这是一段介绍222这这是一段介绍222这是一这是一段介绍222这是一这是一段介绍222这是一这是一段介绍222这是一是一段介绍这是一段介绍这是一段介绍",
        },
        // {
        //     img:"../../../static/img/1.jpg",
        //     intro:"这是一段介绍333这是一段介绍这是一段介绍这是一段介绍"
        // },
        // {
        //     img:"../../../static/img/1.jpg",
        //     intro:"这是一段介绍444这是一段介绍这是一段介绍这是一段介绍"
        // }
      ],
    };
  },
  mounted() {
    let pics = document.getElementsByClassName("el-carousel__item");
    projects().then((res) => {
      if (res.data.code) {
        this.result = res.data.data;
      }
    });
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  z-index: 10;
  width: 75%;
  padding-right: 8vw;
  padding-left: 8vw;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
/* .el-carousel__item-card {
  position: relative;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel-label {
  background: rgba(51, 51, 51, 1);
  color: white;
  position: absolute;
  bottom: 0px;
  padding: 20px 15px;
  width: 100%;
}
.carousel-img {
  width: 100%;
  height: 80%;
} */
.title {
  color: rgb(4, 69, 131);
}

.result_item {
  position: relative;
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  min-height: 100px;
  width: 75%;
  padding: 10px;
  border:1px solid white;
  border-radius: 10px;
}


.result_img {
  width: 150px;
  height: 150px;
  border-radius:50%;
}
.item_text{
  color: white;  
  padding-left: 30px;
  line-height: 3.5vh;
}

 @media screen and (max-width: 800px) {
    .result_item{
      flex-direction: column;
    }
    .result_img{
      width: 30vw;
      height: 30vw;
    } 
    .item_text{
      padding-top: 2vh;
      padding-left: 0;
    }
 }
</style>
