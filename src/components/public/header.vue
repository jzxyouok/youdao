<template>
    <nav class="fix-nav title-font">
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fix-nav {
        position: fixed;
        top: 0;
        left: 0;
        /*居中显示*/
        /*left: 50%;*/
        /*max-width: 640px;*/
        /*min-width: 320px;*/
        /*transform: translateX(-50%);*/

        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background-color: #398dee;
        z-index: 999;
    }
    .avatar-box {
        position: absolute;
        top: 14px;
        left: 14px;
    }
    .avatar {
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 16px;
    }
    .type-box {
        color: white;
        padding: 5px;
        opacity: .6;
    }
    .active-type {
        opacity: 1;
        border-bottom: 1px solid;
    }

</style>
