<template>
	<div>
        <h1>HOME</h1>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
	export default {
		data() {
			return {
            }
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>

<style scoped lang="css">
	h1{
        color:steelblue;
    }
</style>