<template>
	<div class="animated-title"
	v-visibility="{
		callback: visibilityChange,
		intersection: {
			threshold: 1,
		},
		throttle: 500,
	}">
		<div>
			<AnimatedIcon :image="image"
			:size="4" :active="inview" />
		</div>
		<div class="animated-title-text">
			<h3>{{ text }}</h3>
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
		},
	},
	data() {
		return {
			inview: false,
		}
	},
	methods: {
		visibilityChange(visible: boolean) {
			this.inview = visible
		},
	},
})
</script>

<style lang="scss" scoped>
.animated-title {
	width: 100%;
	@include flex-row;

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

	&-text {
		width: 100%;
		margin-left: $m;
		font-family: 'Bebas Neue';
		font-weight: 600;
		font-size: 2.4*$m;
		@include flex-column;
		justify-content: center;
	}
}
</style>
