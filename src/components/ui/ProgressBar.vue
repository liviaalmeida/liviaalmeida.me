<template>
	<div class="progress-bar">
		<div class="progress"></div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import helper from '@/assets/helpers'

export default Vue.extend({
	props: {
		progress: {
			type: Number,
			required: true,
		},
		width: {
			type: Number,
			required: false,
			default: 8,
		}
	},
	computed: {
		elStyle(): CSSStyleDeclaration {
			return helper.elementStyle(this.$el)
		},
		progressStyle(): CSSStyleDeclaration {
			return helper.elementStyle(this.$el.firstElementChild)
		}
	},
	mounted() {
		this.defineWidth()
	},
	methods: {
		defineWidth() {
			this.elStyle.width = helper.numberToRem(this.width)
			this.progressStyle.width = helper.numberToRem(this.progress * this.width)
		}
	}
})
</script>

<style lang="scss" scoped>

$height: $m;
$border-radius: 0.5*$m;

.progress-bar {
	display: inline-flex;
	background-color: $purple-secondary;
	height: $height;
	border-radius: $border-radius;

	&:hover .progress {
		animation: barGrow ease-in-out 4s infinite;
		transform-origin: 0;
	}

	.progress {
		background-color: $purple-main;
		height: $height;
		border-radius: $border-radius;
		animation: 0.8s ease-out 0s 1 onBarLoad;
	}
}

@keyframes barGrow {
	0% { transform: scaleX(1); }
	50% { transform: scaleX(0); }
	100% { transform: scaleX(1); }
}

@keyframes onBarLoad {
	0% { width: 0; }
}
</style>
