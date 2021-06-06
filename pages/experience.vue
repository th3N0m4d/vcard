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

<script lang="ts">
import { DateFormat } from '@/constants'
import Vue from 'vue'
import filters from '@/filters'

export default Vue.extend({
  filters: { ...filters },
  async asyncData({ $content }: any) {
    const workHistory = await $content('work-history')
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
})
</script>
