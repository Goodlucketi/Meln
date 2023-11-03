<script setup>
import HomeComponent from '../components/home/HeroComponent.vue'
import AboutHome from '../components/home/AboutHome.vue'
import ServiceComponent from '../components/home/ServiceComponent.vue'
import AdComponent from '../components/home/AdComponent.vue'
import MeetTeam from '../components/home/MeetTeam.vue'
// import BlogComponent from '../components/home/BlogComponent.vue'
import ContactUs from '../components/home/ContactUs.vue'
import FooterComponent from '../components/home/FooterComponent.vue'
</script>

<template>
  <main>
    <HomeComponent />
    <AboutHome />
    <ServiceComponent :heading="head" :action="link"/>
    <AdComponent />
    <MeetTeam />
    <!-- <BlogComponent /> -->
    <ContactUs />
    <FooterComponent />
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
