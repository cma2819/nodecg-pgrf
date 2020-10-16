<template>
  <twitter-notification-tweet
    v-if="tweet"
    :is-race="true"
    :tweet="tweet"
  ></twitter-notification-tweet>
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
export default class TwitterGameNotification extends Vue {
  @Prop(Boolean)
  readonly isRace!: boolean;
  @Prop(Object)
  readonly tweet!: ActiveTweet | null;
}
</script>
