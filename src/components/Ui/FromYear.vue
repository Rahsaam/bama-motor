<template>
  <SelectRoot v-model="fromYear">
    <SelectTrigger
      class="inline-flex min-w-[100px] items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-mauve2 text-black"
      aria-label="Customise options"
    >
      <SelectValue placeholder="از سال" />
      <i class="fa-solid fa-chevron-down"></i>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="min-w-[160px] bg-white rounded shadow z-[100]"
        :side-offset="5"
      >
        <SelectScrollUpButton
          class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"
        >
          <i class="fa-solid fa-chevron-up"></i>
        </SelectScrollUpButton>

        <SelectViewport class="p-[5px]">
          <SelectGroup>
            <SelectItem
              v-for="(year, index) in years"
              :key="index"
              class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[15px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
              :value="year"
            >
              <SelectItemIndicator
                class="absolute left-0 w-[25px] inline-flex items-center justify-center"
              >
                <i class="fa-solid fa-check"></i>
              </SelectItemIndicator>
              <SelectItemText>
                {{ year }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>

        <SelectScrollDownButton
          class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"
        >
          <i class="fa-solid fa-chevron-down"></i>
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup>
defineProps(['years', 'filters'])

const fromYear = defineModel()
</script>

<style></style>
