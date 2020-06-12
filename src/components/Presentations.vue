<template>
  <div class="presentations">
		<timeline
      :icon="icon"
      :timeEvents="$t('presentations')"
      :title="$t('title.presentations')"
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
			icon: require('@/assets/icons/microphone.png'),
    }
  },
})
</script>
