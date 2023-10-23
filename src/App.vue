<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeComponent from './components/home/HeroComponent.vue'
</script>

<template>
  <header class="">
    <nav class="z-10 fixed top-0 w-full bg-purple-700/25 p-4 backdrop-blur-sm md:p-1">
      <div class="nav-content w-11/12 mx-auto flex justify-between items-center">
        <div class="logo w-3/12">
          <router-link to="/">
            <img src="./assets/files/images/Logo_Primary_white.png" alt="Logo" class="w-3/6">
          </router-link>
        </div>
        <div :id="openNav " class="link flex items-center gap-5 justify-between w-10/12 text-white" :style="{ height: nav }">
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500 home" to="/">Home</router-link>
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500" to="/about">About</router-link>
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500" to="/service">Services</router-link>
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500" to="/projects">Projects</router-link>
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500" to="/training">Training</router-link>
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500" to="/blog">Blog</router-link>
          <div class="contact-us bg-white py-2 px-4 rounded-xl text-slate-700 text-center w-2/12">
            <router-link to="/contact">Contact us</router-link>
          </div>
          <div class="social-icons" v-if="icons">
            <router-link to="/facebook"><font-awesome-icon class="icon" icon="fa-brands fa-facebook"/></router-link>
            <font-awesome-icon class="icon text-blue-500" icon="fa-brands fa-linkedin"/>
            <font-awesome-icon class="icon text-blue-500" icon="fa-brands fa-twitter"/>
            <font-awesome-icon class="icon text-blue-500" icon="fa-brands fa-instagram"/>
            <font-awesome-icon class="icon text-blue-500" icon="fa-brands fa-whatsapp"/>
          </div>
        </div>
        <div @click="navigation" class="menu-icon">
          <font-awesome-icon class="icon" icon="fa-solid fa-bars" size="lg" />
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
