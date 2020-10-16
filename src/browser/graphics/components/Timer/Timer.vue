<template>
  <div class="info-box">
    <span class="label">CURRENT TIME</span>
    <span id="est" class="time" :style="{ color : timerColor }">{{ time }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TimerStatus } from './types';
import { VuetifyThemeItem } from 'vuetify/types/services/theme';

@Component
export default class Timer extends Vue {

  timerColorStatus: {[k in TimerStatus]: string | VuetifyThemeItem} = {
    stopped: 'rgba(0, 0, 0, 50%)',
    running: '#000000',
    finished: this.$vuetify.theme.themes.light.secondary || '#fffffff'
  };

  @Prop(String)
  readonly status!: TimerStatus;
  @Prop(String)
  readonly time!: string;

  get timerColor(): string | VuetifyThemeItem {
    return this.timerColorStatus[this.status];
  }

}
</script>
