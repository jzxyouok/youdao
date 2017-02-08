<template>
    <div class="wrapper">
        <v-header></v-header>
        <div class="main-content">
            <v-folder></v-folder>
            <v-list></v-list>
        </div>
        <v-footer></v-footer>
    </div>



</template>

<script>
    import header from "../components/public/header.vue";
	import footer from "../components/public/footer.vue";
	import all from "../components/index/all.vue";
	import list from "../components/public/list.vue";
	export default {
        components: {
        	"v-header": header,
			"v-footer": footer,
			"v-folder": all,
			"v-list": list
        },
		data () {
			return {
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper {
        width: 100%;
    }
    .main-content {
        padding: 60px 15px;
        z-index: 1;
        background-color: #ffffff;
        /*居中显示*/
        /*position: relative;*/
        /*left: 50%;*/
        /*max-width: 640px;*/
        /*min-width: 320px;*/
        /*transform: translateX(-50%);*/
    }
</style>
