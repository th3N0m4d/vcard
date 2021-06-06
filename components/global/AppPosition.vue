<template>
  <div class="education">
    <div class="education-box">
      <time class="education-date" datetime="2014-01T2016-03">
        <span
          >{{ position.startDate | formatDate(DateFormat.shortMonthName) }}
          <strong class="text-upper">{{
            position.startDate | formatDate(DateFormat.year)
          }}</strong>
          - {{ position.endDate | formatDate(DateFormat.shortMonthName) }}
          <strong>{{
            position.endDate | formatDate(DateFormat.year)
          }}</strong></span
        >
      </time>
      <h3>{{ position.title }}</h3>

      <div class="education-logo" style="width: 20%">
        <img :src="position.urlToILogo" :alt="position.company" />
      </div>
      <span class="education-company">{{ position.company }}</span>

      <nuxt-content :document="position" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import filters from '@/filters'
import { DateFormat } from '@/constants'

export default Vue.extend({
  filters: { ...filters },
  props: {
    position: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      DateFormat,
    }
  },
})
</script>
