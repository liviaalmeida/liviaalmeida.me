<template>
  <div class="about columns">
    <div class="profile column column-7">
      <img :src="profilePhoto">
      <div class="profile-text">
        <animated-title :image="profileIcon" text="Perfil" />
        <p>Sou desenvolvedora front-end. Me interesso por arquitetura e qualidade de código, design systems, animações em CSS, computação natural, machine learning e ciência dos dados. Tenho disponibilidade para mudança.
        </p>
      </div>
    </div>
    <div class="contact column column-3">
      <animated-link v-for="(contact, index) in contacts" :key="index"
      :image="contact.image" :text="contact.text" :href="contact.href" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AnimatedTitle from '@/components/AnimatedTitle.vue'
import AnimatedLink from '@/components/AnimatedLink.vue'

export default Vue.extend({
  components: {
    AnimatedTitle,
    AnimatedLink,
  },
  data() {
    return {
      profilePhoto: require('@/assets/images/self.png'),
      profileIcon: require('@/assets/icons/profile.png'),
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
$photo-size: 20*$m;

.about {
  > div {
    align-items: center;
  }

  .profile-text {
    width: 50%;
  }

  img {
    width: $photo-size;
    size: $photo-size;
    border-radius: 50%;
    margin-bottom: 2*$m;
  }

  p {
    color: $purple-main;
    font-family: OpenSans;
    font-size: 1.8*$m;
    text-align: justify;
    width: 100%;
    line-height: 1.2;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: space-around;
  }
}
</style>
