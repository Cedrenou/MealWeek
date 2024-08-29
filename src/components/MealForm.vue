<template>
  <div
    class="max-w-2xl rounded-md flex flex-col overflow-hidden shadow-2xl p-4 space-y-4 border-2 border-purple-950"
  >
    <h1 class="text-lg font-bold text-center capitalize">
      {{ day }} - {{ mealTime }}
    </h1>
    <form @submit.prevent="$emit('saveMeal', mealForm, mealTime, mealIndex)">
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

      <button
        type="submit"
        class="align-middle mr-2 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      >
        Submit
      </button>

      <button
        type="button"
        @click.prevent="$emit('closeFormModal')"
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      >
        Cancel
      </button>
    </form>
  </div>
</template>

<script setup>
defineProps(["mealForm", "day", "mealTime", "mealIndex"]);
</script>
