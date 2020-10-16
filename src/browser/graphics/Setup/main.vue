<template>
  <overlay-base>
    <div id="container">
      <header>
        <setup-event-logo></setup-event-logo>
        <div
          id="now"
          class="time"
        >
          {{ nowTime.hour }}<span :class="{blink: timeBlink}">:</span>{{ nowTime.minute }}
        </div>
      </header>
      <div id="main">
        <div id="schedule">
          <setup-schedule></setup-schedule>
        </div>
        <twitter-notification
          :is-race="false"
          :tweet="activeTweet"
        ></twitter-notification>
      </div>
      <footer>
        <spotify-track
          :track="spotifyPlayingTrack"
        ></spotify-track>
        <div id="hashtag-guide">
          hashtag: <span class="hashtag">#PGRF</span>
        </div>
      </footer>
    </div>
  </overlay-base>
</template>

<style scoped>

.blink {
  visibility: hidden;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 120px;
  padding: 12px 48px;
  background-color: rgba(255, 255, 255, 80%);
}

#now {
  font-size: 2em;
  margin-left: auto;
}

#main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 64px;
}

#schedule {
  display: inline-flex;
  width: 1280px;
  height: 720px;
  flex-direction: column;
  justify-content: space-between;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 48px;
  background-color: rgba(255, 255, 255, 80%);
}

#hashtag-guide {
  font-family: 'Staatliches', sans-serif;
  font-size: 2em;
}

</style>

<style>
#tweet {
  display: inline-flex;
  flex-direction: column;
  width: 420px;
}

#tweet .box {
  padding: 16px;
}

#twitter-user {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid gray;
  font-size: 0.9em;
  font-weight: bold;
}

#twitter-icon {
  width: 48px;
  height: 48px;
  margin-right: 16px;
  background-color: white;
  border-radius: 24px;
}

#tweet-text {
  font-size: 0.9em;
  padding-top: 8px;
}

#tweet-label {
  font-size: 2em;
}

</style>

<script lang="ts">
import { pgrfNodecg, spotifyNodecg } from '../../plugin/nodecg';
import { Vue, Component } from 'vue-property-decorator';
import OverlayBase from '../OverlayBase.vue';
import ClippedCanvas from '../components/ClippedCanvas/ClippedCanvas.vue';
import { secondsToFormatted } from '../_lib/util';
import { additionsModule as additions } from '../../plugin/additions';
import { speedcontrolModule as speedcontrol } from '../../plugin/speedcontrol';
import { RunData } from '../../../nodecg/external/speedcontrol/RunData';
import { Commentator } from '../../../nodecg/external/speedcontrol-additions/commentator';
import SetupEventLogo from '../components/EventLogo/SetupEventLogoComponent.vue';
import UpcomingRun from '../components/UpcomingRun.vue';
import SpotifyTrack from '../components/SpotifyTrack.vue';
import TwitterNotification from '../components/TwitterNotification/TwitterNotification.vue'
import { SpotifyPlayingTrack } from '../../../nodecg/external/nodecg-spotify-widget/spotifyPlayingTrack'
import SetupSchedule from '../components/SetupSchedule/SetupScheduleComponent.vue'

@Component({
  components: {
    OverlayBase,
    ClippedCanvas,
    SetupEventLogo,
    UpcomingRun,
    SpotifyTrack,
    TwitterNotification,
    SetupSchedule
  }
})
export default class App extends Vue {
  backgroundUri = '';
  spotifyPlayingTrack: SpotifyPlayingTrack | null = null;

  nowTime: {
    hour: string;
    minute: string;
  } = {
    hour: '',
    minute: ''
  };
  timeBlink = false;

  mounted(): void {
    spotifyNodecg.Replicant('spotifyPlayingTrack', 'nodecg-spotify-widget').on('change', (newVal) => {
      this.spotifyPlayingTrack = newVal;
    });
    pgrfNodecg.Replicant('assets:background').on('change', (newVal) => {
      if (newVal.length > 0) {
        this.backgroundUri = newVal[0].url;
      }
    });

    setInterval(this.updateNowTime, 1000);
  }

  get upcomingRuns(): RunData[] {
    const currentRunIndex = additions.speedcontrolCurrentRunIndex || 0;
    return speedcontrol.runDataArray.slice(currentRunIndex, currentRunIndex + 3);
  }

  get upcomingRunCommentators(): Commentator[][] {
    return this.upcomingRuns.map((run) => {
      return additions.commentatorArray.filter((commentator) => {
        return commentator.assignedRunIdArray.find(runId => runId === run.externalID);
      })
    });
  }

  get upcomingStartIn(): string[] {
    if (!this.upcomingRuns) {
      return [];
    }
    const startInArray = [];
    startInArray.push(''); // First Element is never used
    if (!this.upcomingRuns[1]) {
      return startInArray;
    }
    const secondRunStartIn = (this.upcomingRuns[0].estimateS || 0) + (this.upcomingRuns[1].setupTimeS || 0);
    startInArray.push(secondsToFormatted(secondRunStartIn));
    if (!this.upcomingRuns[2]) {
      return startInArray;
    }
    const thirdRunStartIn = secondRunStartIn + (this.upcomingRuns[1].estimateS || 0) + (this.upcomingRuns[2].setupTimeS || 0);
    startInArray.push(secondsToFormatted(thirdRunStartIn));
    return startInArray;
  }

  updateNowTime(): void {
    const now = new Date(Date.now());
    const nowTime = now.toLocaleTimeString('ja-JP', { hour12: false, hour: '2-digit', minute: '2-digit' });
    this.nowTime = {
      hour: nowTime.split(':')[0],
      minute: nowTime.split(':')[1]
    };
    this.timeBlink = !(this.timeBlink);
  }
}
</script>
