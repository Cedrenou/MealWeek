<template>
  <div id="app" class="px-4 flex flex-col min-h-screen bg-primary">
    <header class="py-4 flex flex-row align-middle items-center">
      <img
        src="./assets/images/mealweek-logo.webp"
        alt="logo app"
        class="h-24 w-24 rounded-full"
      />
      <h1 class="text-2xl font-bold mx-6">MealWeek !</h1>
    </header>

    <main
      class="container flex-grow flex-col mx-auto p-6 flex items-center justify-center"
    >
      <Auth />
      <div class="flex flew-row gap-10">
        <WeeklyMenu :weekly-menu="mockMenu" @open-form-modal="openFormModal" />
        <ShoppingList />
      </div>

      <div
        v-if="isMealFormVisible"
        class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      ></div>
      <Modal v-if="isMealFormVisible">
        <MealForm
          v-if="isMealFormVisible"
          @close-form-modal="closeFormModal"
          @save-meal="saveMeal"
          :meal-form="mealForm"
          :day="dayRef"
          :meal-time="mealTimeRef"
          :meal-index="mealIndexRef"
        />
      </Modal>
    </main>

    <footer class="py-4 mt-8 text-center text-gray-500">
      <p>&copy; 2024 MealWeek</p>
    </footer>
  </div>
</template>

<script setup>
import Auth from "@/components/Auth.vue";
import WeeklyMenu from "@/components/WeeklyMenu.vue";
import MealForm from "@/components/MealForm.vue";
import ShoppingList from "@/components/ShoppingList.vue";
import { onMounted, ref } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import Modal from "@/components/UI/Modal.vue";
import { supabase } from "@/services/supabase.js";

dayjs.locale("fr");

const isMealFormVisible = ref(false);

const mealTimeRef = ref("");
const dayRef = ref("");
const mealIndexRef = ref(0);

const mealForm = ref({
  mealName: "",
  mealUrl: "",
});

const weeklyMenu = ref([]);

const fetchWeeklyMenu = async () => {
  const { data, error } = await supabase.from("weekly_menu").select("*");
  if (error) {
    console.error(error);
  } else {
    console.log(data);
    weeklyMenu.value = data;
  }
};

const mockMenu = ref([
  {
    id: 1,
    date: new Date("2024-08-26"),
    lunch: {
      meal: "",
      url: "",
    },
    dinner: {
      meal: "",
      url: "",
    },
  },
  {
    id: 2,
    date: new Date("2024-08-27"),
    lunch: {
      meal: "",
      url: "",
    },
    dinner: {
      meal: "",
      url: "",
    },
  },
  {
    id: 3,
    date: new Date("2024-08-28"),
    lunch: {
      meal: "",
      url: "",
    },
    dinner: {
      meal: "",
      url: "",
    },
  },
  {
    id: 4,
    date: new Date("2024-08-29"),
    lunch: {
      meal: "",
      url: "",
    },
    dinner: {
      meal: "",
      url: "",
    },
  },
  {
    id: 5,
    date: new Date("2024-08-30"),
    lunch: {
      meal: "",
      url: "",
    },
    dinner: {
      meal: "",
      url: "",
    },
  },
  {
    id: 6,
    date: new Date("2024-08-31"),
    lunch: {
      meal: "",
      url: "",
    },
    dinner: {
      meal: "",
      url: "",
    },
  },
  {
    id: 7,
    date: new Date("2024-09-01"),
    lunch: {
      meal: "",
      url: "",
    },
    dinner: {
      meal: "",
      url: "",
    },
  },
]);

const saveMeal = (meal, mealTime, mealIndex) => {
  mockMenu.value[mealIndex][mealTime].meal = meal.mealName;
  mockMenu.value[mealIndex][mealTime].url = meal.mealUrl;

  clearForm();
  isMealFormVisible.value = false;
};

const clearForm = () => {
  mealForm.value = {
    mealName: "",
    mealUrl: "",
  };
};

const openFormModal = (mealTime, date, index) => {
  mealTimeRef.value = mealTime;
  dayRef.value = dayjs(date).format("dddd");
  mealIndexRef.value = index;

  mealForm.value = {
    mealName: mockMenu.value[index][mealTime].meal,
    mealUrl: mockMenu.value[index][mealTime].url,
  };

  isMealFormVisible.value = true;
};

const closeFormModal = () => {
  isMealFormVisible.value = false;
};

onMounted(() => {
  fetchWeeklyMenu();
});
</script>
