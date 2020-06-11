<template>
	<div class="programming">
		<animated-title :image="icon" text="Linguagens" :active="active"/>
		<div class="skills">
			<div v-for="(skill,index) in skills" :key="index" class="skill"
			@mouseover="active = true" @mouseout="active = false">
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

import data from '@/data'

export default Vue.extend({
	components: {
		AnimatedTitle,
		ProgressBar,
	},
	data() {
		return {
			icon: require('@/assets/icons/programming.png'),
			skills: data.getSkills(),
			active: false,
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
