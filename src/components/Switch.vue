<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { ref } from 'vue'

const switchState = ref(false)
</script>

<template>
  <div class="flex gap-2 items-center">
    
    <SwitchRoot
      id="airplane-mode"
      v-model:checked="switchState"
      class="w-[42px] h-[25px] flex bg-black/50 shadow-sm rounded-full relative data-[state=checked]:bg-iris9 cursor-default"
    >
      <SwitchThumb
        class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-1.2 will-change-transform data-[state=checked]:translate-x-[-19px]"
      />
    </SwitchRoot>
  </div>
</template>