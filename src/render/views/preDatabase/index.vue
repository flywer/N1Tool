<template>
  <n-layout class="m-2">
    <n-tabs type="line" animated>
      <n-tab-pane name="1" tab="行为数据字段情况查询">
        <action-data-problem-query/>
      </n-tab-pane>
      <n-tab-pane name="2" tab="行为数据统计查询">
        <action-data-sum-stat/>
      </n-tab-pane>
    </n-tabs>
  </n-layout>
</template>

<script setup lang="ts">
import ActionDataProblemQuery from "@render/views/preDatabase/actionDataProblemQuery.vue";
import ActionDataSumStat from "@render/views/preDatabase/actionDataSumStat.vue";
</script>

<style scoped>

</style>
