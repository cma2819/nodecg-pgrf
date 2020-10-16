/* eslint-disable vue/html-self-closing */
<template>
  <div id="spotify">
    <span>Now playing: {{ trackName }} / {{ artists }}</span>
  </div>
</template>

<style scoped>

#spotify {
  height: 48px;
  padding: 0 24px;
  background-color: white;
  border-radius: 24px;
}

#spotify span {
  vertical-align: middle;
}

</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SpotifyPlayingTrack } from '../../../nodecg/external/nodecg-spotify-widget/spotifyPlayingTrack';

@Component
export default class SpotifyTrack extends Vue {
  @Prop(Object)
  readonly track!: SpotifyPlayingTrack;

  get trackName(): string {
    if (!this.track) {
      return '';
    }
    return this.track?.name || '';
  }

  get artists(): string {
    return this.track?.artists.join(', ') || '';
  }

}
</script>
