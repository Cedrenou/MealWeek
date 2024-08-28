<template>
  <div
    class="max-w-2xl rounded-md flex flex-col overflow-hidden shadow-2xl p-4 space-y-4 border-2 border-purple-950"
  >
    <form @submit.prevent="saveMeal">
      <div class="flex flex-col items-start justify-start w-full">
        <input
          type="text"
          id="meal"
          class="rounded"
          v-model="mealForm.mealName"
          placeholder="Recette"
        />
      </div>

      <div class="flex flex-col items-start justify-start w-full py-4">
        <input
          type="text"
          id="url"
          class="rounded"
          v-model="mealForm.mealUrl"
          placeholder="Lien de la recette"
        />
      </div>

      <button class="relative mt-5 px-6 py-3 font-bold">
        <span
          class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"
        ></span>
        <span
          class="absolute inset-0 w-full h-full border-4 border-black"
        ></span>
        <span class="relative">Submit</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mealForm = ref({
  mealName: "",
  mealUrl: "",
});

const saveMeal = () => {
  console.log(mealForm.value);
};
</script>
