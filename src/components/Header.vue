<template>
	<header class="header">
		<Locale class="locale" />
		<h1>Lívia Almeida</h1>
		<h2>{{$t('title.position')}}</h2>
	</header>
</template>

<script lang="ts">
import Vue from 'vue'
import Locale from '@/components/Locale.vue'

export default Vue.extend({
  components: {
    Locale,
  },
})
</script>

<style lang="scss">
header.header {
  width: 100%;
  height: 12*$m;
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
	gap: 0 50px;
	flex-wrap: wrap;
  padding: 2*$m 0;
  background-color: $purple-main;
  color: $white;
  font-family: 'Bebas Neue';
  font-weight: 600;

  .locale {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  h1 {
    font-size: 3.5*$m;
  }

  h2 {
    font-size: 2.5*$m;
  }
}
</style>
