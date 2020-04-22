<template>
  <div>
    <div class="details_page">
      <!-- 购物车选择页 -->
      <div class="cart_select" v-if="selectpage">
        <!-- 头部 -->
        <div class="cart_select_header">
          <div class="interlayer"></div>
          <div class="cancel_box">
            <div class="cancel_btn" @click="cancelBtn">
              <img src="../../assets/detailsImg/detailspage/cancel.png" alt="">
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
              <i class="minus">-</i>
              <input type="text" class="input_container" value="1" />
              <i class="plus">+</i>
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
        <div class="back">
          <img src="../../assets/detailsImg/detailspage/left.png" alt />
        </div>
        <!-- 更多 -->
        <div class="more">
          <img src="../../assets/detailsImg/detailspage/more.png" alt />
        </div>
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
              参加活动，预计到手价
              <span class="red_word">209.00元</span>
            </span>
          </div>
          <div class="right_container">
            <span class="seemore">查看更多</span>
            <i class="right">
              <img src="../../assets/detailsImg/detailspage/right.png" alt />
            </i>
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
        <div class="right second">
          <img src="../../assets/detailsImg/detailspage/right.png" alt />
        </div>
      </div>
      <div class="fix"></div>
      <div class="service_container">
        <div class="has_select">
          <div class="ser_container">
            <span class="gray_color">已选</span>
            <span class="bold_text detail">4.8L双圆灶 1件 可选增值服务</span>
          </div>
          <div class="right second" @click="addServe">
            <img src="../../assets/detailsImg/detailspage/right.png" alt />
          </div>
        </div>
        <div class="has_select">
          <div class="ser_container">
            <span class="gray_color">送至</span>
            <span class="detail">江苏 南京 玄武区</span>
          </div>
          <div class="right second">
            <img src="../../assets/detailsImg/detailspage/right.png" alt />
          </div>
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
          <div class="right second">
            <img src="../../assets/detailsImg/detailspage/right.png" alt />
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
        <div class="cover" v-if="cover"></div>
      </div>
      <!--  -->
    </div>
  </div>
</template>




<script>
export default {
data(){
  return {
    cover:false,
    selectpage:false
  }
},
methods:{
  enterCart(){
 this.cover=true;
 this.selectpage=true;
  },
  addCart(){
  this.enterCart();
  },
  addServe(){
    this.enterCart();
  },
  cancelBtn(){
    this.cover=false;
    this.selectpage=false;
  }
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
  font-size: 1.5em;
  font-weight: bold;
}

#small_number {
  font-size: 0.8em;
}

.new_yeartag {
  display: inline-block;
  height: 21px;
  margin-left: 0.543rem;
  margin-top: 5px;
  padding: 0 10px;
  border: 1px solid red;
  border-radius: 10px;
  color: red;
  font-size: 0.9em;
  font-weight: bold;
  text-align: center;
  vertical-align: top;
}

.origin_price {
  margin-left: 5px;
  color: #ccc;
  text-decoration: line-through;
}

.price {
  padding: 30px 10px 0.543rem 10px;
}

.gray_container {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin: 0 0.543rem;
  background-color: rgb(246, 246, 246);
  border-radius: 6px;
}

.clickview {
  flex-shrink: 0;
  padding: 11px 8px 0 0;
  font-weight: bold;
  font-size: 0.507rem;
}

.welfare {
  font-size: 0.435rem;
  margin-top: 5px;
}

.title_container {
  white-space: nowrap;
  margin-left: 10px;
}

.member {
  font-size: 0.435rem;
  font-weight: bold;
}

.attention_menu {
  display: flex;
  justify-content: space-between;
}

.media_title {
  margin: 0.543rem 0 0 0.471rem;
}

.attention_img {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  margin: 17px 0.543rem 0 0.543rem;
}

.attention_img img {
  width: 100%;
  height: 100%;
}

.intro_text {
  font-size: 1.1em;
  font-weight: bold;
}

.net {
  width: 90%;
  margin: 0 5%;
  margin-top: 10px;
  padding-bottom: 10px;
}

.active {
  display: inline-block;
  width: 0.507rem;
  height: 0.507rem;
  margin-left: 0.543rem;
}

.active img {
  width: 100%;
  height: 100%;
}

.fix {
  width: 100%;
  height: 10px;
  background-color: #eee;
}

.party_active {
  display: flex;
  justify-content: space-between;
  padding: 0.543rem 10px 10px 0;
}

