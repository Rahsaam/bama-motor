import { ref, computed } from 'vue'

export function useProductFilters() {
  // داده‌های محصولات
  const products = ref([
    {
      id: 1,
      city: 'تهران',
      town: 'ونک',
      brand: 'باجاج',
      model: 'باجاج مدل 1',
      price: 300,
      mileage: 2000,
      src: '@/assets/images/images.jpg',
      image: true,
      year: 1403,
      mileAge: 12500,
      auth: true,
      seller: 'شخصی',
    },
    {
      id: 2,
      city: 'مشهد',
      town: 'بلوار کشاورز',
      brand: 'پالس',
      model: 'پالس مدل 1',
      price: 150,
      mileage: 1500,
      src: '@/assets/images/motor1.jpg',
      image: true,
      year: 1398,
      mileAge: 7000,
      auth: false,
      seller: 'نمایشگاه',
    },
    {
      id: 3,
      city: 'اصفهان',
      town: 'نجف‌آباد',
      brand: 'هوندا',
      model: 'هوندا مدل 1',
      price: 400,
      mileage: 1000,
      src: '@/assets/images/motor2.jpg',
      image: true,
      year: 1400,
      mileAge: 5500,
      auth: false,
      seller: 'شخصی',
    },
    {
      id: 4,
      city: 'تهران',
      town: 'شهران',
      brand: 'هوندا',
      model: 'هوندا مدل 2',
      price: 200,
      mileage: 3000,
      src: '@/assets/images/motor3.png',
      image: true,
      year: 1403,
      mileAge: 0,
      auth: false,
      seller: 'نمایشگاه',
    },
  ])

  // مقادیر فیلترها
  const filters = ref({
    city: null,
    town: [],
    brand: null,
    price: { min: null, max: null },
    mileage: { min: null, max: null },
    model: [],
    seller: null,
  })

  // فیلتر محصولات
  const filteredProducts = computed(() => {
    return products.value.filter((product) => {
      // فیلتر بر اساس شهر
      if (filters.value.city && product.city !== filters.value.city) {
        return false
      }
      // بر اساس محله
      if (
        Array.isArray(filters.value.town) &&
        filters.value.town.length > 0 &&
        !filters.value.town.includes(product.town)
      ) {
        return false
      }

      // فیلتر بر اساس برند
      if (filters.value.brand && product.brand !== filters.value.brand) {
        return false
      }
      // بر اساس مدل
      if (
        Array.isArray(filters.value.model) &&
        filters.value.model.length > 0 &&
        !filters.value.model.includes(product.model)
      ) {
        return false
      }

      // فیلتر بر اساس قیمت
      if (
        filters.value.price &&
        filters.value.price.min !== null &&
        product.price < filters.value.price.min
      ) {
        return false
      }
      if (
        filters.value.price &&
        filters.value.price.max !== null &&
        product.price > filters.value.price.max
      ) {
        return false
      }
      // فیلتر بر اساس کارکرد
      if (
        filters.value.mileage &&
        filters.value.mileage.min !== null &&
        product.mileage < filters.value.mileage.min
      ) {
        return false
      }
      if (
        filters.value.mileage &&
        filters.value.mileage.max !== null &&
        product.mileage > filters.value.mileage.max
      ) {
        return false
      }

      // فیلتر بر اساس فروشنده
      if (filters.value.seller && product.seller !== filters.value.seller) {
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
