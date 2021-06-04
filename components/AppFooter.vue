<template>
  <footer id="crt-footer" class="crt-container-lg">
    <div class="crt-container">
      <div class="crt-container-sm clear-mrg text-center">
        <p>edielton-dantas.me @ All Rights Reserved {{ currentYear }}</p>
      </div>
    </div>
    <!-- .crt-container -->
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
})
</script>
