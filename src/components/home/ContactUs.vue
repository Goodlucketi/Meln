<template>
  <div class="contact">
    <div class="contact-container w-11/12 my-5 mx-auto flex justify-between items-center gap-10 lg:flex-col">
        <div class="image w-5/12 lg:w-full">
            <img src="../../assets/files/images/Pexels Photo by Yan Krukau.png" alt="Contact Image" class="contact-img bg-top object-cover lg:w-full">
        </div>
        <div class="contact-form-container w-6/12 p-4 lg:w-full">
            <h3 class="form-title text-4xl sm:text-3xl">Get in Touch</h3>
            <p class="p-1">Have an enquiry? Fill out the form to contact our team</p>

            <form class="contact-form" @submit.prevent="onSubmit">
                <div class="name my-5 mx-auto">
                    <p>Full Name</p>
                    <input type="text" name="fullname" id="fulname" v-model="formData.name" required class="p-4 w-full rounded-xl border border-slate-300">
                </div>
                <div class="email my-5 mx-auto">
                    <p>Email</p>
                    <input type="email" name="email" id="email" v-model="formData.email" required class="p-4 w-full rounded-xl border border-slate-300">
                </div>
                <div class="message my-5 mx-auto">
                    <p>Message</p>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Type Message Here" v-model="formData.message" required class="p-4 w-full rounded-xl border border-slate-300"></textarea>
                </div>
                <div class="submit p-3 rounded-xl my-5 w-6/12 lg:w-full bg-blue-800 text-center text-white">
                    <input type="submit" value="Send Message">
                </div>
            </form>
        </div>
    </div>
    <div class="contact-team bg-slate-100 p-2 relative">
        <div class="contact-team-container flex justify-around items-center w-11/12 bg-white p-6 my-2 mx-auto rounded-lg relative top-16 text-sm lg:flex-col">
            <p class="pl-8">Do you have a project or idea? Our team will help you as soon as possible.</p>
            <router-link to="/register" class="btn p-3 rounded-lg bg-blue-800 text-white text-center my-4 mx-auto lg:w-6/12">Contact Our Team</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
            } 
        }
    },
    methods: {
        onSubmit(){
            console.log(this.formData);
            alert("Your request has been submitted!!!")
        }
    },
}

</script>

<style>

</style>