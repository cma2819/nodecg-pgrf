<template>
  <div>
    <div class="info-box">
      <span class="label">{{ isRunner ? 'Runner': 'Commentator' }}</span>
      <span
        :id="isRunner ? 'runner' : 'commentator'"
        class="name"
      >{{ name }}</span>
      <transition
        name="social"
        mode="out-in"
      >
        <div
          v-if="displaySocial === 0 && social.twitch"
          key="twitch"
          class="account"
        >
          <span class="icon">
            <i class="fab fa-twitch"></i>
          </span>
          <span>{{ social.twitch }}</span>
        </div>
        <div
          v-else-if="displaySocial === 1 && social.nico"
          key="nico"
          class="account"
        >
          <span>{{ social.nico }}</span>
        </div>
        <div
          v-else-if="displaySocial === 2 && social.youtube"
          key="youtube"
          class="account"
        >
          <span class="icon">
            <i class="fab fa-youtube"></i>
          </span>
          <span>{{ social.youtube }}</span>
        </div>
        <div
          v-else-if="displaySocial === 3 && social.twitter"
          key="twitter"
          class="account"
        >
          <span class="icon">
            <i class="fab fa-twitter"></i>
          </span>
          <span>{{ social.twitter }}</span>
        </div>
        <div
          v-else
          key="blank"
          class="account"
        >
          <span> - </span>
        </div>
      </transition>
    </div>
    <div class="goal-time">
      <span class="time complete">{{ finishedTime }}</span>
    </div>
  </div>
</template>

<style scoped>
  .social-enter-active {
    transition: all 1s 1s;
  }

  .social-leave-active {
    transition: all 1s;
  }

  .social-enter, .social-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Social } from './types';

@Component
export default class Nameplate extends Vue {
  @Prop(Number)
  readonly displaySocial!: number;
  @Prop(String)
  readonly name!: string;
  @Prop(Boolean)
  readonly isRunner!: boolean;
  @Prop(Object)
  readonly social!: Social
  @Prop(String)
  readonly finishedTime!: string;
}
</script>
