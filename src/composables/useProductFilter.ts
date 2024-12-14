
import motor1 from '@/assets/images/motor1.jpg'
import motor2 from '@/assets/images/motor2.jpg'
import motor3 from '@/assets/images/motor3.png'
import motor4 from '@/assets/images/motor4.jpg'

export function useProductFilters() {
  // داده‌های محصولات
  const products = ref([
    {
      id: 1,
      city: 'تهران',
      town: 'ونک',
      brand: 'باجاج',
      model: 'باجاج مدل 1',
      price: 350000000,
      mileage: 2000,
      src: motor4,
      image: false,
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
      price: 150000000,
      mileage: 1500,
      src: motor1,
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
      price: 400000000,
      mileage: 1000,
      src: motor2,
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
      price: 200000000,
      mileage: 3000,
      src: motor3,
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
    year: { from: null, till: null },
    model: [],
    seller: null,
    image: null,
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

      // فیلتر بر اساس سال
      if (
        filters.value.year &&
        filters.value.year.min !== null &&
        product.year < filters.value.year.min
      ) {
        return false
      }
      if (
        filters.value.year &&
        filters.value.year.max !== null &&
        product.year > filters.value.year.max
      ) {
        return false
      }

      // فیلتر بر اساس سال انتخاب شده
      if (
        filters.value.year &&
        filters.value.year.from &&
        product.year < filters.value.year.from
      ) {
        return false
      }
      if (
        filters.value.year &&
        filters.value.year.till &&
        product.year > filters.value.year.till
      ) {
        return false
      }

      // فیلتر بر اساس عکس دار بودن
      if (filters.value.image && !product.image) {
        return false
      }

      return true
    })
  })

  const getProductById = (id: number) => {
    return products.value.find((product) => product.id === id)
  }

  return {
    products,
    filters,
    filteredProducts,
    getProductById
  }
}
