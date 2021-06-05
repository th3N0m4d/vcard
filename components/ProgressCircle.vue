<template>
  <div
    class="progress-chart"
    role="progressbar"
    :aria-valuenow="currentValue"
    :aria-valuemin="minValue"
    :aria-valuemax="maxValue"
  >
    <div ref="container" class="progress-bar"></div>
    <strong class="progress-title">{{ title }}</strong>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProgressBar from 'progressbar.js'
import { formatNumber } from '@/utils'

export default Vue.extend({
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
  mounted() {
    const { currentValue, maxValue } = this.$props
    const circle = new ProgressBar.Circle(this.$refs.container as any, {
      color: '#c0e3e7',
      strokeWidth: 5,
      trailWidth: 0,
      text: {
        value: formatNumber(currentValue / maxValue, 'percent'),
        className: 'progress-text',
        style: {
          top: '50%',
          left: '50%',
          color: 'inherit',
          position: 'absolute',
          margin: 0,
          padding: 0,
          transform: {
            prefix: true,
            value: 'translate(-50%, -50%)',
          },
        },
        autoStyleContainer: true,
        alignToBottom: true,
      },
      svgStyle: {
        display: 'block',
        width: '100%',
      },
      duration: 3000,
      easing: 'easeOut',
    })
    circle.animate(currentValue / maxValue) // Number from 0.0 to 1.0
  },
})
</script>
