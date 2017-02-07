<template>
    <div class="yd-list">
        <section class="list-item">
            <p class="item-theme">
                <i class="icon-folder"></i>
                <span class="item-title">webpack中文资料</span>
            </p>
            <p class="item-mark"><span class="item-time">2017/02/07</span><span class="item-count">255字</span></p>
        </section>
        <section class="list-item">
            <p class="item-theme">
                <i class="icon-folder"></i>
                <span class="item-title">手机启动APP</span>
            </p>
            <p class="item-mark"><span class="item-time">2017/02/07</span><span class="item-count">255字</span></p>
        </section>
        <section class="list-item">
            <p class="item-theme">
                <i class="icon-folder"></i>
                <span class="item-title">如何看待知乎</span>
            </p>
            <p class="item-mark"><span class="item-time">2017/02/07</span><span class="item-count">255字</span></p>
        </section>
        <section class="list-item">
            <p class="item-theme">
                <i class="icon-folder"></i>
                <span class="item-title">十大经典排序算法之JavaScript实现dasdsaasdsadsadsadsdasdasda</span>
            </p>
            <p class="item-mark"><span class="item-time">2017/02/07</span><span class="item-count">255字</span></p>
        </section>
        <section class="list-item">
            <p class="item-theme">
                <i class="icon-folder"></i>
                <span class="item-title">如何看待知乎</span>
            </p>
            <p class="item-mark"><span class="item-time">2017/02/07</span><span class="item-count">255字</span></p>
        </section>
        <section class="list-item">
            <p class="item-theme">
                <i class="icon-folder"></i>
                <span class="item-title">十大经典排序算法之JavaScript实现dasdsaasdsadsadsadsdasdasda</span>
            </p>
            <p class="item-mark"><span class="item-time">2017/02/07</span><span class="item-count">255字</span></p>
        </section>
        <section class="list-item">
            <p class="item-theme">
                <i class="icon-folder"></i>
                <span class="item-title">如何看待知乎</span>
            </p>
            <p class="item-mark"><span class="item-time">2017/02/07</span><span class="item-count">255字</span></p>
        </section>
        <section class="list-item">
            <p class="item-theme">
                <i class="icon-folder"></i>
                <span class="item-title">十大经典排序算法之JavaScript实现dasdsaasdsadsadsadsdasdasda</span>
            </p>
            <p class="item-mark"><span class="item-time">2017/02/07</span><span class="item-count">255字</span></p>
        </section>
        <section class="list-item">
            <p class="item-theme">
                <i class="icon-folder"></i>
                <span class="item-title">如何看待知乎</span>
            </p>
            <p class="item-mark"><span class="item-time">2017/02/07</span><span class="item-count">255字</span></p>
        </section>
        <section class="list-item">
            <p class="item-theme">
                <i class="icon-folder"></i>
                <span class="item-title">十大经典排序算法之JavaScript实现dasdsaasdsadsadsadsdasdasda</span>
            </p>
            <p class="item-mark"><span class="item-time">2017/02/07</span><span class="item-count">255字</span></p>
        </section>
    </div>
</template>

<script>
	export default {
		name: 'hello',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .yd-list {

    }
    .list-item {
        width: 100%;
        height: 75px;
        padding-top: 20px;
    }
    .item-theme {
        height: 22px;
        line-height: 22px;
    }
    .item-title {
        display: inline-block;
        font-size: 18px;
        text-indent: .5em;
        width: 80%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .icon-md {
        position: relative;
        top: -2px;
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("../../assets/mdicon.png") no-repeat;
        background-size: 18px;
    }
    .icon-note {
        position: relative;
        top: -2px;
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("../../assets/noteicon.png") no-repeat;
        background-size: 18px;
    }
    .icon-folder {
        position: relative;
        top: -2px;
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("../../assets/folder.png") no-repeat;
        background-size: 18px;
    }
    .item-mark {
        margin-top: 15px;
        color: #c9c9c9;
    }
    .item-time {

    }
    .item-count {
        display: inline-block;
        margin-left: 20px;
    }

</style>
