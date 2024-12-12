<template>
  <ProductLayout>
    <template #filters>
      <ProductFilters :filters="filters" @update="updateFilters" />
    </template>
    <template #products>
      <ProductCard :items="products" />
      <ProductCard :items="products" />
      <ProductCard :items="products" />
      <ProductCard :items="products" />
    </template>
  </ProductLayout>
</template>

<script setup>

</script>
