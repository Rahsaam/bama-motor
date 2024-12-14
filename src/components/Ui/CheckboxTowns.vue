<template>
    <div>
      <div v-for="(town, index) in filteredTowns" :key="index" class="wrapper">
        <label class="checkbox-label" :for="`town-${index}`">
          <span class="checkbox-text">{{ town }}</span>
          <span>
            <input
              v-model="filters.town"
              :value="town"
              :id="`town-${index}`"
              class="checkbox-input"
              type="checkbox"
            />
            <span class="checkbox-icon-wrapper">
              <i class="checkbox-icon">v</i>
            </span>
          </span>
        </label>
      </div>
    </div>
  </template>
  
  <script setup>
  const filters = inject('productFilters')
  
  defineProps({
    filteredTowns: {
      type: Array,
      required: true,
    },
  })
  </script>
  
  <style scoped>
  .wrapper {
    box-sizing: border-box;
    padding: 15px 5px;
    display: flex;
    flex-direction: column;
    direction: rtl;
    border-bottom: 1px solid #000;
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    line-height: 16px;
  }
  
  .checkbox-input {
    display: none;
  }
  
  .checkbox-input + .checkbox-icon-wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    transition: background-color ease 0.3s;
  }
  
  .checkbox-input + .checkbox-icon-wrapper .checkbox-icon {
    transition: opacity ease 0.3s;
    opacity: 0;
    color: white;
  }
  
  .checkbox-input:checked + .checkbox-icon-wrapper {
    background-color: lightgreen;
  }
  
  .checkbox-input:checked + .checkbox-icon-wrapper .checkbox-icon {
    opacity: 1;
  }
  </style>
  