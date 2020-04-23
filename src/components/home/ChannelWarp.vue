<template>
    <div class="channerl-warp">
        <channel-content></channel-content>
        <div class="hor-gap"></div>
        <channel-content></channel-content>
    </div>
</template>
<script>
import ChannelContent from './ChannelContent.vue';
export default {
    components:{
        'channel-content':ChannelContent
    }
}
</script>
<style scoped>
.channerl-warp{
    width: 14.04rem;
    height: 5.16rem;
    margin: 0 auto;
    overflow: hidden;
    background: #fff;
    display: flex;
}
.hor-gap{
    width: 1px;
    height: 100%;
    background: #f2f2f2;
}
</style>