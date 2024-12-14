<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'

const filters = inject('productFilters')
const currentTab = ref('')
</script>

<template>
  <ConfigProvider dir="rtl">
    <DialogRoot>
      <DialogTrigger
        class="text-black flex justify-between text-right items-center justify-center rounded-[4px] text-[12px] mb-1 bg-white w-full p-[15px]"
        @click="currentTab = 'brand'"
      >
        <div>
          <span class="font-semibold"> انتخاب برند و مدل </span>
          <small class="block">تمام برند‌ها، مدل‌ها</small>
        </div>
        <div>
          <i class="fa-solid fa-chevron-left"></i>
        </div>
      </DialogTrigger>

      <DialogTrigger
        class="text-black flex justify-between text-right items-center rounded-[4px] text-[12px] bg-white w-full p-[15px]"
        @click="currentTab = 'city'"
      >
        <div>
          <span class="font-semibold"> انتخاب شهر</span>
          <small class="block">تمام شهرها</small>
        </div>
        <div>
          <i class="fa-solid fa-chevron-left"></i>
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay
          class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
        />
        <DialogContent
          class="data-[state=open]:animate-contentShow fixed top-[50%] p-2 left-[50%] max-h-[85vh] h-[80vh] w-[30vw] max-w-[300px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white focus:outline-none z-[100]"
        >
          <DialogTitle
            v-if="currentTab === 'brand'"
            class="text-mauve12 m-0 text-[17px] text-right font-semibold"
          >
            <span v-if="!filters.brand" class="text-right block">
              انتخاب برند و مدل
            </span>

            <span v-else class="text-right block mb-3">
              {{ filters.brand }}
            </span>

            <small
              v-if="!filters.model"
              class="text-right text-[12px] block pt-2"
            >
              برند و مدل مدنظر خود را انتخاب کنید
            </small>

            <small
              v-for="model in filters.model"
              v-else
              :key="model"
              class="text-right text-[12px] bg-mauve3 rounded-r-xl w-full p-1"
            >
              {{ model }}
              <i class="fa-solid fa-xmark"></i>
            </small>
          </DialogTitle>

          <DialogTitle
            v-else
            class="text-mauve12 m-0 text-[17px] text-right font-semibold"
          >
            <span v-if="!filters.city" class="text-right block"
              >انتخاب شهر</span
            >
            <span v-else class="text-right block mb-3">{{ filters.city }}</span>
            <small
              v-if="!filters.town"
              class="text-right text-[12px] block pt-2"
              >شهرهای موردنظر را انتخاب کنید</small
            >
            <small
              v-for="town in filters.town"
              v-else
              :key="town"
              class="text-right text-[12px] bg-mauve3 rounded-r-xl w-full p-1"
            >
              {{ town }}
              <i class="fa-solid fa-xmark"></i>
            </small>
          </DialogTitle>
          <DialogDescription
            class="text-mauve11 mt-[10px] mb-3 text-[15px] flex justify-between items-start leading-normal text-right"
          >
            <input type="text" name="search" placeholder="جستجوی برند و مدل" />
          </DialogDescription>
          <div class="text-right">
            <dataBrandNames v-if="currentTab === 'brand'" />
            <dataCityNames v-else />
          </div>
          <div v-if="currentTab === 'brand'" class="mt-[25px] flex justify-around">
            <DialogClose as-child>
              <button
                class="bg-lime3 text-lime11 w-[120px] focus:shadow-green7 rounded-[4px] py-[10px] px-[15px]"
                :class="{ 'bg-gray-400 text-white': !filters.brand }"
                :disabled="!filters.brand"
              >
                انتخاب
              </button>
            </DialogClose>
            <DialogClose aria-label="Close">
              <button
                class="text-black border rounded-[4px] w-[120px] py-[10px] px-[15px]"
              >
                بستن
              </button>
            </DialogClose>
          </div>

          <div v-else class="mt-[25px] flex justify-around">
            <DialogClose as-child>
              <button
                class="bg-lime3 text-lime11 w-[120px] focus:shadow-green7 rounded-[4px] py-[10px] px-[15px]"
                :class="{ 'bg-gray-400 text-white': !filters.city }"
                :disabled="!filters.city"
              >
                انتخاب
              </button>
            </DialogClose>
            <DialogClose aria-label="Close">
              <button
                class="text-black border rounded-[4px] w-[120px] py-[10px] px-[15px]"
              >
                بستن
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </ConfigProvider>
</template>

<style scoped>
input[type='text'] {
  width: 100%;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 12px;
  background-color: rgb(246, 245, 245);
  background-image: url('https://www.w3schools.com/css/searchicon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  direction: rtl;
}
</style>
