<template>
  <div class="footer text-white text-sm pt-12 pb-2">
    <div class="footerContainer w-11/12 mx-auto py-6">
      <div class="logo">
        <img src="../../assets/assets/images/Logo_Primary_white.png" alt="Company Logo">
      </div>
      <div class="company-info my-4 flex justify-between lg:flex-col">
        <div class="platforms">
          <p class="p-2 my-2 mx-auto"><span><font-awesome-icon class="foot-social-icon" icon="fa-solid fa-envelope"/></span> melnhub203@gmail.com</p>
          <p class="p-2 my-2 mx-auto"><font-awesome-icon class="foot-social-icon" icon="fa-solid fa-location-dot"/> #55 Uyo Road, Beside Geneto Hotel, Nung Udoe, Ibesikpo</p>
          <p class="p-2 my-2 mx-auto"><font-awesome-icon class="foot-social-icon" icon="fa-solid fa-phone"/> +234 9066600060, +234 8060867256</p>
        </div>
        <div class="links mt-6 flex gap-10">
          <div class="company">
            <h4 class="">COMPANY</h4>
            <p class="p-2 my-2 mx-auto"><router-link to="" class="footer-link">About Us</router-link></p>
            <p class="p-2 my-2 mx-auto"><router-link to="" class="footer-link">Our Vision</router-link></p>
            <p class="p-2 my-2 mx-auto"><router-link to="" class="footer-link">Our Mission</router-link></p>
            <p class="p-2 my-2 mx-auto"><router-link to="" class="footer-link">Our Projects</router-link></p>
            <p class="p-2 my-2 mx-auto"><router-link to="" class="footer-link">Our Team</router-link></p>
          </div>
          <div class="quick-links">
            <h4>QUICK LINKS</h4>
            <p class="p-2 my-2 mx-auto"><router-link to="/" class="footer-link">Home</router-link></p>
            <p class="p-2 my-2 mx-auto"><router-link to="/about" class="footer-link">About</router-link></p>
            <p class="p-2 my-2 mx-auto"><router-link to="/service" class="footer-link">Services</router-link></p>
            <p class="p-2 my-2 mx-auto"><router-link to="/project" class="footer-link">Projects</router-link></p>
            <p class="p-2 my-2 mx-auto"><router-link to="/training" class="footer-link">Trainings</router-link></p>
            <p class="p-2 my-2 mx-auto"><router-link to="/blog" class="footer-link">Blog</router-link></p>
          </div>
        </div>
      </div>
      <div class="trademark p-3 flex justify-between lg:flex-col">
        <p class="p-3">&copy; 2023 Meln Hub. All right reserved</p>
        <div class="com-social-icons">
          <a :href="facebook" :target="target"><font-awesome-icon class="foot-social-icon mx-2 text-base footer-link" icon="fa-brands fa-facebook"/></a>
          <a :href="linkedin" :target="target"><font-awesome-icon class="foot-social-icon mx-2 text-base footer-link" icon="fa-brands fa-linkedin"/></a>
          <a :href="twitter" :target="target"><font-awesome-icon class="foot-social-icon mx-2 text-base footer-link" icon="fa-brands fa-twitter"/></a>
          <a :href="instagram" :target="target"><font-awesome-icon class="foot-social-icon mx-2 text-base footer-link" icon="fa-brands fa-instagram"/></a>
          <a :href="whatsapp" :target="target"><font-awesome-icon class="foot-social-icon mx-2 text-base footer-link" icon="fa-brands fa-whatsapp"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      facebook:"https://www.facebook.com/profile.php?id=100092200862993",
      twitter: 'https://www.twitter.com/Melnhub',
      linkedin: 'https://www.linkedin.com/in/meln-hub/',
      instagram: 'https://www.instagram.com/melnhub',
      target: '_blank',
      whatsapp: 'https://chat.whatsapp.com/Ke8EcoUXVSB3LzsEfh4D8r',
    }
  },
}
</script>

<style>
    .footer {
        background: url("../../assets/assets/images/footer.png");
    }
</style>