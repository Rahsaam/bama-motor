<template>
  <div>
    <div class="flex mt-20 mb-5 justify-between w-full">
      <h1>خرید و فروش موتور</h1>
      <p>ترتیب آگهی ها</p>
    </div>
    <div class="layout">
      <aside class="filters">
        <slot name="filters"></slot>
      </aside>
      <main class="products">
        <slot name="products"></slot>
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  gap: 1rem;
}
.filters {
  width: 25%;
  direction: rtl;
}
.products {
  width: 70%;
  margin-right: auto;
}
</style>
