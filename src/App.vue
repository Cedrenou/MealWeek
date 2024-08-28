<template>
  <div
    id="app"
    class="px-4 border-2 border-amber-400 flex flex-col min-h-screen bg-primary"
  >
    <header class="py-4 flex flex-row align-middle items-center">
      <img
        src="./assets/images/mealweek-logo.webp"
        alt="logo app"
        class="h-24 w-24 rounded-full"
      />
      <h1 class="text-2xl font-bold mx-6">MealWeek !</h1>
    </header>

    <main
      class="container flex-grow mx-auto p-6 flex items-center justify-center"
    >
      <WeeklyMenu />

      <MealForm />
    </main>

    <footer class="py-4 mt-8 text-center text-gray-500">
      <p>&copy; 2024 MealWeek</p>
    </footer>
  </div>
</template>

<script setup>
import WeeklyMenu from "@/components/WeeklyMenu.vue";
import MealForm from "@/components/MealForm.vue";
</script>
