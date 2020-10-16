<style>

html {
  overflow: hidden;
}
#root {
    width: 1920px;
    height: 1080px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}

</style>

<script lang="ts">
/* global nodecg */
import { Vue, Component } from 'vue-property-decorator';
import { ActiveTweet } from '../../../nodecg/external/nodecg-twitter-widget/activeTweet';
@Component
export default class OverlayBase extends Vue {
  activeTweet: ActiveTweet | null = null;

  created(): void {
    nodecg.Replicant('activeTweet', 'nodecg-twitter-widget').on('change', (newVal) => {
      this.activeTweet = newVal;
    })
  }
}
</script>