<template>
  <filter-container>
    <ui-dialog-filter />
    <Ui-seller-filter />
    <div dir="ltr">
      <Ui-Price-Filter-Dual-input :min="0" :max="5000000000" />
    </div>
    <ui-year-filter />
    <Switch />
  </filter-container>
</template>

<script setup></script>

<style></style>
