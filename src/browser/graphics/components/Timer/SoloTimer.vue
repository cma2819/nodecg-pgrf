<template>
  <div>
    <div
      :style="{
        borderBottom: '3px solid #ffffff',
        boxSizing: 'border-box',
        textAlign: 'right',
        font: '100px/120px interstate-mono',
        color: timerColor
      }"
    >
      {{ time }}
    </div>
    <div>
      <div
        :style="{
          display: 'inline-block',
          font: 'bold 50px/72px source-han-sans-japanese',
          color: '#ffffff',
          letterSpacing: 0
        }"
      >
        予定タイム
      </div>
      <div
        :style="{
          position: 'absolute',
          right: '0px',
          bottom: '0px',
          display: 'inline-block',
          textAlign: 'right',
          font: '75px/90px interstate-mono',
          color: '#ffffff'
        }"
      >
        {{ estimate }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TimerStatus } from './types';
import { VuetifyThemeItem } from 'vuetify/types/services/theme';

@Component
export default class SoloTimer extends Vue {

  timerColorStatus: {[k in TimerStatus]: string | VuetifyThemeItem} = {
    stopped: 'rgba(255, 255, 255, 0.4)',
    running: '#ffffff',
    warning: '#B56151',
    finished: this.$vuetify.theme.themes.light.secondary || '#fffffff'
  };

  @Prop(String)
  readonly status!: TimerStatus;
  @Prop(String)
  readonly time!: string;
  @Prop(String)
  readonly estimate!: string;

  get timerColor(): string | VuetifyThemeItem {
    return this.timerColorStatus[this.status];
  }

}
</script>