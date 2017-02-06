<template>
    <footer class="fix-footer">
        <div class="footer-item">云笔记</div>
        <div class="footer-item">云协作</div>
        <div class="footer-item">我的</div>
    </footer>

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
   .fix-footer {
       position: fixed;
       bottom: 0;
       display: flex;
       align-items: center;
       width: 100%;
       height: 44px;
       border-top: 1px #cacaca solid;
       background-color: #01AAED;
       z-index: 999;
   }
   .footer-item {
       flex: 1;
       color: #a39e9e;
       text-align: center;
       z-index: 999;
   }
</style>
