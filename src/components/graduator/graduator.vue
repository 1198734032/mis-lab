<template>
  <div class="wrapper">
    <intro-title title="往届学长" intro=""></intro-title>
    <div class="content-wrapper">
      <div class="detail-info-wrapper">
        <graduatorItem :graduatorInfo="graduatorInfo"></graduatorItem>
      </div>
      <div class="chart-wrapper">
        <div id="chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
import IntroTitle from "../common/introTitle";
import graduatorItem from "@/components/graduator/graduatorItem.vue";
import { personnel, counts } from "@/network/request.js";

export default {
  data() {
    return {
      chartData: [],
      graduatorInfo: [
        // {
        //   name: "李博文4",
        //   technology: "前端",
        //   company: "google",
        //   time: "2019",
        // }
      ],
    };
  },
  components: {
    IntroTitle,
    graduatorItem,
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("chart"));
    let that = this;
    counts().then((res) => {
      this.chartData = res.data.data;
      // 绘制图表
      myChart.setOption({
        title: {
          text: "就业分布统计图",
          subtext: "仅收录信管工作室已毕业的学长",
          x: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          x: "center",
          y: "bottom",
          data: [
            "google",
            "facebook",
            "microsoft",
            "twitter",
            "amazon",
            "ali",
            "tencent",
            "priceline",
            "考研",
          ],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
            },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        series: [
          {
            name: "就业公司",
            type: "pie",
            radius: [30, 110],
            center: ["50%", "50%"],
            roseType: "area",
            data: that.chartData,
            // data: [
            //   { value: 10, name: "google" },
            //   { value: 5, name: "facebook" },
            //   { value: 15, name: "microsoft" },
            //   { value: 25, name: "twitter" },
            //   { value: 20, name: "amazon" },
            //   { value: 35, name: "ali" },
            //   { value: 30, name: "tencent" },
            //   { value: 40, name: "priceline" },
            //   { value: 9, name: "考研" },
            // ],
          },
        ],
      });
    })
    .catch(err=>{
      alert("出错啦~~~~~")
    })
 

    //获取学长学姐就业信息
    personnel()
      .then((res) => {
        if (res.data.code) {
          this.graduatorInfo = res.data.data;
        }
      })
      .catch((err) => {
        this.graduatorInfo = [
          {
            personName: "暂无数据",
            direction: "暂无数据",
            company: "暂无数据",
          },
        ];
      });
  },
};
</script>

<style lang="stylus" scoped>
@import '../../common/styles/varibles.styl';

.wrapper {
  position: relative;
  z-index: 10;
  width: 80%;
  padding-right: 8vw;
  padding-left: 8vw;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  .content-wrapper {
    margin-top: 60px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: $view-small) {
      flex-direction: column;
    }

    .detail-info-wrapper {
      padding: 5px;
      text-align: left;
      height: 600px;
      width: 40%;
      overflow: scroll;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      overflow-x: hidden;
      overflow-y: auto;

      @media screen and (max-width: $view-small) {
        width: 100%;
      }
    }

    .chart-wrapper {
      height: 600px;
      width: 50%;

      @media screen and (max-width: $view-small) {
        width: 100%;
      }

      #chart {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.card-name {
  font-family: $side-title;
  font-size: 20px;
  margin-bottom: 10px;
}

.card-item {
  margin-bottom: 10px;
}

::-webkit-scrollbar-thumb {
  background: #D3D3D3;
  border-radius: 6px;
}
</style>
