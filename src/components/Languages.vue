<template>
  <div>
		<Timeline
      :icon="require('@/assets/icons/language.png')"
      :timeEvents="$t('languages')"
      :title="$t('title.languages')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  functional: true,
})
</script>
