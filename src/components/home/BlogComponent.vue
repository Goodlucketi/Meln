<template>
  <div class="blog p-4 bg-slate-100">
    <div class="blog-container w-11/12 my-4 mx-auto">
        <h3 class="blog-title text-4xl text-center font-bold p-4 md:text-3xl">Latest from Our Blog</h3>
        <div class="blog-posts flex justify-between items-center gap-10 lg:flex-col">
            <div class="post p-4">
                <img src="../../assets/assets/images/Rectangle 124.png" alt="blog-image" class="blog-img shadow-xl mb-8">
                <div class="blog-content">
                    <p class="my-2 auto text-sm">June 2023</p>
                    <h4 class="blog-post-title my-2 auto text-blue-700 text-base">
                        Visual Story Telling: Enhancing USer Engagement
                    </h4>
                    <p class="blog-post-text my-2 auto">
                        Visual elements play a pivotal role in captivating website visitors. This post can delve into the impact of visual storytelling techniques in tech website design.  Explore the use of high-quality images, videos, and infographics to convey complex concepts in an engaging and accessible manner, thereby enhancing user engagement.
                    </p>
                    <router-link to="/blog" class="action flex items-center text-blue-700 text-sm"><span>Read More</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
                </div>
            </div>

            <div class="post p-4">
                <img src="../../assets/assets/images/Rectangle 124 (1).png" alt="blog-image" class="blog-img shadow-xl mb-8">
                <div class="blog-content">
                    <p class="my-2 auto text-sm">June 2023</p>
                    <h4 class="blog-post-title my-2 auto text-blue-700 text-base">
                        The Power of Simplicity: Streamlining User Experience
                    </h4>
                    <p class="blog-post-text my-2 auto">
                        In this blog post, explore the importance of simplicity in tech website design. Discuss how cluttered interfaces can confuse and overwhelm users, leading to increased bounce rates. Highlight the benefits of clean, minimalist designs that prioritize intuitive navigation and clear calls-to-action.
                    </p>
                    <router-link to="/blog" class="action flex items-center text-blue-700 text-sm"><span>Read More</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
                </div>
            </div>

            <div class="post p-4">
                <img src="../../assets/assets/images/Rectangle 124 (2).png" alt="blog-image" class="blog-img shadow-xl mb-8">
                <div class="blog-content">
                    <p class="my-2 auto text-sm">June 2023</p>
                    <h4 class="blog-post-title my-2 auto text-blue-700 text-base">
                        Seamless Integration: The Art of UX/UI Harmony
                    </h4>
                    <p class="blog-post-text my-2 auto">
                        A successful tech website design requires the seamless integration of user experience (UX) and user interface (UI) principles. Explore the interplay between UX and UI, emphasizing the need for consistency, visual hierarchy, and intuitive interactions. Provide practical tips for achieving harmony between UX and UI elements to create a delightful user experience.
                    </p>
                    <router-link to="/blog" class="action flex items-center text-blue-700 text-sm"><span>Read More</span><font-awesome-icon class="icon" icon = "fa-solid fa-arrow-right" /></router-link>
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

<style>

</style>