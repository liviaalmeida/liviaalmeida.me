<template>
  <div class="presentations">
		<Timeline
      :icon="require('@/assets/icons/microphone.png')"
      :timeEvents="$t('presentations')"
      :title="$t('title.presentations')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  functional: true,
})
</script>
