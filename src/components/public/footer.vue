<template>
    <footer class="fix-footer title-font">
        <section class="footer-item" @click="goTo('/index')">
            <i class="icon icon-note-active"></i>
            <span class="item-word">云笔记</span>
        </section>
        <section class="footer-item" @click="goTo('/group')">
            <i class="icon icon-enter"></i>
            <span class="item-word">云协作</span>
        </section>
        <section class="footer-item" @click="goTo('/profile')">
            <i class="icon icon-profile"></i>
            <span class="item-word">我的</span>
        </section>
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
       left: 0;
       /*居中显示*/
       /*left: 50%;*/
       /*max-width: 640px;*/
       /*min-width: 320px;*/
       /*transform: translateX(-50%);*/

       display: flex;
       align-items: center;
       width: 100%;
       height: 60px;
       border-top: 1px #cacaca solid;
       background-color: ghostwhite;
       z-index: 999;
   }
   .footer-item {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       flex: 1;
       color: #a39e9e;
       text-align: center;
       z-index: 999;
   }
    .item-word {
        margin-top: 2px;
    }
</style>
