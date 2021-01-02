<template>
  <div>
		<Timeline
      :icon="require('@/assets/icons/work.png')"
      :timeEvents="$t('experience')"
      :title="$t('title.experience')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  functional: true,
})
</script>
