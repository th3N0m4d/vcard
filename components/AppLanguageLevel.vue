<template>
  <div
    class="progress-bullets"
    :class="{
      'crt-animate': isVisible === false,
      'crt-animated': isVisible === true,
    }"
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
import Vue from 'vue'
import filters from '@/filters'
export default Vue.extend({
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
  data() {
    return {
      isVisible: false,
    }
  },
  mounted() {
    this.isVisible = true
  },
})
</script>
