<template>
    <footer class="fix-footer">
        <section class="footer-item" @click="goTo('/index')">云笔记</section>
        <section class="footer-item" @click="goTo('/group')">云协作</section>
        <section class="footer-item" @click="goTo('/profile')">我的</section>
    </footer>
</template>
<script>
	export default {
		name: 'footer',
		methods: {
            goTo: function (url) {
            	this.$router.push({
					path: url
                });
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
       background-color: ghostwhite;
       z-index: 999;
   }
   .footer-item {
       flex: 1;
       color: #a39e9e;
       text-align: center;
       z-index: 999;
   }
</style>
