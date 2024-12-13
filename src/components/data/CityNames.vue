<template>
    <div class="">
      <!-- دکمه‌ها -->
      <div
        v-if="showCity"
        class="gap-2 max-h-72 mt-10 overflow-y-auto p-2 border border-gray-300 rounded"
      >
        <button
          v-for="city in cities"
          :key="city.name"
          @click="selectCity(city.name)"
          class="px-4 py-2 rounded block text-right w-full border-b"
        >
          {{ city.name }}
          <i :class="city.icon" class="ml-3"></i>
        </button>
      </div>
  
      <!-- نمایش مدل‌ها -->
      <div v-if="!showCity">
        <button
          @click="goBack"
          class="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          بازشگت
        </button>
      </div>
      <div
        v-if="!showCity"
        class="mt-1 max-h-72 overflow-y-auto p-2 border border-gray-300 rounded"
      >
        <h2 class="text-xl font-bold mt-4">{{ selectedCity }}</h2>
        <UiCheckboxTowns :filteredTowns="filteredTowns" />
      </div>
    </div>
  </template>
  
  <script setup>
  const filters = inject('productFilters')
  const showCity = ref(true)
  // آرایه برندها و مدل‌ها
  const cities = [
  {
    name: 'تهران',
    icon: 'fa-solid fa-city',
    towns: [
      'ونک',
      'شهران',
      'پونک',
      'درکه',
      'زعفرانیه',
      'سعادت‌آباد',
    ],
    id: 1,
  },
  {
    name: 'مشهد',
    icon: 'fa-solid fa-city',
    towns: [
      'طبرسی',
      'میدان بسیج',
      'کلاهدوز',
      'نقاب',
      'آبکوه',
    ],
    id: 2,
  },
  {
    name: 'اصفهان',
    icon: 'fa-solid fa-city',
    towns: [
      'میدان نقش جهان',
      'کوشک',
      'فریدونشهر',
      'کاشان',
      'خمینی‌شهر',
    ],
    id: 3,
  },
  {
    name: 'شیراز',
    icon: 'fa-solid fa-city',
    towns: [
      'مرودشت',
      'سعدی',
      'زرهی',
      'ایرانشهر',
      'میدان نمازی',
    ],
    id: 4,
  },
  {
    name: 'تبریز',
    icon: 'fa-solid fa-city',
    towns: [
      'ارمغان',
      'آبرسان',
      'خیاو',
      'خیابان امام',
      'صوفیان',
    ],
    id: 5,
  },
  {
    name: 'اهواز',
    icon: 'fa-solid fa-city',
    towns: [
      'آبادان',
      'کوی 2',
      'کوی دولت',
      'کوی هلال',
      'کوی امام',
    ],
    id: 6,
  },
  {
    name: 'کرج',
    icon: 'fa-solid fa-city',
    towns: [
      'مهرشهر',
      'گوهردشت',
      'فردیس',
      'شاهین‌ویلا',
      'هشتگرد',
    ],
    id: 7,
  },
]
  
  const selectedCity = computed(() => filters.value?.city || null)
  
  const selectCity = (city) => {
    showCity.value = false
    filters.value.city = city
    filters.value.town = []
    console.log(filters.value)
  }
  
  function goBack() {
    showCity.value = true
  }
  
  const filteredTowns = computed(() => {
    const city = cities.find((city) => city.name === selectedCity.value)
  
    return city ? city.towns : []
  })
  </script>
  