<template>
  <transition name="next">
    <div>
      <span
        :style="{
          position: 'absolute',
          left: '0px',
          font: 'bold 50px/48px source-han-sans-japanese',
          marginLeft: '20px',
          color: 'rgba(255, 255, 255, 0.8)'
        }"
      >NEXT</span>
      <span
        :style="{
          position: 'absolute',
          right: '0px',
          font: 'bold 30px/48px source-han-sans-japanese',
          marginRight: '20px',
          color: 'rgba(255, 255, 255, 0.8)'
        }"
      >{{ game }} - {{ runner }}</span>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NextRunInformation extends Vue {
  @Prop(String)
  readonly game!: string;

  @Prop(String)
  readonly runner!: string;
}
</script>