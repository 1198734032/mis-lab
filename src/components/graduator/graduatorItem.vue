<template>
  <div>
    <div class="item" v-for="item in graduatorInfo" :key="item.name">
      <div class="pics">
        <img :src="item.personImg" />
      </div>
      <div class="info">
        <div class="name">{{item.personName}}</div>
        <div class="technology">方向：{{item.direction}}</div>
        <div class="company">就业公司：{{item.company}}</div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    graduatorInfo: {
      type: Array,
      default: [],
    },
  },

  mounted() {
    // console.log(this.graduatorInfo);
  },
};
</script>
 
<style scoped>
.item {
  margin:30px;
  color: white;
  display: flex;
}
.pics::before{
    background: #484848;
    border-radius: 2px;
    /* bottom: -30px; */
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,0.2);
    box-shadow: 0 0 3px rgba(0,0,0,0.2);
    content: "";
    height: 155%;
    left: 20px;
    position: absolute;
    width: 3px;
    top: 45px;
}
.pics {
  border: 2px solid #03a9f4;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgb(170, 168, 168);
  position: relative;
}
.pics img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.info {
  width: 350px;
  background: #2b2b2b;
  border: 1px solid #797979;
  border-radius: 3px;
  padding: 10px;
  position: relative;
  margin-left: 15px;
}
.info::after{
    border-right: 10px solid #2b2b2b;
    border-style: solid;
    border-width: 10px;
    color: rgba(0,0,0,0);
    content: "";
    display: block;
    height: 0;
    position: absolute;
    left: -18px;
    top: 6px;
    width: 0;
}
.info::before{
   border-right: 10px solid #5e5e5e;
    border-style: solid;
    border-width: 10px;
    color: rgba(0,0,0,0);
    content: "";
    display: block;
    height: 0;
    position: absolute;
    left: -20px;
    top: 6px;
    width: 0;
}
.name{
    font-size: 18px;
    letter-spacing: 3px;
    border-bottom: 1px solid #5e5e5e;
    padding: 0 0 5px 0;
}
.technology,.company{
    padding: 3px 0 0 0;
    line-height: 18px;
    letter-spacing: 1px;

}
</style>