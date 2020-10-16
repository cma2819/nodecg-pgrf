<template>
  <div id="container">
    <div :style="{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}">
      <header>
        <event-logo></event-logo>
        <run-label
          :game="gameView.runData.game"
          :category="gameView.runData.category"
          :platform="gameView.runData.platform"
        ></run-label>
      </header>
      <slot></slot>
      <footer>
        <div id="hashtag-guide">
          Hashtag: <span class="hashtag">#PGRF</span>
        </div>
        <div
          v-if="nextRunData.runData !== null"
          id="next-title"
        >
          <span class="label">Next Title: </span>{{ nextRunData.runData.game }} | {{ nextRunData.runData.category }} | {{ nextRunData.runner }}
        </div>
      </footer>
    </div>
    <clipped-canvas
      v-if="backgroundUri"
      :background-image="backgroundUri"
      :clip-paths="clipPaths"
    ></clipped-canvas>
  </div>
</template>

<style>
#logo {
  height: 100%;
  margin-right: calc(1080px * 0.02);
}

header {
  margin-top: 16px;
  margin-left: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
}

#title p {
  margin-top: -0.2em;
  margin-bottom: 0;
  line-height: 1.2em;
}

#game-title {
  font-size: 1.9em;
  font-weight: bolder;
}

#category-platform {
  font-size: 1.2em;
}

.video {
  background-color: gray;
  opacity: 50%;
}

.time {
  font-size: 2em;
  line-height: 1em;
  text-align: right;
}

.time.suspend {
  color: rgba(0, 0, 0, 50%);
}

.time.complete {
  color: rgb(0, 65, 255);
}

.info-box {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid gray;
  padding-bottom: 2px;
}

.info-box .label {
  font-size: 1.2em;
  line-height: 1em;
  color: rgba(0, 0, 0, 70%);
}

.info-box .name {
  font-size: 1.15em;
  line-height: 1.2em;
  font-weight: bold;
  text-align: right;
  margin-top: auto;
}

.info-box .time {
  margin-top: auto;
}

.info-box .account {
  font-size: 0.8em;
  line-height: 1.2em;
  font-weight: bold;
  text-align: right;
}

#tweet .box {
  padding: 8px;
}

#tweet .label {
  font-size: 1.4em;
}

#twitter-user {
  padding-bottom: 8px;
  border-bottom: 1px solid gray;
  font-size: 0.7em;
  font-weight: bold;
}

#twitter-icon {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  margin-right: 8px;
}

#tweet-text {
  padding-top: 8px;
  font-size: 0.7em;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  font-size: 1em;
  line-height: 1em;
  color: dimgray;
  background-color: rgba(255, 255, 255, 80%);
}

#hashtag-guide {
  font-size: 1.2em;
  font-family: 'Staatliches', sans-serif;
}
</style>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

import OverlayBase from '../components/OverlayBase.vue';
import ClippedCanvas from '../components/ClippedCanvas/ClippedCanvas.vue';
import EventLogo from '../components/EventLogo/EventLogo.vue';
import RunLabel from '../components/RunLabel/RunLabel.vue';
import InformationBar from '../components/InfomationBar/InformationBar.vue';

import { gameViewModule as gameView } from '../_lib/gameViewModule';
import { ClipPath } from '../components/ClippedCanvas/types';
import { pgrfNodecg } from '../../plugin/nodecg';
import { RunData } from '../../../nodecg/external/speedcontrol/RunData';

@Component({
  components: {
    ClippedCanvas,
    EventLogo,
    RunLabel,
    InformationBar
  }
})
export default class GameView extends OverlayBase {

  @Prop(Array)
  readonly clipPaths!: ClipPath[]

  backgroundUri = '';
  gameView = gameView;

  created(): void {
    pgrfNodecg.Replicant('assets:background').on('change', (newVal) => {
      if (newVal.length > 0) {
        this.backgroundUri = newVal[0].url;
      }
    });
    setInterval(() => {
      gameView.nextSocial();
    }, 20000)
  }

  get nextRunData(): {
    runData: RunData | null; runner: string;
  } {
    return gameView.nextRunData
  }
}
</script>
