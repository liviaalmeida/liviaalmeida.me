<template>
	<div class="animated-link">
		<a class="icon" :href="href">
			<animated-icon :image="image" :size="3" :active="active" />
		</a>
		<a class="text" :href="href" @mouseover="active = true" @mouseout="active = false">{{text}}</a>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import AnimatedIcon from '@/components/ui/AnimatedIcon.vue'

export default Vue.extend({
	components: {
		AnimatedIcon
	},
	data() {
		return {
			active: false,
		}
	},
	props: {
		image: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		href: {
			type: String,
			required: true,
		}
	}
})
</script>

<style lang="scss" scoped>
.animated-link {
	@include inline-flex-column;
	align-items: center;

	a, a:visited {
		text-decoration: none;
		color: $purple-main;
		font-family: Neuton;
		font-weight: 600;
		font-size: 2*$m;
	}
}
</style>
