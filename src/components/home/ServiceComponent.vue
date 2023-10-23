<template>
  <div class="services">
    <div class="serviceContainer py-10 w-11/12 mx-auto">
      <h3 class="text-3xl mb-5 p-3 font-bold text-center">{{ heading }}</h3>
      <div class="service-items grid grid-cols-3 gap-10 lg:grid-cols-1">
        <div class="service p-5 shadow-xl p-2 rounded-lg flex flex-col justify-between bg-white transition-all duration-500 hover:scale-105 ">
          <img src="../../assets/files/icons/Code.png" class="service-icon w-2/12 lg:w-1/12" alt="">
          <h3 class="service-title text-xl font-bold my-2 text-slate-700">Software Development</h3>
          <p class="service-content leading-loose text-md">
            We develop robust, scalable, and customized software solutions that align with your business objectives. From web and mobile applications to enterprise software, we have you covered.
          </p>
          <router-link to="/register" class="action my-2 flex gap-5 items-center text-slate-800 transition-all duration-500 hover:bg-white hover:border-slate-800"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>

        <div class="service p-5 shadow-xl p-2 rounded-lg flex flex-col justify-between bg-white transition-all duration-500 hover:scale-105 ">
          <img src="../../assets/files/icons/icons8-one-way-transition.png" class="service-icon w-2/12 lg:w-1/12" alt="">
          <h3 class="service-title text-xl font-bold my-2 text-slate-700">Digital Transformation</h3>
          <p class="service-content leading-loose text-md">
            Embrace the digital age with our transformative solutions. We help businesses streamline processes, enhance customer experiences, and unlock new growth opportunities through digitalization.
          </p>
          <router-link to="/register" class="action my-2 flex gap-5 items-center text-slate-800 transition-all duration-500 hover:bg-white hover:border-slate-800"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>

        <div class="service p-5 shadow-xl p-2 rounded-lg flex flex-col justify-between bg-white transition-all duration-500 hover:scale-105 ">
          <img src="../../assets/files/icons/icons8-meeting.png" class="service-icon w-2/12 lg:w-1/12" alt="">
          <h3 class="service-title text-xl font-bold my-2 text-slate-700">IT Consulting</h3>
          <p class="service-content leading-loose text-md">
            Our experienced consultants provide strategic guidance, technology assessments, and roadmap development to help you navigate the complex IT landscape and make informed technology decisions.
          </p>
          <router-link to="/register" class="action my-2 flex gap-5 items-center text-slate-800 transition-all duration-500 hover:bg-white hover:border-slate-800"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>

        <div class="service p-5 shadow-xl p-2 rounded-lg flex flex-col justify-between bg-white transition-all duration-500 hover:scale-105 ">
          <img src="../../assets/files/icons/icons8-meeting.png" class="service-icon w-2/12 lg:w-1/12" alt="">
          <h3 class="service-title text-xl font-bold my-2 text-slate-700">UI/UX Design</h3>
          <p class="service-content leading-loose text-md">
            We develop robust, scalable, and customized software solutions that align with your business objectives. From web and mobile applications to enterprise software, we have you covered.
          </p>
          <router-link to="/register" class="action my-2 flex gap-5 items-center text-slate-800 transition-all duration-500 hover:bg-white hover:border-slate-800"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>

        <div class="service p-5 shadow-xl p-2 rounded-lg flex flex-col justify-between bg-white transition-all duration-500 hover:scale-105 ">
          <img src="../../assets/files/icons/icons8-product-management.png" class="service-icon w-2/12 lg:w-1/12" alt="">
          <h3 class="service-title text-xl font-bold my-2 text-slate-700">Product Management</h3>
          <p class="service-content leading-loose text-md">
            Embrace the digital age with our transformative solutions. We help businesses streamline processes, enhance customer experiences, and unlock new growth opportunities through digitalization.
          </p>
          <router-link to="/register" class="action my-2 flex gap-5 items-center text-slate-800 transition-all duration-500 hover:bg-white hover:border-slate-800"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>

        <div class="service p-5 shadow-xl p-2 rounded-lg flex flex-col justify-between bg-white transition-all duration-500 hover:scale-105 ">
          <img src="../../assets/files/icons/icons8-branding.png" class="service-icon w-2/12 lg:w-1/12" alt="">
          <h3 class="service-title text-xl font-bold my-2 text-slate-700">Branding</h3>
          <p class="service-content leading-loose text-md">
            Our experienced consultants provide strategic guidance, technology assessments, and roadmap development to help you navigate the complex IT landscape and make informed technology decisions.
          </p>
          <router-link to="/register" class="action my-2 flex gap-5 items-center text-slate-800 transition-all duration-500 hover:bg-white hover:border-slate-800"><span>{{ action }}</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ServiceComponent",
    data() {
        return {
            
        }
    },
    props: {
        heading: String,
        action: String,
    }
}
</script>

<style>
    .services{
        background: url("../../assets/files/images/Element.png") no-repeat;
        background-position: 0 20rem;
        background-size: contain;
    }
</style>