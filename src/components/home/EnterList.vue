<template>
    <div class="enter-list">
        <div class="line">
            <div class="content">
                <img src="../../assets/home/channel/1.webp" alt="">
                <span>天天低价</span>
            </div>
            <div class="content">
                <img src="../../assets/home/channel/2.webp" alt="">
                <span>苏宁超市</span>
            </div>
            <div class="content">
                <img src="../../assets/home/channel/3.webp" alt="">
                <span>苏宁拼购</span>
            </div>
            <div class="content">
                <img src="../../assets/home/channel/4.webp" alt="">
                <span>5G手机</span>
            </div>
            <div class="content">
                <img src="../../assets/home/channel/5.webp" alt="">
                <span>苏宁家电</span>
            </div>
        </div>
        <div class="line">
            <div class="content">
                <img src="../../assets/home/channel/6.webp" alt="">
                <span>免费水果</span>
            </div>
            <div class="content">
                <img src="../../assets/home/channel/7.webp" alt="">
                <span>赚钱消消乐</span>
            </div>
            <div class="content">
                <img src="../../assets/home/channel/8.webp" alt="">
                <span>签到有礼</span>
            </div>
            <div class="content">
                <img src="../../assets/home/channel/9.webp" alt="">
                <span>领劵中心</span>
            </div>
            <div class="content">
                <img src="../../assets/home/channel/10.webp" alt="">
                <span>更多频道</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.line{
    height: 50%;
    display: flex;
}
.content{
    flex-grow: 1;
    width: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
img{
    width: 1.68rem;
    height: 1.68rem;
}
span{
    font-size: .44rem;
    color: #666;
    margin-top: .1rem;
}
</style>