<template>
  <div class="crt-side-box-item">
    <div class="crt-card bg-primary text-center">
      <div class="crt-card-avatar">
        <img
          class="avatar avatar-195"
          :src="avatarUrl"
          :srcset="avatarUrl"
          width="195"
          height="195"
          alt=""
        />
      </div>
      <div class="crt-card-info">
        <h2 class="text-upper">{{ fullName }}</h2>
        <p class="text-muted">{{ headline }}</p>
        <ul class="crt-social clear-list">
          <li v-for="item in socialMediaLinks" :key="item.id">
            <a :href="item.profileUrl" target="_blank"
              ><span :class="item.icon"></span
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="crt-side-box-btn">
      <a class="btn btn-default btn-lg btn-block btn-thin btn-upper" href="#"
        >Download Resume</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Social } from '~/models'

export default {
  props: {
    fullName: {
      type: String,
      default: '',
    },
    headline: {
      type: String,
      default: '',
    },
    avatarUrl: {
      type: String,
      default: '~/assets/images/uploads/avatar-116x116-default-2x.jpg',
    },
    socialMediaLinks: {
      type: Array as () => Social[],
      default: (): Social[] => [],
    },
  },
}
</script>
