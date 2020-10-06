<template>
 <div class="content">
<div class="wait">WE ARE WAITING FOR YOU</div>
 <div class="wrap">
 <div class="join">JOIN US</div>
 </div>
 <div class="footer">Copyright © 2020 - 重庆邮电大学信管工作室设计  </div>
 </div>
</template>
 
<script>
 
export default {  
 
}
</script>
 
<style scoped>
 .content{
     padding:50px 0 10px 0;
     text-align: center;
     height: 80vh;
     width: 100vw;
     background:linear-gradient(to bottom, rgba(35,35,35,.92),rgba(0,0,0,0.98));
 }
 .wait{
     font-size: 25px;
     padding: 10px;
     color: white;
     height: 40%;
     letter-spacing: 3px;
 }
 .wrap{
     height:50% ;
 }
 .join{
     font-size: 28px;
     color: white;
     letter-spacing: 3px;
     padding: 20px;
     border:1px solid white;
     width:200px;
     margin:0 auto;
 }
 .footer{
     color: rgb(175, 173, 173);
 }
    @media screen and (max-width: 800px){
.wait{
     font-size: 5vw;
    }
.join{
    width: 40vw;
    font-size:5.5vw ;
}
    .footer{
    font-size: 2vw;
 } 
    }
</style>