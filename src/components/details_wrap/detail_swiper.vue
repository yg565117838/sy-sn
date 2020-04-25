<template>
  <swiper ref="mySwiper">
    <swiper-slide>
      <div class="img_container">
        <img src="../../assets/detailsImg/detailspage/cooker.png" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="img_container">
        <img src="../../assets/detailsImg/detailspage/cooker2.jpg" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="img_container">
        <img src="../../assets/detailsImg/detailspage/coker3.jpg" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="img_container">
        <img src="../../assets/detailsImg/detailspage/cooker4.jpg" alt />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="img_container">
        <img src="../../assets/detailsImg/detailspage/cooker5.jpg" alt />
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<style >
.img_container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: blueviolet;
  z-index: 10;
}

.img_container img {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>