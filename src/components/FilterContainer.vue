<template>
  <div class="bg-mauve3 w-full mt-2 text-right relative p-[2px]">
    <span class="p-2 text-sm text-mauve10 block my-2">فیلترها</span>
    
    <button
      v-if="hasFilters"
      @click="resetFilters"
      class="text-[10px] text-mauve11 absolute top-3 left-0 py-2 px-4 rounded"
    >
      حذف فیلترها
    </button>
    <slot />
  </div>
</template>

<script setup>

const filters = inject('productFilters')


const hasFilters = computed(() => {
  return filters.value && Object.keys(filters.value).length > 0
})


const resetFilters = () => {
  console.log(filters.value);
  
  filters.value = {}
}
</script>

