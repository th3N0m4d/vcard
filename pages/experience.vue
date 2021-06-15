<template>
  <div class="crt-paper-cont paper-padd clear-mrg">
    <app-page-title>work experience</app-page-title>
    <app-position
      v-for="(position, index) in workHistory"
      :key="index"
      :position="position"
    />
  </div>
</template>

<script>
import { DateFormat } from '@/constants'
import Vue from 'vue'
import filters from '@/filters'

export default Vue.extend({
  filters: { ...filters },
  async asyncData({ $content }) {
    const workHistory = await $content('experience')
      .sortBy('startDate', 'desc')
      .fetch()

    return {
      workHistory,
    }
  },

  data() {
    return {
      DateFormat,
    }
  },
  head() {
    return {
      title: 'Job experience',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `On this page you can see my work history sorted from most recent to less recent`,
        },
      ],
    }
  },
})
</script>
