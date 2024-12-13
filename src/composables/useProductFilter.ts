import { ref, computed } from 'vue'

export function useProductFilters() {
  // داده‌های محصولات
  const products = ref([
    {
      id: 1,
      city: 'تهران',
      scity: 'ونک',
      brand: 'باجاج',
      model: 'باجاج مدل 1',
      price: 300,
      mileage: 2000,
      src: '@/assets/images/images.jpg',
      image: true,
      year: 1403,
      mileAge: 12500,
      auth: true,
    },
    {
      id: 2,
      city: 'مشهد',
      scity: 'بلوار کشاورز',
      brand: 'پالس',
      model: 'پالس مدل 1',
      price: 150,
      mileage: 1500,
      src: '@/assets/images/motor1.jpg',
      image: true,
      year: 1398,
      mileAge: 7000,
      auth: false,
    },
    {
      id: 3,
      city: 'اصفهان',
      scity: 'نجف‌آباد',
      brand: 'هوندا',
      model: 'هوندا مدل 1',
      price: 400,
      mileage: 1000,
      src: '@/assets/images/motor2.jpg',
      image: true,
      year: 1400,
      mileAge: 5500,
      auth: false,
    },
    {
      id: 4,
      city: 'تهران',
      scity: 'شهران',
      brand: 'هوندا',
      model: 'هوندا مدل 2',
      price: 200,
      mileage: 3000,
      src: '@/assets/images/motor3.png',
      image: true,
      year: 1403,
      mileAge: 0,
      auth: false,
    },
  ])

  // مقادیر فیلترها
  const filters = ref({
    city: null,
    brand: null,
    price: { min: null, max: null },
    mileage: { min: null, max: null },
    model: [],
  })

  // فیلتر محصولات
  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      // فیلتر بر اساس شهر
      if (filters.value.city && product.city !== filters.value.city) {
        return false
      }

      // فیلتر بر اساس برند
      if (filters.value.brand && product.brand !== filters.value.brand) {
        return false
      }
      // بر اساس مدل
      if (
        filters.value.model.length > 0 &&
        !filters.value.model.includes(product.model)
      ) {
        return false
      }

      // فیلتر بر اساس قیمت
      if (
        filters.value.price.min !== null &&
        product.price < filters.value.price.min
      ) {
        return false
      }
      if (
        filters.value.price.max !== null &&
        product.price > filters.value.price.max
      ) {
        return false
      }

      // فیلتر بر اساس کارکرد
      if (
        filters.value.mileage.min !== null &&
        product.mileage < filters.value.mileage.min
      ) {
        return false
      }
      if (
        filters.value.mileage.max !== null &&
        product.mileage > filters.value.mileage.max
      ) {
        return false
      }

      return true
    })
  })

  return {
    products,
    filters,
    filteredProducts,
  }
}
