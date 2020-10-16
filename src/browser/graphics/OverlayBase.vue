<template>
  <div
    id="root"
    :style="{backgroundImage: `url(${backgroundUri})`, backgroundSize: 'cover'}"
  >
    <slot></slot>
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
import { Vue, Component } from 'vue-property-decorator';
import { pgrfNodecg } from '../plugin/nodecg';

@Component
export default class OverlayBase extends Vue {
  backgroundUri = '';

  created(): void {
    pgrfNodecg.Replicant('assets:background').on('change', (newVal) => {
      if (newVal.length > 0) {
        this.backgroundUri = newVal[0].url;
      }
    });
  }
}
</script>
