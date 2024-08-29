<template>
  <table class="table-fixed mx-auto w-full border-collapse">
    <thead>
      <tr>
        <th
          v-for="day in days"
          :key="day"
          class="p-2 text-xl w-1/12 first-of-type:border-0 border-l-2 border-purple-950"
        >
          {{ day }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="mealTime in ['lunch', 'dinner']" :key="mealTime">
        <th class="border-purple-950 border-l-0 border-2 border-b-0">
          {{ mealTime === "lunch" ? "Midi" : "Soir" }}
        </th>
        <td
          v-for="(day, index) in weeklyMenu"
          :key="`${mealTime}-${day.id}`"
          class="border-purple-950 border-2 last-of-type:border-r-0 p-2 cursor-pointer hover:animate-pulse border-b-0"
          @click="$emit('openFormModal', mealTime, day.date, index)"
        >
          <p>{{ day[mealTime].meal }}</p>
          <a
            v-if="day[mealTime].url"
            :href="day[mealTime].url"
            target="_blank"
            class="text-blue-600 hover:underline"
            >(Voir la recette)</a
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps(["weeklyMenu"]);
defineEmits(["openFormModal"]);

const days = [
  "",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
</script>
