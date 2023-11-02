<template>
  <div class="blog p-4 bg-slate-100">
    <div class="blog-container w-11/12 my-4 mx-auto">
        <h3 class="blog-title text-4xl text-center font-bold p-4 md:text-3xl">Latest from Our Blog</h3>
        <div v-for="result in responseData" :key="result.id" class="blog-posts grid grid-cols-3 justify-between items-center lg:grid-cols-1">
            <div class="post p-2">
                <img :src="result.image_url" alt="blog-image" class="blog-img shadow-xl mb-8">
                <div class="blog-content">
                    <p class="my-2 auto text-sm">{{ result.pubDate }}</p>
                    <h4 class="blog-post-title my-2 auto text-blue-700 text-base">
                        {{ result.title }}
                    </h4>
                    <p class="blog-post-text my-2 auto">
                        {{result.description}}                    
                    </p>
                    <a :href="result.link" target="_blank" class="action flex items-center text-blue-700 text-sm"><span>Read More</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            responseData: [],
            
        }
    },
    methods: {
        fetchData() {
            const newsApi = 'https://newsdata.io/api/1/news?apikey=pub_318639b8ad61d6ff61aa71f820d876444bef2&category=technology&language=en'

            fetch(newsApi, 
            {
                method: 'GET',
                mode: 'cors',
                
            })
            .then((response) =>{
                console.log(response);
                if (response.status>=200 && response.status <300) {
                    return response.json()
                }else{
                    console.error('Error:', response.status, response.statusText);
                    throw new Error('Network not okay')
                }
               
            })
            .then((data) => {
                console.log(data);
                let dataObj = data.results
                console.log(dataObj);
                this.responseData = dataObj; // Store the data in a Vue data property
            })
            .catch((error) => {
                console.log(error);;
            });
        }
    },
    created() {
        this.fetchData()
    },
}
</script>

<style>

</style>