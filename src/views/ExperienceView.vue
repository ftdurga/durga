<template>
  <div class="px-5 py-5 md:px-12 md:py-5 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-blue-300 mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Past Experiences</h4>
          <h4 class="text-base font-normal text-white">
            Explore my past internships and what I have taken away from each of them!</h4>
        </div>
      </header>
      <section>
        <div>
          <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-1 lg:grid-cols-1 fade-zoom-in">
            <!-- CHANGED: Changed 'items' to 'reversedItems' here -->
            <div v-for="item in reversedItems" :key="item.id">
              <div
                class="experience-card flex flex-col gap-4 rounded-lg bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] p-6 text-amber-50 transition-all uration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl">
                <!-- Header with Title and Period -->
                <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div class="flex-1">
                    <h3 class="text-xl md:text-l font-bold text-blue-300">{{ item.name }}</h3>
                    <p class="text-sm md:text-base font-semibold text-gray-300">{{ item.company }}</p>
                    <p class="text-xs md:text-sm text-gray-400">{{ item.location }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-xs md:text-sm font-medium text-blue-300">{{ item.period }}</p>
                  </div>
                </div>

                <!-- Description Points -->
                <div class="flex flex-col gap-2">
                  <ul class="list-disc list-inside space-y-2">
                    <li v-for="(desc, index) in item.description" :key="index" class="text-sm md:text-base text-gray-300 leading-relaxed">
                      {{ desc }}
                    </li>
                  </ul>
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
import Experiences from "../api/ExperienceViewAPI";

export default {
  name: "ExperienceViewAPI",
  mixins: [Experiences],
  // ADDED: Computed property to reverse the array safely
  computed: {
    reversedItems() {
      return [...this.items].reverse();
    }
  }
};
</script>

<style src="../styles/ExperienceView.css"></style>
