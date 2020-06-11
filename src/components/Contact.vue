<template>
  <div class="contact">
		<animated-link v-for="(contact, index) in contacts" :key="index"
		:image="contact.image" :text="contact.text" :href="contact.href" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AnimatedLink from '@/components/ui/AnimatedLink.vue'

export default Vue.extend({
  components: {
    AnimatedLink,
  },
  data() {
    return {
      contacts: [
        {
          image: require('@/assets/icons/github.png'),
          text: '@liviaalmeida',
          href: 'https://github.com/liviaalmeida'
        },
        {
          image: require('@/assets/icons/mail.png'),
          text: 'leave.ah@gmail.com',
          href: 'mailto:leave.ah@gmail.com'
        },
        {
          image: require('@/assets/icons/phone.png'),
          text: '+55 31 99435 8223',
          href: 'tel:+5531994358223'
        },
      ] as Contact[],
    }
  },
})
</script>

<style lang="scss" scoped>
.contact {
	@include flex-column-around;
	align-content: flex-end;

  > *:not(:last-of-type) {
    margin-bottom: 5*$m;
  }
}
</style>
