<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
    <article data-page="about">

      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          About Me &nbsp;
          <div class="h-[1px] w-32 bg-[#BC71DA] md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
        <!-- <div class="flex justify-center">
          <img class="w-9/12 rounded-full mb-3 fadein-up"
            src="https://i1.sndcdn.com/avatars-000214125831-5q6tdw-t500x500.jpg" alt="Foto">
        </div> -->
        <div class="md:w-11/12">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1 text-base">
            Hi everyone! I'm Durga D/O Chandrasekaran, a penultimate student pursuing a degree in Computer Science 
            at Singapore Management University. Driven by a passion for and Artificial Intelligence, I aim to  
            leverage technology to address some of the world’s most pressing challenges, including sustainability 
            and climate change. Whether it’s designing solutions for smarter urban spaces or developing cutting-edge AI 
            applications, I’m constantly exploring new ways to create a better, more sustainable future.
          </p>
          <p class="mb-3 fadein-left fadeins-2 text-base">
            Beyond academics, I’m an avid reader, spending a lot of time in the library, especially
            indulging in fiction and literature. I love immersing myself in books and enjoy
            watching the movie adaptations of my favorite stories. Let’s connect, collaborate,
            and innovate together!
          </p>
        </div>
      </section>

      <div class="mt-5 fadein-up flex justify-end">
          <div class="mt-auto">
            <SocialIcons />
        </div>
        </div>
    </article>
  </div>

  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          <div class="h-[1px] w-10 bg-[#BC71DA] md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-blue-400 bg-blue-400 bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">Tech
                Stack</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-blue-300 bg-blue-300 bg-opacity-10': activeTab === 2 }"
                @click="activeTab = 2">Tools</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-blue-200 px-2 py-2 hover:bg-blue-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name
                    }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-green-300 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-blue-200 px-2 py-2 hover:bg-blue-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name
                    }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-green-300 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<!-- This script is for the images for the tech skills and tools -->
<script>
import ST from "../api/AboutViewSTAPI";
import SocialIcons from "../components/SocialIcons.vue";

export default {
  name: "AboutViewSTAPI",
  mixins: [ST],
  components: {
    SocialIcons, // Register SocialIcons as a local component
  }
};
</script>

<!-- Styles sheet -->
<style src="../styles/AboutView.css"></style>
