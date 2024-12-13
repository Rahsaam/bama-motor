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
</script>

<template>
  <ConfigProvider dir="rtl">
    <DialogRoot>
      <DialogTrigger
        class="text-black flex justify-between text-right items-center justify-center rounded-[4px] text-[12px] bg-white w-full p-[15px]"
      >
        <div>
          <span class="font-semibold"> انتخاب برند و مدل </span>
          <small class="block">تمام برند‌ها، مدل‌ها</small>
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
          class="data-[state=open]:animate-contentShow fixed top-[50%] p-2 left-[50%] max-h-[85vh] h-[70vh] w-[30vw] max-w-[300px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white focus:outline-none z-[100]"
        >
          <DialogTitle
            class="text-mauve12 m-0 text-[17px] text-right font-semibold"
          >
            <span v-if="!filters.brand" class="text-right block"
              >انتخاب برند و مدل</span
            >
            <span v-else class="text-right block mb-3">{{
              filters.brand
            }}</span>
            <small
              v-if="!filters.model"
              class="text-right text-[12px] block pt-2"
              >برند و مدل مدنظر خود را انتخاب کنید</small
            >
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
          <DialogDescription
            class="text-mauve11 mt-[10px] mb-3 text-[15px] flex justify-between items-start leading-normal text-right"
          >
            <input type="text" name="search" placeholder="جستجوی برند و مدل" />
          </DialogDescription>
          <div class="text-right">
            <dataBrandNames />
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
