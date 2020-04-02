<template>
	<div class="animated-title">
		<div class="icon">
			<animated-icon :image="image" :size="4"/>
		</div>
		<div class="title">
			<h3>{{text}}</h3>
			<hr>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import AnimatedIcon from '@/components/AnimatedIcon.vue'

export default Vue.extend({
	components: {
		AnimatedIcon
	},
	props: {
		image: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	}
})
</script>

<style lang="scss" scoped>
.animated-title {
	width: 100%;
	display: flex;
	flex-direction: row;

	.title {
		width: 100%;
		margin-left: $m;
		color: $purple-main;
		font-family: BebasNeue;
		font-weight: 600;
		font-size: 2.4*$m;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h3 {
		margin-bottom: $m;
	}

	hr {
		width: 100%;
		height: 0.4*$m;
		margin: 0;
		text-align: left;
		background-color: $purple-main;
		animation: 2*$animation-time ease-out 0s 1 growLine;
		transform-origin: 0;
	}

	@keyframes growLine {
		0% {
			width: 0;
		}
	}
}
</style>