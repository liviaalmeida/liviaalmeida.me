<template>
  <div class="contact">
		<animated-link
      v-for="(contact, index) in contacts" :key="index"
      :image="contact.image"
      :text="contact.text"
      :href="contact.href"
    />
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
          image: require('@/assets/icons/linkedin.png'),
          text: 'Lívia Almeida',
          href: 'https://linkedin.com/in/livia001'
        },
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
	@include flex;
	align-content: flex-end;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 20px;

	@media only screen and (max-width: 650px) {
		flex-direction: column;
		align-content: center;
	}

  > *:not(:last-of-type) {
    margin-bottom: 5*$m;
  }
}
</style>
