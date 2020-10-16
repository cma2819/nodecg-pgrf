<template>
  <game-view :clip-paths="clipPaths">
    <div id="main">
      <div
        :style="{
          height: '806px',
          position: 'relative'
        }"
      >
      <div :style="{
        position: 'absolute',
        top: '0px',
        right: '72px',
        width: '690px'
      }">
        <twitter-notification
          :is-race="false"
          :tweet="activeTweet"
        ></twitter-notification>
      </div>
    </div>
    <div id="info-area">
      <div id="run-info">
        <nameplate
          v-if="gameView.runners[0]"
          :is-runner="true"
          :display-social="gameView.currentSocial"
          :name="gameView.runners[0].name"
          :social="gameView.runners[0].social"
        ></nameplate>
        <nameplate
          v-if="gameView.commentator.name"
          :is-runner="false"
          :display-social="gameView.currentSocial"
          :name="gameView.commentator.name"
          :social="gameView.commentator.social"
        ></nameplate>
        <estimate
          :time="gameView.runData.estimate"
        ></estimate>
        <timer
          :status="timerStatus"
          :time="gameView.currentTime.time"
        ></timer>
      </div>
    </div>
  </game-view>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import OverlayBase from '../components/OverlayBase.vue';
import GameView from './GameView.vue';
import ClippedCanvas from '../components/ClippedCanvas/ClippedCanvas.vue';
import EventLogo from '../components/EventLogo.vue';
import RunLabel from '../components/RunLabel/RunLabel.vue';
import Nameplate from '../components/Nameplate/Nameplate.vue';
import SoloTimer from '../components/Timer/SoloTimer.vue';
import Timer from '../components/Timer/Timer.vue';
import Estimate from '../components/Timer/Estimate.vue';
import { ClipPath } from '../components/ClippedCanvas/types';
import { gameViewModule as gameView } from '../_lib/gameViewModule';
import { TimerStatus } from '../components/Timer/types';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue'

@Component({
  components: {
    GameView,
    ClippedCanvas,
    EventLogo,
    TwitterNotification,
    RunLabel,
    Nameplate,
    SoloTimer,
    Timer,
    Estimate,
  }
})
export default class DsGameView extends OverlayBase {
  @Prop(Array)
  readonly clipPaths!: ClipPath[]

  gameView = gameView;

  get timerStatus(): TimerStatus {
    switch (this.gameView.runStatus) {
      case 'running':
        return 'running';
      case 'finished':
        return 'finished';
      default:
        return 'stopped';
    }
  }
}
</script>
