<template>
	<div class="experience columns">

		<div class="column column-5">
			<div>
				<animated-title :image="experience.icon" text="Experiência Profissional" />
				<timeline :timeEvents="experience.skills" />
			</div>
		</div>

		<div class="column column-5">
			<div>
				<animated-title :image="presentations.icon" text="Apresentações" />
				<timeline :timeEvents="presentations.skills" />
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import AnimatedTitle from '@/components/AnimatedTitle.vue'
import Timeline from '@/components/Timeline.vue'

import data from '@/data'

export default Vue.extend({
	components: {
		AnimatedTitle,
		Timeline,
	},
	data() {
		return {
			experience: {
				icon: require('@/assets/icons/work.png'),
				skills: data.getExperience(),
			},
			presentations: {
				icon: require('@/assets/icons/microphone.png'),
				skills: data.getPresentations(),
			},
		}
	}
})
</script>

<style lang="scss" scoped>
.experience {

}
</style>
