<template>
  <div class="columns">
    <div class="column column-7">
      <profile />
    </div>
    <div class="column column-3">
      <contact />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Profile from '@/components/Profile.vue'
import Contact from '@/components/Contact.vue'

export default Vue.extend({
  components: {
    Profile,
    Contact,
  },
})
</script>

<style lang="scss" scoped>
.contact {
	align-content: flex-end;
	justify-content: space-around;
  height: 100%;
}
</style>