<template>
	<div class="icon"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import helper from '@/assets/helpers'

export default Vue.extend({
  props: {
    image: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 4,
    }
	},
	mounted() {
		this.setIconSize()
		this.setBackgroundImage()
	},
	computed: {
		elStyle(): CSSStyleDeclaration {
			return helper.elementStyle(this.$el)
		}
	},
	methods: {
		setIconSize(): void {
			const remSize = helper.numberToRem(this.size)

			this.elStyle.width = remSize
			this.elStyle.height = remSize
		},
		setBackgroundImage(): void {
			this.elStyle.backgroundImage = `url('${this.image}')`
		},
	}
})
</script>

<style lang="scss" scoped>
@mixin icon-animation {
	background-size: 75%;
	opacity: 1;
}

.icon {
	@include inline-flex;
	background-color: $purple-main;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 50%;
	border-radius: 50%;
	opacity: 0.6;
	transition: all $animation-time;
	animation: 2*$animation-time ease-out 0s 1 onIconLoad;

	&:hover {
		@include icon-animation;
	}
}

@keyframes onIconLoad {
	0% { @include icon-animation;	}
}

</style>
