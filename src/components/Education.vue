<template>
  <div>
		<timeline
      :icon="icon"
      :timeEvents="$t('education')"
      :title="$t('title.education')"
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
			icon: require('@/assets/icons/education.png'),
    }
  },
})
</script>
