<template>
  <div id="container">
    <clipped-canvas
      v-if="backgroundUri"
      :clip-paths="clipPaths"
      :background-image="backgroundUri"
    ></clipped-canvas>
    <header>
      <event-logo></event-logo>
    </header>
    <div :style="{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', padding: paddings ? paddings.join(' ') : null}">
      <slot></slot>
    </div>
  </div>
</template>

<style>
html {
  overflow: hidden;
}
#root {
  margin: 0;
  width: 1920px;
  height: 1080px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ClippedCanvas from './components/ClippedCanvas/ClippedCanvas.vue';
import { ClipPath } from './components/ClippedCanvas/types';
import { RunData } from '../../nodecg/external/speedcontrol/RunData';
import { pgrfNodecg } from '../plugin/nodecg';
import EventLogo from './components/EventLogo/EventLogo.vue';

@Component({
  components: {
    ClippedCanvas,
    EventLogo,
  }
})
export default class OverlayBase extends Vue {
  backgroundUri = '';

  @Prop(Array)
  readonly clipPaths!: ClipPath[];

  @Prop(Object)
  readonly runData!: RunData;

  @Prop(Array)
  readonly paddings!: string[];

  @Prop(Boolean)
  readonly small!: boolean;

  created(): void {
    pgrfNodecg.Replicant('assets:background').on('change', (newVal) => {
      if (newVal.length > 0) {
        this.backgroundUri = newVal[0].url;
      }
    });
  }
}
</script>
