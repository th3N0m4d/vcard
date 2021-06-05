<template>
  <div class="crt-paper-cont paper-padd clear-mrg">
    <app-page-title>work experience</app-page-title>
    <div class="education">
      <div
        v-for="(item, index) in workHistory"
        :key="index"
        class="education-box"
      >
        <time class="education-date" datetime="2014-01T2016-03">
          <span
            >{{ item.startDate | formatDate(DateFormat.shortMonthName) }}
            <strong class="text-upper">{{
              item.startDate | formatDate(DateFormat.year)
            }}</strong>
            - {{ item.endDate | formatDate(DateFormat.shortMonthName) }}
            <strong>{{
              item.endDate | formatDate(DateFormat.year)
            }}</strong></span
          >
        </time>
        <h3>{{ item.title }}</h3>

        <div class="education-logo" style="width: 20%">
          <img
            :src="require(`~/assets/images/company-logos/${item.logoUrl}`)"
            alt=""
          />
        </div>
        <span class="education-company">{{ item.name }}</span>

        <p>
          <vue-markdown>
            {{ item.description }}
          </vue-markdown>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { DateFormat } from '@/constants'
import Vue from 'vue'
import filters from '@/filters'
import VueMarkdown from 'vue-markdown'

export default Vue.extend({
  components: {
    VueMarkdown,
  },
  filters: { ...filters },
  data() {
    return {
      DateFormat,
    }
  },
  computed: {
    ...mapGetters(['workHistory']),
  },
})
</script>