.right {
  display: inline-block;
  width: 0.507rem;
  height: 0.507rem;
}

.right img {
  width: 100%;
  height: 100%;
}

.seemore {
  flex-shrink: 0;
  display: block;
  color: #aaa;
  font-size: 0.507rem;
}

.right_container {
  display: flex;
}

.get {
  flex-grow: 1;
  font-size: 0.507rem;
}

.red_word {
  color: red;
  font-weight: bold;
}

.coupon_container,
.do_container {
  margin-left: 0.543rem;
  border-bottom: 1px solid #eee;
  font-size: 0.507rem;
}

.gray_color {
  font-size: 0.507rem;
  color: #aaa;
}

.promotion {
  display: inline-block;
  margin-left: 0.543rem;
  margin-right: 5px;
  padding: 0 5px;
  border: 1px solid #fb0;
  background-color: #fefbee;
  border-radius: 4px;
}

.minus_container {
  padding: 10px 0;
}

.full_minus {
  margin-left: 42px;
  padding: 0 5px;
  border: 1px solid #fb0;
  border-radius: 4px;
}

.do {
  padding: 10px 0;
}

.do_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right.second {
  margin-right: 0.543rem;
}

.service_container {
  margin-left: 0.543rem;
}

.has_select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.bold_text {
  font-weight: bold;
}

.detail {
  margin-left: 10px;
  font-size: 0.507rem;
}

.footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0px;
  align-items: center;
  background-color: white;
}

.footer_left {
  display: flex;
}

.icon_item {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
}

.icon_item img {
  width: 100%;
  height: 100%;
}

.button_container {
  flex-shrink: 0;
  padding-left: 10px;
}

.button_container button {
  width: 95px;
  height: 32px;
}
.last_btn{
  display: flex;
  justify-content: center;
}
.last_btn button:first-child{
  flex-grow: 1;
  margin-left: 10px;
  margin-right: 5px;
  height: 32px;
  background-color: rgb(255, 204, 0);
  border-radius: 6px 0 0 6px;
  outline: none;
  border-style: none;
  padding: 0 0.543rem;
}
.last_btn button:last-child{
  flex-grow: 1;
  margin-right: 10px;
   background-color: #ff6700;
   outline: none;
  border-style: none;
  border-radius: 0 6px 6px 0;
}

.qucik {
  width: 95px;
  height: 32px;
  margin-left: 8px;
  background-color: rgb(255, 204, 0);
  border-radius: 6px 0 0 6px;
  outline: none;
  border-style: none;
}

.join_cart {
  width: 95px;
  height: 32px;
  margin-left: 4px;
  margin-right: 5px;
  background-color: #ff6700;
  color: white;
  outline: none;
  border-style: none;
  border-radius: 0 6px 6px 0;
}

.details_page {
  margin-bottom: 48px;
}

