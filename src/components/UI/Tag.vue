<template>
  <div class="inline-block">
    <span class="py-1 px-2 rounded text-sm uppercase" :class="`tag-${tag}`">{{
      tag
    }}</span>
  </div>
</template>

<script setup>
const { props } = defineProps(["tag"]);
</script>

<style scoped>
.tag-V {
  background-color: #3b82f6;
  color: #fff;
}

.tag-D {
  background-color: #f59e0b;
  color: #fff;
}

.tag-M {
  background-color: #10b981;
  color: #fff;
}
</style>
