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
import dayjs from 'dayjs'
import { WorkHistory } from '@/models'

const compareDates = (a: WorkHistory, b: WorkHistory) => {
  return dayjs(a.startDate).isBefore(b.startDate) ? 1 : -1
}

export default Vue.extend({
  filters: { ...filters },
  async asyncData({ $content }: any) {
    const payload = await $content('work-history').fetch()

    const workHistory = payload.sort(compareDates)

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
