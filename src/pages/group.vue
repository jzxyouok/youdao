<template>
    <div>
        <v-header></v-header>
        <div class="main-content">
           <h1>有道云协作</h1>
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
    .main-content {
        padding: 45px 15px;
        overflow: scroll;
        z-index: 1;
        background-color: #ffffff;
    }
</style>
