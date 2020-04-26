<template>
    <div class="search">
        <div class="header">
            <img src="../assets/search/1.png" alt="" class="back-icon" @click="back">
            <div class="header-search">
                <img src="../assets/search/2.png" alt="">
                <input type="text" placeholder="冰洗抢300元神券">
                <img src="../assets/search/3.png" alt="">
            </div>
            <span>搜索</span>
        </div>
        <div class="content" v-show="false">
            <div class="content-title">
                <p>
                    搜索
                    <span class="content-title-span">‘1’</span>
                    相关店铺
                </p>
                <img src="../assets/search/2.png" alt="">
            </div>
            <div class="search-content">
                <p>
                    <b>1</b>
                    <span>060</span>
                </p>
                <p>
                    <span>11</span>
                    <span>2222222222222222222222222222</span>
                </p>
            </div>
            <div class="search-content">
                <p>
                    <b>1</b>
                    <span>060</span>
                </p>
                <p>
                    <span>11</span>
                    <span>2222222222222222222222222222</span>
                </p>
            </div>
        </div>
        <div class="body" v-show="true">
            <p class="body-title">热门搜索</p>
            <div class="body-list">
                <div class="body-content">养生壶</div>
                <div class="body-content">养生壶</div>
                <div class="body-content">养生壶</div>
                <div class="body-content">养生壶</div>
                <div class="body-content">养生壶</div>
                <div class="body-content">养生壶</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            window.history.go(-1);
        }
    }
}
</script>
<style scoped>
.search{
    background: #fff;
    height: 100%;
}
.header{
    height: 1.76rem;
    font-size: .6rem;
    box-shadow: 0 1px 1px #DCDCDC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .68rem;
}
.back-icon{
    width: .4rem;
    height: .8rem;
}
.header-search{
    width: 11rem;
    height: 1.28rem;
    border-radius: 4px;
    background: #eee;
    display: flex;
    align-items: center;
}
.header-search img:first-child{
    width: .6rem;
    height: .6rem;
    margin-left: .4rem;
}
.header-search img:last-child{
    width: .6rem;
    height: .6rem;
    margin-right: .1rem;
}
.header-search input{
    margin: 0 .2rem;
    outline: none;
    border: none;
    flex-grow: 1;
    font-size: .56rem;
    color: #999;
    background: #eee;
}
.header span{
    color: #353d44;
    font-size: .6rem;
}




.content{
    height: calc(100% - 1.76rem);
}
.content-title{
    height: 1.76rem;
    box-shadow: 0 1px 1px #DCDCDC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .68rem;
    color: #999;
    font-size: .56rem;
}
.content-title-span{
    max-width: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: bold;
    color: #353D44;
}
.content-title img{
    width: .6rem;
    height: .6rem;
}
.search-content{
    height: 1.76rem;
    box-shadow: 0 1px 1px #DCDCDC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .68rem;
    color: #999;
    font-size: .56rem;
}
.search-content p{
    display: flex;
    align-items: center;
}
.search-content p:first-child{
    color: #333;
    font-size: .48rem;
}
.search-content p:last-child span{
    display: inline-block;
    max-width: 4.14rem;
    padding: 0 .4rem;
    height: 1rem;
    line-height: 1rem;
    font-size: .48rem;
    color: #999;
    background: #F2F2F2;
    border-radius: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: .4rem;
}



.body{
    height: calc(100% - 1.76rem);
    padding: .8rem .56rem;
    margin: 0;
}
.body-title{
    font-size: .6rem;
    height: .96rem;
    line-height: .96rem;
    color: #999;
}
.body-list{
    display: flex;
    flex-wrap: wrap;
}
.body-content{
    text-align: center;
    color: #333;
    width: 31.5%;
    margin: .4rem 2.75% 0 0;
    height: 1.2rem;
    background: #F2F2F2;
    font-size: .52rem;
    line-height: 1.2rem;
    border-radius: 4px;
    word-break: keep-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0 .3rem;
}
.body-content:nth-child(3n){
    margin-right: 0;
    color: #f60;
}
</style>