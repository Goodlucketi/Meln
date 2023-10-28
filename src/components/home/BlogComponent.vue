<template>
  <div class="blog p-4 bg-slate-100">
    <div class="blog-container w-11/12 my-4 mx-auto">
        <h3 class="blog-title text-4xl text-center font-bold p-4 md:text-3xl">Latest from Our Blog</h3>
        <div v-for="article in responseData" :key="article.id" class="blog-posts grid grid-cols-3 justify-between items-center lg:flex-col">
            <div class="post p-2">
                <img :src="article.urlToImage" alt="blog-image" class="blog-img shadow-xl mb-8">
                <div class="blog-content">
                    <p class="my-2 auto text-sm">{{ article.publishedAt }}</p>
                    <h4 class="blog-post-title my-2 auto text-blue-700 text-base">
                        {{ article.title }}
                    </h4>
                    <p class="blog-post-text my-2 auto">
                        {{article.content}}                    </p>
                    <a :href="article.url" target="_blank" class="action flex items-center text-blue-700 text-sm"><span>Read More</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></a>
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
            const newsApi = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cec99d2631724364a0c958c1a0df5333'

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
                let dataObj = data.articles

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