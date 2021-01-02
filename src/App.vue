<template>
  <div id="app">
    <Header />
		<div class="app-loading" v-if="loading">
			<img :src="require('@/assets/images/self.png')">
		</div>
    <router-view class="app-view" v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'

export default Vue.extend({
  components: {
    Header,
	},
	data() {
		return {
			loading: true,
		}
	},
	mounted() {
		setTimeout(() => { this.loading = false }, 2000)
	},
})
</script>

<style lang="scss">
@import '~@/assets/scss/reset.scss';

$loader-img: 250px;

html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  font-family: BebasNeue, OpenSans, Helvetica;
	color: $purple-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  * {
    box-sizing: border-box;
  }
}

.app {
	&-loading, &-view {
		padding: 15*$m 3*$m 3*$m;
		width: 100%;
		display: flex;
	}

	&-loading {
		height: 100%;
		align-items: center;
		justify-content: center;

		img {
			height: $loader-img;
			width: $loader-img;
			border-radius: 50%;
			animation: appear .5s linear 0s 1 forwards, spin 6s linear .5s infinite forwards;
		}
	}

	&-view {
		flex-direction: column;
		margin: 0 auto;
		max-width: 100%;
		overflow: hidden;
		gap: 60px;
		max-width: 650px;
	}
}

@keyframes appear {
	0% { transform: translateY(-100vh); }
}

@keyframes spin {
	100% { transform: rotateY(720deg); }
}
</style>
