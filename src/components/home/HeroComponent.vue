<template>
  <div class="hero h-screen relative">
    <div class="hero-content w-11/12 mx-auto relative text-center text-white py-8">
      <div class="hero-txt">
        <h3 class="text-6xl pt-28 lg:text-5xl md:text-4xl sm:text-3xl md:pt-16 md:leading-none">
          Transforming <span class="text-cyan-400"> Businesses </span>through
          <span class="text-cyan-400"> Innovative </span> ICT Solutions
        </h3>
        <p class="text-xl font-light w-8/12 my-3 mx-auto p-3 md:w-full md:text-sm">
          At Meln Hub, we believe in the power of technology to shape a better
          world. We are dedicated to providing cutting-edge solutions that
          empower businesses, drive digital transformation, and unlock new
          opportunities.
        </p>
        <div class="btns mt-10 mx-auto mb-10 md:mt-2">
          <router-link class="btn text-slate-700 bg-slate-100 py-3 px-10 mx-5 my-10 rounded-xl lg:block lg:my-3 md:my-5" to="/contact">Get Started</router-link>
          <router-link class="btn text-cyan-400 py-3 px-10 mx-5 my-10 rounded-xl border border-cyan-400 lg:block lg:my-3 md:my-5" to="/contact">Learn More</router-link>
        </div>
      </div>
      <div class="features flex gap-2 justify-between items-center absolute lg:flex-col">
        <div class="flex items-center p-3 rounded-xl text-left gap-3 bg-slate-800 text-white lg:flex-col lg:text-center lg:w-full ideate">
          <div class="icon rounded-full bg-white p-2 w-3/12 md:w-1/12">
            <img src="../../assets/files/icons/python.svg" alt="ideate-icon" class="mx-auto">
          </div>
          <div class="text">
            <h3 class="text-xl bold my-1 mx-5">Ideate</h3>
            <p class="text-xs">Embrace the power of ideation to fuel your digital transformation journey and revolutionize your business</p>
          </div>
        </div>
        <div class="flex items-center p-3 rounded-xl text-left gap-3 bg-blue-800 text-white lg:flex-col lg:text-center collaborate">
          <div class="icon rounded-full bg-white p-2 w-3/12 md:w-1/12">
            <img src="../../assets/files/icons/colorfilter.svg" alt="collaborate-icon" class="mx-auto">
          </div>
          <div class="text">
            <h3 class="text-xl bold my-1 mx-5">Collaborate</h3>
            <p class="text-xs">"Experience the transformative impact of collaboration, where diverse perspectives converge to create solutions that surpass expectations."</p>
          </div>
        </div>
        <div class="flex items-center p-4 rounded-xl text-left gap-3 bg-cyan-500 text-black lg:flex-col lg:text-center build">
          <div class="icon rounded-full bg-white p-2 w-3/12 md:w-1/12">
            <img src="../../assets/files/icons/building3.svg" alt="build-icon" class="mx-auto">
          </div>
          <div class="text">
            <h3 class="text-xl bold my-1 mx-5">Build</h3>
            <p class="text-xs">Embrace the power to build, as you transform your ideas into reality, creating innovative products and solutions that shape industries</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.hero {
  background: url('../../assets/files/images/hero-background.png') no-repeat;
  background-size: cover;
}

</style>