<template>
  <div>
		<timeline :timeEvents="skills" :icon="icon" title="Formação" />
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
			icon: require('@/assets/icons/education.png'),
			skills: data.getEducation(),
    }
  },
})
</script>
