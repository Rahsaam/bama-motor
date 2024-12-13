<template>
  <ProductLayout>
    <template #filters>
      <ProductFilters />
    </template>
    <template #products>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </template>
  </ProductLayout>
</template>

<script setup>
const { filters, products } = useProductFilters()

provide('productFilters', filters)
</script>
