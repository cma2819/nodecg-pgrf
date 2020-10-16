<template>
  <transition
    name="twitter"
    mode="out-in"
  >
    <twitter-notification-tweet
      v-if="tweet"
      :is-race="false"
      :tweet="tweet"
    ></twitter-notification-tweet>
    <twitter-notification-hashtag
      v-else
      :is-race="false"
    ></twitter-notification-hashtag>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import TwitterNotificationHashtag from './TwitterNotificationHashtag.vue';
import TwitterNotificationTweet from './TwitterNotificationTweet.vue';
import { ActiveTweet } from '../../../../nodecg/external/nodecg-twitter-widget/activeTweet';

@Component({
  components: {
    TwitterNotificationHashtag,
    TwitterNotificationTweet
  }
})
export default class TwitterSoloNotification extends Vue {
  @Prop(Object)
  readonly tweet!: ActiveTweet | null;
}
</script>

<style scoped>
  .twitter-enter-active {
    transition: all 1.5s ease-in-out;
  }

  .twitter-leave-active {
    transition: all 1.5s ease-in-out;
  }

  .twitter-enter {
    transform: translateX(796px);
  }

  .twitter-leave-to {
    transform: translateX(796px);
  }
</style>