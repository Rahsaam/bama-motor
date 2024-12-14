<template>
  <div class="bg-white border-t-2">
    <div class="container relative h-[150px]">
      <div class="absolute top-5 flex w-full justify-between items-center px-3">
        <label class="flex items-center text-[14px]" for="pay">
          <input id="pay" type="checkbox" />
          اقساطی
        </label>
        <span>قیمت</span>
      </div>
      <div class="absolute top-10 gap-x-1 flex">
        <div class="border p-2 w-24 text-center mt-5">{{ minVal }}</div>
        <div class="border p-2 w-24 text-center mt-5">{{ maxVal }}</div>
      </div>
      <div class="mt-24">
        <input
          type="range"
          :min="min"
          :max="max"
          v-model="minVal"
          @input="updateMin"
          class="thumb thumb--left"
          :style="{ zIndex: minVal > max - 100 ? '5' : '3' }"
        />
        <input
          type="range"
          :min="min"
          :max="max"
          v-model="maxVal"
          @input="updateMax"
          class="thumb thumb--right"
        />
      </div>
      <div class="slider">
        <div class="slider__track" />
        <div ref="range" class="slider__range" />
        <div class="slider__left-value">{{ minVal }}</div>
        <div class="slider__right-value">{{ maxVal }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const filters = inject('productFilters')
const props = defineProps({
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
})

const minVal = ref(0)
const maxVal = ref(0)
const range = ref(null)

onMounted(() => {
  minVal.value = props.min
  maxVal.value = props.max
})

const stepValue = (value) => {
  if (value < 900000000) {
    return Math.round(value / 50000000) * 50000000
  } else {
    return Math.round(value / 100000000) * 100000000
  }
}

const updateMin = () => {
  const steppedValue = stepValue(minVal.value)
  if (steppedValue >= maxVal.value) {
    minVal.value =
      maxVal.value - (steppedValue >= 900000000 ? 100000000 : 50000000)
  } else {
    minVal.value = steppedValue
  }
}

const updateMax = () => {
  const steppedValue = stepValue(maxVal.value)
  if (steppedValue <= minVal.value) {
    maxVal.value =
      minVal.value + (steppedValue >= 900000000 ? 100000000 : 50000000)
  } else {
    maxVal.value = steppedValue
  }
}

watch([minVal, maxVal], () => {
  const minPercent = getPercent(minVal.value)
  const maxPercent = getPercent(maxVal.value)

  if (range.value) {
    range.value.style.left = `${minPercent}%`
    range.value.style.width = `${maxPercent - minPercent}%`
  }

  filters.value.price.min = minVal.value
  filters.value.price.max = maxVal.value
})

const getPercent = (value) =>
  Math.round(((value - props.min) / (props.max - props.min)) * 100)
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider {
  position: relative;
  width: 200px;
}

.slider__track,
.slider__range,
.slider__left-value,
.slider__right-value {
  position: absolute;
}

.slider__track,
.slider__range {
  border-radius: 3px;
  height: 5px;
  margin-top: 45px;
}

.slider__track {
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
  margin-top: 45px;
}

.slider__range {
  background-color: #891efd;
  z-index: 2;
  margin-top: 45px;
}

.slider__left-value,
.slider__right-value {
  color: #dee2e6;
  font-size: 12px;
  margin-top: 200px;
}

.slider__left-value {
  left: 6px;
}

.slider__right-value {
  right: -4px;
}

/* Removing the default appearance */
.thumb,
.thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
}

.thumb {
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;
}

.thumb--left {
  z-index: 4;
}

.thumb--right {
  z-index: 4;
}

/* For Chrome browsers */
.thumb::-webkit-slider-thumb {
  background-color: #f1f5f7;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #ced4da;
  cursor: pointer;
  height: 18px;
  width: 18px;
  margin-top: 4px;
  pointer-events: all;
  position: relative;
}

/* For Firefox browsers */
.thumb::-moz-range-thumb {
  background-color: #f1f5f7;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #ced4da;
  cursor: pointer;
  height: 18px;
  width: 18px;
  margin-top: 4px;
  pointer-events: all;
  position: relative;
}
</style>
