<template>
  <div id="title">
    <p id="game-title">{{ game }}</p>
    <p id="category-platform">{{ category }} - {{ platform }}</p>
    <p id="platform"></p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class EventLogo extends Vue {
  @Prop(String)
  readonly game!: string;
  @Prop(String)
  readonly category!: string;
  @Prop(String)
  readonly platform!: string;
}
</script>
