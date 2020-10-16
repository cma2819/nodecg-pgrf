<template>
  <div id="tweet">
    <div
      id="tweet-label"
      class="label"
    >
      TWEET WITH <span class="hashtag">#PGRF</span>:
    </div>
    <div class="box">
      <div id="twitter-user">
        <img
          id="twitter-icon"
          :src="tweet.profileImageUrl"
          alt="icon"
        >
        <span id="twitter-id">@{{ tweet.screenName }}</span>
      </div>
      <div id="tweet-text">
        {{ tweet.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ActiveTweet } from '../../../../nodecg/external/nodecg-twitter-widget/activeTweet';

@Component
export default class TwitterNotification extends Vue {
@Prop(Object)
readonly tweet!: ActiveTweet;
}
</script>
