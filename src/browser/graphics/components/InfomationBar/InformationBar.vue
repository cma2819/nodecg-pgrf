<template>
  <div
    :style="{
      backgroundColor: $vuetify.theme.themes.light.secondary,
      height: '100%'
    }"
  >
    <transition name="component" mode="out-in">
      <next-run-information
        v-if="next"
        class="next"
        :game="nextRunData.game"
        :runner="nextRunData.runner"
      ></next-run-information>
      <div
        v-else
        class="hashtag"
        :style="{
          textAlign: 'center',
          font: 'bold 30px/48px source-han-sans-japanese',
          color: 'rgba(255, 255, 255, 0.8)'
        }"
      >{{ hashtag }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.component-enter-active, .component-leave-active {
  transition: opacity 1s, transform 1s;
}

.component-enter.next, .component-leave-to.next {
  opacity: 0;
  transform: translateX(20px);
}
.component-enter.hashtag, .component-leave-to.hashtag {
  opacity: 0;
  transform: translateY(10px);
}
</style>

<script lang="ts">
/* global nodecg */
import { Vue, Component } from 'vue-property-decorator';

import NextRunInformation from './NextRunInformation.vue';
import { gameViewModule as gameView } from '../../_lib/gameViewModule';
import { RunData } from '../../../../nodecg/external/speedcontrol/RunData';

@Component({
  components: {
    NextRunInformation
  }
})
export default class InformationBar extends Vue {
  next = false;

  hashtag = '';

  mounted(): void {
    setInterval(() => {this.next = !this.next}, 30 * 1000);
    this.hashtag = nodecg.bundleConfig.hashtag;
  }

  get nextRunData(): {
    runData: RunData | null; runner: string;
  } {
    return gameView.nextRunData
  }
}
</script>
