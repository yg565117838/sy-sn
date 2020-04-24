<template>
  <div>
    <div class="details_page">
      <div class="zy">
        <div class="back" @click="backMainpage"></div>
        <!-- 更多 -->
        <div class="more" @click="moreClick">
          <div class="quick_nav" v-if="quicknav">
            <div class="tranigle"></div>
            <div class="quick_text">快速导航</div>
            <div class="five_box">
              <div class="quick_item">
                <div class="main_bgd"></div>
                <div class="main_text">首页</div>
              </div>
              <div class="quick_item">
                <div class="search_bgd"></div>
                <div class="search_text">搜索</div>
              </div>
              <div class="quick_item">
                <div class="mycart_bgd"></div>
                <div class="mycart_text">购物车</div>
              </div>
              <div class="quick_item">
                <div class="myeasy_bgd"></div>
                <div class="myeasy">我的易购</div>
                
              </div>
              <div class="quick_item">
                <div class="all_bgd"></div>
                <div class="all_classify">全部分类</div>
                
              </div>
            </div>
      </div>
        </div>
      </div>
      <!-- 更多跳转页 -->

      <!-- 地址选择页 -->
      <div class="address_select" v-if="addresspage">
        <div class="address_head">
          <div class="plase_select">
            <div class="exit"></div>
            <div class="address_select_title">
              地址选择
              <div class="cancel_btn" @click="cancelBtn">
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
            @click="itemClick(item,index)"
          >{{item.name}}</div>
        </div>
      </div>
      <!-- 购物车选择页 -->
      <div class="cart_select" v-if="selectpage">
        <!-- 头部 -->
        <div class="cart_select_header">
          <div class="interlayer"></div>
          <div class="cancel_box">
            <div class="cancel_btn" @click="cancelBtn">
              <img src="../../assets/detailsImg/detailspage/cancel.png" alt />
            </div>
            <div class="cart_select_price">
              <p class="change_price">￥299.00 到手价￥279.00</p>
              <span class="coding">商品编码：1005010218</span>
            </div>
            <div class="cart_select_text">美的（Media）WAOHAO5A一锅双胆5L12大烹饪菜单7大压力调节韩式电饭煲电压力锅</div>
          </div>
        </div>
        <!-- 中间（auto） -->
        <div class="cart_select_middle">
          <div class="capacity">容量</div>
          <div class="kind">
            <div class="first_line">
              <span class="select_label">
                <i class="mini_img">
                  <img src="../../assets/detailsImg/detailspage/cooker.png" alt />
                </i>
                <span class="cart_select_name">5L经典款</span>
              </span>
              <span class="select_label">
                <i class="mini_img">
                  <img src="../../assets/detailsImg/detailspage/cooker.png" alt />
                </i>
                <span class="cart_select_name">5L韩式浓香</span>
              </span>
            </div>
            <div class="second_line">
              <span class="select_label">
                <i class="mini_img">
                  <img src="../../assets/detailsImg/detailspage/cooker.png" alt />
                </i>
                <span class="cart_select_name">5L大红爆款</span>
              </span>
              <span class="select_label">
                <i class="mini_img">
                  <img src="../../assets/detailsImg/detailspage/cooker.png" alt />
                </i>
                <span class="cart_select_name">4.8L双圆灶釜</span>
              </span>
            </div>
            <div class="third_line">
              <span class="select_label">
                <i class="mini_img">
                  <img src="../../assets/detailsImg/detailspage/cooker.png" alt />
                </i>
                <span class="cart_select_name">【新品】4.8精控浓香</span>
              </span>
              <span class="select_label">
                <i class="mini_img">
                  <img src="../../assets/detailsImg/detailspage/cooker.png" alt />
                </i>
                <span class="cart_select_name">5L IH品质</span>
              </span>
            </div>
          </div>
          <!-- 选择数量 -->
          <div class="cart_select_number">
            <div class="number_text">购买数量</div>
            <div class="select_wrap_container">
              <i class="minus clearfix">-</i>
              <input type="text" class="input_container clearfix" value="1" />
              <i class="plus clearfix">+</i>
            </div>
          </div>
          <!-- 选择数量 -->
          <!-- 购买增值服务 -->
          <div class="buy_container">
            <div class="buy_add_service">购买增值服务</div>
            <div class="addmoney_service">
              <div>
                <span class="draw">领延保券</span>
                <span class="add_number_left">
                  <i class="left_bgd"></i>
                  ￥200.00
                </span>
                <span class="opacity">
                  最高减200元
                  <i class="right_bgd"></i>
                </span>
              </div>
              <div class="right_alltwo">
                <span class="all_two">共2张</span>
                <i class="right">
                  <img src="../../assets/detailsImg/detailspage/right.png" alt />
                </i>
              </div>
            </div>
          </div>
          <!-- 购买增值服务 -->
          <!-- 只换不修 -->
          <div>
            <div class="changenot">
              <div class="change_left">
                <i class="not_img">
                  <img src="../../assets/detailsImg/shopcartImg/changenot.png" alt />
                </i>
                <span class="not_text">只换不修</span>
                <span class="protect_text">厂保性能保障...</span>
              </div>
              <div class="change_right">
                <span class="see_details">查看详情</span>
                <i class="unknow">
                  <img src="../../assets/detailsImg/shopcartImg/unknow.png" alt />
                </i>
              </div>
            </div>
            <!-- 只换不修 -->
            <!-- 选项 -->
            <div class="options">
              <div class="top_line">
                <span class="options_plan">只换不修1年 | ￥70.00</span>
                <span class="options_plan ig">只换不修2年 | ￥105.00</span>
              </div>
              <div class="foot_line">
                <span class="options_plan">只换不修3年 | ￥150.00</span>
              </div>
            </div>
            <!-- 选项 -->
          </div>

          <!-- 整机保 -->

          <div>
            <div class="changenot">
              <div class="change_left">
                <i class="not_img">
                  <img src="../../assets/detailsImg/shopcartImg/allpro.png" alt />
                </i>
                <span class="not_text">全保修</span>
                <span class="protect_text">性能以外全保修</span>
              </div>
              <div class="change_right">
                <span class="see_details">查看详情</span>
                <i class="unknow">
                  <img src="../../assets/detailsImg/shopcartImg/unknow.png" alt />
                </i>
              </div>
            </div>
            <!-- 只换不修 -->
            <!-- 选项 -->
            <div class="options">
              <div class="top_line">
                <span class="options_plan">全保修3年 | ￥59.00</span>
                <span class="options_plan ig">全保修5年 | ￥79.00</span>
              </div>
            </div>
            <!-- 选项 -->
          </div>
          <!-- 整机保 -->

          <!-- 全保修 -->
          <div>
            <div class="changenot">
              <div class="change_left">
                <i class="not_img">
                  <img src="../../assets/detailsImg/shopcartImg/allpro2.png" alt />
                </i>
                <span class="not_text">整机保</span>
                <span class="protect_text">整机性能故障免费...</span>
              </div>
              <div class="change_right">
                <span class="see_details">查看详情</span>
                <i class="unknow">
                  <img src="../../assets/detailsImg/shopcartImg/unknow.png" alt />
                </i>
              </div>
            </div>
            <!-- 只换不修 -->
            <!-- 选项 -->
            <div class="options">
              <div class="top_line">
                <span class="options_plan">整机保2年 | ￥39.00</span>
                <span class="options_plan ig">整机保3年 | ￥59.00</span>
              </div>
              <div class="foot_line">
                <span class="options_plan">整机保4年 | ￥89.00</span>
              </div>
            </div>
            <!-- 选项 -->
          </div>
          <!-- 全保修 -->
          <!-- 百万 -->

          <div>
            <div class="changenot">
              <div class="change_left">
                <i class="not_img">
                  <img src="../../assets/detailsImg/shopcartImg/changenot.png" alt />
                </i>
                <span class="not_text">百万家财保障</span>
                <span class="protect_text">百万保额，先补录...</span>
              </div>
              <div class="change_right">
                <span class="see_details">查看详情</span>
                <i class="unknow">
                  <img src="../../assets/detailsImg/shopcartImg/unknow.png" alt />
                </i>
              </div>
            </div>
            <!-- 只换不修 -->
            <!-- 选项 -->
            <div class="options">
              <div class="top_line">
                <span class="options_plan">￥20.00</span>
              </div>
            </div>
            <!-- 选项 -->
          </div>
          <!-- 百万 -->
        </div>
        <!-- 底部 -->
        <div class="cart_select_footer">
          <div class="noname">
            <span class="warn">
              当前活动可参加满减活动，预计优惠
              <b>20.00元</b>
            </span>
          </div>
          <div class="last_btn">
            <button>马上抢</button>
            <button>加入购物车</button>
          </div>
        </div>
      </div>
      <!--  -->
      <!-- 顶部图片 -->
      <div class="img_container">
        <img src="../../assets/detailsImg/detailspage/cooker.png" alt />
        <!-- 返回 -->
      </div>
      <!-- 价格 -->
      <div class="price_container">
        <!-- 价格 -->
        <div class="price">
          <span class="price_number">
            ￥239.
            <span id="small_number">00</span>
          </span>
          <span class="new_yeartag">新年特惠</span>
          <span class="origin_price">￥290.00</span>
        </div>
        <!-- 点击查看 -->
        <div class="view_container">
          <div class="gray_container">
            <div class="title_container">
              <div class="member">SUPER会员预计返价格1.19元云钻</div>
              <div class="welfare">福利上新！您有每月100元礼包待领取</div>
            </div>
            <div class="clickview">点击查看</div>
          </div>
        </div>
        <!-- 关注 -->
        <div class="attention_container">
          <div class="attention_menu">
            <div class="media_title">
              <span class="intro_text">美的（Media）WAOHAO5A一锅双胆5L12大烹饪菜单7大压力调节韩式电饭煲电压力锅</span>
            </div>
            <div class="attention_img">
              <img src="../../assets/detailsImg/detailspage/attention.png" alt />
            </div>
          </div>

          <p class="net">【全网热卖】喜庆中国红；双智能安全检测一键排气</p>
        </div>
        <div class="fix"></div>
      </div>
      <!-- 折扣 -->
      <div class="discount_container">
        <div class="party_active">
          <div>
            <i class="active">
              <img src="../../assets/detailsImg/detailspage/ok.png" alt />
            </i>
            <span class="get">
              参加以下活动，预计到手价
              <span class="red_word">209.00元</span>
            </span>
          </div>
          <div class="right_container">
            <div class="kkk">
              <!-- <div class="seemore">查看更多</div>
              <div class="  r_icon_"></div>-->
            </div>
          </div>
        </div>
      </div>
      <!-- 优惠券 -->
      <div class="coupon_container">
        <div>
          <span class="gray_color">促销</span>
          <span class="promotion">云钻促销</span>
          <span>普通会员立返14云钻</span>
        </div>
        <div class="minus_container">
          <span class="full_minus">满减</span>
          <span class="two">每满299元减20元</span>
        </div>
      </div>
      <div class="do_container">
        <div class="do">
          <span class="gray_color">刮券</span>
          <span>100%刮中券，最高50元无敌券</span>
        </div>
        <div class="right second r_icon"></div>
      </div>
      <div class="fix"></div>
      <div class="service_container">
        <div class="has_select" @click="addServe">
          <div class="ser_container">
            <span class="gray_color">已选</span>
            <span class="bold_text detail">4.8L双圆灶 1件 可选增值服务</span>
          </div>
          <div class="right second r_icon_"></div>
        </div>
        <div class="has_select" @click="addressClick">
          <div class="ser_container">
            <span class="gray_color">送至</span>
            <span class="detail">江苏 南京 玄武区</span>
          </div>
          <div class="right second r_icon_"></div>
        </div>
        <div class="has_select">
          <div class="ser_container">
            <span class="gray_color">付款</span>
            <span class="detail">支持 易付宝 支付宝</span>
          </div>
        </div>
        <div class="has_select">
          <div class="ser_container">
            <span class="gray_color">运费</span>
            <span class="detail">免运费</span>
          </div>
        </div>
        <div class="has_select">
          <div class="ser_container">
            <span class="gray_color">服务</span>
            <span class="detail">7天无理由退货</span>
          </div>
          <div class="right second r_icon_"></div>
        </div>

     
        <!--  -->
      </div>
         <!-- 评价 -->
         <div class="fix"></div>
        <div class="gray_box">
          <div class="six_container" @click="commentClick">
            <div class="six_head">
              <div class="fifth">评价(15万+)</div>
              <div class="six_right">
                <div class="full_good">100%好评率</div>
                <div class="r_icon"></div>
              </div>
            </div>
            <!-- xx -->
            <div class="people">
              <div class="people_left">
                <div class="people_img"></div>
                <div class="people_name">1***9</div>
              </div>
              <div class="people_star"></div>
            </div>
            <p class="people_say">发货神速，锅也很好用</p>
            <div class="show_container">
              <img src="../../assets/detailsImg/detailspage/show.jpg" alt="" class="show_img">
              <img src="../../assets/detailsImg/detailspage/show.jpg" alt="" class="show_img">
            </div>
            <div class="see_all_container">
              <button>查看全部评价</button>
            </div>
          </div>
        </div>
      <!-- 加入购物车 -->
      <div class="footer">
        <div class="icon_item">
          <img src="../../assets/detailsImg/detailspage/service.png" alt />
        </div>
        <div class="icon_item">
          <img src="../../assets/detailsImg/detailspage/shop.png" alt />
        </div>
        <div class="icon_item cartbox">
          <img src="../../assets/detailsImg/detailspage/cart.png" alt />
          <!-- 红点 -->
          <div class="red_circle">0</div>
        </div>
        <button class="qucik" @click="enterCart">马上抢</button>
        <button class="join_cart" @click="addCart">加入购物车</button>
        <!-- 遮罩层 -->
        <div class="cover" v-if="cover" @click="coverRelieve"></div>
      </div>
      <!--  -->
    </div>
  </div>
