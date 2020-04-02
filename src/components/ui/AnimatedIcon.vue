<template>
	<div class="icon" @mouseover="onMouseOver()" @mouseleave="onMouseLeave()">
	</div>
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
	data() {
		return {
			iconSize: 0.5 * this.size,
			iconSizeHover: 0.6 * this.size,
		}
	},
	mounted() {
		this.setIconSize()
		this.setBackgroundImage()
		this.onMouseOver()
		setTimeout(() => {
			this.onMouseLeave()
		}, 500);
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
		setOpacity(value: number): void {
			this.elStyle.opacity = String(value)
		},
		setBackgroundImage(): void {
			this.elStyle.backgroundImage = `url('${this.image}')`
		},
		setBackgroundSize(num: number): void {
			const remSize = helper.numberToRem(num)
			this.elStyle.backgroundSize = `${remSize} ${remSize}`
		},
		onMouseOver(): void {
			this.setOpacity(1)
			this.setBackgroundSize(this.iconSizeHover)
		},
		onMouseLeave(): void {
			this.setOpacity(0.6)
			this.setBackgroundSize(this.iconSize)
		},
	}
})
</script>

<style lang="scss" scoped>
.icon {
	display: inline-flex;
	background-color: $purple-main;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50%;
	transition: all $animation-time;
}
</style>
