<template>
	<div class="animated-title">
		<div class="icon">
			<AnimatedIcon :image="image"
			:size="4" :active="active" />
		</div>
		<div class="title">
			<h3>{{text}}</h3>
			<hr>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: {
		active: {
			type: Boolean,
			required: false,
		},
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
	@include flex-row;

	.title {
		width: 100%;
		margin-left: $m;
		font-family: BebasNeue;
		font-weight: 600;
		font-size: 2.4*$m;
		@include flex-column;
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
		@include animation-on-load(no-width-on-load);
		transform-origin: 0;
	}
}
</style>
