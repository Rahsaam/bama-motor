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
</script>

<template>
  <ConfigProvider dir="rtl">
    <DialogRoot>
      <DialogTrigger
        class="text-iris9 font-semibold shadow-blackA7 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-iris3 w-full px-[15px] leading-none"
      >
        جستجوهای من
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay
          class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
        />
        <DialogContent
          class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] h-[50vh] w-[30vw] max-w-[300px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white focus:outline-none z-[100]"
        >
          <DialogTitle
            class="text-mauve12 m-0 text-[17px] p-2 flex justify-between font-semibold"
          >
            <button class="text-[10px] bg-lime-200 rounded-xl p-2">
              جدید اومد خبرم کن
            </button>
            <span>جستجوهای من</span>
          </DialogTitle>
          <DialogDescription
            class="text-mauve11 bg-mauve7 mt-[10px] mb-5 text-[15px] flex justify-between items-start leading-normal text-right"
          >
            <div>
              <p class="text-sm font-bold text-black leading-10">
                ورود به حساب کاربری
              </p>
              برای دسترسی همیشگی به جستجوهای خود به حساب کاربری خود وارد شوید.

              <button class="text-iris9 text-[12px] my-3">
                <i class="fa-solid fa-arrow-left"></i>
                ورود به حساب کاربری
              </button>
            </div>
            <div class="w-20 text-center mt-3 text-lg text-iris9">
              <i class="fa-solid fa-bell"></i>
            </div>
          </DialogDescription>
          <div class="p-5 text-center">
            برای مشاهده جست و جوهای ذخیره شده وارد حساب کاربری خود شوید. با
            جستجوی آگهی در لیست آگهی‌ها میتوانید جستجوی خود را ذخیره کنید
          </div>
          <DialogClose
            class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Icon icon="lucide:x" />
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  </ConfigProvider>
</template>
