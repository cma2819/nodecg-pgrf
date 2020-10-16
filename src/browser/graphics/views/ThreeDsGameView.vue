<template>
  <game-view :clip-paths="clipPaths">
    <div
      :style="{
        position: 'absolute',
        top: `${nameplateTop}px`,
        height: `${1080 - 40 - nameplateTop}px`,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }"
    >
      <div
        id="info-area"
        :style="{
          width: 'calc(100% - 48px)',
          height: '191px'
        }"
      >
        <div
          id="run-info"
        >
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

          <div id="times">
            <estimate
              :time="gameView.runData.estimate"
            ></estimate>
            <timer
              :status="timerStatus"
              :time="gameView.currentTime.time"
            ></timer>
          </div>
        </div>
        <twitter-notification
          :is-race="false"
          :tweet="activeTweet"
        ></twitter-notification>
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
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue';
import RunLabel from '../components/RunLabel/RunLabel.vue';
import Nameplate from '../components/Nameplate/Nameplate.vue';
import RaceNameplate from '../components/Nameplate/RaceNameplate.vue';
import Timer from '../components/Timer/Timer.vue';
import Estimate from '../components/Timer/Estimate.vue';
import { ClipPath } from '../components/ClippedCanvas/types';
import { gameViewModule as gameView } from '../_lib/gameViewModule';
import { TimerStatus } from '../components/Timer/types';

@Component({
  components: {
    GameView,
    ClippedCanvas,
    EventLogo,
    TwitterNotification,
    RunLabel,
    Nameplate,
    RaceNameplate,
    Timer,
    Estimate,
  }
})
export default class ThreeDsGameView extends OverlayBase {
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

  get nameplateTop(): number {
    const clipPath = this.clipPaths[0];

    return clipPath.y + clipPath.height;
  }

  get nameplateWidth(): number {
    const clipPath = this.clipPaths[0];

    return clipPath.width;
  }

  get nameplateLeft(): number[] {
    return this.clipPaths.map((path) => {
      return path.x;
    });
  }
}
</script>
