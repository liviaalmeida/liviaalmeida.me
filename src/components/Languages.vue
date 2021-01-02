<template>
  <div>
		<Timeline
      :icon="icon"
      :timeEvents="$t('languages')"
      :title="$t('title.languages')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
			icon: require('@/assets/icons/language.png'),
    }
  },
})
</script>
