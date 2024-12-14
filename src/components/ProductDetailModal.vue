<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="product-detail-container max-w-5xl mt-20 mx-auto p-8">
    <div class="flex flex-col lg:flex-row items-start">
      <!-- Product Image Section -->
      <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
        <img
          :src="product.src"
          :alt="product.model"
          class="w-full h-auto rounded-lg shadow-xl"
        />
      </div>

      <!-- Product Info Section -->
      <div class="lg:w-1/2 lg:pl-8">
        <h1 class="text-4xl font-bold mb-3">
          {{ product.brand }} {{ product.model }}
        </h1>
        <p class="text-xl font-semibold mb-2 text-green-600">
          قیمت: {{ product.price.toLocaleString() }} تومان
        </p>
        <p class="text-lg mb-2">سال تولید: {{ product.year }}</p>
        <p class="text-lg mb-2">کیلومتر: {{ product.mileAge }} km</p>
        <p class="text-lg mb-2">شهر: {{ product.city }} - {{ product.town }}</p>
        <p class="text-lg mb-2">نوع فروشنده: {{ product.seller }}</p>
        <p class="text-lg mb-4">
          تایید هویت: {{ product.auth ? 'بله' : 'خیر' }}
        </p>

        <!-- Contact Button -->
        <div class="flex justify-start">
          <button
            class="bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-yellow-600 transition-colors"
          >
            تماس با فروشنده
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-detail-container {
  background-color: #f9f9f9;
  border-radius: 12px;
}

.product-detail-container img {
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}

button {
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.3s ease;
}
</style>
