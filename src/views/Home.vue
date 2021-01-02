<template>
  <div class="home">
		<profile />
		<work />
		<presentations />
		<programming />
		<languages />
		<education />
		<contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Profile from '@/components/Profile.vue'
import Work from '@/components/Work.vue'
import Presentations from '@/components/Presentations.vue'
import Programming from '@/components/Programming.vue'
import Languages from '@/components/Languages.vue'
import Education from '@/components/Education.vue'
import Contact from '@/components/Contact.vue'

export default Vue.extend({
  components: {
		Profile,
		Work,
		Presentations,
		Programming,
		Languages,
		Education,
		Contact,
  },
})
</script>

<style lang="scss" scoped>

</style>
