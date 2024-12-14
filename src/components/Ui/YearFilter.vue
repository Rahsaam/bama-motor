<script setup lang="ts">
import { inject, ref, computed } from 'vue'

const filters = inject('productFilters')

const years = ref(['1403', '1402', '1401', '1400', '1399', '1398'])

const fromyear = ref(null)
const tillyear = ref(null)

const availableFromYears = computed(() => {
  return years.value.filter(
    (year) => !tillyear.value || parseInt(year) < parseInt(tillyear.value),
  )
})

const availableTillYears = computed(() => {
  return years.value.filter(
    (year) => !fromyear.value || parseInt(year) > parseInt(fromyear.value),
  )
})

watch([fromyear, tillyear], () => {
  filters.value.year.from = fromyear.value
  filters.value.year.till = tillyear.value
})
</script>

<template>
  <div class="px-2 bg-white border-t-2 pb-3">
    <div class="flex w-full justify-between items-center mb-5 pt-2">
      <span>سال</span>
    </div>
    <ConfigProvider dir="rtl">
      <div class="flex justify-between">
        <ui-from-year
          v-model="fromyear"
          :years="availableFromYears"
          :filters="filters"
        />
        <ui-till-year
          v-model="tillyear"
          :years="availableTillYears"
          :filters="filters"
        />
      </div>
    </ConfigProvider>
  </div>
</template>
