<template>
  <div :style="{height: '100%', display: 'flex', alignItems: 'center'}">
    <img
      v-if="pgrfLogoUrl"
      id="logo"
      :src="pgrfLogoUrl"
      alt="PGRF"
    >
  </div>
</template>

<style scoped>
#logo-ome, #logo-pgrf {
  height: 100%;
}

#presents {
  margin: 0 0.5em;
  font-family: 'Staatliches', sans-serif;
  font-size: 2em;
}

#now {
  font-size: 2em;
  margin-left: auto;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { pgrfNodecg } from '../../../plugin/nodecg';
@Component
export default class EventLogoComponent extends Vue {
  pgrfLogoUrl: string|null = null;

  created(): void {

    pgrfNodecg.Replicant('assets:pgrf-logo').on('change', (newVal) => {
      if (newVal && newVal.length > 0) {
        this.pgrfLogoUrl = newVal[0].url;
      }
    });
  }
}
</script>
