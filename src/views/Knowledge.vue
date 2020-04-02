<template>
	<div class="knowledge columns">

		<div class="column column-5">
			<animated-title :image="programming.icon" text="Linguagens" />

			<div class="skills">
				<div v-for="(skill,index) in programming.skills" :key="index" class="skill">
					<span>{{skill.name}}</span>
					<progress-bar :progress="skill.progress" />
				</div>
			</div>
		</div>

		<div class="column column-5">
			<div>
				<animated-title :image="education.icon" text="Educação" />
				<timeline :timeEvents="education.skills" />
			</div>

			<div>
				<animated-title :image="language.icon" text="Idiomas" />
				<timeline :timeEvents="language.skills" />
			</div>
		</div>

	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import ProgressBar from '@/components/ProgressBar.vue'
import AnimatedTitle from '@/components/AnimatedTitle.vue'
import Timeline from '@/components/Timeline.vue'

import data from '@/data'

export default Vue.extend({
	components: {
		AnimatedTitle,
		ProgressBar,
		Timeline,
	},
	data() {
		return {
			programming: {
				icon: require('@/assets/icons/programming.png'),
				skills: data.getSkills(),
			},
			language: {
				icon: require('@/assets/icons/language.png'),
				skills: data.getLanguages(),
			},
			education: {
				icon: require('@/assets/icons/education.png'),
				skills: data.getEducation(),
			},
		}
	}
})
</script>

<style lang="scss" scoped>
.knowledge {
	.skills {
		align-self: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.skill {
		align-self: flex-end;
		font-family: OpenSans;
		color: $purple-main;
		font-size: 1.7*$m;
		margin: 1.8*$m 0;

		span {
			margin-right: 1.5*$m;
		}
	}
}
</style>
