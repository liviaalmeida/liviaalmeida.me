<template>
	<div class="profile">
		<img :src="profilePhoto">
		<div class="profile-text">
			<animated-title :image="profileIcon" text="Perfil" />
			<p>Sou desenvolvedora front-end. Me interesso por arquitetura e qualidade de código, design systems, animações em CSS, computação natural, machine learning e ciência dos dados. Tenho disponibilidade para mudança.
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import AnimatedTitle from '@/components/ui/AnimatedTitle.vue'

export default Vue.extend({
	components: {
		AnimatedTitle,
	},
	data() {
		return {
			profilePhoto: require('@/assets/images/self.png'),
      profileIcon: require('@/assets/icons/profile.png'),
		}
	}
})
</script>

<style lang="scss" scoped>
$photo-size: 20*$m;

.profile {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.profile-text {
	max-width: 100%;
}

img {
	width: $photo-size;
	size: $photo-size;
	border-radius: 50%;
	margin-bottom: 2*$m;
}

p {
	color: $purple-main;
	font-family: OpenSans;
	font-size: 1.8*$m;
	text-align: justify;
	width: 100%;
	line-height: 1.2;
}
</style>
