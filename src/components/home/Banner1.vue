<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="banner">
    <swiper-slide>
      <div class="banner-content">
        <img src="../../assets/home/banner1/1.jpg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-content">
        <img src="../../assets/home/banner1/2.jpg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-content">
        <img src="../../assets/home/banner1/3.jpg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-content">
        <img src="../../assets/home/banner1/4.jpg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-content">
        <img src="../../assets/home/banner1/5.png" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-content">
        <img src="../../assets/home/banner1/6.png" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-content">
        <img src="../../assets/home/banner1/7.jpg" alt="">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner-content">
        <img src="../../assets/home/banner1/8.png" alt="">
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>

export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop:true
      }
    }
  }
}
</script>

<style scoped>


.banner{
  height: 5.2rem;
}
.banner-content{
  height: 100%;
  height: 100%;
  border-radius: .35rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
img{
  width: 107%;
}
</style>
<style>
.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
  width: 0.18rem;
  height: 0.16rem;
  border-radius: .16rem;
  transition: width .2s;
  background: rgba(0, 0, 0, .3);
  opacity: 1;
  margin: 0 .18rem !important;
}
.swiper-pagination-bullet-active {
  background: #fff !important;
  width: .36rem !important;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: 0 !important;
}
</style>