</template>




<script>
import Axios from "axios";
export default {
  props: ["pmessage"],
  data() {
    return {
      cover: false,
      selectpage: false,
      addresspage: false,
      quicknav:false,
      provinceList: [],
      cityList: [],
      areaList: [],
      cityDefaultValue: "请选择",
      areaDefaultValue: "",
      provinceMessage: "江苏"
    };
  },
  methods: {
    enterCart() {
      this.cover = true;
      this.selectpage = true;
    },
    addCart() {
      this.enterCart();
    },
    addServe() {
      this.enterCart();
    },
    cancelBtn() {
      this.cover = false;
      this.selectpage = false;
      this.addresspage = false;
    },
    coverRelieve() {
      this.cancelBtn();
      this.quicknav=false;
    },
    addressClick() {
      this.cover = true;
      this.addresspage = true;
    },
    itemClick(item, index) {
      console.log(item, index);
      this.provinceList = item.city;
      this.provinceMessage = item.name;
      // this.provinceList=item.city[index].area;
    },
    commentClick(){
      this.$router.push({
        path:"/comment"
      });
    },
    backMainpage(){
      this.$router.push({
        path:"/"
      })
    },
    moreClick(){
      this.quicknav=true;
      this.cover=true;

    }
  },
  created() {
    let that = this;
    Axios.get("/details_json/address.json").then(function(content) {
      console.log(content.data[5]);
      that.provinceList = content.data;
    });
  }
};
</script>
 



