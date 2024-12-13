<template>
  <div class="">
    <!-- دکمه‌ها -->
    <div
      v-if="showBrand"
      class="gap-2 max-h-72 mt-10 overflow-y-auto p-2 border border-gray-300 rounded"
    >
      <button
        v-for="brand in brands"
        :key="brand.name"
        @click="selectBrand(brand.name)"
        class="px-4 py-2 rounded block text-right w-full border-b"
        :class="brand.color"
      >
        {{ brand.name }}
        <i :class="brand.icon" class="ml-3"></i>
      </button>
    </div>

    <!-- نمایش مدل‌ها -->
    <div v-if="!showBrand">
      <button
        @click="goBack"
        class="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
      >
        بازشگت
      </button>
    </div>
    <div
      v-if="!showBrand"
      class="mt-1 max-h-72 overflow-y-auto p-2 border border-gray-300 rounded"
    >
      <h2 class="text-xl font-bold mt-4">مدل‌های {{ selectedBrand }}</h2>
      <UiCheckboxModels :filteredModels="filteredModels" />
    </div>
  </div>
</template>

<script setup>
const filters = inject('productFilters')
const showBrand = ref(true)
// آرایه برندها و مدل‌ها
const brands = [
  {
    name: 'باجاج',
    icon: 'fa-solid fa-motorcycle',
    models: [
      'باجاج مدل 1',
      'باجاج مدل 2',
      'باجاج مدل 3',
      'باجاج مدل 14',
      'باجاج مدل 21',
    ],
    id: 1,
  },
  {
    name: 'پالس',
    icon: 'fa-solid fa-motorcycle',
    models: ['پالس مدل 1', 'پالس مدل 2', 'پالس مدل 3'],
    id: 2,
  },
  {
    name: 'هوندا',
    icon: 'fa-solid fa-motorcycle',
    models: ['هوندا مدل 1', 'هوندا مدل 2', 'هوندا مدل 3'],
    id: 3,
  },
  {
    name: 'زیدا',
    icon: 'fa-solid fa-motorcycle',
    models: ['زیدا مدل 1', 'هوندا مدل 2', 'هوندا مدل 3'],
    id: 4,
  },
  {
    name: 'زیدا',
    icon: 'fa-solid fa-motorcycle',
    models: ['زیدا مدل 1', 'هوندا مدل 2', 'هوندا مدل 3'],
    id: 5,
  },
  {
    name: 'زیدا',
    icon: 'fa-solid fa-motorcycle',
    models: ['زیدا مدل 1', 'هوندا مدل 2', 'هوندا مدل 3'],
    id: 6,
  },
  {
    name: 'زیدا',
    icon: 'fa-solid fa-motorcycle',
    models: ['زیدا مدل 1', 'هوندا مدل 2', 'هوندا مدل 3'],
    id: 7,
  },
]

const selectedBrand = computed(() => filters.value?.brand || null)

const selectBrand = (brand) => {
  showBrand.value = false
  filters.value.brand = brand
  filters.value.model = []
  console.log(filters.value)
}

function goBack() {
  showBrand.value = true
}

const filteredModels = computed(() => {
  const brand = brands.find((brand) => brand.name === selectedBrand.value)

  return brand ? brand.models : []
})
</script>
