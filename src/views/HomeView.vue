<script setup>
import HomeComponent from '../components/home/HeroComponent.vue'
import AboutHome from '../components/home/AboutHome.vue'
import ServiceComponent from '../components/home/ServiceComponent.vue'
import AdComponent from '../components/home/AdComponent.vue'
import MeetTeam from '../components/home/MeetTeam.vue'
</script>

<template>
  <main>
    <HomeComponent />
    <AboutHome />
    <ServiceComponent :heading="head" :action="link"/>
    <AdComponent />
    <MeetTeam />
  </main>
</template>

<script>
export default {
  data() {
    return {
      head: "Discover Our Services",
      link: "Explore"
    }
  },
}
</script>