<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.img_container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: blueviolet;
}

.img_container img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.price_number {
  color: red;
  font-weight: bold;
}

#small_number {
  font-size: 0.5rem;
}

.new_yeartag {
  display: inline-block;
  height: 0.875rem;
  margin-left: 0.625rem;
  margin-top: 0.208rem;
  padding: 0 0.417rem;
  border: 0.042rem solid red;
  border-radius: 0.417rem;
  color: red;
  font-size: 0.583rem;
  font-weight: bold;
  text-align: center;
  vertical-align: top;
}

.origin_price {
  margin-left: 0.208rem;
  color: #ccc;
  text-decoration: line-through;
  font-size: 0.5rem;
}

.price {
  padding: 1.25rem 0.417rem 0.625rem 0.417rem;
}

.gray_container {
  display: flex;
  justify-content: space-between;
  padding: 0.417rem 0;
  margin: 0 0.625rem;
  background-color: rgb(246, 246, 246);
  border-radius: 0.25rem;
}

.clickview {
  flex-shrink: 0;
  padding: 0.458rem 0.333rem 0 0;
  font-weight: bold;
  font-size: 0.583rem;
}

.welfare {
  font-size: 0.5rem;
  margin-top: 0.208rem;
}

.title_container {
  white-space: nowrap;
  margin-left: 0.417rem;
}

