<template>
  <NuxtLink :to="`/${product.id}`">
    <div class="bg-white w-full h-36 flex border-b-2 pb-4 mt-2 overflow-hidden">
      <img
        :src="product.src"
        :alt="product.brand"
        class="w-[30%] object-cover object-cover"
      />

      <div class="p-4 w-full">
        <div class="flex items-center justify-between w-[180px]">
          <h2 class="text-lg font-semibold text-gray-800 truncate">
            {{ product.brand }} | {{ product.model }}
          </h2>
          <small>دقایقی پیش</small>
        </div>

        <div class="text-sm text-gray-500 mt-1">
          {{ product.year }} | km {{ product.mileAge }}
        </div>

        <div
          v-if="product.auth"
          class="bg-green-200 w-24 text-center rounded-lg"
        >
          <small class="text-[10px] text-green-700">
            <i class="fa-solid fa-face-laugh-beam"></i>
            احراز هویت شده
          </small>
        </div>
        <div
          class="text-sm flex justify-between items-center w-full text-gray-900 mt-4"
        >
          <div>
            <i class="fa-solid fa-location-dot"></i>
            {{ product.town }}، {{ product.city }}
          </div>
          <span> {{ product.price }} میلیون تومان </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
  onDetailsClick: {
    type: Function,
    required: true,
  },
})
</script>
