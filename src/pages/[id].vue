<script setup>
const route = useRoute()

const { getProductById } = useProductFilters()
const productId = Number(route.params.id)
const product = getProductById(productId)
</script>

<template>
  <div>
    <ProductDetailModal :product="product" />
  </div>
</template>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
}

/* انیمیشن مودال */
.modal-enter-active,
.modal-leave-active {
  transition:
    opacity 0.5s,
    transform 0.3s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
