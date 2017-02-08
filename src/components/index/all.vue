<template>
    <div class="search-box">
        <i class="icon icon-add-folder folder-pos"></i>
        <input type="text" class="search-input" placeholder="搜索">
        <i class="icon icon-order order-pos"></i>
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
        padding: 10px 45px;
        /*background-color: gray;*/
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
    .folder-pos {
        position: absolute;
        left: 0;
        top: 17px;
    }
    .order-pos {
        position: absolute;
        right: 0;
        top: 17px;
    }
    input::-webkit-input-placeholder {
        text-align: center;
        font-size: 16px;
    }
</style>