.member {
  font-size: 0.5rem;
  font-weight: bold;
}

.attention_menu {
  display: flex;
  justify-content: space-between;
}

.media_title {
  margin: 0.625rem 0 0 0.542rem;
}

.attention_img {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.708rem 0.625rem 0 0.625rem;
}

.attention_img img {
  width: 100%;
  height: 100%;
}

.intro_text {
  font-size: 0.75rem;
  font-weight: bold;
}

.net {
  width: 90%;
  margin: 0 5%;
  margin-top: 0.417rem;
  padding-bottom: 0.417rem;
  font-size: 0.583rem;
}

.active {
  display: inline-block;
  width: 0.583rem;
  height: 0.583rem;
  margin-left: 0.625rem;
}

.active img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

.fix {
  width: 100%;
  height: 0.417rem;
  background-color: #eee;
}

.party_active {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0.417rem 0.417rem 0;
}

.right {
  display: inline-block;
  width: 0.583rem;
  height: 0.583rem;
}

.right img {
  width: 100%;
  height: 100%;
}

.seemore {
  position: relative;
  flex-shrink: 0;
  color: #aaa;
  font-size: 0.261rem;
  margin-top: -0.542rem;
  margin-right: 0.833rem;
}

.right_container {
  display: flex;
  align-items: center;
}

