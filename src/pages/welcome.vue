<template>
  <div id="welcome">
    <div id="title">惊喜 &nbsp;&nbsp;从这里开始</div>
    <div id="logo" @click="jump">
      <span></span>
      <span></span>
      <span></span>
      <!-- <img src="../../static/img/logo1.jpg" /> -->
      <div>Learn More</div>
    </div>
  </div>
</template>
 
<script>
export default {
  methods: {
    jump() {
      this.$router.replace("/index");
    }
  }
};
</script>
 
<style scoped>
#welcome {
  width: 100vw;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  letter-spacing: 3px;
}
#title {
  margin: 0 auto;
  color: white;
  line-height: 30vh;
  transform: scale(0);
  animation-fill-mode: forwards;
  animation-name: showflash;
  animation-duration: 5s;
  animation-iteration-count: 1;
}

@keyframes showflash {
  100% {
    transform: scale(2);
    opacity: 1;
  }
}

#logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 50px;
  position: relative;
  opacity: 0;
  padding: 10px;
  animation: showLogo 2.5s forwards;
}

@keyframes showLogo {
  100% {
    opacity: 1;
  }
}

#logo div {
  letter-spacing: 1px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

@keyframes borderClip {
  0%,
  100% {
    clip: rect(0px, 110px, 2px, 0px);
  }
  25% {
    /* clip: rect(0px, 110px, 2px, 0px); */
    clip: rect(0px, 2px, 110px, 0px);
  }
  50% {
    /* clip: rect(0px, 110px, 2px, 0px);
    clip: rect(0px, 2px, 110px, 0px); */
    clip: rect(108px, 110px, 110px, 0px);
  }
  75% {
    /* clip: rect(0px, 130px, 2px, 0px);
    clip: rect(0px, 2px, 130px, 0px);
    clip: rect(128px, 130px, 130px, 0px); */
    clip: rect(0px, 130px, 130px, 128px);
  }
}

#logo span {
  position: absolute;
  z-index: -100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1.5px solid #fff;
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  transition: 0.5s;
}
#logo span:nth-child(1) {
  animation: animate 6s linear infinite;
}
#logo span:nth-child(2) {
  animation: animate 4s linear infinite;
}
#logo span:nth-child(3) {
  animation: animate2 10s linear infinite;
}
#logo:hover span {
  border: none;
  background: rgba(0, 0, 255, 0.3);
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate2 {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>