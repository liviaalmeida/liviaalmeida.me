<template>
  <div>
		<timeline
      :icon="icon"
      :timeEvents="$t('languages')"
      :title="$t('title.languages')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Timeline from '@/components/ui/Timeline.vue'

export default Vue.extend({
  components: {
		Timeline,
  },
  data() {
    return {
			icon: require('@/assets/icons/language.png'),
    }
  },
})
</script>
