<template>
  <div id="app">
    <Header />
    <router-view class="app-view"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'

export default Vue.extend({
  components: {
    Header,
  },
})
</script>

<style lang="scss">
@import '~@/assets/scss/reset.scss';

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

.app-view {
  padding: 15*$m 3*$m 3*$m;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 60px;
	max-width: 650px;
	margin: 0 auto;
}
</style>
