<template>
    <nav class="fix-nav">
        <div class="avatar-box">
            <img src="../../assets/avatar.jpg" class="avatar" alt="">
        </div>

        <span class="current-type type-box">最新</span>
        <span class="active-type type-box">全部</span>
    </nav>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fix-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color: #398dee;
        z-index: 999;
    }
    .avatar-box {
        position: absolute;
        top: 6px;
        left: 6px;
    }
    .avatar {
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 16px;
    }
    .type-box {
        color: white;
        font-size: 16px;
        padding: 5px;
        opacity: .6;
    }
    .active-type {
        opacity: 1;
        border-bottom: 1px solid;
    }

</style>
