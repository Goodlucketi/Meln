<template>
  <header class="">
    <nav class="z-10 fixed top-0 w-full bg-purple-700/25 p-4 backdrop-blur-sm md:p-3">
      <div class="nav-content w-11/12 mx-auto flex justify-between items-center relative">
        <div class="logo w-3/12">
          <router-link to="/">
            <img src="../assets/files/images/Logo_Primary_white.png" alt="Logo" class="w-3/6 lg:w-4/6 md:w-5/6 sm:w-full">
          </router-link>
        </div>
        <div class="link flex items-center gap-5 justify-between w-10/12 text-white lg:block lg:fixed lg:top-0 lg:left-0 lg:bg-slate-100 lg:rounded-lg lg:text-center lg:w-full lg:pt-10" :class="{ 'lg:hidden': !menuBar } ">
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500 lg:block lg:p-4 lg:m-3 lg:text-slate-700 lg:border-b lg:border-slate-700 home" to="/">Home</router-link>
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500 lg:block lg:p-4 lg:m-3 lg:text-slate-700 lg:border-b lg:border-slate-700" to="/about">About</router-link>
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500 lg:block lg:p-4 lg:m-3 lg:text-slate-700 lg:border-b lg:border-slate-700" to="/service">Services</router-link>
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500 lg:block lg:p-4 lg:m-3 lg:text-slate-700 lg:border-b lg:border-slate-700" to="/projects">Projects</router-link>
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500 lg:block lg:p-4 lg:m-3 lg:text-slate-700 lg:border-b lg:border-slate-700" to="/training">Training</router-link>
          <router-link class="nav-link transition-all duration-1000 hover:text-blue-500 lg:block lg:p-4 lg:m-3 lg:text-slate-700 lg:border-b lg:border-slate-700" to="/blog">Blog</router-link>
          <div class="contact-us bg-white py-2 px-4 rounded-xl text-slate-700 text-center w-2/12 lg:w-full">
            <router-link to="/contact">Contact us</router-link>
          </div>
          <div class="social-icons" v-if="icons">
            <a :href="facebook" :target="target"><font-awesome-icon class="icon mx-1 p-2 text-blue-800" icon="fa-brands fa-facebook"/></a>
            <a :href="linkedin" :target="target"><font-awesome-icon class="icon text-blue-500 mx-1 p-2 text-blue-800" icon="fa-brands fa-linkedin"/></a>
            <a :href="twitter" :target="target"><font-awesome-icon class="icon text-blue-500 mx-1 p-2 text-blue-800" icon="fa-brands fa-twitter"/></a>
            <a :href="instagram" :target="target"><font-awesome-icon class="icon text-blue-500 mx-1 p-2 text-blue-800" icon="fa-brands fa-instagram"/></a>
            <a :href="whatsapp" :target="target"><font-awesome-icon class="icon text-blue-500 mx-1 p-2 text-blue-800" icon="fa-brands fa-whatsapp"/></a>
          </div>
        </div>
        <div @click="navToggle" class="menu-icon text-white hidden lg:block lg:absolute z-32 lg:right-10" :class="{ 'lg:text-slate-800': menuColor }">
          <font-awesome-icon class="icon" icon="fa-solid fa-bars" size="lg" />
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
    data() {
        return {
            menuBar: false,
            icons: false,
            menuColor:false,
            facebook:"https://www.facebook.com/profile.php?id=100092200862993",
            twitter: 'https://www.twitter.com/Melnhub',
            linkedin: 'https://www.linkedin.com/in/meln-hub/',
            instagram: 'https://www.instagram.com/melnhub',
            target: '_blank',
            whatsapp: 'https://chat.whatsapp.com/Ke8EcoUXVSB3LzsEfh4D8r',
        }
    },
    methods: {
      navToggle: function () {
          this.menuBar = !this.menuBar;
              if(this.menuBar){
                  this.icons = true
                  this.menuColor = true
              }
              else{
                  this.icons = false,
                  this.menuColor = false
              }
              return
          }
      }
}
</script>

<style>

</style>