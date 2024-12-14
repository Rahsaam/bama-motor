<script setup lang="ts">

import { SwitchRoot, SwitchThumb } from 'radix-vue'

const switchState = ref(true)
const filters = inject('productFilters')

const hasImage = () => {
  filters.value.image = switchState.value
}
</script>

<template>
  <div
    class="flex gap-2 items-center justify-between px-2 bg-white border-t-2 py-3"
  >
    فقط عکس دار
    <SwitchRoot
      id="airplane-mode"
      v-model:checked="switchState"
      class="w-[42px] h-[25px] flex bg-iris9 shadow-sm rounded-full relative data-[state=checked]:bg-black/50 cursor-default"
      @click="hasImage"
    >
      <SwitchThumb
        class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-1.2 will-change-transform data-[state=checked]:translate-x-[-19px]"
      />
    </SwitchRoot>
  </div>
</template>
