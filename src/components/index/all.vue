<template>
    <div class="search-box">
        <i class="icon icon-folder"></i>
        <input type="text" class="search-input" placeholder="搜索">
        <i class="icon-order"></i>
    </div>
</template>

<script>
	export default {
		name: 'all',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search-box {
        position: relative;
        width: 100%;
        height: 45px;
        line-height: 45px;
        padding: 10px 35px;
    }
    .search-input {
        width: 100%;
        height: 38px;
        text-indent: 0.5em;
        background-color: #f4f4f4;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    }
    .icon-folder {
        position: absolute;
        top: 22px;
        left: 0;
        display: inline-block;
        width: 25px;
        height: 22px;
        background: url("../../assets/icon-folder.png") no-repeat;
        background-size: 100%;
    }
    .icon-order {
        position: absolute;
        top: 22px;
        right: 0;
        display: inline-block;
        width: 25px;
        height: 22px;
        background: url("../../assets/icon-order.png") no-repeat;
        background-size: 100%;
    }
    input::-webkit-input-placeholder {
        text-align: center;
        font-size: 16px;
    }
</style>
