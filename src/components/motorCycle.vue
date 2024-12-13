<template>
  <ProductLayout>
    <template #filters>
      <ProductFilters />
    </template>
    <template #products>
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </template>
  </ProductLayout>
</template>

<script setup>
const { filters, filteredProducts } = useProductFilters()

provide('productFilters', filters)
</script>
