<template>
	<div class="profile">
		<img :src="profilePhoto">
		<div>
			<AnimatedTitle
			:image="profileIcon"
			:text="$t('title.profile')"
			:active="active" />
			<div class="profile-text"
			@mouseover="active = true"
			@mouseout="active = false">
				<p v-for="(paragraph, p) in $t('profile')"
				:key="p">
					{{paragraph}}
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			profilePhoto: require('@/assets/images/self.png'),
			profileIcon: require('@/assets/icons/profile.png'),
			active: false,
		}
	}
})
</script>

<style lang="scss">
$photo-size: 16*$m;

.profile {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	img {
		width: $photo-size;
		size: $photo-size;
		border-radius: 50%;
		margin-bottom: 2*$m;
	}

	&-text {
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
}
</style>
