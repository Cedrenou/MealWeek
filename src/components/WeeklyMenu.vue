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
          v-for="day in mockMenu"
          :key="`${mealTime}-${day.id}`"
          class="border-purple-950 border-2 last-of-type:border-r-0 p-2 cursor-pointer hover:animate-pulse border-b-0"
          @click="openFormModal(mealTime, day.date)"
        >
          <p>{{ day.lunch.meal }}</p>
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
import { ref } from "vue";

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

function openFormModal(mealTime, date) {
  console.log("Meal Time :", mealTime);
  console.log("Date :", date);
}

const mockMenu = ref([
  {
    id: 1,
    date: new Date("2024-08-26"), // Lundi 26 Aout 2024
    lunch: {
      meal: "Spaghettis aux tomates cerises, crème de citron et amandes",
      url: "",
    },
    dinner: {
      meal: "Salade de chevre chaud",
      url: "",
    },
  },
  {
    id: 2,
    date: new Date("2024-08-27"), // Lundi 26 Aout 2024
    lunch: {
      meal: "Quiche sarrasin aux poivrons & chevres frais",
      url: "",
    },
    dinner: {
      meal: "Spaghettis aux tomates cerises, crème de citron et amandes",
      url: "",
    },
  },
  {
    id: 3,
    date: new Date("2024-08-28"), // Lundi 26 Aout 2024
    lunch: {
      meal: "sauté de dinde & légume roti",
      url: "",
    },
    dinner: {
      meal: "Spaghettis aux tomates cerises, crème de citron et amandes",
      url: "",
    },
  },
  {
    id: 4,
    date: new Date("2024-08-29"), // Lundi 26 Aout 2024
    lunch: {
      meal: "Poke Bowl",
      url: "",
    },
    dinner: {
      meal: "Quiche sarrasin aux poivrons & chevres frais",
      url: "",
    },
  },
  {
    id: 5,
    date: new Date("2024-08-30"), // Lundi 26 Aout 2024
    lunch: {
      meal: "Pizza de la mama",
      url: "",
    },
    dinner: {
      meal: "lorem ipsum para ",
      url: "",
    },
  },
  {
    id: 6,
    date: new Date("2024-08-31"), // Lundi 26 Aout 2024
    lunch: {
      meal: "Boulettes au boeuf, skyr & salade d'été",
      url: "",
    },
    dinner: {
      meal: "Riz saumon & légume roti",
      url: "",
    },
  },
  {
    id: 7,
    date: new Date("2024-09-01"), // Lundi 26 Aout 2024
    lunch: {
      meal: "Riz saumon & légume roti",
      url: "https://app.jow.com/nf5e/?action=recipe&recipeId=666feef3d5a779000e2dde03&source=jow",
    },
    dinner: {
      meal: "Pasta pesto de roquette",
      url: "",
    },
  },
]);
</script>
