<template>
  <div class="work">
		<timeline :timeEvents="skills" :icon="icon" title="Apresentações" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Timeline from '@/components/ui/Timeline.vue'

import data from '@/data'

export default Vue.extend({
  components: {
		Timeline,
  },
  data() {
    return {
			icon: require('@/assets/icons/microphone.png'),
			skills: data.getPresentations(),
    }
  },
})
</script>
