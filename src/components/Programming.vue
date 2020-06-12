<template>
	<div class="programming">
		<animated-title
			:image="icon"
			:text="$t('title.programming')"
			:active="active"
		/>
		<div class="skills">
			<div
				class="skill"
				v-for="(skill,index) in skills" :key="index"
				@mouseover="active = true" @mouseout="active = false"
			>
				<span>{{skill.name}}</span>
				<progress-bar :progress="skill.progress" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import AnimatedTitle from '@/components/ui/AnimatedTitle.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'

export default Vue.extend({
	components: {
		AnimatedTitle,
		ProgressBar,
	},
	data() {
		return {
			icon: require('@/assets/icons/programming.png'),
			active: false,
			skills: [
				{
					"name": "C/C++",
					"progress": 0.8
				},
				{
					"name": "C#",
					"progress": 0.3
				},
				{
					"name": "CSS",
					"progress": 0.9
				},
				{
					"name": "HTML",
					"progress": 0.8
				},
				{
					"name": "JavaScript",
					"progress": 0.9
				},
				{
					"name": "Python",
					"progress": 0.85
				},
				{
					"name": "SQL",
					"progress": 0.7
				},
				{
					"name": "TypeScript",
					"progress": 0.9
				},
			],
		}
	}
})
</script>

<style lang="scss" scoped>
.programming {
	display: flex;
	flex-direction: column;
}

.skills {
	align-self: center;
	@include flex-column-around;
}

.skill {
	align-self: flex-end;
	font-family: OpenSans;
	font-size: 1.7*$m;
	margin: 1.8*$m 0;

	span {
		margin-right: 1.5*$m;
	}
}
</style>
