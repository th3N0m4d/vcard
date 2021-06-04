<template>
  <div class="crt-paper-cont paper-padd clear-mrg">
    <div class="padd-box-sm">
      <div v-if="error.statusCode === 404" class="text-center">
        <strong class="title-404 text-upper">404</strong>
        <span class="info-404"
          >the page you were looking for<br />
          doesn't exist</span
        >
        <NuxtLink class="btn btn-primary" to="/">Go Back</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
