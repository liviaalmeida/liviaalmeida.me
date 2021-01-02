<template>
  <div>
		<Timeline
      :icon="icon"
      :timeEvents="$t('education')"
      :title="$t('title.education')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
			icon: require('@/assets/icons/education.png'),
    }
  },
})
</script>