.get {
  font-size: 0.261rem;
  vertical-align: top;
}

.red_word {
  color: red;
  font-weight: bold;
}

.coupon_container,
.do_container {
  margin-left: 0.625rem;
  border-bottom: 0.042rem solid #eee;
  font-size: 0.583rem;
}

.gray_color {
  font-size: 0.583rem;
  color: #aaa;
}

.promotion {
  display: inline-block;
  margin-left: 0.625rem;
  margin-right: 0.208rem;
  padding: 0 0.208rem;
  border: 0.042rem solid #fb0;
  background-color: #fefbee;
  border-radius: 0.167rem;
}

.minus_container {
  padding: 0.417rem 0;
}

.full_minus {
  margin-left: 1.75rem;
  padding: 0 0.208rem;
  border: 0.042rem solid #fb0;
  border-radius: 0.167rem;
}

.do {
  padding: 0.417rem 0;
}

.do_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right.second {
  margin-right: 0.625rem;
}

.service_container {
  margin-left: 0.625rem;
}

.has_select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.417rem 0;
}

.bold_text {
  font-weight: bold;
}

.detail {
  margin-left: 0.417rem;
  font-size: 0.583rem;
}

.footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  align-items: center;
  background-color: white;
}

.footer_left {
  display: flex;
}

.icon_item {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
}

.icon_item img {
  width: 100%;
  height: 100%;
}

.button_container {
  flex-shrink: 0;
  padding-left: 0.417rem;
}

.button_container button {
  width: 3.958rem;
  height: 1.333rem;
}
.last_btn {
  display: flex;
  justify-content: center;
}
.last_btn button:first-child {
  flex-grow: 1;
  margin-left: 0.417rem;
  margin-right: 0.208rem;
  height: 1.333rem;
  background-color: rgb(255, 204, 0);
  border-radius: 0.25rem 0 0 0.25rem;
  outline: none;
  border-style: none;
  padding: 0 0.625rem;
}
.last_btn button:last-child {
  flex-grow: 1;
  margin-right: 0.417rem;
  background-color: #ff6700;
  outline: none;
  border-style: none;
  border-radius: 0 0.25rem 0.25rem 0;
}