.red_circle {
  position: absolute;
  left: 28px;
  top: 3px;
  width: 28px;
  height: 18px;
  color: white;
  font-size: 0.471rem;
  background-color: rgb(255, 68, 34);
  border-radius: 11px;
  text-align: center;
  line-height: 0.543rem;
}
.cartbox {
  position: relative;
}
.two {
  margin-left: 10px;
}
.back {
  position: absolute;
  top: 8px;
  left: 0.543rem;
  width: 31px;
  height: 31px;
}
.back img,
.more img {
  width: 100%;
  height: 100%;
}
.more {
  position: absolute;
  top: 8px;
  right: 10px;
  width: 31px;
  height: 31px;
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
.cart_select {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0.5%;
  bottom: 0.5%;
  width: 99%;
  height: 450px;
  background-color: white;
  z-index: 999;
  border-radius: 8px;
}
.interlayer {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
}
.cart_select_header {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #eee;
}
.cart_select_middle {
  overflow: auto;
  flex-grow: 1;
}
.cart_select_footer {
  flex-shrink: 0;
}
.cart_select_price {
  margin-top: 40px;
}
.change_price {
  color: red;
  font-size: 0.507rem;
}
.coding {
  margin-left: 4px;
  color: #aaa;
  font-size: 0.435rem;
}
.cart_select_text {
  font-size: 0.435rem;
  margin: 10px 0.543rem 0 4px;
}
.capacity {
  padding: 6px 0 2px 10px;
  font-size: 0.435rem;
}
.select_label {
  display: inline-block;
  background-color: rgb(246, 246, 246);
  padding: 5px 0.435rem 5px 0.543rem;
  margin-right: 6px;
  margin-top: 6px;
  border-radius: 4px;
}
.mini_img {
  display: inline-block;
  width: 23px;
  height: 23px;
  margin-right: 6px;
  vertical-align: middle;
}
.mini_img img {
  width: 100%;
  height: 100%;
}
.cart_select_name {
  font-size: 0.435rem;
}
.kind {
  margin-left: 10px;
  padding: 1px 0 6px 0;
  border-bottom: 1px solid #eee;
}
.cart_select_number {
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 0 10px;
  font-size: 0.435rem;
}
.minus,
.plus {
  display: inline-block;
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: rgb(246, 246, 246);
  text-align: center;
  vertical-align: middle;
  font-style: normal;
  border-radius: 50%;
}
.minus {
  left: 5px;
  bottom: 15%;
}
.plus {
  right: 5px;
  bottom: 15%;
}
.select_wrap_container {
  position: relative;
}
.input_container {
  width: 100px;
  height: 28px;
  padding-left: 45%;
  border-radius: 0.543rem;
  outline: none;
  border: 1px solid #bbb;
  font-size: 0.435rem;
}
.number_text {
  margin-top: 3px;
}
.addmoney_service {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.buy_container {
  margin-left: 10px;
}
.draw {
  font-size: 13px;
}
.buy_add_service {
  font-size: 0.507rem;
}
.add_number_left {
  display: inline-block;
  position: relative;
  padding: 0px 4px 1px 4px;
  margin-left: 10px;
  background-color: rgb(255, 204, 0);
  font-size: 0.435rem;
}
.opacity {
  display: inline-block;
  position: relative;
  background-color: rgb(255, 250, 224);
  margin-left: -2px;
  padding: 0 3px;
  border: 1px solid rgb(255, 204, 0);
  border-right: transparent;
  font-size: 0.435rem;
}
.left_bgd {
  display: inline-block;
  position: absolute;
  left: -13px;
  width: 100%;
  height: 17px;
  background: url(../../assets/detailsImg/shopcartImg/leftbgd.png) center center
    no-repeat;
  z-index: -1;
}
.right_bgd {
  display: inline-block;
  position: absolute;
  top: -1px;
  left: 0.543rem;
  width: 100%;
  height: 18px;
  background: url(../../assets/detailsImg/shopcartImg/rightbgd.png) center
    center no-repeat;
  z-index: -1;
}
.all_two {
  display: inline-block;
  color: #aaa;
  font-size: 0.435rem;
}
.right_alltwo {
  margin-right: 0.543rem;
}
.right_alltwo img {
  vertical-align: middle;
  margin-left: 3px;
}
.changenot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-top: 25px;
}
.not_img {
  flex-shrink: 0;
  display: inline-block;
  width: 0.543rem;
  height: 0.543rem;
  vertical-align: middle;
}
.not_img img {
  width: 100%;
  height: 100%;
}
.not_text {
  margin-left: 5px;
  vertical-align: middle;
}
.protect_text {
  margin-left: 5px;
  color: #aaa;
  font-size: 0.435rem;
  vertical-align: bottom;
}
.unknow {
  flex-shrink: 0;
  display: inline-block;
  width: 0.58rem;
  height: 0.58rem;
  margin-right: 10px;
  vertical-align: middle;
}
.unknow img {
  width: 100%;
  height: 100%;
}
.see_details {
  margin-right: 5px;
  font-size: 0.435rem;
  color: blue;
  vertical-align: bottom;
}
.options_plan {
  padding: 5px 0.543rem 5px 20px;
  margin-right: 5px;
  font-size: 0.435rem;
  background-color: rgb(246, 246, 246);
  border-radius: 4px;
}

.top_line {
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 10px;
}
.ig {
  margin-right: 0.543rem;
}
.foot_line {
  margin-top: 10px;
  margin-left: 10px;
}
.cart_select_footer {
  height: 85px;
}
.warn {
  font-size: 0.435rem;
  color: #aaa;
  line-height: 42px;
}
b {
  color: red;
}
.noname {
  height: 42px;
  text-align: center;
}
.cancel_btn{
  display: inline-block;
  width: 0.543rem;
  height: 0.543rem;

}
.cancel_btn img{
  width: 100%;
  height: 100%;
}
.cancelbox{
  position: relative;
}
.cancel_btn{
  position:absolute;
  top: 5px;
  right: 0.543rem;
}
</style>