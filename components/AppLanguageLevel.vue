<template>
  <div
    class="progress-bullets crt-animate"
    role="progressbar"
    :aria-valuenow="currentValue"
    :aria-valuemin="minValue"
    :aria-valuemax="maxValue"
  >
    <strong class="progress-title">{{ title }}</strong>
    <span class="progress-bar">
      <span
        v-for="bullet in maxValue"
        :key="bullet"
        class="bullet"
        :class="{ fill: currentValue + 1 >= bullet }"
        :title="bullet"
      ></span>
    </span>
    <span class="progress-text text-muted">{{
      currentValue | ieltsBandScale
    }}</span>
  </div>
</template>
<script lang="ts">
import filters from '@/filters'
export default {
  filters: {
    ieltsBandScale: filters.ieltsBandScale,
  },
  props: {
    currentValue: {
      type: Number,
      default: 0,
    },
    minValue: {
      type: Number,
      default: 0,
    },
    maxValue: {
      type: Number,
      default: 10,
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.progress-bullets.crt-animate .bullet {
  opacity: 0;
}
.progress-bullets.crt-animated .bullet {
  -webkit-animation: fadein 250ms linear;
  animation: fadein 250ms linear;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.progress-bullets.crt-animated .bullet:nth-child(1) {
  -webkit-animation-delay: 0ms;
  animation-delay: 0ms;
}
.progress-bullets.crt-animated .bullet:nth-child(2) {
  -webkit-animation-delay: 50ms;
  animation-delay: 50ms;
}
.progress-bullets.crt-animated .bullet:nth-child(3) {
  -webkit-animation-delay: 100ms;
  animation-delay: 100ms;
}
.progress-bullets.crt-animated .bullet:nth-child(4) {
  -webkit-animation-delay: 145ms;
  animation-delay: 145ms;
}
.progress-bullets.crt-animated .bullet:nth-child(5) {
  -webkit-animation-delay: 175ms;
  animation-delay: 175ms;
}
.progress-bullets.crt-animated .bullet:nth-child(6) {
  -webkit-animation-delay: 210ms;
  animation-delay: 210ms;
}
.progress-bullets.crt-animated .bullet:nth-child(7) {
  -webkit-animation-delay: 240ms;
  animation-delay: 240ms;
}
.progress-bullets.crt-animated .bullet:nth-child(8) {
  -webkit-animation-delay: 265ms;
  animation-delay: 265ms;
}
.progress-bullets.crt-animated .bullet:nth-child(9) {
  -webkit-animation-delay: 290ms;
  animation-delay: 290ms;
}
.progress-bullets.crt-animated .bullet:nth-child(10) {
  -webkit-animation-delay: 310ms;
  animation-delay: 310ms;
}
</style>