.qucik {
  width: 3.958rem;
  height: 1.333rem;
  margin-left: 0.333rem;
  background-color: rgb(255, 204, 0);
  border-radius: 0.25rem 0 0 0.25rem;
  outline: none;
  border-style: none;
}

.join_cart {
  width: 3.958rem;
  height: 1.333rem;
  margin-left: 0.167rem;
  margin-right: 0.208rem;
  background-color: #ff6700;
  color: white;
  outline: none;
  border-style: none;
  border-radius: 0 0.25rem 0.25rem 0;
}

.details_page {
  margin-bottom: 2rem;
}

.red_circle {
  position: absolute;
  left: 1.167rem;
  top: 0.125rem;
  width: 1.167rem;
  height: 0.75rem;
  color: white;
  font-size: 0.542rem;
  background-color: rgb(255, 68, 34);
  border-radius: 0.458rem;
  text-align: center;
  line-height: 0.625rem;
}
.cartbox {
  position: relative;
}
.two {
  margin-left: 0.417rem;
}
.back {
  position: fixed;
  top: 10px;
  left: 10px;

  width: 1.167rem;
  height: 1.167rem;
  background: url(../../assets/detailsImg/detailspage/left.png) no-repeat;
  background-size: 1.167rem 1.167rem;
  z-index: 10000;
}

