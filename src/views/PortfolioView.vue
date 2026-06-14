```vue
<template>
  <div class="px-5 py-5 md:px-12 md:py-5 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-blue-300 mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Past Project Experience</h4>
          <h4 class="text-base font-normal text-white">
            Explore the projects I've worked on so far!
          </h4>
        </div>
      </header>

      <section>
        <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">

          <div v-for="item in items" :key="item.id">
            <div
              class="item-card flex flex-col items-center gap-3 rounded-xl bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] px-5 py-5 text-blue-300">

              <!-- FIXED: Show full image without cropping -->
              <div class="w-full h-40 md:h-48 lg:h-56 flex items-center justify-center overflow-hidden rounded-xl bg-[#141414]">
                <img
                  :src="$baseUrl + 'portfolio-img/' + item.imageUrl + '.png'"
                  :alt="item.name"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-contain rounded-xl drop-shadow-xl"
                />
              </div>

              <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                <div class="title-text font-medium text-secondary">
                  {{ item.name }}
                </div>

                <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                  {{ item.status }}
                </div>

                <div class="w-full text-left text-sm text-blue-300 mt-3">
                  {{ item.tech }}
                </div>

                <div class="w-full flex justify-end">
                  <div class="flex cursor-pointer items-end gap-2 text-primary">
                    <!-- FIXED: GitHub Octocat icon, only shown if link exists -->
                    <a
                      v-if="item.link && item.link !== 'null'"
                      :href="item.link"
                      target="_blank"
                      rel="noreferrer"
                      title="View Github Repository"
                      class="transition-all hover:opacity-80"
                    >
                      <svg
                        fill="white"
                        viewBox="0 0 24 24"
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.535-1.5.12-3.135 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.635.24 2.835.12 3.135.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>

                    <a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer"
                      title="View finished project" class="transition-all hover:text-accent">
                      <svg stroke="White"
                        fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                        height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </article>
  </div>
</template>


<script>
import Projects from "../api/PortfolioViewAPI";

export default {
  name: "PortfolioViewAPI",
  mixins: [Projects]
};
</script>

<style src="../styles/PortfolioView.css"></style>
```