<script setup>
import ServiceHero from '../components/service/ServiceHero.vue'
import ServiceComponent from '../components/home/ServiceComponent.vue';
import ContactUs from '../components/home/ContactUs.vue';
import FooterComponent from '../components/home/FooterComponent.vue';
</script>

<template>
  <main>
    <ServiceHero />
    <ServiceComponent :heading="heading" :action="link"/>
    <ContactUs />
    <FooterComponent />
  </main>
</template>

<script>
export default {
    data() {
      return {
        heading:'Our Services',
        link: 'Explore'
      }
    },
}
</script>
