<template>
   <div class="register">
    <div class="regContainer w-11/12 py-10 mx-auto">
      <div class="form flex gap-5 justify-center align-center lg:flex-col">
        <form class="regForm border-l border-slate-600 rounded-xl p-4 w-5/12 lg:mx-auto lg:w-8/12 lg:border-r sm:w-11/12" @submit.prevent="onRegister">
          <h3 class="text-2xl text-center mb-3 p-2">Register</h3>

          <div class="p-2 border-b mb-3 relative ">
            <font-awesome-icon class="icon absolute" icon="fa-solid fa-user" />
            <input type="text" name="name" id="name" placeholder="Name:" class="block w-11/12 mx-auto outline-0 pl-4" v-model="formData.name" required />
          </div>
          <div class="p-2 border-b mb-3 relative ">
            <font-awesome-icon class="icon absolute" icon="fa-solid fa-envelope" />
            <input type="email" name="email" id="email" placeholder="Email:"  class="block w-11/12 mx-auto outline-0 pl-4" v-model="formData.email" required/>
          </div>
          <div class="p-2 border-b mb-3 relative ">
            <font-awesome-icon class="icon absolute" icon="fa-solid fa-phone" />
            <input type="text" name="phone" id="phone" placeholder="Phone:" class="block w-11/12 mx-auto outline-0 pl-4" v-model="formData.phone" required/>
          </div>

          <div class="p-2 border-b mb-3 relative">
            <font-awesome-icon icon="fa-solid fa-person-half-dress" size="xl" class="icon absolute top-0" />
            <select name="gender" id="gender" class="block w-11/12 mx-auto outline-0" v-model="formData.gender" required>
              <option value="null" class="p-2 outline-0">--Gender--</option>
              <option value="male" class="p-2 outline-0">Male</option>
              <option value="female" class="p-2 outline-0">Female</option>
            </select>
          </div>

          <div class="p-2 border-b mb-3 relative">
            <font-awesome-icon icon="fa-solid fa-calendar-days" class="icon absolute"/>
            <label for="dob" class="block pl-8">Date of Birth</label>
            <input type="date" name="dob" id="dob" placeholder="Date of Birth:" class="block w-11/12 mx-auto outline-0" v-model="formData.dob" required/>
          </div>
          <div class="p-2 border-b mb-3 relative ">
            <font-awesome-icon class="icon absolute" icon="fa-solid fa-location-dot" />
            <input type="text" name="address" id="address" placeholder="Address:" class="block w-11/12 mx-auto outline-0 pl-4" v-model="formData.address" required />
          </div>

          <div class="p-2 border-b mb-3 relative ">
            <font-awesome-icon class="icon absolute" icon="fa-solid fa-book" />
            <select name="course" id="course" class="block w-11/12 mx-auto outline-0" v-model="formData.course" required @change="studentID">
              <option value="null" class="p-2 outline-0">--Select Course--</option>
              <option value="WebDevelopment" class="p-2 outline-0">Web Development</option>
              <option value="DataAnalysis" class="p-2 outline-0">Data Analysis</option>
              <option value="SoftwareDevelopment" class="p-2 outline-0">Software Development</option>
              <option value="ProjectManagement" class="p-2 outline-0">Project Management</option>
              <option value="GraphicsDesign" class="p-2 outline-0">Graphics Design</option>
              <option value="UiUx" class="p-2 outline-0">UI / UX Design</option>
              <option value="microsoft" class="p-2 outline-0">Microsoft Office Suite</option>
              <option value="videoEditing" class="p-2 outline-0">Video Editing</option>
            </select>
          </div>
         
          <div class="p-2 mt-5 relative">
            <input type="submit" value="Enroll" class="block w-11/12 mx-auto bg-purple-700 text-white p-2 rounded-lg hover:bg-slate-400 transition-all duration-1000" >
          </div> 
        </form>
        <div class="form-img w-5/12 relative rounded-xl lg:mx-auto lg:w-8/12 sm:w-11/12">
          <h3 class="p-4 text-center text-2xl absolute bottom-32 sm:bottom-8 bg-white p-1 rounded-xl">
            We are <span class="text-4xl text-blue-800 font-serif">Transforming</span> the <span class="text-4xl font-serif text-purple-800 text-shadow">Future</span> with <span class="text-4xl text-purple-800 text-shadow-md font-serif ">Technology</span>
          </h3>
          <img src="../../assets/files/images/Rectangle124.png" alt="Laptop wit mobile phone" class="w-full p-4 rounded-xl  transition-all duration-1000 hover:filter-none">
        </div>
      </div>
    </div>
  </div>
  <div v-if="success" class="success my-8 p-5 text-center absolute top-0 h-screen bg-gray-950/95 w-screen flex justify-center items-center text-white">
    <div class="success-con border-2 p-12 rounded-xl">
      <h2 class="font-bold text-2xl p-4 bg-green-500 rounded-xl text-white">Registration Success</h2>
      <p class="p-2 my-2"><strong class="font-bold">Student Name: </strong> {{ studentName }}</p>
      <p class="p-2 my-2"><strong class="font-bold">Student Course: </strong> {{ stdCourse }}</p>
      <p class="p-2 mb-9"><strong class="font-bold">Student ID Number: </strong>{{ stdId }}</p>
      <a href="http://" class="p-4 bg-purple-800 rounded-xl text-white"> Click to Join Our Whatsapp Community</a>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      formData: {
        name: '',
        email:'',
        phone: '',
        gender: '',
        dob: '',
        address: '',
        course: '',
        regId: '',
      },

      studentName:'',
      stdId:'',
      stdCourse:'',
      success: false,

    }
  },
  computed: {
    studentID(){
      console.log(this.formData.course);
      let studentCourse=this.formData.course
      let studentId = ""
      switch (studentCourse) {
        case "SoftwareDevelopment":
          studentId="MEL/24/SW/0"+Math.ceil(Math.random(0, 100)*99+1)
          // console.log(studentId);
          break;
        case "WebDevelopment":
          studentId="MEL/24/WB/0"+Math.ceil(Math.random(0, 100)*99+1)
          // console.log(studentId);
        break;
        case "GraphicsDesign":
          studentId="MEL/24/GR/0"+Math.ceil(Math.random(0, 100)*99+1)
          // console.log(studentId);
          break;
        case "ProjectManagement":
          studentId="MEL/24/PM/0"+Math.ceil(Math.random(0, 100)*99+1)
          // console.log(studentId);
          break;
        case "microsoft":
          studentId="MEL/24/MS/0"+Math.ceil(Math.random(0, 100)*99+1)
          // console.log(studentId);
          break;
        case "UiUx":
          studentId="MEL/24/UX/0"+Math.ceil(Math.random(0, 100)*99+1)
          // console.log(studentId);
          break;
        case "videoEditing":
          studentId="MEL/24/VD/0"+Math.ceil(Math.random(0, 100)*99+1)
          // console.log(studentId);
          break;
        case "DataAnalysis":
          studentId="MEL/24/DA/0"+Math.ceil(Math.random(0, 100)*99+1)
          // console.log(studentId);
          break;
        
        default:
          break;
      }
      return studentId;
    }
  },

  methods: {
    onRegister(){
      this.formData.regId = this.studentID
      console.log(this.formData);

      fetch('http://localhost/melnApi/api/create.php',{
        method: 'POST',
        mode: 'cors',
        headers: {
          Accept:'application/json, text/plain, */*',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(this.formData)
      }).then((response)=>{
        return response.json()
      }).then((result)=>{
          this.studentName = result.name 
          this.stdId = result.stdId
          this.stdCourse = result.stdCourse
          this.success = true;

      }).catch((e)=>{
        console.log(e);
      })
    },

  
  },
}
</script>

<style>

</style>