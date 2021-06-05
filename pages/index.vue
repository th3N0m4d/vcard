<template>
  <div class="crt-paper-cont paper-padd clear-mrg">
    <section class="section brd-btm padd-box">
      <div class="row">
        <div class="col-sm-12">
          <AppPageTitle>About me</AppPageTitle>
          <div class="text-box">
            <p>
              {{ profile.aboutMe }}
            </p>
          </div>
        </div>
      </div>
      <!-- .row -->
    </section>
    <!-- .section -->
    <section class="section brd-btm padd-box">
      <div class="row">
        <div class="col-sm-6 clear-mrg">
          <h2 class="title-thin text-muted">personal information</h2>
          <dl class="dl-horizontal clear-mrg">
            <dt class="text-upper">Full Name</dt>
            <dd>{{ fullName }}</dd>
            <dt class="text-upper">Date of birth</dt>
            <dd>{{ personalInfo.dateOfBirth | dayMonthYear }}</dd>
            <dt class="text-upper">address</dt>
            <dd>{{ address }}</dd>
            <dt class="text-upper">e-mail</dt>
            <dd>
              <a :href="mailTo">{{ personalInfo.emailAddress }}</a>
            </dd>
            <dt class="text-upper">phone</dt>
            <dd>
              <a :href="tel">{{ personalInfo.phoneNumber }}</a>
            </dd>
            <dt class="text-upper">freelance</dt>
            <dd>{{ workAvailability }}</dd>
          </dl>
        </div>
        <!-- .col-sm-6 -->
        <div class="col-sm-6 clear-mrg">
          <h2 class="title-thin text-muted">languages</h2>
          <div
            class="progress-bullets crt-animate"
            role="progressbar"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="10"
          >
            <strong class="progress-title">English</strong>
            <span class="progress-bar">
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
            </span>
            <span class="progress-text text-muted">native</span>
          </div>
          <div
            class="progress-bullets crt-animate"
            role="progressbar"
            aria-valuenow="8"
            aria-valuemin="0"
            aria-valuemax="10"
          >
            <strong class="progress-title">Spanish</strong>
            <span class="progress-bar">
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet"></span>
              <span class="bullet"></span>
            </span>
            <span class="progress-text text-muted">intermediate</span>
          </div>
          <div
            class="progress-bullets crt-animate"
            role="progressbar"
            aria-valuenow="7"
            aria-valuemin="0"
            aria-valuemax="10"
          >
            <strong class="progress-title">Italian</strong>
            <span class="progress-bar">
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet fill"></span>
              <span class="bullet"></span>
              <span class="bullet"></span>
              <span class="bullet"></span>
            </span>
            <span class="progress-text text-muted">begginer</span>
          </div>
        </div>
        <!-- .col-sm-6 -->
      </div>
      <!-- .row -->
    </section>
    <!-- .section -->
    <section class="section brd-btm padd-box">
      <div class="row">
        <div class="col-sm-6 clear-mrg">
          <h2 class="title-thin text-muted">professional skills</h2>
          <div class="row">
            <div class="col-xs-4 text-center">
              <div
                class="progress-chart crt-animate"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar"
                  data-text="90%"
                  data-value="0.9"
                ></div>
                <strong class="progress-title">UX Design</strong>
              </div>
            </div>
            <!-- .col-xs-4 -->
            <div class="col-xs-4 text-center">
              <div
                class="progress-chart crt-animate"
                role="progressbar"
                aria-valuenow="88"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar"
                  data-text="81%"
                  data-value="0.81"
                ></div>
                <strong class="progress-title">PHP & MySql</strong>
              </div>
            </div>
            <!-- .col-xs-4 -->
            <div class="col-xs-4 text-center">
              <div
                class="progress-chart crt-animate"
                role="progressbar"
                aria-valuenow="66"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  class="progress-bar"
                  data-text="66%"
                  data-value="0.66"
                ></div>
                <strong class="progress-title">UI Design</strong>
              </div>
            </div>
            <!-- .col-xs-4 -->
          </div>
          <!-- .row -->
        </div>
        <!-- .col-sm-6 -->
        <div class="col-sm-6 clear-mrg">
          <h2 class="title-thin text-muted">professional skills</h2>
          <div
            class="progress-line crt-animate"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <strong class="progress-title">Php & MySQL</strong>
            <div class="progress-bar" data-text="90%" data-value="0.9"></div>
          </div>
          <div
            class="progress-line crt-animate"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <strong class="progress-title">Javascript</strong>
            <div class="progress-bar" data-text="80%" data-value="0.8"></div>
          </div>
          <div
            class="progress-line crt-animate"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <strong class="progress-title">UX Design</strong>
            <div class="progress-bar" data-text="80%" data-value="0.8"></div>
          </div>
          <div
            class="progress-line crt-animate"
            role="progressbar"
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <strong class="progress-title">UI Design</strong>
            <div class="progress-bar" data-text="70%" data-value="0.7"></div>
          </div>
        </div>
        <!-- .col-sm-6 -->
      </div>
      <!-- .row -->
    </section>
    <!-- .section -->
    <section class="section brd-btm padd-box">
      <div class="row">
        <div class="col-sm-6 clear-mrg">
          <h2 class="title-thin text-muted">professional skills</h2>
          <div
            class="progress-line crt-animate"
            role="progressbar"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <strong class="progress-title">Php & MySQL</strong>
            <div class="progress-bar" data-text="90%" data-value="0.9"></div>
          </div>
          <div
            class="progress-line crt-animate"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <strong class="progress-title">Javascript</strong>
            <div class="progress-bar" data-text="80%" data-value="0.8"></div>
          </div>
          <div
            class="progress-line crt-animate"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <strong class="progress-title">UX Design</strong>
            <div class="progress-bar" data-text="80%" data-value="0.8"></div>
          </div>
        </div>
        <!-- .col-sm-6 -->
        <div class="col-sm-6 clear-mrg">
          <h2 class="title-thin text-muted">personal characteristics</h2>
          <ul class="styled-list clear-mrg">
            <li>Lake Marcelview</li>
            <li>New Tara</li>
            <li>Abbeyshire</li>
            <li>Kassulkechester</li>
          </ul>
        </div>
        <!-- .col-sm-6 -->
      </div>
      <!-- .row -->
    </section>
    <!-- .section -->
    <section class="section padd-box">
      <div class="row">
        <div class="col-sm-12 clear-mrg">
          <h2 class="title-thin text-muted">interests</h2>
          <ul class="icon-list icon-list-col3 clearfix">
            <li v-for="item in interests" :key="item">
              <span class="crt-icon crt-icon-heart"></span> {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- .section -->
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { mapGetters } from 'vuex'

export default {
  filters: {
    dayMonthYear(value: string) {
      return dayjs(value).format('DD/MM/YYYY')
    },
  },
  computed: {
    ...mapGetters([
      'personalInfo',
      'profile',
      'fullName',
      'address',
      'mailTo',
      'tel',
      'workAvailability',
      'interests',
    ]),
  },
}
</script>
