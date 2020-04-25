<template>
  <transition>
    <!-- 地址选择页 -->
    <div class="address_select" v-if="addresspage">
      <div class="address_head">
        <div class="plase_select">
          <div class="exit"></div>
          <div class="address_select_title">
            地址选择
            <div class="cancel_btn" @click="addresscancel">
              <img src="../../assets/detailsImg/detailspage/cancel.png" alt />
            </div>
          </div>
        </div>

        <div class="locate_container">
          <div class="province_select" :pmessage="provinceMessage">{{provinceMessage}}</div>
          <div class="city_select">{{cityDefaultValue}}</div>
          <div class="area_select">{{areaDefaultValue}}</div>
        </div>
      </div>
      <div class="address_middle">
        <div
          class="differ_city"
          :key="index"
          v-for="(item,index) in provinceList"
          @click="itemclick(item,index)"
        >{{item.name}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import Axios from "axios";
export default {
  props: ["addresspage","pmessage"],
  data() {
    return {
      provinceList: [],
      cityDefaultValue: "请选择",
      areaDefaultValue: "",
      provinceMessage: "江苏"
    };
  },
  methods: {
    addresscancel() {
      this.$emit("address-cancel");
    },
    itemclick(item, index) {
      this.provinceList = item.city;
      this.provinceMessage = item.name;

    }
  },
  created() {
    let that = this;
    Axios.get("/details_json/address.json").then(function(content) {
      that.provinceList = content.data;
    });
  }
};
</script>



<style>
    .cart_select,
.address_select,
.service_select,
.see_select {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0.5%;
  bottom: 0.5%;
  width: 99%;
  height: 18.75rem;
  background-color: white;
  z-index: 999;
  border-radius: 0.333rem;
}
.address_select_title {
  padding: 0.36rem 0;
  padding-left: 1.05rem;
  text-align: center;
  font-size: 0.721rem;
  border-bottom: 0.03rem solid #eee;
}
.locate_container {
  display: flex;
}
.locate_container div {
  padding: 0.417rem 0;
  font-size: 0.596rem;
  width: 33.3%;
  text-align: center;
}
.differ_city {
  padding: 0.333rem 0.25rem;
  font-size: 0.596rem;
}
.clearfix::after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.zy {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>