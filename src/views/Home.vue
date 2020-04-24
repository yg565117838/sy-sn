<template>
    <div class="home">
        <div class="nav">
            <div class="nav-icon">
                <img src="../assets/home/icon/1.png" alt="">
                <img src="../assets/home/icon/2.png" alt="">
            </div>
            <div class="nav-search">
                <div class="nav-search-content">
                    <img src="../assets/home/icon/3.png" alt="">
                    <input type="text" placeholder="冰洗抢300元神券">
                </div>
            </div>
        </div>
        <div class="banner1">
            <my-swiper1></my-swiper1>
        </div>
        <enter-list class="enter-list"></enter-list>
        <div class="new-img">
            <img src="../assets/home/new/1.png" alt="">
            <img src="../assets/home/new/2.png" alt="">
            <img src="../assets/home/new/3.png" alt="">
        </div>
        <div class="big-blank"></div>
        <channel-warp></channel-warp>
        <div class="space-px"></div>
        <channel-warp></channel-warp>
        <div class="space-px"></div>
        <for-you></for-you>

        <div class="footer">
            <router-link to="/" class="go">
                <img src="../assets/home/icon/5.png" alt="">
                <span>猜你喜欢</span>
            </router-link>
            <router-link to="/classification" class="go">
                <img src="../assets/home/icon/7.png" alt="">
                <span>分类</span>
            </router-link>
            <router-link to="/mustgrablist" class="go">
                <img src="../assets/home/icon/8.png" alt="">
                <span>必抢清单</span>
            </router-link>
            <router-link to="/shoppingcart" class="go">
                <img src="../assets/home/icon/9.png" alt="">
                <span>购物车</span>
            </router-link>
            <router-link to="/myebay" class="go">
                <img src="../assets/home/icon/10.png" alt="">
                <span>我的易购</span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Banner1 from '../components/home/Banner1.vue';
import EnterList from '../components/home/EnterList.vue';
import ChannelWarp from '../components/home/ChannelWarp.vue';
import ForYou from '../components/home/ForYou.vue';
export default {
    components:{
        'my-swiper1':Banner1,
        'enter-list':EnterList,
        'channel-warp':ChannelWarp,
        'for-you':ForYou
    }
}
</script>
<style scoped>
.home{
    background: rgb(244, 244, 244);
    padding-bottom: 2rem;
}
.nav{
    height: 3.52rem;
    background-image: url(../assets/home/backgroud/1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0 .68rem;
}
.nav-icon{
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-icon img{
    width: .72rem;
    height: 1.2rem;
}
.nav-search{
    height: 50%;
    padding: .2rem 0;
}
.nav-search-content{
    height: 100%;
    background: #fff;
    border-radius: .65rem;
    display: flex;
    align-items: center;
}
.nav-search-content img{
    width: .72rem;
    height: .72rem;
    margin-left: .4rem;
    margin-right: .2rem;
    flex-shrink: 0;
}
.nav-search-content input{
    flex-grow: 1;
    margin-right: .4rem;
    font-size: .56rem;
    color: #999;
    outline: none;
    border: none;
}
.banner1{
    height: 5.2rem;
    background-image: url(../assets/home/backgroud/2.png);
    background-repeat: no-repeat;
    background-size: 100% 150%;
    padding: 0 .68rem;
}
.enter-list{
    height: 6.4rem;
    padding-bottom: .68rem;
}
.new-img{
    height: 4.68rem;
    margin: .48rem 0 0;
    display: flex;
    justify-content: space-between;
}
.new-img img{
    height: 4.68rem;
    width: 3.74rem;
}
.new-img img:nth-child(1){
    width: 7.4rem;
}
.big-blank{
    height: .48rem;
}
.space-px{
    height: 1px;
    width: 100%;
    background: #f2f2f2;
}




.footer{
    box-sizing: content-box;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    border-top: 1px solid #eee;
    background: #fff;
    margin: 0 auto;
    width: 15rem;
    height: 2rem;
}
.go{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 0;
    text-decoration: none;
    align-items: center;
    justify-content: center;
}
.go img{
    width: .96rem;
    height: .96rem;
}
.go span{
    color: #666;
    font-size: .4rem;
}
.go:first-child span{
    color: #000;
    font-weight: bold;
}
</style>