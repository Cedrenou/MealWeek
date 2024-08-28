<template>
  <div class="border-purple-950 border-2 p-8">
    <h1 class="text-nowrap text-lg underline">Liste de courses</h1>
    <form @submit.prevent="addProduct" class="flex flex-col">
      <input
        type="text"
        placeholder="Nom produit"
        class="rounded-lg"
        required
        v-model="shoppingForm.name"
      />

      <div class="py-4 text-nowrap">
        <label for="V">Vrac</label>
        <input
          type="radio"
          id="V"
          value="V"
          v-model="shoppingForm.tag"
          name="shoppingTag"
          required
        />

        <label for="D">Drive</label>
        <input
          type="radio"
          id="D"
          value="D"
          v-model="shoppingForm.tag"
          name="shoppingTag"
          required
        />

        <label for="M">Marché</label>
        <input
          type="radio"
          id="M"
          value="M"
          v-model="shoppingForm.tag"
          name="shoppingTag"
          required
        />
      </div>

      <button class="border-purple-950 border-2 p-2 rounded m-4" type="submit">
        Ajouter
      </button>
    </form>

    <ul class="pt-4">
      <li
        v-for="(product, index) in sortedShoppingList"
        :key="index"
        class="list-disc text-nowrap py-4 flex flex-row items-center justify-between"
      >
        <div>
          <Tag :tag="product.tag" />
          <span> - {{ product.name }}</span>
        </div>

        <TrashIcon
          class="w-6 h-6 cursor-pointer hover:animate-pulse"
          @click="deleteProduct(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/24/outline";
import { computed, ref } from "vue";
import Tag from "@/components/UI/Tag.vue";

const shoppingForm = ref({
  name: "",
  tag: "",
});

const shoppingList = ref([]);

const addProduct = () => {
  console.log("ajouté produit", shoppingForm.value);
  shoppingList.value.push({ ...shoppingForm.value });

  shoppingForm.value.name = "";
  shoppingForm.value.tag = "";
};

const deleteProduct = (index) => {
  shoppingList.value.splice(index, 1);
};

const sortedShoppingList = computed(() => {
  return shoppingList.value.sort((a, b) => a.tag.localeCompare(b.tag));
});
</script>
