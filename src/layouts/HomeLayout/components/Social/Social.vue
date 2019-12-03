<template>
  <div class="social">
    <div class="wrap">
      <div class="page-container">
        <div class="flex-col-vertical-center content">
          <div class="title">
            <h2>{{ $t('home.socialTitle') }}</h2>
            <h5>{{ $t('home.socialSubheading') }}</h5>
          </div>
          <div class="icons">
            <a
              v-for="(link, index) in links"
              :href="link.to"
              :key="link.name + index"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div :class="link.name">
                <img :src="link.img" />
                <p>{{ link.name | capitalize }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import github from '@/assets/images/icons/github.png';
import reddit from '@/assets/images/icons/reddit.svg';
import medium from '@/assets/images/icons/medium.png';
import twitter from '@/assets/images/icons/twitter.jpg';
import facebook from '@/assets/images/icons/facebook.png';
//import slack from '@/assets/images/icons/slack.png';
import telegram from '@/assets/images/icons/telegram.png';
import linkedin from '@/assets/images/icons/linkedin.png';

export default {
  data() {
    return {
      links: [
        /*
        {
          img: slack,
          to: 'https://www.google.com',
          name: 'slack'
        },
        */
        {
          img: facebook,
          to: 'https://www.facebook.com/SmiloPlatform',
          name: 'Facebook'
        },
        {
          img: twitter,
          to: 'https://twitter.com/SmiloPlatform',
          name: 'Twitter'
        },
        {
          img: medium,
          to: 'https://medium.com/smilofoundation',
          name: 'Medium'
        },
        {
          img: reddit,
          to: 'https://smiloplatform.reddit.com',
          name: 'reddit'
        },
        {
          img: linkedin,
          to: 'https://www.linkedin.com/company/smilofoundation-bv',
          name: 'linkedin'
        },
        {
          img: telegram,
          to: 'https://t.me/SmiloPlatform',
          name: 'telegram'
        },
        {
          img: github,
          to: 'https://github.com/smilofoundation',
          name: 'github'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import 'Social.scss';
</style>
