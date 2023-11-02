<template>
  <div class="training">
    <div class="training-container w-11/12 mx-auto py-10">
      <h2 class="text-3xl text-center p-2">Our Training</h2>
      <div class="courses grid grid-cols-3 justify-center gap-10 align-center lg:grid-cols-2 sm:grid-cols-1">
        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/files/icons/Code.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.SoftwareDevelopment">{{courses.SoftwareDevelopment }}</h3>
          <p class="text-sm mb-5">
            Dive into the world of software development and coding. Acquire the skills to create applications, websites, and software solutions, and unlock endless possibilities in the tech industry.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.SoftwareDevelopment}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/files/icons/icons8-branding.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.GraphicsDesign">{{ courses.GraphicsDesign }}</h3>
          <p class="text-sm mb-5">
            Unleash your creative potential in the realm of graphic design. Develop captivating visuals, logos, and branding materials with our comprehensive training.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.GraphicsDesign}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/files/icons/icons8-product-management.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.ProjectManagement">{{ courses.ProjectManagement }}</h3>
          <p class="text-sm mb-5">
            Equip yourself with essential project management skills. Learn to plan, execute, and monitor projects efficiently, ensuring success in every endeavor.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.ProjectManagement}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/files/icons/icons8-meeting.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.data">{{ courses.data}}</h3>
          <p class="text-sm mb-5">
            Discover the power of data with our data analysis training. Learn to collect, analyze, and visualize data to make informed decisions and solve complex problems.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.data}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/files/icons/icons8-layout.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.UiUx">{{ courses.UiUx }}</h3>
          <p class="text-sm mb-5">
            Dive into the world of user interface (UI) and user experience (UX) design. Craft engaging, user-friendly digital experiences and create intuitive interfaces.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.UiUx}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/files/icons/icons8-layout.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.videoEditing">{{ courses.videoEditing }}</h3>
          <p class="text-sm mb-5">
            Explore the art of video editing and production. Edit, enhance, and create compelling videos for personal or professional use.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.videoEditing}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/files/icons/icons8-layout.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.WebDevelopment">{{courses.WebDevelopment}}</h3>
          <p class="text-sm mb-5">
            Learn the skills and technologies to create stunning websites and web applications. Master HTML, CSS, JavaScript, and more to build your online presence.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.WebDevelopment}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/files/icons/icons8-branding.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.microsoft" >{{courses.microsoft}}</h3>
          <p class="text-sm mb-5">
            Enhance your productivity and organizational skills with Microsoft Office Suite training. Learn to use Word, Excel, PowerPoint, and more to create professional documents, spreadsheets, and presentations.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.microsoft}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-1000 p-2">Register</router-link>
        </div>

        <div class="course rounded-lg flex flex-col shadow-lg px-10 py-5 text-center">
          <img src="../../assets/files/icons/icons8-one-way-transition.png" alt="Software Development" class="w-2/6 p-5 mx-auto">
          <h3 class="text-2xl p-2 mb-2" :courses="courses.ForexTrading">{{ courses.ForexTrading }}</h3>
          <p class="text-sm mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, reprehenderit odit modi blanditiis corrupti repellat, dolore aut tempore laboriosam magnam, doloremque deleniti vel accusantium maxime iure sunt possimus voluptas autem.
          </p>
          <router-link :to="{name: 'registration', params: {courseSelect: courses.ForexTrading}}" class="border rounded-lg bg-purple-800 text-white hover:bg-white hover:text-purple-500 transition-all duration-800 p-2">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: {
        DataProcessing: "Data Processing",
        WebDevelopment: "Web Development",
        data: "Data Analysis",
        ForexTrading: "Forex Trading",
        SoftwareDevelopment: "Software Development",
        ProjectManagement: "Project Management",
        GraphicsDesign: "Graphics Design",
        UiUx: "UI / UX Design",
        microsoft: "Microsoft Office Suite",
        videoEditing: "Video Editing"
      }
    }
  },
  methods: {
    courseSelect(){
       console.log(this.courses);
    }
  },
}
</script>

<style scoped>

</style>