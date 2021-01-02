<template>
  <div class="presentations">
		<Timeline
      :icon="icon"
      :timeEvents="$t('presentations')"
      :title="$t('title.presentations')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
			icon: require('@/assets/icons/microphone.png'),
    }
  },
})
</script>
