<template>
  <div
    class="progress-line"
    role="progressbar"
    :aria-valuenow="currentValue"
    :aria-valuemin="minValue"
    :aria-valuemax="maxValue"
  >
    <strong class="progress-title">{{ title }}</strong>
    <div ref="container" class="progress-bar"></div>
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
    const line = new ProgressBar.Line(this.$refs.container as any, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 3000,
      color: '#c0e3e7',
      trailColor: 'rgba(0,0,0,0.07)',
      trailWidth: 4,
      svgStyle: {
        width: '100%',
        height: '100%',
      },
      text: {
        value: formatNumber(currentValue / maxValue, 'percent'),
        className: 'progress-text',
        style: {
          top: '-25px',
          right: '0',
          color: 'inherit',
          position: 'absolute',
          margin: 0,
          padding: 0,
          transform: {
            prefix: true,
            value: 'translate(0, 0)',
          },
        },
        autoStyleContainer: true,
      },
    })
    line.animate(currentValue / maxValue) // Number from 0.0 to 1.0
  },
})
</script>
