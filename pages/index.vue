<template>
  <div class="crt-paper-cont paper-padd clear-mrg">
    <section class="section brd-btm padd-box">
      <div class="row">
        <div class="col-sm-12">
          <app-page-title>About me</app-page-title>
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
            <!-- <dt class="text-upper">Date of birth</dt>
            <dd>
              {{
                personalInfo.dateOfBirth | formatDate(DateFormat.dayMonthYear)
              }}
            </dd> -->
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
          <app-language-level
            v-for="item in languages"
            :key="item.name"
            :current-value="item.level"
            :title="item.name"
          />
        </div>
        <!-- .col-sm-6 -->
      </div>
      <!-- .row -->
    </section>
    <!-- .section -->
    <section class="section brd-btm padd-box">
      <div class="row">
        <div class="col-sm-6 clear-mrg">
          <h2 class="title-thin text-muted">top skills</h2>
          <div class="row">
            <div
              v-for="(skill, index) of topSkills"
              :key="index"
              class="col-xs-4 text-center"
            >
              <progress-circle
                :title="skill.name"
                :current-value="skill.level"
              ></progress-circle>
            </div>
          </div>
        </div>

        <div class="col-sm-6 clear-mrg">
          <h2 class="title-thin text-muted">professional skills</h2>
          <progress-line
            v-for="(skill, index) of skills"
            :key="index"
            :current-value="skill.level"
            :title="skill.name"
          ></progress-line>
        </div>
      </div>
    </section>

    <!-- .section -->
    <section class="section brd-btm padd-box">
      <div class="row">
        <div class="col-sm-12 clear-mrg">
          <h2 class="title-thin text-muted">interests</h2>
          <ul class="icon-list icon-list-col3 clearfix">
            <li v-for="(item, index) in interests" :key="index">
              <span :class="item.icon"></span> {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- .section -->
    <section class="section padd-box">
      <h2 class="title-thin text-muted">Awards and Achievements</h2>
      <div class="row">
        <div class="col-sm-6 clear-mrg">
          <div class="award-box">
            <figure class="award-img">
              <img
                src="images/british-council-logo.png"
                width="120"
                alt="British Council Logo"
              />
            </figure>
            <h3 class="award-title">IELTS exam</h3>
            <div class="award-text text-muted clear-mrg">
              <strong>Issued:</strong> September 2015
              <br />
              <strong>Credential ID:</strong> 15BR003607DANE051G
            </div>
          </div>
        </div>
        <!-- .col-sm-6 -->
      </div>
      <!-- .row -->
    </section>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import filters from '@/filters'
import { DateFormat } from '@/constants'

export default {
  filters: { ...filters },
  data() {
    return {
      DateFormat,
    }
  },
  head() {
    return {
      title: 'Welcome to my homepage',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `
          Hello world! Welcome to my website! 
          In this space you will find among other things, my professional background, 
          contact information and blog entries of my favorite topics!`,
        },
      ],
    }
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
      'languages',
      'skills',
      'topSkills',
    ]),
  },
}
</script>
