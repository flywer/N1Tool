<template>
  <n-layout class="m-2">
    <n-tabs type="line" animated>
      <n-tab-pane name="1" tab="质检情况统计">
        <quality-insp-stat/>
      </n-tab-pane>
    </n-tabs>
  </n-layout>
</template>

<script setup lang="ts">

import QualityInspStat from "@render/views/dataStat/qualityInspStat.vue";
</script>

<style scoped>

</style>
