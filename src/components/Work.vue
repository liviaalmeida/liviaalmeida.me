<template>
  <div>
		<Timeline
      :icon="icon"
      :timeEvents="$t('experience')"
      :title="$t('title.experience')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
			icon: require('@/assets/icons/work.png'),
    }
  },
})
</script>
