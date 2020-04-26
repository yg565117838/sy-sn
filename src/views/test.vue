<template>
<div>
  <el-button :plain="true" @click="open2" >成功</el-button>
  <el-button :plain="true" @click="open3">警告</el-button>
  <el-button :plain="true" @click="open1">消息</el-button>
  <el-button :plain="true" @click="open4">错误</el-button>
</div>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$message('加入购物车成功');
      },
      open2() {
        this.$message({
          message: '加入购物车成功',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      }
    }
  }
</script>
<style >
.el-message--success{
    background-color: black !important;
    text-align: center;
}
.el-message__content{
    color: white !important;
}
.el-icon-success::before{
    content:"" !important;
}
.el-message{
    justify-content: center;
    padding: 15px !important;
}
#a{
    background-color: #ff6700;
}
    
</style>