.more {
  position:fixed;
  top: 10px;
  left: 90%;
  width: 1.167rem;
  height: 1.167rem;
  background: url(../../assets/detailsImg/detailspage/more.png) no-repeat;
  background-size: 1.167rem 1.167rem;
  z-index: -4;
}
/* 遮罩层 */
.cover {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 888;
}
.cart_select,
.address_select {
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

.interlayer {
  flex-shrink: 0;
  width: 5rem;
  height: 5rem;
}
.cart_select_header {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 0 0 0.417rem 0;
  border-bottom: 0.042rem solid #eee;
}
.cart_select_middle,
.address_middle {
  overflow: auto;
  flex-grow: 1;
}
.cart_select_footer {
  flex-shrink: 0;
}
.cart_select_price {
  margin-top: 1.667rem;
}
.change_price {
  color: red;
  font-size: 0.583rem;
}
.coding {
  margin-left: 0.167rem;
  color: #aaa;
  font-size: 0.5rem;
}
.cart_select_text {
  font-size: 0.5rem;
  margin: 0.417rem 0.625rem 0 0.167rem;
}
.capacity {
  padding: 0.25rem 0 0.083rem 0.417rem;
  font-size: 0.5rem;
}
.select_label {
  display: inline-block;
  background-color: rgb(246, 246, 246);
  padding: 0.208rem 0.5rem 0.208rem 0.625rem;
  margin-right: 0.25rem;
  margin-top: 0.25rem;
  border-radius: 0.167rem;
  font-size: 0.5rem;
}
.mini_img {
  display: inline-block;
  width: 0.959rem;
  height: 0.959rem;
  margin-right: 0.25rem;
  vertical-align: middle;
}
.mini_img img {
  width: 100%;
  height: 100%;
}
.cart_select_name {
  font-size: 0.5rem;
}
.kind {
  margin-left: 0.417rem;
  padding: 0.042rem 0 0.25rem 0;
  border-bottom: 0.042rem solid #eee;
}
.cart_select_number {
  display: flex;
  justify-content: space-between;
  margin: 0.417rem 0.417rem 0 0.417rem;
  font-size: 0.5rem;
}
.select_wrap_container {
  border: 0.042rem solid #aaa;
  border-radius: 15px;
}
.plus,
.minus {
  float: left;
  width: 0.833rem;
  height: 0.833rem;
  background-color: #ddd;
  line-height: 0.833rem;
  text-align: center;
  font-style: normal;
  border-radius: 50%;
  margin-top: 0.125rem;
}
.minus {
  margin-left: 0.083rem;
}
.plus {
  margin-right: 0.083rem;
}
.input_container {
  float: left;
  width: 2.083rem;
  height: 1.042rem;
  line-height: 1.042rem;
  border-width: 0;
  text-align: center;
  outline: none;
}

.number_text {
  margin-top: 0.125rem;
}
.addmoney_service {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.417rem;
}
.buy_container {
  margin-left: 0.417rem;
}
.draw {
  font-size: 0.542rem;
}
.buy_add_service {
  font-size: 0.583rem;
}
.add_number_left {
  display: inline-block;
  position: relative;
  padding: 0 0.167rem 0.042rem 0.167rem;
  margin-left: 0.417rem;
  background-color: rgb(255, 204, 0);
  font-size: 0.5rem;
}
.opacity {
  display: inline-block;
  position: relative;
  background-color: rgb(255, 250, 224);
  margin-left: -0.083rem;
  padding: 0 0.125rem;
  border: 0.042rem solid rgb(255, 204, 0);
  border-right: transparent;
  font-size: 0.5rem;
}
.left_bgd {
  display: inline-block;
  position: absolute;
  left: -0.542rem;
  width: 100%;
  height: 0.708rem;
  background: url(../../assets/detailsImg/shopcartImg/leftbgd.png) center center
    no-repeat;
  z-index: -1;
}
.right_bgd {
  display: inline-block;
  position: absolute;
  top: -0.042rem;
  left: 0.625rem;
  width: 100%;
  height: 0.75rem;
  background: url(../../assets/detailsImg/shopcartImg/rightbgd.png) center
    center no-repeat;
  z-index: -1;
}
.all_two {
  display: inline-block;
  color: #aaa;
  font-size: 0.5rem;
}
.right_alltwo {
  margin-right: 0.625rem;
}
.right_alltwo img {
  vertical-align: middle;
  margin-left: 0.125rem;
}
.changenot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.417rem;
  margin-top: 1.042rem;
}
.not_img {
  flex-shrink: 0;
  display: inline-block;
  width: 0.625rem;
  height: 0.625rem;
}
.not_img img {
  width: 100%;
  height: 100%;
}
.not_text {
  margin-left: 0.208rem;
  font-size: 0.625rem;
}
.protect_text {
  margin-left: 0.208rem;
  color: #aaa;
  font-size: 0.5rem;
}
.unknow {
  flex-shrink: 0;
  display: inline-block;
  width: 0.667rem;
  height: 0.667rem;
  margin-right: 0.417rem;
}
.unknow img {
  width: 100%;
  height: 100%;
}
.see_details {
  margin-right: 0.208rem;
  font-size: 0.5rem;
  color: blue;
}
.options_plan {
  padding: 0.208rem 0.625rem 0.208rem 0.833rem;
  margin-right: 0.208rem;
  font-size: 0.5rem;
  background-color: rgb(246, 246, 246);
  border-radius: 0.167rem;
}

.top_line {
  display: flex;
  justify-content: space-between;
  margin-left: 0.417rem;
  margin-top: 0.417rem;
}
.ig {
  margin-right: 0.625rem;
}
.foot_line {
  margin-top: 0.417rem;
  margin-left: 0.417rem;
}
.cart_select_footer {
  height: 3.541rem;
}
.warn {
  font-size: 0.5rem;
  color: #aaa;
  line-height: 1.75rem;
}
b {
  color: red;
}
.noname {
  height: 1.75rem;
  text-align: center;
}
.cancel_btn {
  display: block;
  float: right;
  width: 0.625rem;
  height: 0.625rem;
  margin-right: 0.417rem;
}
.cancel_btn img {
  width: 100%;
  height: 100%;
}

