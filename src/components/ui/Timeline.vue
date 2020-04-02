<template>
	<div class="timeline">
		<div v-if="title && icon">
			<animated-title :image="icon" :text="title"></animated-title>
		</div>
		<ol class="timeline-list">
			<li v-for="(timeEvent, index) in timeEvents" :key="index">
				<h5>{{timeEvent.title}}</h5>
				<h6 v-if="timeEvent.duration">{{timeEvent.duration}}</h6>
				<p>
					<span v-if="timeEvent.intro" class="intro">{{timeEvent.intro}}</span> 
					<span v-html="timeEvent.description"></span>
				</p>
			</li>
		</ol>
	</div>
	
</template>

<script lang="ts">
import Vue from 'vue'

import AnimatedTitle from '@/components/ui/AnimatedTitle.vue'

export default Vue.extend({
	components: {
		AnimatedTitle,
	},
	props: {
		timeEvents: {
			type: Array as () => TimeEvent[],
			required: true
		},
		title: {
			type: String,
			required: false
		},
		icon: {
			type: String,
			required: false
		}
	}
})
</script>

<style lang="scss" scoped>
$border: 0.3*$m solid $purple-main;

.timeline-list {
	list-style: none;
	padding: 0 0 0 2*$m;
	margin: 0 0 0 3*$m;
	border-left: $border;
	color: $purple-main;
	z-index: 0;

	li {
		position: relative;
		padding-top: 5px;

		&:not(:last-child) {
			margin-bottom: 20px;
		}

		&:after {
			position: absolute;
			display: block;
			background: $white;
			border-radius: 50%;
			height: 1.3*$m;
			width: 1.3*$m;
			border: $border;
			content: '';
			top: 0.5*$m;
			left: -3.1*$m;
			z-index: 2;
			transition: background 0.5s ease-in;
			animation: 0.8s ease-out 0s 1 growBall;
		}

		&:hover:after {
			background: lighten($purple-main, 10%);
		}

		h5, h6 {
			display: inline-block;
		}

		h5 {
			font-family: BebasNeue;
			font-weight: 500;
			font-size: 2*$m;
		}

		h6 {
			font-family: OpenSans;
			font-size: 1*$m;
			margin-left: 0.5*$m;
		}

		p {
			.intro {
				font-weight: 600;
				margin-right: 0.5*$m;
			}

			font-family: OpenSans;
			font-size: 1.5*$m;
			text-align: justify;
			line-height: 1.3;
		}
	}
}

@keyframes growBall {
	0% {
		transform: scale(0);
	}
}
</style>
