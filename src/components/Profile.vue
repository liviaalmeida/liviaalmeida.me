<template>
	<div class="profile">
		<img :src="profilePhoto">
		<animated-title :image="profileIcon" text="Perfil" :active="active" />
		<div class="profile-text" @mouseover="active = true" @mouseout="active = false">
			<p>
				Sou desenvolvedora front-end. Me interesso por arquitetura e qualidade de código, design systems, animações em CSS, computação natural, machine learning e ciência dos dados. Tenho experiência com JavaScript e TypeScript e sou proficiente em HTML e CSS.
			</p>
			<p>
				Meu objetivo é construir produtos que resolvem os problemas de seus usuários enquanto oferecem ótima usabilidade. Gosto de trabalhar próxima ao time de design, em ambientes altamente colaborativos.
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
			active: false,
		}
	}
})
</script>

<style lang="scss" scoped>
$photo-size: 16*$m;

.profile {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.profile-text {
	max-width: 100%;
	margin-top: .7*$m;
	
	p {
		font-family: OpenSans;
		font-size: 1.8*$m;
		text-align: justify;
		line-height: 1.3;

		&:not(:last-child) {
			margin-bottom: .7*$m;
		}
	}
}

img {
	width: $photo-size;
	size: $photo-size;
	border-radius: 50%;
	margin-bottom: 2*$m;
}
</style>
