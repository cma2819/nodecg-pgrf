<template>
    <div class="info-box">
      <span class="label">EST</span>
      <span id="est" class="time">{{ time }}</span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Estimate extends Vue {

  @Prop(String)
  readonly time!: string;

}
</script>