.address_select_title {
  padding: 0.36rem 0;
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
  z-index: 9999;
}
.six_head {
  display: flex;
  justify-content: space-between;
}
.r_icon {
  width: 0.583rem;
  height: 0.583rem;
  margin-right: 0.625rem;
  margin-top: 2px;
  background: url(../../assets/detailsImg/detailspage/right.png) center center
    no-repeat;
  background-size: 0.583rem 0.583rem;
}
.r_icon_ {
  width: 0.583rem;
  height: 0.583rem;
  margin-right: 0.625rem;
  margin-top: 10px;
  background: url(../../assets/detailsImg/detailspage/right.png) center center
    no-repeat;
  background-size: 0.583rem 0.583rem;
}
.six_right {
  display: flex;
}
.full_good {
  margin-right: 0.417rem;
  color: #aaa;
  font-size: 0.28rem;
}
.fifth {
  font-size: 0.6rem;
  font-weight: bold;
  
}
.kkk {
  display: flex;
}
.people {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.people_img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: url(../../assets/detailsImg/commentImg/user.jpg) center center;
  background-size: 1rem 1rem;
}
.people_left {
  display: flex;
  align-items: center;
  margin-top: 0.833rem;
}
.people_name {
  margin-left: 0.208rem;
  font-size: 0.24rem;
}
.people_star {
  width: 2.72rem ;
  height: 0.48rem;
  margin-right: 0.625rem;
  margin-top: 0.625rem;
  background: url(../../assets/detailsImg/commentImg/yellowstar.png) center
    center no-repeat;
  background-size: 2.72rem 0.48rem;
}

.six_container{
  padding: 0px 0 0.625rem 0.625rem;
  background-color: white;
  margin-top: 0.417rem;
}
.gray_box{
  background-color: #eee;
}
.people_say{
  margin: 0.417rem 0 0 0.125rem;
  font-size: 0.583rem;
}
.show_container{
 margin: 0.417rem 0 0 0.208rem;
}
.see_all_container button{
    width: 4.8rem;
    height: 1.2rem;
    background-color: white;
    border-radius: .12rem;
    font-size: .26rem;
    outline: none;
    border: 0.042rem solid#ccc;
}
.see_all_container{
  margin-top: 0.208rem;
  text-align: center;
}
.quick_nav{
  position: fixed;
  width: 96%;
  height: 9.042rem;
  margin: 1.458rem 2%;
  background-color: white;
  border-radius: 0.333rem;
}
.tranigle{
  position: absolute;
  left: 321px;
  top: -14px;
  width: 0;
  height: 0;
  border-width:8px ;
  border-style: solid;
  border-color: transparent transparent white transparent;
}
.quick_text{
  padding: 0.625rem 0.417rem;
  font-size: 0.583rem;
}
.five_box{
  /* width: 13rem; */
  display: flex;
  flex-wrap: wrap;

}
.quick_item{
  width: 2.88rem;
  height: 2.76rem;
  margin-left: 0.583rem;
  background-color: #eee;
  border-radius: 0.25rem;
}
.five_box .quick_item:last-child{
  margin-top: 0.583rem;
}
.main_text,
.search_text,
.all_classify,
.myeasy,
.mycart_text{
  margin-top: 0.125rem;
  font-size: 0.583rem;
  text-align: center;
}
.main_bgd{
  height: 1.43rem;
  width: 100%;
  background: url(../../assets/detailsImg/detailspage/main.png) center bottom no-repeat;
  background-size: 0.958rem 0.958rem;
}
.search_bgd{
  height: 1.43rem;
  width: 100%;
  background: url(../../assets/detailsImg/detailspage/search.png) center bottom no-repeat;
  background-size: 0.958rem 0.958rem;
}
.mycart_bgd{
  height: 1.43rem;
  width: 100%;
  background: url(../../assets/detailsImg/detailspage/yellowcart.png) center bottom no-repeat;
  background-size: 0.958rem 0.958rem;
}
.myeasy_bgd{
  height: 1.43rem;
  width: 100%;
  background: url(../../assets/detailsImg/detailspage/my.png) center bottom no-repeat;
  background-size: 0.958rem 0.958rem;
}
.all_bgd{
  height: 1.43rem;
  width: 100%;
  background: url(../../assets/detailsImg/detailspage/classify.png) center bottom no-repeat;
  background-size: 0.958rem 0.958rem;
}
</style>