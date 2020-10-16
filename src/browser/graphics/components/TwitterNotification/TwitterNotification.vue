<template>
  <transition
    name="twitter"
  >
    <twitter-notification-tweet
      v-if="tweet"
      :is-race="true"
      :tweet="tweet"
    ></twitter-notification-tweet>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TwitterNotificationTweet from './TwitterNotificationTweet.vue';
import { ActiveTweet } from '../../../../nodecg/external/nodecg-twitter-widget/activeTweet';
import { twitterNodecg } from '../../../plugin/nodecg';

@Component({
  components: {
    TwitterNotificationTweet
  }
})
export default class TwitterSoloNotification extends Vue {
  tweet: ActiveTweet | null = null;

  created(): void {
    twitterNodecg.Replicant('activeTweet', 'nodecg-twitter-widget').on('change', (newVal) => {
      this.tweet = newVal;
    })
  }
}
</script>

<style scoped>
  .twitter-enter-active {
    transition: all 1.0s;
  }

  .twitter-leave-active {
    transition: all 1.0s;
  }

  .twitter-enter, .twitter-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }

</style>
