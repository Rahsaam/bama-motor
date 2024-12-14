<template>
  <div class="bg-white p-[15px] mt-1">
    <span>فروشنده</span>
    <div class="btn-group">
      <button
        v-for="seller in sellers"
        :key="seller"
        class="btn-group__item text-[12px]"
        @click="selectSeller(seller)"
      >
        {{ seller }}
      </button>
    </div>
  </div>
</template>

<script setup>

const sellers = ref(['همه', 'شخصی', 'نمایشگاه'])
const filters = inject('productFilters')


const selectSeller = (seller) => {
  filters.value.seller = seller === 'همه' ? null : seller
}
</script>

<style scoped>

.btn-group {
  display: flex;
  border-radius: 1rem;
  width: 100%;
  justify-content: center;
}

.btn-group__item {
  border: none;
  min-width: 4rem;
  padding: 5px;
  background-color: #eee;
  cursor: pointer;
  margin-top: 15px;
  transition: all 300ms ease-out;
  text-align: center;
}

.btn-group__item:first-child {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.btn-group__item:last-child {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}


.btn-group__item:focus {
  color: white;
  background-color: #000;
  outline: none;
}

.btn-group__item.active {
  background-color: rebeccapurple;
  color: #fff;
}
</style>
